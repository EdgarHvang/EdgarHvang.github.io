class ArraySorter {
    constructor(inputArr = []) {
        this.inputArr = inputArr;
        console.log(this.inputArr);
    }
    even() {
        return this.inputArr.filter((n) => 
            n % 2 === 0
        
        )
    }

    odd() {
        return this.inputArr.filter((n) =>
            n % 2 === 1
        )
    }

}

module.exports = ArraySorter;