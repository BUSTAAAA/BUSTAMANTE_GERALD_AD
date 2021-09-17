import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],  
  providers: [UserService]
})
export class UserModule {}

export class User{
  private id: number;
  private name: string;
  private age: number;
  private email: string;
  private password: string;

  constructor(id:number, name:string,age:number,email:string,password:string){
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  log()
  {
    console.log(`${this.id}:${this.name}:${this.age}:${this.email}`)
  }
  
  toJson(){
    return{
      id: this.id,
      name:this.name,
      age:this.age,
      email:this.email
    }
  }
}