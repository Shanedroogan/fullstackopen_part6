import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case 'VOTE': 
      const id = action.data
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

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW ANECDOTE',
      data: anecdote
    })
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    await anecdoteService.voteFor(anecdote)
    dispatch({
      type: 'VOTE',
      data: anecdote.id
    })
  }
}

export default anecdoteReducer