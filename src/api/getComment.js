import axios from 'axios';

const getComment = async (id) => {
  let comment = null;
  const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

  try {
    comment = await axios.get(url);
    comment = comment.data;
  } catch (e) {
    console.error(e);
  }

  return comment;
};

export default getComment;
