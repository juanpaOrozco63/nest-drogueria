import { Controller, Post } from '@nestjs/common';
import { SeedService } from '../services/seed.service';

@Controller('seed')
export class SeedController {

    constructor(private readonly seedService: SeedService) {}
  @Post()
  async executeSeed(): Promise<string> {
    return this.seedService.executeSeed();
  }

}
