import express from "express";
import { graphqlHTTP } from "express-graphql";
import dotenv from "dotenv";

import { schema } from "./schema";
import { root } from "./resolvers";
import { connectDB } from "./db";

dotenv.config();

const app = express();

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
