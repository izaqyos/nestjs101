import { Injectable } from '@nestjs/common';

@Injectable()
export class FooService {

    private foos = [];

    getFoos(): any {
        return this.foos; 
    }
}
