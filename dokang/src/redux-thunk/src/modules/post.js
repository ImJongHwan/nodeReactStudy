
import {createAction, handleActions} from 'redux-actions'

import axios from 'axios'
import {pender} from "redux-pender"

function getPostAPI(postId) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST'
// const GET_POST_PENDING = 'GET_POST_PENDING'
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
// const GET_POST_FAILURE = 'GET_POST_FAILURE '

// export const getPost = (postId) => dispatch => {
//   dispatch({type: GET_POST_PENDING})
//   return getPostAPI(postId).then(
//     response => {
//       dispatch({
//         type: GET_POST_SUCCESS,
//         payload: response
//       })
//     }
//   ).catch(error => {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: error
//     })
//   })
// }

export const getPost2 = createAction(GET_POST, getPostAPI)



const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: ''
  }
}

const initialState2 = {
  data: {
    title: '',
    body: ''
  }
}

// export default handleActions({
//   [GET_POST_PENDING]: (state, action) => {
//     return {
//       ...state,
//       pending: true,
//       error: false
//     }
//   },
//   [GET_POST_SUCCESS]: (state, action) => {
//     const {title, body} = action.payload.data
//     return {
//       ...state,
//       pending: false,
//       data: {
//         title, body
//       }
//     }
//   },
//   [GET_POST_FAILURE]: (state, action) => {
//     return {
//       ...state,
//       pending: false,
//       error: true
//     }
//   }
// }, initialState)

export default handleActions({
  ...pender({
    type: GET_POST,
    onSuccess: (state, action) => {
      const {title, body} = action.payload.data
      return {
        data: {
          title, body
        }
      }
    }
  })
}, initialState2)
