import { createSelector } from 'reselect';

export const getSelectedTag = store => store.posts.selectTag;

export const getAllItems = store => store.posts.items;

// export const getFilteredItemsWithSelectedTag = store => {
//   const selectedTag = getSelectedTag(store);
//   const allItems = getAllItems(store);

//   const filterItems = allItems.filter(el => el.tag === selectedTag);

//   return filterItems;
// };

export const getFilteredItemsWithSelectedTag = createSelector(
  [getSelectedTag, getAllItems],
  (selectedTag, allItems) => allItems.filter(post => post.tag === selectedTag),
);
