import { ADD_ARTICLE } from '../constants/actions-types'

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
})
