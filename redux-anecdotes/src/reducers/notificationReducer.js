export const notify = (content, time, prevTimeout) => {
  return async dispatch => {
    clearTimeout(prevTimeout)
    const timeoutId = setTimeout(() => {
      dispatch(removeNotification())
    }, time*1000)
    dispatch({
      type: 'NOTIFY',
      data: {
        message: content
      }
    })
    return timeoutId
  }
}

export const removeNotification = (content) => {
  return {
    type: 'REMOVE'
  }
}

const notificationReducer = (state = null, action) => {
  switch(action.type) {
    case 'NOTIFY':
      return action.data.message
    case 'REMOVE':
      return null
    default:
      return state
  }
}

export default notificationReducer