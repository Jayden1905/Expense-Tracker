import AddNewTranscation from "./components/AddNewTransaction";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";

export default function App() {
  return (
    <div className="w-screen h-screen flex items-center p-4 bg-gray-200 overflow-hidden">
      <div className="sm:w-[30%] w-full h-full p-4 m-auto">
        <h1 className="total font-extrabold text-2xl">Expense Tracker</h1>
        <Balance />
        <Transaction />
        <AddNewTranscation />
      </div>
    </div>
  );
}
