import executeQuery from "../../config/db";
const getAllAdmin = async (req, res) => {
  let adminData = await executeQuery("select * from admin", []);
  res.send(adminData);
};

export { getAllAdmin };
