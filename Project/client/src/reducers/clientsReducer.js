import _ from 'lodash';
import {
  CREATE_CLIENT,
  DELETE_CLIENT,
  EDIT_CLIENT,
  FETCH_CLIENT,
  FETCH_CLIENTS
} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_CLIENT:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_CLIENT:
    //lodash убирает объект с этим ключом
      return _.omit(state, action.payload);
    case EDIT_CLIENT:
      return {...state, [action.payload.id]: action.payload};
    case FETCH_CLIENT:
      return {...state, [action.payload.id]: action.payload};
    case FETCH_CLIENTS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    default:
      return state
  }
}