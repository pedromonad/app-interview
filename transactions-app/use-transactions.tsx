import { useState, useEffect } from "react";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/transactions")
      .then((response) => {
        setTransactions(response.json())
      })
      .catch((error) => {
        setError(true);
      });
  }
  , []);
}