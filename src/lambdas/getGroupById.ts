import config from './cosmos/config';
import { CosmosClient } from '@azure/cosmos';
import { APIGatewayEvent } from 'aws-lambda';
import { Result } from './interfaces/Result';

export async function handler(event: APIGatewayEvent, context: any) {
  try {
    let result: Result;

    if (event.body) {
      const data = JSON.parse(event.body);

      // const connection = await getConnectionAsync();
      // const selectStatement =
      //   'SELECT * FROM Guests WHERE GroupId = ? ORDER BY Id';
      // const guestGroup = await connection.query(selectStatement, data.groupid);
      // console.log(guestGroup);
      // await connection.end();

      const { endpoint, key, databaseId, containerId } = config;
      const client = new CosmosClient({ endpoint, key });
      const database = client.database(databaseId);
      const container = database.container(containerId);
      const querySpec = {
        query: 'SELECT * FROM c WHERE c.GroupId = @groupId',
        parameters: [{name: '@groupId', value: '2'}]
      };
      let { resources: guestGroup } = await container.items.query(querySpec).fetchAll();
      // remove Azure metadata so we're not sending more junk over the wire than is necessary
      guestGroup = guestGroup.map((guest) => {
        return {
          Id: guest.Id,
          DocumentId: guest.id,
          FirstName: guest.FirstName,
          LastName: guest.LastName,
          GroupId: guest.GroupId,
          GuestType: guest.GuestType,
          Attending: guest.Attending,
          Brunch: guest.Brunch,
          MenuChoice: guest.MenuChoice,
          DietaryNeeds: guest.DietaryNeeds
        };
      });
      console.log(guestGroup);

      result = {
        statusCode: 200,
        body: JSON.stringify(guestGroup),
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
