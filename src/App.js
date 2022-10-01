import './App.css'
import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {
      id: 'e1',
      data: new Date(2022, 9, 2),
      title: 'Toilet Paper',
      amount: 94.12
    },
    {
      id: 'e2',
      data: new Date(2022, 9, 1),
      title: 'Car Insurance',
      amount: 294.67
    },
    {
      id: 'e3',
      data: new Date(2022, 9, 3),
      title: 'New Desk (Wooden)',
      amount: 450
    },
    {
      id: 'e4',
      data: new Date(2022, 9, 5),
      title: 'New TV',
      amount: 799.49
    }
  ]
  return (
    <div className="App">
      <ExpenseItem
        id={expenses[0].id}
        date={expenses[0].data}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        id={expenses[1].id}
        date={expenses[1].data}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        id={expenses[2].id}
        date={expenses[2].data}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        id={expenses[3].id}
        date={expenses[3].data}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </div>
  )
}

export default App
