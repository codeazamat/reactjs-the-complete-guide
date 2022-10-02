import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Box from './Box'

const ExpenseItem = (props) => {
  console.log(props)

  return (
    <Box className="expense-item" key={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Box>
  )
}

export default ExpenseItem
