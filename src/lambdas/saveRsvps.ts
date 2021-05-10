import { CosmosClient } from '@azure/cosmos';
import { APIGatewayEvent } from 'aws-lambda';
import config from './cosmos/config';
import Reservation from './cosmos/Reservation';
import { Result } from './interfaces/Result';

export async function handler(event: APIGatewayEvent, context: any) {
  try {
    let result: Result;
    if (event.body) {
      const reservations: Reservation[] = JSON.parse(event.body);

      // const updateResult = await updateItems(Constants.TableName, data);

      const { endpoint, key, databaseId, containerId } = config;
      const client = new CosmosClient({ endpoint, key });
      const database = client.database(databaseId);
      const container = database.container(containerId);
      const { resource: updateResult } = await container.scripts.storedProcedure('SaveReservations').execute('Reservation', [JSON.stringify(reservations)]);

      console.log(updateResult);
      result = {
        statusCode: 200,
        body: JSON.stringify(updateResult),
      };
    } else {
      result = {
        statusCode: 200,
        body: '',
      };
    }
    return result;
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
}
