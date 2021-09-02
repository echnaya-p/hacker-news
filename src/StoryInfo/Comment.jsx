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
      <div>
        <p>{commentsById?.[id]?.by}: </p>
        <p>{commentsById?.[id]?.text}</p>
        <p>{commentsById?.[id]?.time}</p>
      </div>
      <div>
          {isCommentOpened && commentsById?.[id]?.kidsData?.length > 0 && renderKids()}
      </div>
    </div>
  );
}

export default Comment;
