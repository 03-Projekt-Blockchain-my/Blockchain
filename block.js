class Block{

    constructor(timestamp, lasthash, hash, data){
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }

    toSTring(){
        return ` Block  -
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lasthash}
        Hash:       ${this.hash}
        Data:       ${this.data}
        `
    }
}

module.exports = block;