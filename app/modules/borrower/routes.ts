import { CheckToken } from "~/middleware/checktoken";
import * as Controller from "./controller";

export default [
  {
    request: "post",
    path: "/borrower/register",
    respon: Controller.Register,
  },
  {
    request: "post",
    path: "/borrower/login",
    respon: Controller.Login,
  },
  {
    request: "post",
    path: "/borrower/validate",
    middleware:CheckToken,
    respon: Controller.Validate,
  },
  {
    request: "get",
    path: "/borrower/profile/:id",
    middleware:CheckToken,
    respon: Controller.Profile,
  },
  {
    request: "put",
    path: "/borrower/changeprofile/:id",
    middleware: CheckToken,
    respon: Controller.ChangeProfile,
  },
  {
    request: "put",
    path: "/borrower/changepassword/:id",
    middleware: CheckToken,
    respon: Controller.ChangePass,
  },
  {
    request: "delete",
    path: "/borrower/delete/:id",
    middleware: CheckToken,
    respon: Controller.Delete,
  },
  {
    request: "get",
    path: "/borrower/get/all",
    middleware: CheckToken,
    respon: Controller.Get,
  },
  {
    request: "delete",
    path: "/logout",
    respon: () => {},
  },
];
