import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFooDTO } from './dto/create-foo.dto';
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
    createFoo(@Body() createFooDto: CreateFooDTO) {
        return this.fooService.createFoo(createFooDto);
    }
}
