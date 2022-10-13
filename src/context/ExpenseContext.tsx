import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ExpenseContextProviderProps = {
  children: ReactNode;
};

type ExpenseContextProps = {
  getMovements: () => number[];
  setMovements: (amount: number) => void;
  balance: () => number;
  getIncome: () => number;
  getExpense: () => number;
  addHistory: (id: string, amount: number, description: string) => void;
  deleteHistory: (id: string, amount: number) => void;
  history: HistoryProps[];
};

type HistoryProps = {
  id: string;
  amount: number;
  description: string;
};

const ExpenseContext = createContext({} as ExpenseContextProps);

export function useExpenseContext() {
  return useContext(ExpenseContext);
}

export default function ExpenseContextProvider({
  children,
}: ExpenseContextProviderProps): JSX.Element {
  const [movements, setMovementState] = useLocalStorage<number[]>(
    "movements",
    []
  );

  const [history, setHistory] = useLocalStorage<HistoryProps[]>("history", []);

  const setMovements = (amount: number) =>
    setMovementState((prev) => [...prev, amount]);

  const getMovements = () => movements;

  const addHistory = (id: string, amount: number, description: string) => {
    setHistory((curr) => {
      return [
        ...curr,
        {
          id: id,
          amount: amount,
          description: description,
        },
      ];
    });
  };

  const deleteHistory = (id: string, amount: number) => {
    setHistory((curr) => curr.filter((item) => item.id !== id));

    const currentIndex = movements.indexOf(amount);
    setMovementState((prev) =>
      prev.filter((_, index) => index !== currentIndex)
    );
  };

  console.log(movements);

  const balance = () => {
    return movements.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  };

  const getIncome = () => {
    const income = movements.filter((number) => number > 0);

    return income.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  };

  const getExpense = () => {
    const expense = movements.filter((number) => number < 0);

    return expense.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  };

  return (
    <ExpenseContext.Provider
      value={{
        getMovements,
        setMovements,
        balance,
        getIncome,
        getExpense,
        history,
        addHistory,
        deleteHistory,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
