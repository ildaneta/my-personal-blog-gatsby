"use strict";

exports.__esModule = true;
exports.removeStaleJob = exports.pageQueryRun = exports.setProgramStatus = exports.queryExtractionBabelError = exports.queryExtractedBabelSuccess = exports.queryExtractionGraphQLError = exports.queryExtracted = exports.replaceStaticQuery = exports.replaceComponentQuery = exports.deleteComponentsDependencies = exports.createPageDependency = void 0;

const createPageDependency = ({
  path,
  nodeId,
  connection
}, plugin = ``) => {
  return {
    type: `CREATE_COMPONENT_DEPENDENCY`,
    plugin,
    payload: {
      path,
      nodeId,
      connection
    }
  };
};
/**
 * Delete dependencies between an array of pages and data. Probably for
 * internal use only. Used when deleting pages.
 * @param {Array} paths the paths to delete.
 * @private
 */


exports.createPageDependency = createPageDependency;

const deleteComponentsDependencies = paths => {
  return {
    type: `DELETE_COMPONENTS_DEPENDENCIES`,
    payload: {
      paths
    }
  };
};
/**
 * When the query watcher extracts a GraphQL query, it calls
 * this to store the query with its component.
 * @private
 */


exports.deleteComponentsDependencies = deleteComponentsDependencies;

const replaceComponentQuery = ({
  query,
  componentPath
}) => {
  return {
    type: `REPLACE_COMPONENT_QUERY`,
    payload: {
      query,
      componentPath
    }
  };
};
/**
 * When the query watcher extracts a "static" GraphQL query from <StaticQuery>
 * components, it calls this to store the query with its component.
 * @private
 */


exports.replaceComponentQuery = replaceComponentQuery;

const replaceStaticQuery = (args, plugin = null) => {
  return {
    type: `REPLACE_STATIC_QUERY`,
    plugin,
    payload: args
  };
};
/**
 *
 * Report that a query has been extracted from a component. Used by
 * query-compiler.js.
 *
 * @param {Object} $0
 * @param {componentPath} $0.componentPath The path to the component that just had
 * its query read.
 * @param {query} $0.query The GraphQL query that was extracted from the component.
 * @private
 */


exports.replaceStaticQuery = replaceStaticQuery;

const queryExtracted = ({
  componentPath,
  query
}, plugin, traceId) => {
  return {
    type: `QUERY_EXTRACTED`,
    plugin,
    traceId,
    payload: {
      componentPath,
      query
    }
  };
};
/**
 *
 * Report that the Relay Compiler found a graphql error when attempting to extract a query
 *
 * @param {Object} $0
 * @param {componentPath} $0.componentPath The path to the component that just had
 * its query read.
 * @param {error} $0.error The GraphQL query that was extracted from the component.
 * @private
 */


exports.queryExtracted = queryExtracted;

const queryExtractionGraphQLError = ({
  componentPath,
  error
}, plugin, traceId) => {
  return {
    type: `QUERY_EXTRACTION_GRAPHQL_ERROR`,
    plugin,
    traceId,
    payload: {
      componentPath,
      error
    }
  };
};
/**
 *
 * Report that babel was able to extract the graphql query.
 * Indicates that the file is free of JS errors.
 *
 * @param {Object} $0
 * @param {componentPath} $0.componentPath The path to the component that just had
 * its query read.
 * @private
 */


exports.queryExtractionGraphQLError = queryExtractionGraphQLError;

const queryExtractedBabelSuccess = ({
  componentPath
}, plugin, traceId) => {
  return {
    type: `QUERY_EXTRACTION_BABEL_SUCCESS`,
    plugin,
    traceId,
    payload: {
      componentPath
    }
  };
};
/**
 *
 * Report that the Relay Compiler found a babel error when attempting to extract a query
 *
 * @param {Object} $0
 * @param {componentPath} $0.componentPath The path to the component that just had
 * its query read.
 * @param {error} $0.error The Babel error object
 * @private
 */


exports.queryExtractedBabelSuccess = queryExtractedBabelSuccess;

const queryExtractionBabelError = ({
  componentPath,
  error
}, plugin, traceId) => {
  return {
    type: `QUERY_EXTRACTION_BABEL_ERROR`,
    plugin,
    traceId,
    payload: {
      componentPath,
      error
    }
  };
};
/**
 * Set overall program status e.g. `BOOTSTRAPING` or `BOOTSTRAP_FINISHED`.
 *
 * @param {string} Program status
 * @private
 */


exports.queryExtractionBabelError = queryExtractionBabelError;

const setProgramStatus = (status, plugin, traceId) => {
  return {
    type: `SET_PROGRAM_STATUS`,
    plugin,
    traceId,
    payload: status
  };
};
/**
 * Broadcast that a page's query was run.
 *
 * @param {string} Path to the page component that changed.
 * @private
 */


exports.setProgramStatus = setProgramStatus;

const pageQueryRun = ({
  path,
  componentPath,
  isPage
}, plugin, traceId) => {
  return {
    type: `PAGE_QUERY_RUN`,
    plugin,
    traceId,
    payload: {
      path,
      componentPath,
      isPage
    }
  };
};
/**
 * Remove jobs which are marked as stale (inputPath doesn't exists)
 *
 * @param {string} contentDigest
 * @private
 */


exports.pageQueryRun = pageQueryRun;

const removeStaleJob = (contentDigest, plugin, traceId) => {
  return {
    type: `REMOVE_STALE_JOB_V2`,
    plugin,
    traceId,
    payload: {
      contentDigest
    }
  };
};

exports.removeStaleJob = removeStaleJob;
//# sourceMappingURL=internal.js.map