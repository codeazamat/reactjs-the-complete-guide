import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Box from '../UI/Box'
import { useState } from 'react'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    console.log('Clicked!')
    setTitle('Updated!')
  }

  return (
    <Box className="expense-item" key={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Box>
  )
}

export default ExpenseItem
