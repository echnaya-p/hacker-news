import React from 'react';

function Story(props) {
  const { id, storiesById } = props;

  return (
    <div>
      <h2>
        {storiesById?.[id]?.title}
      </h2>
      <ul>
        <li>Автор: {storiesById?.[id]?.by}</li>
        <li>Дата: {storiesById?.[id]?.time}</li>
        <li>Рейтинг: {storiesById?.[id]?.score}</li>
      </ul>
    </div>
  );
}

export default Story;
