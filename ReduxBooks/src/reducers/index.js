import { combineReducers } from 'redux';
import BookReducer from './book_list_reducer';
import ActiveBook from './select_book_reducer'; 

const rootReducer = combineReducers({
  books: BookReducer,
  activebook: ActiveBook
});

export default rootReducer;
