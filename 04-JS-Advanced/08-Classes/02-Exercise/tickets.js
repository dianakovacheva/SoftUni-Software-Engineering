function sortTickets(ticketsArr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let resultArr = [];
    ticketsArr.map((info) => {
        let [destination, price, status] = info.split('|');
        price = Number(price);
        resultArr.push(new Ticket(destination, price, status));
    });
    return resultArr.sort((a, b) => {
        if (typeof a[sortingCriteria] === 'number') {
            return a[sortingCriteria] - b[sortingCriteria];
        } else {
            return a[sortingCriteria].localeCompare(b[sortingCriteria]);
        }
    });
}




sortTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')

// sortTickets(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'status');

// sortTickets(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'price');