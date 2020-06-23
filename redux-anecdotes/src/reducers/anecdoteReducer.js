export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW ANECDOTE',
    data: content
  }
}

export const vote = (content) => {
  return {
    type: 'VOTE',
    data: {
      id: content
    }
  }
}

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE': 
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(a => a.id !== id ? a : changedAnecdote)
    case 'INIT_ANECDOTES':
      return action.data
    case 'NEW ANECDOTE':
      return [...state, action.data]

    default:
      return state
  }
}

export default anecdoteReducer