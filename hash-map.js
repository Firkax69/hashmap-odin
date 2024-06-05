class HashMap {
    constructor() {
        this.arr = new Array(50).fill(null); //  property of the instance - create new array and filled with null's
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
        console.log(`Hashcode: ${hashCode}; \n arr[hashcode]: ${this.arr[hashCode]}`);
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

    // length() {

    // }

    // clear() {

    // }

    // keys() {

    // }

    // values() {

    // }

    // entries() {

    // }
}



// *** CHECKS ***


const hashMap = new HashMap();

hashMap.set('name', 'Ihor');
hashMap.set('namei', 'Darran');

console.log(hashMap.get(40));
console.log(hashMap.get(7));
console.log(hashMap.has(22));
console.log(hashMap.has(51));


console.log(hashMap.arr);

hashMap.remove(22); // won't display in console log, but will remove value with key hashCode of 22. if it's exist

console.log(hashMap.arr);
