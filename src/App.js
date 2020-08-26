import React from 'react';
import History from './components/History/History';
import Operation from './components/Operation/Operation';
import Total from './components/Total/Total';


class App extends React.Component {

  state = {
    transactions: JSON.parse(localStorage.getItem('historyItems')) || [],
    description: '',
    amount: '',
    totalIncome: JSON.parse(localStorage.getItem('totalIncome')) || 0,
    totalExpenses: JSON.parse(localStorage.getItem('totalExpenses')) || 0,
    totalBalance: JSON.parse(localStorage.getItem('totalBalance')) || 0
  }

  addTransaction = (add) => {

    const transactions = [...this.state.transactions]

    const transaction = {
      id: `cmr${(+new Date).toString(16)}`,
      description: this.state.description,
      amount: Number(this.state.amount),
      add
    }


    transactions.push(transaction)

    this.setState({
          transactions,
          description: '',
          amount: '',
        },
        this.getTotalBalance
    )

  }

  addAmount = (e) => {
    this.setState({amount: e.target.value})
  }

  addDescription = (e) => {
    this.setState({description: e.target.value})
  }

  getTotalIncome = () => {
    return this.state.transactions
        .filter(el => el.add)
        .reduce((acc, el) => acc + el.amount, 0)
  }

  getTotalExpenses = () => {
    return this.state.transactions
        .filter(el => !el.add)
        .reduce((acc, el) => acc + el.amount, 0)
  }

  getTotalBalance() {
    const totalIncome = this.getTotalIncome();
    const totalExpenses = this.getTotalExpenses();
    const totalBalance = totalIncome - totalExpenses;

    this.setState({
          totalIncome,
          totalExpenses,
          totalBalance
        },
        this.addLocalStorage
    )
  }

  deleteTransaction = (id) => {
    const transactions = [...this.state.transactions]
    transactions.map(el => {
      if (id === el.id) {
        transactions.splice(transactions.indexOf(el), 1)
      }
    })
    this.setState({
          transactions
        },
        this.getTotalBalance
    )
  }

  addLocalStorage = () => {
    localStorage.setItem('historyItems', JSON.stringify(this.state.transactions))
    localStorage.setItem('totalIncome', JSON.stringify(this.state.totalIncome))
    localStorage.setItem('totalExpenses', JSON.stringify(this.state.totalExpenses))
    localStorage.setItem('totalBalance', JSON.stringify(this.state.totalBalance))
  }

  render() {
    return (
        <div>

          <header>
            <h1>Кошелек</h1>
            <h2>Калькулятор расходов</h2>
          </header>

          <main>
            <div className="container">
              <Total totalIncome={this.state.totalIncome}
                     totalExpenses={this.state.totalExpenses}
                     totalBalance={this.state.totalBalance}/>
              <History deleteTransaction={this.deleteTransaction}
                       transactions={this.state.transactions}/>
              <Operation addTransaction={this.addTransaction}
                         addDescription={this.addDescription}
                         addAmount={this.addAmount}
                         description={this.state.description}
                         amount={this.state.amount}/>
            </div>
          </main>

        </div>
    )
  }
}

export default App;
