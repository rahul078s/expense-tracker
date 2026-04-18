import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

export default function App() {
    const [transactions, setTransactions] = useState([
        { id: 1, text: "Salary", amount: 500 },
        { id: 2, text: "Book", amount: -40 }
    ]);

    const addTransaction = (transaction) => {
        setTransactions([transaction, ...transactions]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <Header />
                <Balance transactions={transactions} />
                <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
                <AddTransaction addTransaction={addTransaction} />
            </div>
        </div>
    )
}