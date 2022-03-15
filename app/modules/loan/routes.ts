import * as Controller from "./controller";
import { CheckToken } from "~/middleware/checktoken";

export default [
  {
    request: "get",
    path: "/loan/get/all",
    middleware: CheckToken,
    respon: Controller.GetAll,
  },
  {
    request: "post",
    path: "/loan/add",
    middleware: CheckToken,
    respon: Controller.AddLoan,
  },
  {
    request: "get",
    path: "/loan/get/:id",
    middleware: CheckToken,
    respon: Controller.GetByid,
  },
  {
    request: "delete",
    path: "/loan/delete/:id",
    middleware: CheckToken,
    respon: Controller.deleteloan,
  },
  {
    request: "patch",
    path: "/loan/:id",
    middleware: CheckToken,
    respon: Controller.updateloan,
  },
];

