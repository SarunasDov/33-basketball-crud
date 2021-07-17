class Basketball {
    constructor(name, max) {
        this.name = name;
        this.max = max;
        this.playerList = [];
        this.team = [];
    }

    wannaBePlayer(playerName, price) {
        this.playerList.push({
            name: playerName,
            price: price
        })
    }

    createTeam(name) {
        this.team.push({
            name: name,
            hasToPay: 0,
            players: []
        })
        console.log(` A "${name}" just entered a game!`);
    }

    buyPlayer(teamID, playerID) {
        if (playerID !== this.team[teamID - 1].players[playerID - 1] && this.team[teamID - 1].players.length <= 3) {
            this.team[teamID - 1].players.push(playerID);
        }

        if (playerID === this.team[teamID - 1].players[playerID - 1]) { console.log(`"${this.team[teamID - 1].name}" team can't add the same player twice!`); }

        if (this.team[teamID - 1].players.length === 3) {
            console.log(`"${this.team[teamID - 1].name}" team can't add extra players to it's team.\nMaximum players per team is 3.`);
        }

        this.team[teamID - 1].hasToPay += this.playerList[playerID - 1].price;
        console.log(`"${this.team[teamID - 1].name}" team just acquired new player ${this.playerList[playerID - 1].name} for ${this.playerList[playerID - 1].price} cash/year!`);
    }

    teamValue(id) {
        console.log(`"${this.team[id - 1].name}" team is paying ${this.team[id - 1].hasToPay} cash/year for it's players.`);
    }



}

module.exports = Basketball;