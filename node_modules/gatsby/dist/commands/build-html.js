"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.buildHTML = void 0;

var _bluebird = _interopRequireDefault(require("bluebird"));

var _webpack = _interopRequireDefault(require("webpack"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _lodash = require("lodash");

var _webpack2 = _interopRequireDefault(require("../utils/webpack.config"));

var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));

var _errors = require("gatsby-cli/lib/reporter/errors");

var _gatsbyTelemetry = _interopRequireDefault(require("gatsby-telemetry"));

var _webpackErrorUtils = require("../utils/webpack-error-utils");

// import convertHrtime from "convert-hrtime"
// TODO
const runWebpack = compilerConfig => new _bluebird.default((resolve, reject) => {
  (0, _webpack.default)(compilerConfig).run((err, stats) => {
    if (err) {
      reject(err);
    } else {
      resolve(stats);
    }
  });
});

const doBuildRenderer = async (program, webpackConfig) => {
  const {
    directory
  } = program;
  const stats = await runWebpack(webpackConfig); // render-page.js is hard coded in webpack.config

  const outputFile = `${directory}/public/render-page.js`;

  if (stats.hasErrors()) {
    _reporter.default.panic((0, _webpackErrorUtils.structureWebpackErrors)(`build-html`, stats.compilation.errors));
  }

  return outputFile;
};

const buildRenderer = async (program, stage, parentSpan) => {
  const {
    directory
  } = program;
  const config = await (0, _webpack2.default)(program, directory, stage, null, {
    parentSpan
  });
  return await doBuildRenderer(program, config);
};

const deleteRenderer = async rendererPath => {
  try {
    await _fsExtra.default.remove(rendererPath);
    await _fsExtra.default.remove(`${rendererPath}.map`);
  } catch (e) {// This function will fail on Windows with no further consequences.
  }
};

const renderHTMLQueue = async (workerPool, activity, htmlComponentRendererPath, pages) => {
  // We need to only pass env vars that are set programmatically in gatsby-cli
  // to child process. Other vars will be picked up from environment.
  const envVars = [[`NODE_ENV`, process.env.NODE_ENV], [`gatsby_executing_command`, process.env.gatsby_executing_command], [`gatsby_log_level`, process.env.gatsby_log_level]]; // const start = process.hrtime()

  const segments = (0, _lodash.chunk)(pages, 50); // let finished = 0

  await _bluebird.default.map(segments, async pageSegment => {
    await workerPool.renderHTML({
      htmlComponentRendererPath,
      paths: pageSegment,
      envVars
    }); // finished += pageSegment.length

    if (activity && activity.tick) {
      activity.tick(pageSegment.length); // activity.setStatus(
      //   `${finished}/${pages.length} ${(
      //     finished / convertHrtime(process.hrtime(start)).seconds
      //   ).toFixed(2)} pages/second`
      // )
    }
  });
};

const doBuildPages = async (rendererPath, pagePaths, activity, workerPool) => {
  _gatsbyTelemetry.default.addSiteMeasurement(`BUILD_END`, {
    pagesCount: pagePaths.length
  });

  try {
    await renderHTMLQueue(workerPool, activity, rendererPath, pagePaths);
  } catch (e) {
    const prettyError = await (0, _errors.createErrorFromString)(e.stack, `${rendererPath}.map`);
    prettyError.context = e.context;
    throw prettyError;
  }
};

const buildHTML = async ({
  program,
  stage,
  pagePaths,
  activity,
  workerPool
}) => {
  const rendererPath = await buildRenderer(program, stage, activity.span);
  await doBuildPages(rendererPath, pagePaths, activity, workerPool);
  await deleteRenderer(rendererPath);
};

exports.buildHTML = buildHTML;
//# sourceMappingURL=build-html.js.map