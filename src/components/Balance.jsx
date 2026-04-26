import React from 'react';

export default function Balance({ transactions = [] }) {
  // Use a single reduce pass to calculate all three values at once
  const { total, income, expense } = transactions.reduce(
    (acc, transaction) => {
      const amount = transaction.amount;
      acc.total += amount;
      if (amount > 0) {
        acc.income += amount;
      } else {
        acc.expense += Math.abs(amount);
      }
      return acc;
    },
    { total: 0, income: 0, expense: 0 }
  );

  // Internationalization formatter for currency
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="my-6">
      <h2 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        Your Balance
      </h2>
      <h3 className={`text-4xl font-extrabold mt-1 ${total < 0 ? 'text-red-600' : 'text-gray-900'}`}>
        {formatter.format(total)}
      </h3>

      <div className="flex divide-x divide-gray-200 p-6 mt-6 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div className="flex-1 text-center">
          <h4 className="text-xs font-bold text-gray-400 uppercase">Income</h4>
          <p className="text-lg font-bold text-green-500 mt-1">
            +{formatter.format(income)}
          </p>
        </div>
        <div className="flex-1 text-center">
          <h4 className="text-xs font-bold text-gray-400 uppercase">Expense</h4>
          <p className="text-lg font-bold text-red-500 mt-1">
            -{formatter.format(expense)}
          </p>
        </div>
      </div>
    </div>
  );
}
