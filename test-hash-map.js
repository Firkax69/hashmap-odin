class HashMap {
    constructor() {
        let arrayLength = 50;
        this.arr = new Array(arrayLength).fill(null);
        const loadFactor = 0.75;
    }

    check(value) {
        if (value < 0 || value >= this.arr.length) {
            throw new Error('Trying to access index out of bound');
        }
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }

        return hashCode = hashCode % this.arr.length;
    }

    set(key, value) {
        let hashCode = this.hash(key);
        this.arr[hashCode] = value;

        console.log(`Hashcode: ${hashCode} \n [hashCode] = ${this.arr[hashCode]}`)
    }

    get(key) {
        this.check(key);
        if (!this.arr[key]) return null;
        return this.arr[key];
    }

    has(key) {
        if (!this.arr[key]) return false;
        else {
            return true
        }
    }

    remove(key) {
        if (!this.arr[key]) return false;
        this.arr.splice(key,1)
        return true;

    }

    length() {
        let counter = 0;

        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] !== null) {
                counter++;
            }
        }

        return counter;
    }

    clear() {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] = null;
        }
    }

    keys() {

    }

    values() {

    }

    entries() {

    }
}

const hashTest = new HashMap;

hashTest.set('name', 'Ihor');
hashTest.set('namei', 'DW');
hashTest.set('nameiii', 'GW');
console.log(hashTest.get(7));

console.log(hashTest.length())