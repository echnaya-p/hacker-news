import React, {useState} from "react";
import Kids from "./Kids";


function Comment(props) {
  const { commentsById, id, onGetKidsComments } = props;
  const [isCommentOpened, setCommentOpened] = useState(false);

  const changeCommentState = (e) => {
    e.stopPropagation();

    if (!isCommentOpened) {
      onGetKidsComments(commentsById?.[id]?.kids ?? [])
    }

    setCommentOpened(!isCommentOpened);
  };

  const renderKids = () => {
    return <Kids
      kidsData={commentsById[id].kidsData}
    />;
  };

  return (
    <div onClick={changeCommentState}>
      <p>{commentsById?.[id]?.id}</p>
      <div>
          {isCommentOpened && commentsById?.[id]?.kidsData?.length > 0 && renderKids()}
      </div>
    </div>
  );

  /*return (
    <div onClick={changeKidsCommentsState}>
      <p>{commentById?.[id]?.id}</p>
      <p>{`${commentById?.[id]?.by}: ${commentById?.[id]?.text}`}</p>
      <p>{commentById?.[id]?.time}</p>
      <div>
        <ul>
          {commentById?.[id]?.kids?.length > 0 && renderListKids()}
        </ul>
      </div>
    </div>
  );*/
}

export default Comment;
