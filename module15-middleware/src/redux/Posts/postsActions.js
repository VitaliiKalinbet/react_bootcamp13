export const Type = {
  FETCH_ITEMS: 'FETCH_ITEMS',
  FILTER_ITEMS: 'FILTER_ITEMS',
  DELETE_ITEM: 'DELETE_ITEM',
  TAG_SELECTED: 'TAG_SELECTED',
};

export const fetchItems = arrItems => ({
  type: Type.FETCH_ITEMS,
  payload: arrItems,
});

export const filterItems = selectedTag => ({
  type: Type.FILTER_ITEMS,
  someInfo: selectedTag,
});

export const deletePost = id => ({
  type: Type.DELETE_ITEM,
  data: id,
});

export const tagSelected = selectedTag => {
  // console.log('selectedTag in action tagSelected :', selectedTag);
  return {
    type: Type.TAG_SELECTED,
    payload: selectedTag,
  };
};
