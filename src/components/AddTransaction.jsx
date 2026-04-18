import { useState } from "react";

export default function AddTransaction({ addTransaction }) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (!text || !amount) return;

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount // The + sign converts the string to a number
        };

        addTransaction(newTransaction);
        setText("");
        setAmount("");
    };

    return (
        <div className="my-6">
            <h3 className="pb-2 mb-4 text-lg font-bold text-gray-800 border-b border-gray-200">
                Add new transaction
            </h3>
            <form onSubmit={onSubmit} className="space-y-4">
                <div>
                    <label htmlFor="text" className="block text-sm font-medium text-gray-700">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." 
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        Amount <br />
                        <span className="text-xs text-gray-500">(negative - expense, positive - income)</span>
                    </label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." 
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button className="w-full p-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add transaction
                </button>
            </form>
        </div>
    );
}