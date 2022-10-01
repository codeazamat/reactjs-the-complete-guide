import './ExpenseItem.css'

const ExpenseItem = (props) => {
  console.log(props)

  return (
    <div className="expense-item" key={props.id}>
      <div>{props.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
