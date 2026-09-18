import express from "express";
const app = express();
import { supabase } from "../database.js";
app.use(express.json());

app.get("/chamados", async (req, res) => {
  const { data: algo } = await supabase.from("teste").insert({ id: 12 });
  return
});

export default app;
