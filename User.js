class User {

    id = 0;

    constructor(id) {
        this.id = id;
    }

    async getContacts() {
        console.log('Fired: getContacts()');
        return {
            name: "phil",
            age: 9
        };
    }

    static async findOrCreate(obj) {
        console.log('FIRED: findOrCreate()');
        return new User(1);
    }

}

module.exports = User;
