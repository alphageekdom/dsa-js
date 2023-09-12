const displayLikes = (names) => {
  const length = names.length;

  if (length === 0) {
    return 'no one likes this post';
  } else if (length === 1) {
    return `${names[0]} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} likes this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]}, and ${names[2]} likes this`;
  }
};

modules.export = displayLikes;
