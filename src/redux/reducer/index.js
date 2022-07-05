const initialState = {
  publicaciones: [],
  precioAsc: [],
  precioDesc: [],
  condicion: [],
  todo: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PUBLICACIONES":
      return {
        ...state,
        todo: action.payload,
        precioAsc: action.payload,
        precioDesc: action.payload,
        condicionState: action.payload,
      };

    case "ORDER_BY_PRICE":
      return {
        ...state,
        todo: action.payload,
      };

    case "ORDER_BY_CONDITION":
      return {
        ...state,
        todo: action.payload,
      };

    case "SEARCH_PUBLICACIONES":
      return {
        ...state,
        todo: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
