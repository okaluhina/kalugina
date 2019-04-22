import history from '../history';
import clients from '../apis/';
import axios from '../apis/';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP_CLIENT = 'SIGN_UP_CLIENT';
export const SIGN_UP_COMPANY = 'SIGN_UP_COMPANY';
export const SIGN_OUT = 'SIGN_OUT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const BLOCK_USER = 'BLOCK_USER';

export const CREATE_BOOKING = 'CREATE_BOOKING';
export const DELETE_BOOKING = 'DELETE_BOOKING';
export const EDIT_BOOKING = 'EDIT_BOOKING';
export const FETCH_BOOKING = 'FETCH_BOOKING';
export const FETCH_BOOKINGS = 'FETCH_BOOKINGS';

export const CREATE_CLIENT = 'CREATE_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const EDIT_CLIENT = 'EDIT_CLIENT';
export const FETCH_CLIENT = 'FETCH_CLIENT';
export const FETCH_CLIENTS = 'FETCH_CLIENTS';

export const CREATE_COMPANY = 'CREATE_COMPANY';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const EDIT_COMPANY = 'EDIT_COMPANY';
export const FETCH_COMPANY = 'FETCH_COMPANY';
export const FETCH_COMPANIES = 'FETCH_COMPANIES';

export const CREATE_REVIEW = 'CREATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const EDIT_REVIEW = 'EDIT_REVIEW';
export const FETCH_REVIEW = 'FETCH_REVIEW';
export const FETCH_REVIEWS = 'FETCH_REVIEW';

export const getSecret = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/users/secret')

      dispatch({
        type: 'DASHBOARD_GET_SECRET',
        payload: res.data.secret
      })

    } catch(err) {
      console.error('err', err)
    }
  }
}

export const signIn = (formValues) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post('/api/auth/login', formValues);

      dispatch({ type: SIGN_IN, payload: response.data });
      localStorage.setItem('JWT_TOKEN', response.data.token);
      localStorage.setItem('USER_ROLE', response.data.role);
      axios.defaults.headers.common['Authorization: Bearer'] = response.data.token;
      history.goBack();
    } catch(err) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'User wit this email was not found.'
      });
    }  
  }
};

//послать данные и формы в реквесте
//получить ответ от сервера
// пердать ответ в редусеры с помощью диспатч
// сохранить токен в локал сторидж

// export const signIn = (userId) => {
//   return {
//     type: SIGN_IN,
//     payload: userId
//   }
// };

export const signUpClient = (formValues) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post('/api/register/client', formValues);

      history.push('/client/account/verify/' + response.data.userId);
    } catch(err) {
      dispatch({
        type: AUTH_ERROR,
        //500 errors?
        payload: 'Email is already on use.'
      });
    }  
  }
};

export const signUpVerification = (formValues, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await clients.put('/api/register/client/verify', {
        userId: id,
        verificationCode: Number.parseInt(formValues.code)
      });

      dispatch({ type: SIGN_UP_CLIENT, payload: response.data.token });

      localStorage.setItem('JWT_TOKEN', response.data.token);
      localStorage.setItem('USER_ROLE', 'client');
      clients.defaults.headers.common['Authorization: Bearer'] = response.data.token;
      history.push('/client');
    } catch(err) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Wrong code or too many attempts.'
      });
    }
  }
};

export const signUpCompanyVerification = (userId, verificationCode) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.put('/api/register/company/verify', {
        userId,
        verificationCode
      });

      dispatch({ type: SIGN_UP_COMPANY, payload: response.data.token });

      localStorage.setItem('JWT_TOKEN', response.data.token);
      localStorage.setItem('USER_ROLE', 'company');
      axios.defaults.headers.common['Authorization: Bearer'] = response.data.token;
      history.push('/company');
    } catch(err) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Probably server error'
      });
    }
  }
};

