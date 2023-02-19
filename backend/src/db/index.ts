import { SchemaObject } from "./schema.js";
import {
  Schema,
  objectKey,
  dbIndex,
  Storage,
  StorageBuilder,
  Database,
  DatabaseBuilder,
} from "./types";

const databeseBuilder = (storage: Storage): Database => {
  const storageArray = Object.entries(storage) as [
    objectKey,
    Storage[objectKey]
  ][];
  const database = storageArray.reduce(
    (acc: DatabaseBuilder, [key, val]): DatabaseBuilder => {
      acc[key] = {
        get: val.get,
        set: val.set,
        getMany: val.getMany,
      };
      return acc as DatabaseBuilder;
    },
    {} as DatabaseBuilder
  );
  return database as Database;
};

export class DB {
  private static db: DB;
  protected schema: SchemaObject;
  private storage: Storage;
  private database: Database;
  private constructor() {
    this.schema = new SchemaObject();

    const keys = Object.keys(this.schema) as objectKey[];
    const builtStorage = keys.reduce(
      (acc: StorageBuilder, key): StorageBuilder => {
        acc[key] = {
          items: {},
          get: (id: dbIndex) => this.storage[key].items[id],
          getMany: (length: number, id?: number) =>
            Object.values(this.storage[key].items).slice(
              id || 0,
              length
            ) as Schema[objectKey][],
          set: (val: Omit<Schema[objectKey], "id">) => {
            const id = this.storage[key].getLastId();
            this.storage[key].items[id] = { ...val, id } as Schema[objectKey];
          },
          getLastId: () => Object.keys(this.storage[key].items).length,
        };
        return acc;
      },
      {} as StorageBuilder
    );
    this.storage = builtStorage as Storage;

    const db = databeseBuilder(this.storage);
    this.database = db;
  }
  public static getInstance(): Database {
    if (!DB.db) DB.db = new DB();
    return DB.db.database;
  }
}
