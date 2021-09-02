import React from "react";
import Comment from "./Comment";

function CommentsList(props) {
  const { commentsIds, commentsById, onGetKidsComments } = props;

  const renderList = () => {
    return commentsIds.map((id) => (
      <li key={id}>
        <Comment
          id={id}
          commentsById={commentsById}
          onGetKidsComments={onGetKidsComments}
        />
      </li>
      )
    )
  };

  return (
    <ul>
      {commentsIds.length > 0 && renderList()}
    </ul>
  );
}

export default CommentsList;