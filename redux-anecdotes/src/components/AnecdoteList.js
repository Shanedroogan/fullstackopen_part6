import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notify, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes).sort((a,b) => b.votes - a.votes)

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