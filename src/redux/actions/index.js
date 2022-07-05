import axios from "axios";

export function getFullPublicaciones() {
  return async function (dispatch) {
    var json = await axios("http://localhost:3001/api/search");
    return dispatch({
      type: "GET_PUBLICACIONES",
      payload: json.data,
    });
  };
}

export function searchPublicaciones(payload) {
  return async function (dispatch) {
    console.log("despachando la action");
    var json = await axios(`http://localhost:3001/api/search?q=${payload}`);
    return dispatch({
      type: "SEARCH_PUBLICACIONES",
      payload: json.data,
    });
  };
}

export function orderByPrice(payload) {
  return async function (dispatch) {
    console.log("estoy usando la action byPrice");
    var json = await axios(`http://localhost:3001/api/${payload}`);
    return dispatch({
      type: "ORDER_BY_PRICE",
      payload: json.data,
    });
  };
}

export function orderByCondition(payload) {
  return async function (dispatch) {
    console.log("estoy usando la action de ordenamiento", json);
    var json = await axios(
      `http://localhost:3001/condition?condicion=${payload}`
    );
    return dispatch({
      type: "ORDER_BY_CONDITION",
      payload: json.data,
    });
  };
}
