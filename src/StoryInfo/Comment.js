import {useEffect} from "react";

function Comment(props) {
  const { commentById, id, onGetComment } = props;

  useEffect(() => {
    onGetComment(id);
  }, []);

  return (
    <div>
      <p>{`${commentById?.[id]?.by}: ${commentById?.[id]?.text}`}</p>
      <p>{commentById?.[id]?.time}</p>
    </div>
  );
}

export default Comment;