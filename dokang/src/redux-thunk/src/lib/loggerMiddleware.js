
const loggerMiddleware = store => next => action => {
  console.log('현재 상태', store.getState())
  console.log('액션', action)
  const result = next(action)
  console.log("다음상태", store.getState())
  console.log('\n')
  return result
}

export default loggerMiddleware
