class Logger {
    constructor(id) {
        this.id = id;
    }

    log(message) {
        console.log(`[Logger ID:${this.id}] ${message}`);
    }
}

module.exports = Logger;
