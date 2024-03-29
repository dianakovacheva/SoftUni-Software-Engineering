class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }
    reserveABottle(wineName, wineType, price) {
        if (this.space === 0) {
            throw new Error('Not enough space in the cellar.');
        } else {
            this.wines.push({ wineName, wineType, price, paid: false });
            this.space--;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`;
        }
    }
    payWineBottle(wineName, price) {
        let foundWine = this.wines.find(e => e.wineName === wineName);
        if (!foundWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        };
        if (foundWine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            foundWine.paid = true;
            this.bill += price;
            return `You bought a ${wineName} for a ${price}$.`;
        }
    }
    openBottle(wineName) {
        let foundWine = this.wines.find(e => e.wineName === wineName);
        if (!foundWine) {
            throw new Error('The wine, you\'re looking for, is not found.');
        };
        if (!foundWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        };
        let index = this.wines.indexOf(foundWine);
        this.wines.splice(index, 1);
        this.space++;
        return `You drank a bottle of ${wineName}.`;
    }
    cellarRevision(wineType) {
        if (!wineType) {
            let result = `You have space for ${this.space} bottles more.\n`;
            result += `You paid ${this.bill}$ for the wine.\n`;
            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            sortedWines.forEach(wine => {
                result += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.\n`;
            });
            return result.trim();
        } else {
            let foundWine = this.wines.find(e => e.wineType === wineType);
            if (!foundWine) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            };
            return `${foundWine.wineName} > ${foundWine.wineType} - ${foundWine.paid ? "Has Paid" : "Not Paid"}.`;
        }
    }
}


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
