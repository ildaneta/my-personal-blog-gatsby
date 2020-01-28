import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import * as s from './style';

const Comments = ({ url, title }) => {
  const completeURL = `https://localhost:8000${url}`;

  return (
    <s.CommentsWrapper>
      <s.CommentsTitle>Comentários</s.CommentsTitle>
      <ReactDisqusComments
        shortname="netasilva"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </s.CommentsWrapper>
  );
};

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Comments;
