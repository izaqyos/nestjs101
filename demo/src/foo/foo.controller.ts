import { Body, Controller, Get, Post } from '@nestjs/common';
import { Foo } from './foo.model';
import { FooService } from './foo.service';

@Controller('foo')
export class FooController {
    constructor(private fooService: FooService) {

    }

    @Get()
    getFoos(): Foo[] {
        return this.fooService.getFoos();
    }

    @Post()
    createFoo(@Body('title') title) {
        return this.fooService.createFoo(title);
    }
}
