/**
 * @summary
 * Database connection instance
 * Manages SQL Server connection pool and query execution
 *
 * @module instances/database
 * @type instance
 */

import sql from 'mssql';
import { config } from '@/config';

let pool: sql.ConnectionPool | null = null;

export const getPool = async (): Promise<sql.ConnectionPool> => {
  if (!pool) {
    pool = await sql.connect({
      server: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.database,
      options: config.database.options,
    });
  }
  return pool;
};

export const closePool = async (): Promise<void> => {
  if (pool) {
    await pool.close();
    pool = null;
  }
};
