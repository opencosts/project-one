import React from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    return (
        <div className="Expense-Item">

            <ExpenseDate date={props.date} />

            <div className="Expense_Item__title">
                {props.title}
            </div>

            <div className="Expense_Item__price">

                $ {props.price}

            </div>





        </div>
    );
}


export default ExpenseItem