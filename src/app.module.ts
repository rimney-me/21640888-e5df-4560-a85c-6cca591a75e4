import { KeycloakConnectModule, ResourceGuard, RoleGuard, AuthGuard } from 'nest-keycloak-connect';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
