import React from "react";
import Comment from "./Comment";

function CommentsList(props) {
  const { commentsIds, commentById, onGetComment } = props;

  const renderList = () => {
    return commentsIds.map((id) => (
      <li key={id}>
        <Comment
          id={id}
          commentById={commentById}
          onGetComment={onGetComment}
        />
      </li>
      )
    )
  };

  return (
    <div>
      <ul>
      {commentsIds.length > 0 && renderList()}
      </ul>
    </div>
  );
}

export default CommentsList;