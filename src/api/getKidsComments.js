import {getComment} from "./getComment";

//создать стори api как класс с методами getStoriesIds и т.д.

export const getKidsComments = async (ids) => {
  let comments = [];

  try {
    comments = await Promise.all(
      ids.map(async (id) => getComment(id))
    );
  } catch (e) {
    console.log(e);
  }

  const commentsWithKids = await Promise.all(comments.map(async (comment) => {
    if (comment?.kids) {
      const kids = await getKidsComments(comment.kids);
      return { ...comment, kidsData: kids };
    }

    return comment;
  }));

  return commentsWithKids;
};