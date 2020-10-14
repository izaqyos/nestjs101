import { Controller, Get } from '@nestjs/common';
import { FooService } from './foo.service';

@Controller('foo')
export class FooController {
    constructor(private fooService: FooService) {

    }

    @Get()
    getFoos() {
        return this.fooService.getFoos();
    }
}
