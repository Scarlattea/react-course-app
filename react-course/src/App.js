import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
       <div className="App">
        Helló
      </div>
      <ExpenseItem
        date="04.11."
        title="Ebéd"
        amount="1500FT"
      ></ExpenseItem>
      <ExpenseItem
        date="04.12."
        title="Ebéd"
        amount="1600FT"
      ></ExpenseItem>
      <ExpenseItem
        date="04.13."
        title="Ebéd"
        amount="1200FT"
      ></ExpenseItem>
      <ExpenseItem
        date="04.14."
        title="Ebéd"
        amount="1300FT"
      ></ExpenseItem>
    </div>    
  );
}

export default App;
