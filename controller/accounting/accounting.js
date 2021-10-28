import executeQuery from "../../config/db";
const getAllAcc = async (req, res) => {
  let accData = await executeQuery("select * from accounting", []);
  res.send(accData);
};

export { getAllAcc };
