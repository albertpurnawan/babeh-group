import nc from "next-connect";
import { getAllCashier } from "controller/cashier/cashier";
const handler = nc();
handler.get(getAllCashier);
export default handler;
