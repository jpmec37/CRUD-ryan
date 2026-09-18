import app from './JS/app.js';
import 'dotenv/config';
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Rodando no server ${PORT}`);
});
