import axios from "axios";

export const getStory = async (id) => {
    let story = [];
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

    try {
      story = await axios.get(url);
      story = story.data;
    } catch (e) {
      console.error(e);
    }

  return story;
};