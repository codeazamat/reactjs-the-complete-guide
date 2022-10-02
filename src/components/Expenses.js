import './Expenses.css'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
  return (
    <div className="expenses">
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
    </div>
  )
}

export default Expenses
