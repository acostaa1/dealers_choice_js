const express = require('express');
const app = express();


const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`listening on port ${port}`));

app.get('styles.css', (req, res, next) => {res.sendFile(path.join(__dirname, 'public', 'styles.css'))});

app.get('/', (req, res, next) => {
    res.send(`
    <html>
    <head>
        <title> All About Poker</title>
        <link rel= "stylesheet" href= "/styles.css">
    </head>
    <body>
        <nav>
         <a href = "/">Home </a>
         <a href = "/">About </a>
         <a href = "/">Contact </a>
        </nav>
        <style> </style>
        <h1>Let's learn About Poker! </h1>
        <ul> 
            <li><a href = "https://www.pokernews.com/poker-rules/texas-holdem.htm#2-texas-hold-em-rule">Rules</a></li>
            <li><a href = "https://media.istockphoto.com/vectors/texas-holdem-poker-hand-rankings-combination-set-vector-green-vector-id1303667887"> Hands</a></li>
    
        </ul>
    </body>
    </html>`);
    res.end();
});
