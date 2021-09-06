import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import CommentsList from "./CommentsList";

function StoryInfo(props) {

  const {id} = useParams();
  const { storiesById, commentsIds, commentsById, onGetComments, onGetKidsComments } = props;
  const date = new Date(storiesById?.[id]?.time).toLocaleString("ru");

    useEffect(() => {
      onGetComments(storiesById?.[id]?.kids ?? []);
      const timerId = setInterval( () => {
         onGetComments(storiesById?.[id]?.kids ?? []);
       }, 60000);

      return () => {
         clearInterval(timerId);
      };
    }, []);

return (
  <div>
    <Link to='/'>На главную</Link>
    <h2>
      {storiesById?.[id]?.title}
    </h2>
    <p>
      Подробнее:
      <a href={storiesById?.[id]?.url}>{storiesById?.[id]?.url}</a>
    </p>
    <ul>
      <li>Автор: {storiesById?.[id]?.by}</li>
      <li>Дата публикации: {date}</li>
      <li>Коментариев: {storiesById?.[id]?.descendants}</li>
    </ul>
    <button onClick={() => onGetComments(storiesById?.[id]?.kids ?? [])}>Обновить</button>
    <CommentsList
      commentsIds={commentsIds}
      commentsById={commentsById}
      onGetComments={onGetComments}
      onGetKidsComments={onGetKidsComments}
    />
  </div>
);
}

export default StoryInfo;
