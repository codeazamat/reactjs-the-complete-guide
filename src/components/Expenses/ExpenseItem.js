import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Box from '../UI/Box'

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('Clicked!')
  }

  return (
    <Box className="expense-item" key={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Box>
  )
}

export default ExpenseItem
