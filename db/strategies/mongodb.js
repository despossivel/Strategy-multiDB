const ICrud = require('./interfaces/interfaceCrud');

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log('O Item foi salvo em mongoDB')
    }

}

module.exports = MongoDB;