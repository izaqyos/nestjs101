import { Injectable } from '@nestjs/common';
import { Foo, FooState } from './foo.model';
import {v1 as uuidv1} from 'uuid';
@Injectable()
export class FooService {

    private foos: Foo[] = [];

    getFoos(): Foo[] {
        return this.foos; 
    }

    createFoo(title: string): Foo {
        const aFoo: Foo = {
            id: uuidv1(),
            title,
            state: FooState.Init,
        };
        
        this.foos.push(aFoo);
        return aFoo;
    }
}
