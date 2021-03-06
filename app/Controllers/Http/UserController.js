'use strict'

const User = use('App/Models/User');

class UserController {

    async login({ request, auth }){
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }


    async store({ request }){
        const { username, email, password } = request.all();
            const user = await User.create({
            username,
            email,
            password
        });
        return user;    
    };
}

module.exports = UserController
