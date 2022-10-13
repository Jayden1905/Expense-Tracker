import { createContext, ReactNode, useContext, useState } from "react";

type ExpenseContextProviderProps = {
  children: ReactNode;
};

type ExpenseContextProps = {
  getBalance: () => number;
  increaseBalance: (amount: number) => void;
  deecreaseBalance: (amount: number) => void;
  getIncome: () => string;
  setIncome: (amont: number) => void;
  getExpense: () => string;
  setExpense: (amount: number) => void;
  getDescription: () => string;
  setDescription: (text: string) => void;
};

const ExpenseContext = createContext({} as ExpenseContextProps);

export function useExpenseContext() {
  return useContext(ExpenseContext);
}

export default function ExpenseContextProvider({
  children,
}: ExpenseContextProviderProps) {
  const [balance, setBalance] = useState(0);
  const [income, setIncomeState] = useState(0);
  const [expense, setExpenseState] = useState(0);
  const [description, setDescriptionState] = useState("");

  // Set Methods
  const increaseBalance = (amount: number) => {
    setBalance((prev) => prev + amount);
  };

  const deecreaseBalance = (amount: number) => {
    setBalance((prev) => prev - amount);
  };

  const setIncome = (amount: number) => {
    setIncomeState((prev) => prev + amount);
    increaseBalance(amount);
  };

  const setExpense = (amount: number) => {
    setExpenseState((prev) => prev + amount);
    deecreaseBalance(amount);
  };

  const setDescription = (text: string) => {
    setDescriptionState(text);
  };

  // Get Methods
  const getBalance = () => balance;

  const getIncome = () => {
    if (Number.isInteger(income)) {
      return `${income}.00`;
    } else {
      return `${income}`;
    }
  };

  const getExpense = () => {
    if (Number.isInteger(expense)) {
      return `${expense}.00`;
    } else {
      return `${expense}`;
    }
  };

  const getDescription = () => description;

  return (
    <ExpenseContext.Provider
      value={{
        getBalance,
        increaseBalance,
        deecreaseBalance,
        getIncome,
        setIncome,
        getExpense,
        setExpense,
        getDescription,
        setDescription,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
