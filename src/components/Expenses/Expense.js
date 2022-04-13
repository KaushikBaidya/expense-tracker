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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expense
