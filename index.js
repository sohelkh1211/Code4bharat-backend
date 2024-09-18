const express = require('express');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const app = express();
const corsOptions = {
    origin: ['http://localhost:5173'],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
    credentials: true,
    enablePreflight: true
}

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(cookieParser());
app.use(express.json());


app.use('/api/auth', routes);

app.listen(3000, () => {
    console.log('Server is running on post 3000');
});