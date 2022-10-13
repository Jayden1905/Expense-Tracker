import { SyntheticEvent, useRef } from "react";
import { useExpenseContext } from "../context/ExpenseContext";

export default function AddNewTranscation() {
  const { setDescription, setIncome, setExpense } = useExpenseContext();

  const descriptionRef = useRef<HTMLInputElement>(null);
  const valueInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    if (
      descriptionRef.current?.value !== undefined &&
      valueInputRef.current?.value !== undefined
    ) {
      setDescription(descriptionRef.current?.value);

      const incomeVlaue = valueInputRef.current?.value;

      if (incomeVlaue.charAt(0) === "-") {
        const expenseValue = valueInputRef.current?.value.substring(1);
        setExpense(Number.parseFloat(expenseValue));

        descriptionRef.current.value = "";
        valueInputRef.current.value = "";
        return;
      }

      setIncome(Number.parseFloat(incomeVlaue));

      descriptionRef.current.value = "";
      valueInputRef.current.value = "";
    }
  };

  return (
    <div className="mt-14 w-full h-full">
      <h1 className="text-xl font-semibold mt-4">Add new Transcation</h1>
      <div className="border-bottom w-full h-[1px] bg-black mt-2"></div>
      <form onSubmit={submitHandler}>
        <div className="description-box mt-6">
          <p className="font-bold">Description</p>
          <input
            ref={descriptionRef}
            type="text"
            placeholder="Enter description..."
            className="w-full bg-white outline-none border-none p-2 mt-2"
          />
        </div>
        <div className="value-box mt-6">
          <p className="font-bold">Amount</p>
          <p>(negative - expense, positive - income)</p>
          <input
            ref={valueInputRef}
            type="text"
            placeholder="Enter amount..."
            className="w-full bg-white outline-none border-none p-2 mt-2"
          />
        </div>
        <button className="w-full border-none bg-indigo-500 text-lg text-white p-2 mt-4 hover:bg-indigo-600">
          Add Transcation
        </button>
      </form>
    </div>
  );
}
