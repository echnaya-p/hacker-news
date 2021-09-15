import React from 'react';
import { Skeleton } from 'antd';
import Comment from './Comment';
import generateUniqueKey from '../utils/unicKey';

function CommentsList(props) {
  const {
    commentsIds,
    commentsById,
    onGetKidsComments,
    isLoadingComments,
    isFetchCommentsSuccess,
    isLoadingKid,
    isFetchKidsSuccess,
  } = props;

  const renderList = () =>
    commentsIds.map((id) => (
      <Comment
        key={id}
        id={id}
        commentsById={commentsById}
        onGetKidsComments={onGetKidsComments}
        isLoadingKid={isLoadingKid}
        isFetchKidsSuccess={isFetchKidsSuccess}
      />
    ));

  const renderSkeleton = () => {
    const skeletonList = [];

    for (let i = 0; i < 5; i += 1) {
      skeletonList.push(
        <Skeleton avatar paragraph={{ rows: 3 }} key={generateUniqueKey()} />,
      );
    }

    return skeletonList.map((item) => item);
  };

  return (
    <div className="Comment-list">
      {isLoadingComments && renderSkeleton()}
      {isFetchCommentsSuccess && commentsIds.length > 0 && renderList()}
    </div>
  );
}

export default CommentsList;