//cross origin problem
export const googleAuth = () => {
  return async (dispatch, getState) => {
    try {
      const response = await clients.get('/api/auth/google', {});

      dispatch({ type: SIGN_UP_CLIENT, payload: response.data.token });
      localStorage.setItem('JWT_TOKEN', response.data.token);
      clients.defaults.headers.common['Authorization: Bearer'] = response.data.token;

      history.goBack();
    } catch(err) {
      console.log(err)
    }
  }
}

export const signUpCompany = () => {
  return {
    type: SIGN_UP_COMPANY
  }
};

export const signOut = () => {
  return dispatch => {
    localStorage.removeItem('JWT_TOKEN');
    dispatch({ type: SIGN_OUT });
  }
};

export const blockUser = () => {
  return {
    type: BLOCK_USER
  }
};

export const createBooking = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await clients.post('/clients', {...formValues, userId});
    
    dispatch({ type: CREATE_BOOKING, payload: response.data });
    //после успешного создания,  перекидываем на главную, 
    // выносим history, чтобы обращаться напрямую
    history.push('/');
    
  }
};

export const editBooking = (id, formValues) => {
  return async (dispatch) => {
    const response = await clients.patch(`/clients/${id}`, formValues);

    dispatch({ type: EDIT_BOOKING, payload: response.data });
    history.push('/');
  }
};

export const deleteBooking = (id) => {
  return async (dispatch) => {
    await clients.delete(`/clients/${id}`);

    dispatch({ type: DELETE_BOOKING, payload: id });
    history.push('/');
  }
};

export const fetchBooking = (id) => {
  return async (dispatch) => {
    const response = await clients.get(`/clients/${id}`);

    dispatch({ type: FETCH_BOOKING, payload: response.data});
  }
};

export const fetchBookings = () => {
  return async (dispatch) => {
    const response = await clients.get('/clients');
    
    dispatch({ type: FETCH_BOOKINGS, payload: response.data })
  }
};

export const createClient = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await clients.post('/clients', {...formValues, userId});
    
    dispatch({ type: CREATE_CLIENT, payload: response.data });
    //после успешного создания,  перекидываем на главную, 
    // выносим history, чтобы обращаться напрямую
    history.push('/');
    
  }
};

export const editClient = (id, formValues) => {
  return async (dispatch) => {
    const response = await clients.patch(`/clients/${id}`, formValues);

    dispatch({ type: EDIT_CLIENT, payload: response.data });
    history.push('/');
  }
};

export const deleteClient = (id) => {
  return async (dispatch) => {
    await clients.delete(`/clients/${id}`);

    dispatch({ type: DELETE_CLIENT, payload: id });
    history.push('/');
  }
};

export const fetchClient = (id) => {
  return async (dispatch) => {
    const response = await clients.get(`/clients/${id}`);

    dispatch({ type: FETCH_CLIENT, payload: response.data});
  }
};

export const fetchClients = () => {
  return async (dispatch) => {
    const response = await clients.get('/clients');
    
    dispatch({ type: FETCH_CLIENTS, payload: response.data })
  }
};

export const createCompany = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await clients.post('/clients', {...formValues, userId});
    
    dispatch({ type: CREATE_COMPANY, payload: response.data });
    //после успешного создания,  перекидываем на главную, 
    // выносим history, чтобы обращаться напрямую
    history.push('/');
    
  }
};

export const editCompany = (id, formValues) => {
  return async (dispatch) => {
    const response = await clients.patch(`/clients/${id}`, formValues);

    dispatch({ type: EDIT_COMPANY, payload: response.data });
    history.push('/');
  }
};

export const deleteCompany = (id) => {
  return async (dispatch) => {
    await clients.delete(`/clients/${id}`);

    dispatch({ type: DELETE_COMPANY, payload: id });
    history.push('/');
  }
};

export const fetchCompany = (id) => {
  return async (dispatch) => {
    const response = await clients.get(`/clients/${id}`);

    dispatch({ type: FETCH_COMPANY, payload: response.data});
  }
};

export const fetchCompanies = () => {
  return async (dispatch) => {
    const response = await clients.get('/clients');
    
    dispatch({ type: FETCH_COMPANIES, payload: response.data })
  }
};

