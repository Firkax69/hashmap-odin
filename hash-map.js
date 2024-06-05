class HashMap {
    constructor() {
        this.arrSize = 50;
        this.arr = new Array(this.arrSize).fill(null); //  property of the instance - create new array and filled with null's
        this.loadFactor = 0.75;
    }

    check(value) {
        if (value < 0 || value >= this.arr.length) {
            throw new Error("Trying to access index out of bound");
        }
    }

    hash(string) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < string.length; i++) {
            hashCode = primeNumber * hashCode + string.charCodeAt(i);
        }

        hashCode = hashCode % this.arr.length;
        return hashCode;
    }

    set(key, value) {
        const hashCode = this.hash(key);
        this.arr[hashCode] = value;
        console.log(`Hashcode: ${hashCode}; \n arr[hashCode]: ${this.arr[hashCode]}`);
    }

    get(key) {
        this.check(key);

        if (!this.arr[key]) return null;

        return this.arr[key];
    }
    
    has(key) {
        if (!this.arr[key]) return false;

        return true;
    }
        
    remove(key) {
        if (!this.arr[key]) return false;

        this.arr.splice(key, 1);
        return true;
    }

    length() {
        let counter = 0;
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] !== null) counter = counter + 1;
        }

        return counter;
    }

    clear() {
        this.arr.fill(null);
    }

    keys() { // will return only digits not the original key itself, need to implement correct module
        let array = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] !== null) array.push(i);
        }

        return array;
    }

    values() {
        let array = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] !== null) array.push(this.arr[i]);
        }

        return array;
    }

    entries() {
        let array = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] !== null) array.push([i, this.arr[i]]);
        }

        return array;
    }
}



// *** CHECKS ***


const hashMap = new HashMap();

hashMap.set('name', 'Ihor');
hashMap.set('namei', 'Darran');
hashMap.set('name1', 'Gary Wright');
hashMap.set('name223', 'Gilbey');

console.log(hashMap.arr); // should return current hashMap array

console.log(hashMap.get(40)); // should return null
console.log(hashMap.get(7)); // should return 'Ihor'
console.log(hashMap.has(22)); // should return true
console.log(hashMap.has(51)); // should return false

hashMap.remove(22); // won't display in console log, but will remove value with key hashCode of 22. if it's exist

console.log(hashMap.length()); // Should return 2 

console.log(hashMap.arr);

// hashMap.clear(); //should clear entire array

console.log(hashMap.values());

console.log(hashMap.entries());




