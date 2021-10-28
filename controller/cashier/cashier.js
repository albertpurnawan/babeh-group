import executeQuery from "../../config/db";
const getAllCashier = async (req, res) => {
  let cashierData = await executeQuery("select * from cashier", []);
  res.send(cashierData);
};

export { getAllCashier };
