import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDb from "./helpers/Databse/connectDb.js";
import router from "./routers/router.js";
const app = express();
dotenv.config();
connectDb();

const __dirname = path.resolve() + '/src';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(router)

app.listen(process.env.PORT || 5000 , () => {
  console.log(`Server running on port ${process.env.PORT || 5000} 🚀`);
});
