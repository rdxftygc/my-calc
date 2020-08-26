import React from 'react';
import HistoryItem from './HistoryItem';


const History = (props) => {
    return (
        <div>
            <section className="history">
                <h3>История расходов</h3>
                <ul className="history__list">
                    {props.transactions.map(el =>
                        <HistoryItem deleteTransaction={props.deleteTransaction}
                                     key={el.id}
                                     id={el.id}
                                     transaction={el}/>)}
                </ul>
            </section>
        </div>
    )
}

export default History;