export const createReview = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await clients.post('/clients', {...formValues, userId});
    
    dispatch({ type: CREATE_REVIEW, payload: response.data });
    //после успешного создания,  перекидываем на главную, 
    // выносим history, чтобы обращаться напрямую
    history.push('/');
    
  }
};

export const editReview = (id, formValues) => {
  return async (dispatch) => {
    const response = await clients.patch(`/clients/${id}`, formValues);

    dispatch({ type: EDIT_REVIEW, payload: response.data });
    history.push('/');
  }
};

export const deleteReview = (id) => {
  return async (dispatch) => {
    await clients.delete(`/clients/${id}`);

    dispatch({ type: DELETE_REVIEW, payload: id });
    history.push('/');
  }
};

export const fetchReview = (id) => {
  return async (dispatch) => {
    const response = await clients.get(`/clients/${id}`);

    dispatch({ type: FETCH_REVIEW, payload: response.data});
  }
};

export const fetchReviews = () => {
  return async (dispatch) => {
    const response = await clients.get('/clients');
    
    dispatch({ type: FETCH_REVIEWS, payload: response.data })
  }
};






//




// import axios from 'axios';
// import { 
//   AUTH_SIGN_UP, 
//   AUTH_SIGN_OUT, 
//   AUTH_SIGN_IN, 
//   AUTH_ERROR,
//   DASHBOARD_GET_DATA } from './types';

// export const oauthGoogle = data => {
//   return async dispatch => {
//     const res = await axios.post('http://localhost:5000/users/oauth/google', {
//       access_token: data
//     });

//     dispatch({
//       type: AUTH_SIGN_UP,
//       payload: res.data.token
//     });

//     localStorage.setItem('JWT_TOKEN', res.data.token);
//     axios.defaults.headers.common['Authorization'] = res.data.token;
//   };
// }

// export const oauthFacebook = data => {
//   return async dispatch => {
//     const res = await axios.post('http://localhost:5000/users/oauth/facebook', {
//       access_token: data
//     });

//     dispatch({
//       type: AUTH_SIGN_UP,
//       payload: res.data.token
//     });

//     localStorage.setItem('JWT_TOKEN', res.data.token);
//     axios.defaults.headers.common['Authorization'] = res.data.token;
//   };
// }

// export const signUp = data => {
//   return async dispatch => {
//     try {
//       const res = await axios.post('http://localhost:5000/users/signup', data);

//       dispatch({
//         type: AUTH_SIGN_UP,
//         payload: res.data.token
//       });

//       localStorage.setItem('JWT_TOKEN', res.data.token);
//       axios.defaults.headers.common['Authorization'] = res.data.token;
//     } catch(err) {
//       dispatch({
//         type: AUTH_ERROR,
//         payload: 'Email is already in use'
//       })
//     }
//   };
// }

// export const signIn = data => {
//   return async dispatch => {
//     try {
//       const res = await axios.post('http://localhost:5000/users/signin', data);

//       dispatch({
//         type: AUTH_SIGN_IN,
//         payload: res.data.token
//       });

//       localStorage.setItem('JWT_TOKEN', res.data.token);
//       axios.defaults.headers.common['Authorization'] = res.data.token;
//     } catch(err) {
//       dispatch({
//         type: AUTH_ERROR,
//         payload: 'Email and password combination isn\'t valid'
//       })
//     }
//   };
// }

// export const getSecret = () => {
//   return async dispatch => {
//     try {
//       const res = await axios.get('http://localhost:5000/users/secret')

//       dispatch({
//         type: DASHBOARD_GET_DATA,
//         payload: res.data.secret
//       })

//     } catch(err) {
//       console.error('err', err)
//     }
//   }
// }

// export const signOut = () => {
//   return dispatch => {
//     localStorage.removeItem('JWT_TOKEN');
//     axios.defaults.headers.common['Authorization'] = '';

//     dispatch({
//       type: AUTH_SIGN_OUT,
//       payload: ''
//     })
//   };
// }