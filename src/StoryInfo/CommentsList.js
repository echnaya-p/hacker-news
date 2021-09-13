import React from "react";
import Comment from "./Comment";
import {Skeleton} from "antd";

function CommentsList(props) {
  const {
    commentsIds,
    commentsById,
    onGetKidsComments,
    isLoadingComments,
    isFetchCommentsSuccess,
    isLoadingKid,
    isFetchKidsSuccess
  } = props;

  const renderList = () => {
    return commentsIds.map((id) => (
        <Comment
          key={id}
          id={id}
          commentsById={commentsById}
          onGetKidsComments={onGetKidsComments}
          isLoadingKid={isLoadingKid}
          isFetchKidsSuccess={isFetchKidsSuccess}
        />
      )
    )
  };

  const renderSkeleton = () => {
    const skeletonList = [];

    for (let i = 0; i < 5; i += 1) {
      skeletonList.push(<Skeleton avatar paragraph={{ rows: 3 }} />)
    }

    return skeletonList.map((item) => item);
  };

  return (
    <div style={{width: '1000px'}}>
      {isLoadingComments && renderSkeleton()}
      {isFetchCommentsSuccess && commentsIds.length > 0 && renderList()}
    </div>
  );
}

export default CommentsList;