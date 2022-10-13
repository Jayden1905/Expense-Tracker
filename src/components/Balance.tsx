import { useExpenseContext } from "../context/ExpenseContext";

export default function Balance() {
  const { getBalance, getIncome, getExpense } = useExpenseContext();
  const balance = getBalance();
  const income = getIncome();
  const expense = getExpense();

  return (
    <div className="balance w-full">
      <h1 className="text-xl font-semibold mt-4">YOUR BALANCE</h1>
      <p className="mt-2 text-4xl font-extrabold">${balance}</p>

      <div className="flex w-full justify-center items-center h-[8rem] shadow-xl bg-white mt-8">
        <div className="income w-1/2 h-full flex flex-col justify-center items-center">
          <h1 className="text-lg font-semibold">INCOME</h1>
          <p className="text-green-400 font-semibold text-2xl">${income}</p>
        </div>
        <div className="w-[2px] h-24 bg-gray-200"></div>
        <div className="expense w-1/2 h-full flex flex-col justify-center items-center">
          <h1 className="text-lg font-semibold">EXPENSE</h1>
          <p className="text-red-400 font-semibold text-2xl">${expense}</p>
        </div>
      </div>
    </div>
  );
}
