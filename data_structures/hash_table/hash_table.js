class HashTable {
  constructor(size = 100) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let idx = 0;
    let PRIME_SEED = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      idx = (idx * PRIME_SEED + key.charCodeAt(i)) % this.keyMap.length;
    }

    return idx;
  }

  get(key) {
    const idx = this._hash(key);

    if (!this.keyMap[idx]) return undefined;

    for (const item of this.keyMap[idx]) {
      if (item[0] === key) return item[1];
    }

    return undefined;
  }

  set(key, value) {
    const idx = this._hash(key);

    if (!this.keyMap[idx]) this.keyMap[idx] = [];

    let updated = false;
    for (const item of this.keyMap[idx]) {
      if (item[0] === key) {
        updated = true;
        item[1] = value;
        break;
      }
    }

    if (!updated) this.keyMap[idx].push([key, value]);

    return true;
  }

  values() {
    let valuesArr = [];

    for (const element of this.keyMap) {
      if (element) {
        for (const item of element) {
          valuesArr.push(item[1]);
        }
      }
    }

    return valuesArr;
  }

  keys() {
    let keysArr = [];

    for (const element of this.keyMap) {
      if (element) {
        for (const item of element) {
          keysArr.push(item[0]);
        }
      }
    }

    return keysArr;
  }
}

const ht = new HashTable(200);

// Insert value
ht.set("salmon", 155);
ht.set("aligator", 230);
ht.set("aligator", 245); // update the value at 'alligator' key
ht.set("tuna", 166);
ht.set("shark", 738);
ht.set("dolphin", 910);

// Get by key
console.log(ht.get("fish")); // undefined
console.log(ht.get("salmon")); // 155
console.log(ht.get("aligator")); // 245

// Get all vals in flatten format
console.log(ht.values());

// Get all keys in flatten format
console.log(ht.keys());

// console.log(JSON.stringify(ht, "    ", 2));
