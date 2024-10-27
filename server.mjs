import app from './app.mjs';
import 'dotenv/config';

const port = process.env.PORT;

app.listen(port, ()=> {
  console.log(`Server started at ${port}`);
})

