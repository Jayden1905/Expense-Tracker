import { useExpenseContext } from "../context/ExpenseContext";
import { History } from "./History";

export default function Transaction() {
  const { history } = useExpenseContext();

  return (
    <div className="history mt-16">
      <h1 className="text-xl font-semibold">History</h1>
      <div className="border-bottom w-full h-[1px] bg-black mt-2"></div>

      {history.map((item) => (
        <History key={item.id} item={item} />
      ))}
    </div>
  );
}
