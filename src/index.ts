// configure environment variables
import * as dotenv from "dotenv";
dotenv.config();

import app from "./App";

const port = process.env.PORT || 3000;

app.listen(port, (err: any) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }

  // tslint:disable-next-line:no-console
  console.log(`server is listening on ${port}`);
});
