const express = require('express');
const path = require('path');
const app = express();


const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`listening on port ${port}`));

app.use('/styles.css', (req, res, next) => {res.sendFile(path.join(__dirname, 'styles.css'))});

const poker = {
    founded: "1829",
    winningHands: "10",
    numPlayers: "2-8"
};

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
        <h1>Let's learn About Poker</h1>
        <ul> 
            <li><a href = "/about"> What is Poker?</a></li>
            <li><a href = "/rules">Rules</a></li>
            <li><a href = "/hands"> Hands</a></li>
        </ul>
    </body>
    </html>`);
    res.end();
});

app.get('/about', (req, res, next) => {
    
    res.send(`
    <html>
    <head>
        <title> What is Poker ? </title>
        <link rel= "stylesheet" href= "/styles.css">
    </head>
    <body>
        <nav>
         <a href = "/">Home </a>
        </nav>
        <style> </style>
        <h1>What the F#$K is Poker?! </h1>
        <p>Poker is a family of card games in which players wager over which hand is best according to that specific game's rules in ways similar to these rankings. 
           While the earliest known form of the game was played with just 20 cards, today it is usually played with a standard deck, although countries where short packs are common, 
           may play with 32, 40 or 48 cards. Thus poker games vary in deck configuration, the number of cards in play, the number dealt face up or face down, and the number shared by all players,
           but all have rules that involve one or more rounds of betting. -Wiki </p>
           It was founded in ${poker.founded}.
    </body>
    </html>`);
    res.end();
});

app.get('/rules', (req, res, next) => {
    res.send(`
    <html>
    <head>
        <title> Poker Rules</title>
        <link rel= "stylesheet" href= "/styles.css">
    </head>
    <body>
        <nav>
         <a href = "/">Home </a>
        </nav>
        <style> </style>
        <h1>These Are The Rules! </h1>
        <p>In casual play, the right to deal a hand typically rotates among the players and is marked by a token called a dealer button (or buck). 
        In a casino, a house dealer handles the cards for each hand, but the button (typically a white plastic disk) is rotated clockwise among the players to indicate a 
        nominal dealer to determine the order of betting. The cards are dealt clockwise around the poker table, one at a time.One or more players are usually required to make forced bets, usually either an 
        ante or a blind bet (sometimes both). The dealer shuffles the cards, the player on the chair to his or her right cuts, and the dealer deals the appropriate number of cards to the players 
        one at a time, beginning with the player to his or her left. Cards may be dealt either face-up or face-down, depending on the variant of poker being played. After the initial deal, the first of 
        what may be several betting rounds begins. Between rounds, the players' hands develop in some way, often by being dealt additional cards or replacing cards previously dealt. At the end of each round,
        all bets are gathered into the central pot. At any time during a betting round, if one player bets, no opponents choose to call (match) the bet, and all opponents instead fold, 
        the hand ends immediately, the bettor is awarded the pot, no cards are required to be shown, and the next hand begins. This is what makes bluffing possible. Bluffing is a primary feature of poker, 
        distinguishing it from other vying games and from other games that use poker hand rankings.
        At the end of the last betting round, if more than one player remains, there is a showdown, in which the players reveal their previously hidden cards and evaluate their hands. 
        The player with the best hand according to the poker variant being played wins the pot. A poker hand comprises five cards; in variants where a player has more than five cards available to them, 
        only the best five-card combination counts. There are ${poker.winningHands} different kinds of poker hands, such as straight flush and four of a kind.- Wiki</p>

        You must have ${poker.numPlayers} people to play. 
    </body>
    </html>`);
    res.end();
});

app.get('/hands', (req, res, next) => {
    res.send(`
    <html>
    <head>
        <title> Poker Hands</title>
        <link rel= "stylesheet" href= "/styles.css">
    </head>
    <body>
        <nav>
         <a href = "/">Home </a>
        </nav>
        <style> </style>
        <h1>These Are The Hand Ranks! </h1>
        <p>There are ${poker.winningHands} winning hands: </p>
        <img src= "https://www.cardschat.com/pkimg/hand-nicknames/poker-hand-rankings-mobile.png">
    </body>
    </html>`);
    res.end();
});