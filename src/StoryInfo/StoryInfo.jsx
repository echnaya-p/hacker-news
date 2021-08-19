import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from "./CommentsList";

function StoryInfo(props) {

  const {id} = useParams();
  const { storiesById, commentsIds, commentById, onUpdateComments, onGetComment } = props;

    useEffect(() => {
      onUpdateComments(storiesById?.[id]?.kids ?? []);
      const timerId = setInterval( () => {
        onUpdateComments(storiesById?.[id]?.kids ?? []);
      }, 60000);

      return () => {
        clearInterval(timerId);
      };
    }, []);

return (
  <div>
    <h2>
      {storiesById?.[id]?.title}
    </h2>
    <p>
      Подробнее:
      <a href={storiesById?.[id]?.url}>{storiesById?.[id]?.url}</a>
    </p>
    <ul>
      <li>Автор: {storiesById?.[id]?.by}</li>
      <li>Дата: {storiesById?.[id]?.time}</li>
      <li>Коментариев: {storiesById?.[id]?.descendants}</li>
    </ul>
    <CommentsList
      commentsIds={commentsIds}
      commentById={commentById}
      onGetComment={onGetComment}
    />
  </div>
);
}

export default StoryInfo;
