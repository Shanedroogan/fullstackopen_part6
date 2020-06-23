const initialState = 'Testing Notification'

export const notify = (content) => {
  return {
    type: 'NOTIFY',
    data: {
      message: content
    }
  }
}

const notificationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NOTIFY':
      return action.data.message
    default:
      return state
  }
}

export default notificationReducer