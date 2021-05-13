import { CosmosClient } from '@azure/cosmos';
import { APIGatewayEvent } from 'aws-lambda';
import config from './cosmos/config';
import { Group } from './cosmos/Group';
import { Result } from './interfaces/Result';

export async function handler(event: APIGatewayEvent, context: any) {
  try {
    let result: Result;
    if (event.body) {
      const group: Group = JSON.parse(event.body);

      console.log(group);

      const { endpoint, key, databaseId, containerId } = config;
      const client = new CosmosClient({ endpoint, key });
      const database = client.database(databaseId);
      const container = database.container(containerId);
      const { resource: rawResult } =
        await container.scripts.storedProcedure('SaveGroup').execute('Group', [JSON.stringify(group)]);
      const updateResult = JSON.parse(rawResult);

      console.log(updateResult);

      if (updateResult.Status === 'success') {
        result = {
          statusCode: 200,
          body: JSON.stringify(updateResult),
        };
      } else {
        result = {
          statusCode: 400,
          body: JSON.stringify(updateResult.Status),
        };
      }
    } else {
      result = {
        statusCode: 200,
        body: '',
      };
    }
    // result = {
    //   statusCode: 400,
    //   body: 'Not found',
    // };
    return result;
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
}
