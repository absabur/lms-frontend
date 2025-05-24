import {
  AUTHENTICATED,
  CLEAR_MESSAGE,
  CLEAR_PATH,
  GET_BOOKS,
  GET_FIXED_VALUES,
  GET_SINGLE_BOOK,
  LOADING_END,
  LOADING_START,
  MESSAGE,
  MY_BOOKS,
} from "./constant";

const initialState = {
  isLoading: false,
  message: {},
  path: "",
  isAuthenticated: false,
  auth_loaded: false,
  role: "",
  fixedValues: {},
  books: {},
  book: {},
  myBooks: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload.success,
        role: action.payload.role,
        profile: action.payload.profile,
      };
    case "Auth_Loaded":
      return {
        ...state,
        auth_loaded: true,
      };
    case LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    case MESSAGE:
      return {
        ...state,
        message: {
          message: action.payload.message,
          status: action.payload.status,
        },
        path: action.payload.path,
      };
    case CLEAR_PATH:
      return {
        ...state,
        path: "",
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: {},
      };

    case GET_FIXED_VALUES:
      return {
        ...state,
        fixedValues: action.payload,
      };
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case GET_SINGLE_BOOK:
      return {
        ...state,
        book: action.payload.book,
      };
    case MY_BOOKS:
      return {
        ...state,
        myBooks: action.payload,
      };
    default:
      return state;
  }
};
