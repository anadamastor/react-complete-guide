import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div>
        <div className="expense-item__description">Car Insurance</div>
        <div className="expense-item__price">$ 294.56</div>
      </div>
    </div>
  );
}

export default ExpenseItem;