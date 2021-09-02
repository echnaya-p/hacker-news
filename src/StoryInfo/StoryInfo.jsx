import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from "./CommentsList";

function StoryInfo(props) {

  const {id} = useParams();
  const { storiesById, commentsIds, commentsById, onGetComments, onGetKidsComments } = props;

    useEffect(() => {
      onGetComments(storiesById?.[id]?.kids ?? []);
      // const timerId = setInterval( () => {
      //   onGetComments(storiesById?.[id]?.kids ?? []);
      // }, 60000);
      //
      // return () => {
      //   clearInterval(timerId);
      // };
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
      commentsById={commentsById}
      onGetComments={onGetComments}
      onGetKidsComments={onGetKidsComments}
    />
  </div>
);
}

export default StoryInfo;
