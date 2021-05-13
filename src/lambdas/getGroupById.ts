import { CosmosClient } from '@azure/cosmos';
import { APIGatewayEvent } from 'aws-lambda';
import config from './cosmos/config';
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
      const querySpec = {
        query: 'SELECT * FROM c WHERE c.Id = @groupId',
        parameters: [{name: '@groupId', value: data.groupId}]
      };
      let { resources: guestGroup } = await container.items.query(querySpec).fetchAll();
      // remove Azure metadata so we're not sending more junk over the wire than is necessary
      guestGroup = guestGroup.map((group) => {
        return {
          Id: group.Id,
          GuestType: group.GuestType,
          Addressees: group.Addressees,
          Attendees: group.Attendees
        };
      });
      console.log(guestGroup);

      result = {
        statusCode: 200,
        body: JSON.stringify(guestGroup[0]),
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
