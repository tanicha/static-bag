class Bag {
    static maxWeight = 23; 
    constructor(weight) {
        if(!weight){
            throw new Error('bag needs weight')
        } else if (weight > Bag.maxWeight){
            throw new Error ('bag is over the limit of 23kg')
        } else {
            this.weight = weight
        }
    }
}

// console.log(Bag.weight);

module.exports = Bag