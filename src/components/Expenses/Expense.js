import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

import './Expense.css'

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>No Expenses Found</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      {expensesContent}
    </Card>
  )
}

export default Expense
