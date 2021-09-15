import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Button } from 'antd';
import { ArrowLeftOutlined, ReloadOutlined } from '@ant-design/icons';
import Space from 'antd/es/space';
import formatDate from '../utils/dataUtils';
import CommentsList from './CommentsList';

const { Title, Text } = Typography;

function StoryInfo(props) {
  const { id } = useParams();
  const {
    storiesById,
    commentsIds,
    commentsById,
    onGetComments,
    onGetKidsComments,
    isLoadingComments,
    isFetchCommentsSuccess,
    isLoadingKid,
    isFetchKidsSuccess,
  } = props;
  const date = formatDate(storiesById?.[id]?.time);

  useEffect(() => {
    onGetComments(storiesById?.[id]?.kids ?? []);
    const timerId = setInterval(() => {
      onGetComments(storiesById?.[id]?.kids ?? []);
    }, 60000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <Link to="/" className="Link-Back">
        <ArrowLeftOutlined />
        &nbsp;Главная
      </Link>
      <Title>{storiesById?.[id]?.title}</Title>
      <Space direction="vertical">
        <Text>
          Подробнее:&nbsp;
          <a href={storiesById?.[id]?.url}>{storiesById?.[id]?.url}</a>
        </Text>
        <Text>
          Автор:&nbsp;
          {storiesById?.[id]?.by}
        </Text>
        <Text>
          Дата публикации:&nbsp;
          {date}
        </Text>
        <Text>
          Коментариев:&nbsp;
          {storiesById?.[id]?.descendants}
        </Text>
        <Button onClick={() => onGetComments(storiesById?.[id]?.kids ?? [])}>
          <ReloadOutlined />
          Обновить комментарии
        </Button>
      </Space>
      <CommentsList
        commentsIds={commentsIds}
        commentsById={commentsById}
        onGetComments={onGetComments}
        onGetKidsComments={onGetKidsComments}
        isLoadingComments={isLoadingComments}
        isFetchCommentsSuccess={isFetchCommentsSuccess}
        isLoadingKid={isLoadingKid}
        isFetchKidsSuccess={isFetchKidsSuccess}
      />
    </div>
  );
}

export default StoryInfo;
