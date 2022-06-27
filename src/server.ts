//libs
import express from 'express';
import morgan from 'morgan';
import route from './routes/imgResize';
//import cors from 'cors'

//declaring app
const app = express();
const port = 3000;

//middlewares

//app.use(cors)
app.use(morgan('dev'));
//app.use(morgan("common"))
app.use('/api/image/', route);

// server listening
app.listen(port, () => {
  console.log('this is my server running on PORT: ');
});

//
//app.use (bodyParser)
//app.use(express.urlencoded({extended:false}));
export default app;
