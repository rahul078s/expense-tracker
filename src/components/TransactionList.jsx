export default function TransactionList({ transactions, deleteTransaction }) {
    return (
        <div className="my-6">
            <h3 className="pb-2 mb-4 text-lg font-bold text-gray-800 border-b border-gray-200">
                History
            </h3>
            <ul className="space-y-3">
                {transactions.map(transaction => (
                    <li key={transaction.id} className={`flex justify-between items-center p-3 bg-white border-r-4 rounded shadow-sm ${transaction.amount < 0 ? 'border-red-500' : 'border-green-500'}`}>
                        <span className="text-gray-700">{transaction.text}</span>
                        <div className="flex items-center space-x-4">
                            <span className={`font-bold ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                            </span>
                            <button onClick={() => deleteTransaction(transaction.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
                                &times;
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}