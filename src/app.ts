import express from 'express';
import * as dotenv from 'dotenv';
import UserRouterProvider from './routes/user/user.router.provider';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const userRouterProvider = new UserRouterProvider();

userRouterProvider.exec(app);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
