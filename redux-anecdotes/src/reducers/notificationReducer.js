export const notify = (content) => {
  return {
    type: 'NOTIFY',
    data: {
      message: content
    }
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
      return `You voted on '${action.data.message}'`
    case 'REMOVE':
      return null
    default:
      return state
  }
}

export default notificationReducer