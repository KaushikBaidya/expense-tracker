import React, { useState } from 'react'

import { ExpForm } from './ExpForm'

import './NewExpense.css'

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false)

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
    setEditing(false)
  }

  const handleStartEditing = () => {
    setEditing(true)
  }
  const handleStopEditing = () => {
    setEditing(false)
  }

  return (
    <div className="new-expense">
      {!editing && (
        <button onClick={handleStartEditing}>Add New Expenses</button>
      )}
      {editing && (
        <ExpForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleStopEditing}
        />
      )}
    </div>
  )
}

export default NewExpense
