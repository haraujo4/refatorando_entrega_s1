import {v4 as uuidv4} from 'uuid';

class user {
    constructor(id = uuidv4, name, email, password, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
export default new user();