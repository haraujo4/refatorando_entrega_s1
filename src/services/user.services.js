import user from '../models/user.models';

class userServices{
    constructor(){
        this.user = user;
    }

    static async getAll(){
        return await this.user;
    }

    static async getById(id){
        return await this.user.find((user) => user.id === id);
    }

    static async create(user){
        return await this.user.push(user);
    }

    static async update(id, user){
        const userIndex = this.user.findIndex((user) => user.id === id);
        if(user !== -1){
            this.user = [...this.user.slice(0, userIndex), user, ...this.user.slice(userIndex + 1)];
            return user;
        }
        return "Usuario Não Encontrado!";
    }

    static async delete(id){
        const user = this.user.find((user) => user.id === id);
        if(!user)
            return "Usuario Não Encontrado!";
        return this.splice(user, 1);

    }
}

export default new userServices();