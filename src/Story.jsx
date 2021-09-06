import React from 'react';

function Story(props) {
  const { id, storiesById } = props;
  const date = new Date(storiesById?.[id]?.time).toLocaleString("ru");

  return (
    <div>
      <h2>
        {storiesById?.[id]?.title}
      </h2>
      <ul>
        <li>Автор: {storiesById?.[id]?.by}</li>
        <li>Опубликовано: {date}</li>
        <li>Рейтинг: {storiesById?.[id]?.score}</li>
      </ul>
    </div>
  );
}

export default Story;
