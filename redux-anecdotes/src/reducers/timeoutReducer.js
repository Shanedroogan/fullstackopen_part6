const timeoutReducer = (state = null, action) => {
  switch(action.type) {
    case 'UPDATE_ID':
      return action.data.id
    default:
      return state
  }
}

export const clearNotificationTimer = (timeoutId) => {
  return async dispatch => {
    dispatch({
      type: 'UPDATE_ID',
      data: {
        id: timeoutId
      }
    })
  }
}

export default timeoutReducer