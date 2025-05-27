class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async registerUser(userData) {
        const user = new this.userModel(userData);
        return await user.save();
    }

    async findUserById(userId) {
        return await this.userModel.findById(userId);
    }

    async removeUser(userId) {
        return await this.userModel.findByIdAndDelete(userId);
    }
}

export default UserService;