import _ from 'lodash';
import {
  CREATE_COMPANY,
  DELETE_COMPANY,
  EDIT_COMPANY,
  FETCH_COMPANY,
  FETCH_COMPANIES
} from '../actions';



export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_COMPANY:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_COMPANY:
    //lodash убирает объект с этим ключом
      return _.omit(state, action.payload);
    case EDIT_COMPANY:
      return {...state, [action.payload.id]: action.payload};
    case FETCH_COMPANY:
      return {...state, [action.payload.id]: action.payload};
    case FETCH_COMPANIES:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    default:
      return state
  }
}