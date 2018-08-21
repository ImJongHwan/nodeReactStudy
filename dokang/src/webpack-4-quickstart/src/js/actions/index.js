import { ADD_ARTICLE } from "../constants/action-types"

//action creator
export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
})


