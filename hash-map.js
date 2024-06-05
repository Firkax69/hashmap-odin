class HashMap {
    constructor() {
        this.arr = new Array(50).fill(null);
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
}

const hashMap = new HashMap();
hashMap.set('name', 'Ihor');
hashMap.set('namei', 'Darran');
console.log(hashMap.arr);
