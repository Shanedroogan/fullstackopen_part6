export const filter = (content) => {
  return {
    type: 'FILTER',
    data: {
      key: content
    }
  }
}

const filterReducer = (state = '', action) => {
  switch(action.type) {
    case 'FILTER':
      // return state.filter(a => a.content.toLowerCase().includes(action.data.key.toLowerCase()))
      return action.data.key
    default:
      return state
  }
}

export default filterReducer