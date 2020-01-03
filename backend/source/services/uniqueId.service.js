class uniqueIdService {

    constructor() {
        this.result = '';
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }

    make(length) {   
        const charactersLength = this.characters.length;
        for (let i = 0; i < length; i++) {
            this.result += this.characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return this.result;
    }
}

module.exports = uniqueIdService;