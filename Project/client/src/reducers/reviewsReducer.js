import _ from 'lodash';
import {
  CREATE_REVIEW,
  DELETE_REVIEW,
  EDIT_REVIEW,
  FETCH_REVIEW,
  FETCH_REVIEWS
} from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_REVIEW:
    //lodash убирает объект с этим ключом
      return _.omit(state, action.payload);
    case EDIT_REVIEW:
      return {...state, [action.payload.id]: action.payload};
    case FETCH_REVIEW:
      return {...state, [action.payload.id]: action.payload};
    case FETCH_REVIEWS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    default:
      return state
  }
}