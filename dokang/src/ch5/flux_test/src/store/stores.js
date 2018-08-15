
import {appDispatcher} from "../dispatcher/appDispatcher"
import {ActionType} from "../action/actions"

export const nameStore = { name: '', onChange: null }
export const messageStore = { message: '', onChange: null }

appDispatcher.register(payload => {
  switch (payload.actionType) {
    case ActionType.CHANGE_NAME: {
      nameStore.name = payload.value
      nameStore.onChange()
      break
    }
    case ActionType.SUBMIT_NAME: {
      messageStore.message = nameStore.name + '님 안녕하세요'
      messageStore.onChange()
      break
    }
    default: {
    }
  }
})
