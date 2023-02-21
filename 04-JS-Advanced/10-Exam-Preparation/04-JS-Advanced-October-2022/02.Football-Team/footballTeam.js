class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        for (const currPlayerInfo of footballPlayers) {
            let [name, age, playerValue] = currPlayerInfo.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            let player = this.invitedPlayers.find(e => e.name === name);
            if (!player) {
                this.invitedPlayers.push({ name, age, playerValue });
            } else {
                if (playerValue > player.playerValue) {
                    player.playerValue = playerValue;
                }
            }
        }
        let addedPlayers = [];
        this.invitedPlayers.forEach(playerInfo => {
            addedPlayers.push(playerInfo.name);
        });
        let result = addedPlayers.join(', ');
        return `You successfully invite ${result}.`;
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let player = this.invitedPlayers.find(e => e.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        };
        if (player.playerValue > playerOffer) {
            let priceDifference = Math.abs(player.playerValue - playerOffer);
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        };
        if (player) {
            player.playerValue = 'Bought';
        }
        return `Congratulations! You sign a contract with ${player.name} for ${playerOffer} million dollars.`;
    };
    ageLimit(name, age) {
        let player = this.invitedPlayers.find(e => e.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!"`);
        }
        if (player.age < age) {
            let ageDifference = Math.abs(age - player.age);
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else if (player.age >= age) {
            return `${name} is above age limit!`;
        }
    };
    transferWindowResult() {
        let result = 'Players list:\n';
        let sortedByNamePlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        for (const player of sortedByNamePlayers) {
            result += `Player ${player.name}-${player.playerValue}\n`;
        }
        return result.trim();
    };
};

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());





