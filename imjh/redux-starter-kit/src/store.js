import { createStore, applyMiddleware } from 'redux'
import modules from './modules'
import { createLogger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const logger = createLogger()
const customizedPromiseMiddleware = promiseMiddleware({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
})

const store = createStore(modules, applyMiddleware(logger, ReduxThunk, customizedPromiseMiddleware))

export default store
