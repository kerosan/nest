import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { upperDirectiveTransformer } from './common/directives/upperDirectiveTransformer';
import { AddressModule } from './model/address/address.module';
import { UserModule } from './model/user/user.module';
import { DateScalar } from './common/scalars/date.scalar';

@Module({
  imports: [
    DateScalar,
    UserModule,
    AddressModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
