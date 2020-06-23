import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notify, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  console.log(filter)
  const anecdotes = useSelector(state => {
    return state.anecdotes
        .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
        .sort((a,b) => b.votes - a.votes)
  })
  console.log(anecdotes)

  const voteOn = (anecdote) => {
    dispatch(vote(anecdote.id))
    dispatch(notify(anecdote.content))

    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voteOn(anecdote)}>vote</button>
        </div>
      </div>
    )}
    </div>
  )
}

export default AnecdoteList