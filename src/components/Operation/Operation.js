import React from 'react';

const Operation = (props) => {
    return (
        <div>
            <section className="operation">
                <h3>Новая операция</h3>
                <form id="form">
                    <label>
                        <input type="text"
                               className="operation__fields operation__name"
                               placeholder="Наименование операции"
                               onChange={props.addDescription}
                               value={props.description}/>
                    </label>
                    <label>
                        <input type="number"
                               className="operation__fields operation__amount"
                               placeholder="Введите сумму"
                               onChange={props.addAmount}
                               value={props.amount}
                        />
                    </label>
                    <div className="operation__btns">
                        <button type="button"
                                onClick={() => {
                                    props.addTransaction(false)
                                }}
                                className="operation__btn operation__btn-subtract">РАСХОД
                        </button>
                        <button type="button"
                                onClick={() => {
                                    props.addTransaction(true)
                                }}
                                className="operation__btn operation__btn-add">ДОХОД
                        </button>
                    </div>

                </form>
            </section>
        </div>
    )
}

export default Operation;