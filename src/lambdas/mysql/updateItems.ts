
import * as _ from 'lodash';
import { getConnectionAsync } from './GetConnectionAsync';

export const updateItems = async (tableName: string, dataArray: any[]): Promise<string> => {
  let rowsUpdated = 0;
  const connection = await getConnectionAsync();
  console.log('connected to mysql');

  try {
    await connection.beginTransaction();
    const updatePromises: Array<Promise<any>> = [];

    // iterate over every item to update sql row
    _.forEach(dataArray, async (dataObject) => {

      // generate a sql UPDATE statement
      const sqlProperties: string[] = [];
      const sqlValues: string[] = [];
      _.forEach(dataObject, (dataValue, dataKey) => {
        // ignore the Id property because we add that in last
        if (dataKey !== 'Id') {
          sqlProperties.push(`${dataKey} = ?`);
          sqlValues.push(dataValue);
        }
      });
      const updateStatement = `UPDATE ${tableName} SET ${_.join(sqlProperties, ', ')} WHERE Id = ?`;
      sqlValues.push(dataObject.Id);

      // console.log(updateStatement);
      // console.log(sqlValues);

      const updatePromise = connection.query(updateStatement, sqlValues);
      updatePromises.push(updatePromise);

      rowsUpdated++;
    });

    await Promise.all(updatePromises);
    await connection.commit();
  } catch (transactionError) {
    console.log('error occurred updating rows. rolling back.');
    await connection.rollback();
    throw transactionError;
  } finally {
    await connection.end();
  }

  return `updated ${rowsUpdated} rows`;
};
