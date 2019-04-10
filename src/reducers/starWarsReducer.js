import { FETCHING, SUCCESS, FAILURE} "../actions";
const initialState = {
  characters: [],
  isFetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return{
        ...state,
        characters:[],
        isFetching: true,
        error: null
      }
    case SUCCESS:
      return{
        ...state,
        characters: [...characters, res.data],
        isFetching: false,
        error: null

      }
    case FAILURE:
      return{
        ...state,
        characters:[],
        isFetching: false,
        error: err.data 

      }
    default:
      return state;
  }
};
