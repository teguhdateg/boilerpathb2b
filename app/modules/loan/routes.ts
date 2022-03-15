import * as Controller from "./controller";
import * as Middleware from "~/middleware/middleware"

export default [
  {
    request: "get",
    path: "/loan/get/all",
    respon: Controller.GetAll,
  },
  {
    request: "post",
    path: "/loan/add",
    respon: Controller.AddLoan,
  },
  {
    request: "get",
    path: "/loan/get/:id",
    respon: Controller.GetByid,
  },
  {
    request: "delete",
    path: "/loan/delete/:id",
    respon: Controller.deleteloan,
  },
  {
    request: "patch",
    path: "/loan/:id",
    respon: Controller.updateloan,
  },
];

