import {saveTransaction} from "./save-transaction.service";
import { useState, useEffect } from "react";

export default function App() {



  const [transaction, setTransaction] = useState({
    amount: 0,
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await saveTransaction({ amount: transaction.amount, description: transaction.description });
    console.log(res);
    setTransaction({})
  }

  const handleChangeInput = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={transaction.description}
          onChange={handleChangeInput}
        />

        <br />

        <label>Amount</label>
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={transaction.amount}
          onChange={handleChangeInput}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}