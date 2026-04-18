export default function Balance({ transactions }) {
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <div className="my-4">
            <h2 className="text-sm text-gray-500 uppercase">Your Balance</h2>
            <h3 className={`text-3xl font-bold ${total < 0 ? 'text-red-500' : 'text-gray-800'}`}>${total}</h3>
            
            <div className="flex justify-between p-4 mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="w-1/2 text-center border-r border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase">Income</h4>
                    <p className="text-xl font-bold text-green-500">+${income}</p>
                </div>
                <div className="w-1/2 text-center">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase">Expense</h4>
                    <p className="text-xl font-bold text-red-500">-${expense}</p>
                </div>
            </div>
        </div>
    );
}