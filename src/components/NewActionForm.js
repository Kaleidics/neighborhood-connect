import React, { Component } from 'react';

export default class NewEventForm extends Component {
  state = {
    name: '',
    type: '',
    date: '',
    goal: '',
    details: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <h2>Add a New Event</h2>
        <p>What's up in the community?</p>
        <div>
          <form
            name='new-event'
            onSubmit={async e => {
              e.preventDefault();
              fetch('INSERT_POST_URL', {
                method: 'POST',
                body: JSON.stringify(this.state)
              }
              )
                .then(this.setState({ name: '', type: '', date: '', goal: '', details: '' }))
            }}>
            <label htmlFor='name'>Event Name</label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.saveToState} />

            <label htmlFor='type'>What Type of Event?</label>
            <input
              type='text'
              name='type'
              value={this.state.type}
              onChange={this.saveToState} />

            <label htmlFor='date'>When?</label>
            <input
              type='date'
              name='date'
              value={this.state.date}
              onChange={this.saveToState} />

            <label>Event Goal</label>
            <input
              type='text'
              name='goal'
              value={this.state.goal}
              onChange={this.saveToState} />

            <label htmlFor='details'>Event Details</label>
            <textarea type='text'
              name='details'
              value={this.state.details}
              onChange={this.saveToState}
            />
            <button type='submit'>Create Event</button>
          </form>
        </div>
      </>
    )
  }
}