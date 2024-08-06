import express from "express";
import { getRouter } from "./router";
import { Datasource } from "../../infrastructure/db/datasource";
import session from "express-session";

const PORT = 3000;
const app = express();

Datasource.initialize();

app.set("view engine", "ejs");
app.set("views", "static");

app.use(express.json());
app.use(express.urlencoded())

app.use(
  session({
    secret: "supersecret",
  }),
);

app.use(getRouter());

app.listen(PORT, () =>
  console.log(`server running and listening to port ${PORT}`),
);
