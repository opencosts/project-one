import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const getEnteredData = (data) => {
    const expenseData = {
      ...data,
    }

    props.getExpensesData(expenseData);

  };

  return (
    <div className="new-expense">
      <ExpenseForm sendEnteredData={getEnteredData} />
    </div>
  );
}

export default NewExpense;