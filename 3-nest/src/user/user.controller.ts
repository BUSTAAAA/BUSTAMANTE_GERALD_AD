import { Controller, Get, Put, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { get } from 'http';
import { User } from './user.module';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/all')
    getAll() {
        return this.userService.getAll();
    }

    @Post('/register')
    addUser(@Body() body: any) {
        return this.userService.addUser(body);
    }

    @Put('/:id')
    replaceUser(@Param("id") id: number, @Body() body: any) {
        return this.userService.replaceUser(id, body);
    }


    @Delete('/:id')
    deleteUser(@Param("id") id: number) {
        return this.userService.deleteUser(id);
    }

    @Get(`/getUser/:id`)
    Userid(@Param("id") id: number, @Body() body: any)
    {
        return this.userService.Userid(id, body);
    }

    @Get("search/:term")
    UserSearch(@Body() body:any){
       return this.userService.UserSearch(body);
   }

   @Patch(`patchUser/:id`)
   patchUser(@Param("id") id:number, @Body() body:any){
       return this.userService.patchUser(id,body);
   }
   
   @Post("/login")
   login(@Body() body:any){
       return this.userService.login(body);
   }
}
