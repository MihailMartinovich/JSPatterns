const sortAsc = array => {
  const newArray = array || [];

  return newArray.sort((firstItem, secondItem) => {
    return firstItem - secondItem;
  })
};

const sortDesc = array => {
  const newArray = array || [];

  return newArray.sort((firstItem, secondItem) => {
    return secondItem - firstItem;
  })
}

export default {
  sortAsc,
  sortDesc,
}