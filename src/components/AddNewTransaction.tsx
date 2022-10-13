import { SyntheticEvent, useCallback, useRef } from "react";
import { useExpenseContext } from "../context/ExpenseContext";
import { v4 as uuidv4 } from "uuid";

export default function AddNewTranscation() {
  const { setMovements, addHistory } = useExpenseContext();

  const descriptionRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    if (
      amountRef.current?.value !== undefined &&
      descriptionRef.current?.value !== undefined
    ) {
      const amount = Number.parseFloat(amountRef.current.value);
      const description = descriptionRef.current.value;

      setMovements(amount);

      addHistory(uuidv4(), amount, description);

      amountRef.current.value = "";
      descriptionRef.current.value = "";
    }
  };

  return (
    <div className="mt-14 w-full h-full">
      <h1 className="text-xl font-semibold mt-4">Add new Transcation</h1>
      <div className="border-bottom w-full h-[1px] bg-black mt-2"></div>
      <form onSubmit={onSubmitHandler}>
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
            ref={amountRef}
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
