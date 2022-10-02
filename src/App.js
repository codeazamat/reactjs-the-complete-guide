import './App.css'
import Expenses from "./components/Expenses";

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
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
