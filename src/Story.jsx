import React from 'react';
import {Typography, Card} from 'antd';
import {StarOutlined} from '@ant-design/icons';
import {formatDate} from "./utils/dataUtils";

const {Paragraph} = Typography;

function Story(props) {
  const { id, storiesById } = props;
  const date = formatDate(storiesById?.[id]?.time);

  return (
    <Card title={storiesById?.[id]?.title}>
      <Paragraph><StarOutlined /> {storiesById?.[id]?.score}</Paragraph>
        <Paragraph>Автор: {storiesById?.[id]?.by}</Paragraph>
        <Paragraph>Опубликовано: {date}</Paragraph>
    </Card>
  );
}

export default Story;
