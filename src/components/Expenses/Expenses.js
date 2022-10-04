import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Box from '../UI/Box'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterChangeHandler = (selectedYear) => {
    console.log('Expenses.js')
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

  return (
    <Box className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />

      <ExpenseItem
        id={props.expenses[0].id}
        date={props.expenses[0].data}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        id={props.expenses[1].id}
        date={props.expenses[1].data}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        id={props.expenses[2].id}
        date={props.expenses[2].data}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        id={props.expenses[3].id}
        date={props.expenses[3].data}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      />
    </Box>
  )
}

export default Expenses
