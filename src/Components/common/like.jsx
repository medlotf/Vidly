import React from 'react';

const Like = ({ liked, onLike }) => {
  let classes = "fa fa-heart";
  classes += liked ? "" : "-o";
  return (<i className={classes} style={{ cursor: "pointer" }} aria-hidden="true" onClick={onLike}></i>);
}

export default Like;