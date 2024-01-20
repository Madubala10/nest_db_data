import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
// async pythonScript():Promise<any[]>{
    //   // const pythonShell= new PythonShell("./python/python-script.py")
    //   const result= await PythonShell.run('D:\nest js\first-project\python\python-script.py');
    //   return result;
    // }
   
    
    // PythonShell.run('my_script.py', options).then(messages=>{
    //   // results is an array consisting of messages collected during execution
    //   console.log('results: %j', results);
    // });
    @Get()
    getHello():string{
      return 'https://app.mabl.com/login'    }
   
    }
  

