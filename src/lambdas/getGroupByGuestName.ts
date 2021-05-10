/* tslint:disable:max-line-length */
import { CosmosClient } from '@azure/cosmos';
import { APIGatewayEvent } from 'aws-lambda';
import config from './cosmos/config';
import Reservation from './cosmos/Reservation';
import { Result } from './interfaces/Result';

export async function handler(event: APIGatewayEvent, context: any) {
  try {
    let result: Result;

    if (event.body) {
      const data = JSON.parse(event.body);

      // const connection = await getConnectionAsync();
      // const selectStatement =
      //   'SELECT * FROM Guests WHERE GroupId = (SELECT GroupId FROM Guests WHERE FirstName = ? AND LastName = ?) ORDER BY Id';
      // const values = [data.firstName, data.lastName];
      // const guestGroup = await connection.query(selectStatement, values);
      // console.log(guestGroup);
      // await connection.end();

      const { endpoint, key, databaseId, containerId } = config;
      const client = new CosmosClient({ endpoint, key });
      const database = client.database(databaseId);
      const container = database.container(containerId);
      const { resource: itemsString } = await container.scripts.storedProcedure('GetGroupByGuestName').execute(undefined, [data.firstName, data.lastName]);
      const guestGroup: Reservation[] = JSON.parse(itemsString).sort((a: Reservation, b: Reservation) => {
        return parseInt(a.GroupId) - parseInt(b.GroupId);
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
