import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

import './Expense.css'

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={handleFilterChange}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  )
}

export default Expense
