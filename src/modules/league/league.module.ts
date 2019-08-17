import { Module } from '@nestjs/common';
import { LeagueResolver } from './league.resolver';
import { LeagueService } from './league.service';
import { LeagueEntity } from '../entity/league.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LeagueEntity])],
  providers: [LeagueResolver, LeagueService],
})
export class LeagueModule {
}
