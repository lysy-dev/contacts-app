import { SchemaObject } from "./schema.js";
import { Schema, objectKey, dbIndex, Storage, StorageBuilder, Database, DatabaseBuilder } from "./types";

const databeseBuilder = (storage:Storage):Database => {
  const storageArray = Object.entries(storage) as [objectKey,Storage[objectKey]][];
  const database = storageArray.reduce((acc: DatabaseBuilder, [key,val]): DatabaseBuilder => {
    acc[key] = {
      get: val.get,
      set: val.set,
    };
    return acc as DatabaseBuilder;
  }, {} as DatabaseBuilder);
  return database as Database;
}



export class DB {
  private static db: DB;
  protected schema: SchemaObject;
  private storage: Storage;
  private database: Database;
  private constructor() {
    this.schema = new SchemaObject();

    const keys = Object.keys(this.schema) as objectKey[];
    const builtStorage = keys.reduce((acc: StorageBuilder, key): StorageBuilder => {
      acc[key] = {
        items:{},
        get: (id:dbIndex)=> this.storage[key].items[id] ,
        set: (id:dbIndex,val:Omit<Schema[objectKey],"id">) => this.storage[key].items[id] = {id, ...val} as Schema[objectKey],
      };
      return acc;
    }, {} as StorageBuilder);
    this.storage = builtStorage as Storage;
    
    const db = databeseBuilder(this.storage)
    this.database = db;
  }
  public static getInstance(): Database {
    if(!DB.db) DB.db = new DB();
    return DB.db.database;
  }
}
