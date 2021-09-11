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

    primenumber(num:number){
        num = 13;
        let isPrime = true;

    if (num === 1) {
        console.log("1 is neither prime nor composite number.");
         } else if (num > 1) {

     for (let i = 2; i < num; i++) {
         if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} is a prime number`);
        return num + " is a prime number";
    } else {
        console.log(`${num} is not prime number`);
        return num + " is not prime number";
    }
}
    }
}
