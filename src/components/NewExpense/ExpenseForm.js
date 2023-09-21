import React, { useState } from 'react';


const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            expense_title: enteredTitle,
            expense_price: enteredAmount,
            expense_date: new Date(enteredDate),
        }

        props.sendEnteredData(expenseData);

        // console.log(expenseData);
    }

    return (
        <div>

            <form onSubmit={submitHandler}>
                <p>
                    <label>Title: </label>
                    <input type="text" value={enteredTitle} name="title" onChange={titleChangeHandler} />

                </p>
                <p>
                    <label>Amount: </label>
                    <input type="number" value={enteredAmount} name="amount" onChange={amountChangeHandler} />

                </p>
                <p>
                    <label>Title: </label>
                    <input type="date" value={enteredDate} name="date" onChange={dateChangeHandler} />

                </p>
                <p>

                    <button type="submit">Submit</button>

                </p>

            </form>

        </div>
    );
}


export default ExpenseForm
