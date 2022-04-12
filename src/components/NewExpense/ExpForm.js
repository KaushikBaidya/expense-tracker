import React, { useState } from 'react'
import './ExpForm.css'

export const ExpForm = () => {
  const [, setEnteredTitle] = useState('')
  const [, setEnteredAmount] = useState('')
  const [, setEnteredDate] = useState('')

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value)
  }
  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value)
  }
  const handleDateChange = (event) => {
    setEnteredDate(event.target.value)
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="22-01-01"
            max="2030-12-31"
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
