import './ExpenseItem.css';
export default function ExpenseItem(props){
    return(
        <div className="expense-item-container">
            <div className="expense-item-date">{props.date}</div>
            <div className="expense-item-title">{props.title}</div>
            <div className="expense-item-amount">{props.amount}</div>
        </div>
    );
}