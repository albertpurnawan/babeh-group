import executeQuery from "../../config/db";
const getAllChef = async (req, res) => {
  let chefData = await executeQuery("select * from chef", {});
  res.send(chefData);
};

export { getAllChef };
