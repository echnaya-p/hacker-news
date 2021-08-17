import React from 'react';
import { useParams } from 'react-router-dom'

function StoryInfo(props) {
  const {id} = useParams();
  const { storiesById } = props;

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
  </div>
);
}

export default StoryInfo;
