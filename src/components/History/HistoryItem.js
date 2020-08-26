import React from 'react';

const HistoryItem = (props) => {
    return (
        <div id={props.id}>
            {props.transaction.add ? <li className="history__item history__item-plus">{props.transaction.description}
                <span className="history__money">+{props.transaction.amount} ₽</span>
                <button className="history__delete" onClick={() => {props.deleteTransaction(props.id)}}>x</button>
            </li> : <li className="history__item  history__item-minus">{props.transaction.description}
                <span className="history__money">-{props.transaction.amount} ₽</span>
                <button className="history__delete" onClick={() => {props.deleteTransaction(props.id)}}>x</button>
            </li>}
        </div>
    )
}


export default HistoryItem;