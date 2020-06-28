import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { clearNotificationTimer } from '../reducers/timeoutReducer'

const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes 

  const voteOn = async (anecdote) => {
    props.vote(anecdote)
    const newId = await props.notify(`You voted for '${anecdote.content}'`, 5, props.prevTimeout)
    props.clearNotificationTimer(newId)
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

const mapStateToProps = (state) => {
  const prevTimeout = state.timeout
  const filter = state.filter
  return {
    anecdotes: state.anecdotes
    .filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a,b) => b.votes - a.votes),
    prevTimeout
  }
}

const mapDispatchToProps = {
  vote, notify, clearNotificationTimer
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes