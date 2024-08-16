import type {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from '@apollo/server';
import { Plugin } from '@nestjs/apollo';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async requestDidStart({
    request,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  }): Promise<GraphQLRequestListener<any>> {
    if (request.operationName !== 'IntrospectionQuery') {
      console.log(`Request :: [${request.operationName ?? ''}]`);
      console.log(request.query);
    }
    return {
      async willSendResponse({ response }) {
        if (request.operationName !== 'IntrospectionQuery') {
          console.log('Response :: ', response.body);
        }
      },
    };
  }
}
