import React from "react";
import {Comment as CommentStyle, Avatar, Skeleton} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {formatDate} from "../utils/dataUtils";

function Kids(props) {
  const { kidsData } = props;

  const renderKids = () => kidsData.map((kid) => {
    const date = formatDate(kid.time);

    function createMessage() {
      return {__html: kid.text};
    }

    return (
        <CommentStyle
          key={kid.id}
          author={kid.by}
          datetime={date}
          avatar={
            <Avatar
              size={45}
              icon={<UserOutlined />}
            />
          }
          content={<div dangerouslySetInnerHTML={createMessage()}/>}
        >
        {kid.kidsData && kid.kidsData.length > 0 &&
        <Kids
          kidsData={kid.kidsData}
        />}
      </CommentStyle>
    )
    });

  return (
    <div>
      {renderKids()}
    </div>
  );
}

export default Kids;