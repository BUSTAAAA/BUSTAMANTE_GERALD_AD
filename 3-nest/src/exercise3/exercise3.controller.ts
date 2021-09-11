import { Controller, Get, Param } from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
    constructor(private readonly e3: Exercise3Service){

    }

    @Get('/Helloworld/:name')
    getHello(@Param('name')name:string): string {
      return this.e3.helloWorld(name);
    }

    @Get('/LoopsTriangle/:height')
    loopsTriangle(@Param('id') height:string ){
        var parsedheight = parseInt(height);
      return this.e3.loopsTriangle(parsedheight , "");
    }   

    @Get('/PrimeNumber/:num')
    primeNumber(@Param('num') num:number){
        return this.e3.primenumber(num);
    }

}

