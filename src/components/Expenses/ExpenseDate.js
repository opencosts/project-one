const ExpenseDate = (props) => {


    const month = props.date.toLocaleString('en', { month: 'long' });
    const day = props.date.toLocaleString('en', { day: '2-digit' });
    const date = day + ' - ' + month + ' - '+ props.date.getFullYear(); 
    return (
        <div>
            {date}
        </div>
    );
}
   


export default ExpenseDate;