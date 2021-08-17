import axios from "axios";

//создать стори api как класс с методами getStoriesIds и т.д.

export const getStoriesIds = async () => {
  let stories = [];
  const url = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`

  try {
    stories = await axios.get(url);
    stories = stories.data.filter((id, index) => index < 100);
  } catch (e) {
    console.error(e);
  }

  return stories;
};
