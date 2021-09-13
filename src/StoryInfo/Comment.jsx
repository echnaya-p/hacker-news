import React, {useState} from "react";
import Kids from "./Kids";
import {Comment as CommentStyle, Avatar, Skeleton} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {formatDate} from "../utils/dataUtils";


function Comment(props) {
  const { commentsById, id, onGetKidsComments, isLoadingKid, isFetchKidsSuccess } = props;
  const [isCommentOpened, setCommentOpened] = useState(false);
  const date = formatDate(commentsById?.[id]?.time);


  const changeCommentState = (e) => {
    e.stopPropagation();

    if (!isCommentOpened) {
      onGetKidsComments(commentsById?.[id]?.kids ?? [])
    }

    setCommentOpened(!isCommentOpened);
  };

  const renderKids = () => {
    if (isLoadingKid) {
      return <Skeleton avatar paragraph={{ rows: 3 }} />
    }

    if (isFetchKidsSuccess) {
    return <Kids kidsData={commentsById[id].kidsData} />;}
  };

  function createMessage() {
    return {__html: commentsById?.[id]?.text};
  }

  return (
      <CommentStyle
        key={commentsById?.[id]?.id}
        onClick={changeCommentState}
        author={commentsById?.[id]?.by}
        content={<div dangerouslySetInnerHTML={createMessage()}/>}
        datetime={formatDate}
        avatar={<Avatar
          size={45}
          icon={<UserOutlined />}
        />}
      >
        {isCommentOpened && commentsById?.[id]?.kidsData?.length > 0 && renderKids()}
      </CommentStyle>
  );
}

export default Comment;
