let id = 0;

const generateUniqueKey = () => {
  id += 1;

  return id;
};

export default generateUniqueKey;
