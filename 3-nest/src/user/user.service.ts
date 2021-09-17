import { Injectable } from '@nestjs/common';
import { captureRejections } from 'events';
import { urlencoded } from 'express';
import { emitWarning } from 'process';
import { identity } from 'rxjs';
import { User } from './user.module';

@Injectable()
export class UserService {

    private users: Map<number, User> = new Map<number, User>();

    constructor() {
        this.populate();
    }

    getAll() {
        var populateData = [];
        for (const user of this.users.values()) {
            populateData.push(user.toJson());
        }
        return populateData;
    }

    populate() {

        this.users.set(1, new User(1, "Barto", 21, "barto@gmail.com", "123456"));
        this.users.set(2, new User(2, "Khiara", 20, "khiara@gmail.com", "3462268"));
        this.users.set(3, new User(3, "Rey Mark", 30, "reymark@gmail.com", "3462260"));
        this.users.set(4, new User(4, "Gems", 60, "gems@gmail.com", "654321"));
    }

    logAllUsers() {
        for (const [key, user] of this.users.entries()) {
            console.log(key);
            user.log();
        }
    }

    addUser(user: any) {
        var newUser: User;
        newUser = new User(user.id, user.name, user.age, user.email, user.password);
        if (this.users.set(user.id, newUser)) {
            this.logAllUsers();
            console.log("Added a new user!");
        }
        else console.log("Error");

    }

    replaceUser(id: number, user: any) {
        var newUser: User;
        if (newUser = new User(user.id, user.name, user.age, user.email, user.password)) {
            this.users.set(id, newUser);
            this.logAllUsers();
            console.log("changed successfull!");
        } else console.log("changned denied");

    }
    deleteUser(id: number) {
        if (this.users.has(id))
            this.users.delete(id);
        else console.log(id + " does not exist in database!");
    }

    Userid(id: number, user: any) {
        if (this.users.has(id)) {
            this.users.get(id).toJson()
            return console.log(id);
        }
    }

    UserSearch(newuser: any) {
        for (const [num, user] of this.users.entries()) {
        }
    }

    patchUser(id: number, newuser: any) {
        for (const [num, user] of this.users.entries()) {
            if (this.users['id'] === id) {
                user["username"] = newuser.username;
                console.log("changed username");
            }
        }
        this.logAllUsers();
        this.users.get(id).toJson
        return console.log(id + " Change Successful");
    }
    login(newuser: any) {
        for (const [number, user] of this.users.entries()) {
        }
    }
}