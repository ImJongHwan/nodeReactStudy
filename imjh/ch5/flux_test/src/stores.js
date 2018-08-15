import {appDispatcher} from './appDispatcher.js'
import {ActionType} from './actions.js'

export const nameStore = {name: '', onChange: null}
export const messageStore = {message: '', onChange: null}

appDispatcher.register(payload => {
  if (payload.actionType === ActionType.CHANGE_NAME) {
    nameStore.name = payload.value
    nameStore.onChange()
  }
})

appDispatcher.register(payload => {
  if (payload.actionType === ActionType.SUBMIT_NAME) {
    messageStore.message = nameStore.name + '님 안녕하세요.'
    messageStore.onChange()
  }
})
