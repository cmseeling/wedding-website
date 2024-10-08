/* tslint:disable:max-line-length */
import { CosmosClient } from '@azure/cosmos';
import { APIGatewayEvent } from 'aws-lambda';
import config from './cosmos/config';
import { Group } from './cosmos/Group';
import { Result } from './interfaces/Result';

export async function handler(event: APIGatewayEvent, context: any) {
  try {
    let result: Result;

    if (event.body) {
      const data = JSON.parse(event.body);

      const { endpoint, key, databaseId, containerId } = config;
      const client = new CosmosClient({ endpoint, key });
      const database = client.database(databaseId);
      const container = database.container(containerId);
      // const { resource: itemsString } = await container.scripts.storedProcedure('GetGroupByGuestName').execute(undefined, [data.guestName]);
      // const group: Group = JSON.parse(itemsString);
      const querySpec = {
        query: 'SELECT c.Id, c.GuestType, c.Addressees, c.Attendees, c.Declined FROM c join addressees in c.Addressees WHERE lower(addressees) = lower(@guestName)',
        parameters: [{name: '@guestName', value: data.guestName}]
      };
      const { resources: groups } = await container.items.query(querySpec).fetchAll();
      const group = groups[0];
      console.log(group);

      result = {
        statusCode: 200,
        body: JSON.stringify(group),
      };
    } else {
      result = {
        statusCode: 400,
        body: 'No data submitted',
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
