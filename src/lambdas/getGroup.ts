import { APIGatewayEvent } from 'aws-lambda';
import { Result } from './interfaces/Result';
import { getConnectionAsync } from './mysql/GetConnectionAsync';

export async function handler(event: APIGatewayEvent, context: any) {
  try {
    let result: Result;

    if (event.body) {
      const data = JSON.parse(event.body);

      const connection = await getConnectionAsync();
      const selectStatement = 'SELECT * FROM Guests WHERE GroupId = (SELECT GroupId FROM Guests WHERE FirstName = ? AND LastName = ?)';
      const values = [data.firstName, data.lastName];
      const guestGroup = await connection.query(selectStatement, values);
      console.log(guestGroup);
      await connection.end();

      result = {
        statusCode: 200,
        body: JSON.stringify(guestGroup)
      }
    } else {
      result = {
        statusCode: 400,
        body: 'No data submitted'
      };
    }

    return result;
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }
}
