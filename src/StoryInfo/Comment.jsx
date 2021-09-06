import React, {useState} from "react";
import Kids from "./Kids";


function Comment(props) {
  const { commentsById, id, onGetKidsComments } = props;
  const [isCommentOpened, setCommentOpened] = useState(false);;
  const date = new Date(commentsById?.[id]?.time).toLocaleString("ru");


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

  function createMessage() {
    return {__html: commentsById?.[id]?.text};
  }

  return (
    <div onClick={changeCommentState}>
      <div>
        <p>{commentsById?.[id]?.by}: </p>
        <div dangerouslySetInnerHTML={createMessage()}/>
        <p>{date}</p>
      </div>
      <div>
          {isCommentOpened && commentsById?.[id]?.kidsData?.length > 0 && renderKids()}
      </div>
    </div>
  );
}

export default Comment;
