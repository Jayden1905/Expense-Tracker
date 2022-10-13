import { useExpenseContext } from "../context/ExpenseContext";

type HistoryProps = {
  item: any;
};

export const History: React.FC<HistoryProps> = ({ item }) => {
  const { deleteHistory } = useExpenseContext();

  const onDeleteHandler = () => {
    deleteHistory(item.id, item.amount);
  };

  return (
    <div
      onClick={onDeleteHandler}
      className={`history flex justify-between mt-4 bg-white p-2 shadow-xl border-r-[5px] cursor-pointer ${
        item.amount < 0 ? "border-red-600" : "border-green-500"
      }`}
    >
      <p>{item.description}</p>
      <p>{item.amount > 0 ? `+${item.amount}` : item.amount}</p>
    </div>
  );
};
