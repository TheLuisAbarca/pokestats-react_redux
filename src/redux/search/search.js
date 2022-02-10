export const FILTER_NAME = 'FILTER_NAME';

export const changeName = (type) => ({
  type: FILTER_NAME,
  searchWord: type,
});

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_NAME:
      return action.searchWord;
    default:
      return state;
  }
};

export default searchReducer;
