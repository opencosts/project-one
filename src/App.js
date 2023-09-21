import React, { useState, useEffect } from 'react';

import './App.css'

import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';



const dummy_expenses = [];


const App = () => {


    const [expenses, setExpenses] = useState(dummy_expenses);

    useEffect(() => {

        fetch("https://reqres.in/api/users").then(
            response => {
                return response.json();
            }
        ).then(
            data => {

                console.log(data.data);

                // setExpenses(data);
            }
        );
    }, []);




    const getEnteredDataFromNewExpense = (new_expenses) => {

        const updated_expense = [new_expenses, ...expenses]

        setExpenses(updated_expense);

    };



    return (
        <div>

            <NewExpense getExpensesData={getEnteredDataFromNewExpense} />

            <Expenses item={expenses} />

        </div>
    );

}


export default App