import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'

import './Expense.css'
import ExpenseList from './ExpenseList'

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expense
