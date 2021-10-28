import nc from "next-connect";
import { getAllAcc } from "controller/admin/accounting";
const handler = nc();
handler.get(getAllAcc);
export default handler;
