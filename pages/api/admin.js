import nc from "next-connect";
import { getAllAdmin } from "controller/admin/admin";
const handler = nc();
handler.get(getAllAdmin);
export default handler;
