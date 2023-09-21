import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';


const Expenses = (props) => {

    return (
        <Card className="expenses">

            {
                props.item.map(expense => (
                    <ExpenseItem
                        date={expense.expense_date}
                        title={expense.expense_title}
                        price={expense.expense_price} />
                ))
            }


        </Card>

    );
}


export default Expenses