import userServices from "../services/user.services";


class userController{
    constructor(){
        this.userServices = userServices;
    }

    static async getAll(req, res){
        const users = await this.userServices.getAll();
        return res.json(users);
    }

    static async getById(req, res){
        const id = req.params.id;
        const user = await this.userServices.getById(id);
        return res.json(user);
    }

    static async create(req, res){
        const user = req.body;
        const newUser = await this.userServices.create(user);
        return res.json(newUser);
    }

    static async update(req, res){
        const id = req.params.id;
        const user = req.body;
        const updatedUser = await this.userServices.update(id, user);
        return res.json(updatedUser);
    }

    static async delete(req, res){
        const id = req.params.id;
        const deletedUser = await this.userServices.delete(id);
        return res.json(deletedUser);
    }
}

export default new userController();