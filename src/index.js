class Sorter {
    constructor() {
        this._storage = [];
        this._comparator = (a, b) => {
            return a - b;
        }
    }

    add(element) {
        this._storage.push(element);
    }

    at(index) {
        return this._storage[index];
    }

    get length() {
        return this._storage.length;
    }

    toArray() {
        return this._storage;
    }

    sort(indices) {
        let tempArray = [];
        indices.sort((a, b) => {
            return a - b;
        });
        indices.map(el => {
            tempArray.push(this._storage[el]);
        });
        tempArray.sort(this._comparator);
        for (let i = 0; i < indices.length; i++) {
            let index = indices[i];
            this._storage[index] = tempArray[i];
        }
    }

    setComparator(compareFunction) {
        this._comparator = compareFunction;
    }
}

module.exports = Sorter;