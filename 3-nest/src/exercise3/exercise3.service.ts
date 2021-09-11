import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {
    helloWorld(name:string){   
        return "Hello there " + name;
    }
    loopsTriangle(height:number, string:""){
        for (var i = 0; i < height; i++) {
            for (var a = 0; a < i; a++) {
                string += "* ";
            }
            string += "\n";
        }
        console.log(string);
    }
    return ;
}
