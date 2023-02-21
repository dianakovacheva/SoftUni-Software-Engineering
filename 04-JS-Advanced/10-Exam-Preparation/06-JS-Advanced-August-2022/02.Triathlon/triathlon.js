class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant(participantName, participantGender) {
        if (!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
        return `${participantName} has already been added to the list`;
    };
    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }
        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        let completedCount = Math.floor(condition / 30);
        if (completedCount === 1 || completedCount === 2) {
            return `${participantName} could only complete ${completedCount} of the disciplines`
        } else {
            const gender = this.participants[participantName];
            this.listOfFinalists.push({ participantName, gender });
            return `Congratulations, ${participantName} finished the whole competition`
        }
    };
    rewarding(participantName) {
        const finalis = this.listOfFinalists.find(e => e.participantName === participantName);
        if (finalis) {
            return `${participantName} was rewarded with a trophy for his performance`;
        }
        return `${participantName} is not in the current finalists list`;
    };
    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        };
        let result;
        switch (criteria) {
            case 'male':
                result = this.listOfFinalists.find(e => e.gender === 'male');
                if (!result) {
                    return `There are no ${criteria}'s that finished the competition`;
                };
                return `${result.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            case 'female':
                result = this.listOfFinalists.find(e => e.gender === 'female');
                if (!result) {
                    return `There are no ${criteria}'s that finished the competition`;
                };
                return `${result.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            default:
                result = `List of all ${this.competitionName} finalists:\n`;
                let sortedFinalists = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName));
                sortedFinalists.forEach(finalistInfo => {
                    result += `${finalistInfo.participantName}\n`;
                });
                break;
        }
        return result.trim();
    };
};

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));












