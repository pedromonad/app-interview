export const saveTransaction = async ({ amount, description }) => {
    try {
      const res = await fetch("/api/transactions", {
        method: "POST",
        body: JSON.stringify({ amount, description }),
      })
      return res.json()
    } catch (error) {
      console.error(error)
    }
}