import { APIGatewayEvent } from 'aws-lambda';
import { Result } from './interfaces/Result';
import Constants from './mysql/Constants';
import { updateItems } from './mysql/updateItems';

export async function handler(event: APIGatewayEvent, context: any) {
  try {
    let result: Result;
    if (event.body) {
      const data = JSON.parse(event.body);
      const updateResult = await updateItems(Constants.TableName, data);
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
