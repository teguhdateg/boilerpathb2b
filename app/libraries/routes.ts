import { Express } from "express";
import ts from "typescript";
import fs, { PathLike } from "fs";

interface Route {
  request: String;
  middleware: String;
  path: String;
  respon: String;
}

const GetAllRoutes = () => {
  let path: PathLike = "./app/modules";
  let dir_modules: Object[] = fs.readdirSync(path).filter((file) => {
    return fs.statSync(path + "/" + file).isDirectory();
  });

  var routes: Array<Route> = [];
  dir_modules.map((v) => {
    routes = routes.concat(require(`~/modules/${v}/routes`)?.default);
  });

  return routes;
};

const GenerateRoute = (
  app: Express,
  request: String,
  middleware: String,
  path: String,
  respon: String
) => {
  /* let mid = [];
  if (typeof middleware !== "undefined") {
    middleware.map((v, k) => {
      mid = mid.concat([
        (req, res, next) => {
          v(req, res, next);
        },
      ]);
    });
  } */
  // console.log(middleware);
  eval(ts.transpile(`app.${request}('${path}',respon);`));
  /* typeof middleware === "undefined"
    ? 
    : eval(`router.${request}(path,mid,respon)`); */
};

const Routes = (app: Express) => {
  var get = "get";
  var post = "post"

  // console.log(router)
  // /* var routes = api(middleware); */

  // /* upload(router, true, routes); */
  // /* router.use((req, res, next) => {
  //   middleware.XApiKey(req, res, next);
  // }); */
  const getAllRoutes = GetAllRoutes();
  getAllRoutes.map((v) => {
    GenerateRoute(app, v.request, v.middleware, v.path, v.respon);
  });
};

export default (app: Express) => Routes(app);

