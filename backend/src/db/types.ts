import { AvailableMethods, DBObjectType, SchemaObject } from "./schema";

export type Schema = {
  [key in keyof SchemaObject]: NonNullable<SchemaObject[key]>;
};

export type objectKey = keyof Schema;

export type dbIndex = DBObjectType["id"];

export type Getter<T> = (id: number) => T;
export type Setter<T> = (Object: T, index?: dbIndex) => void;
export type Updater<T> = (id: number, Object: Partial<T>) => T;
export type Deleter<T> = (id: number) => T;

export type Storage = {
  [key in objectKey]: Pick<
    {
      items: { [itemKey: dbIndex]: Schema[key] };
      get: Getter<Schema[key]>;
      set: Setter<Omit<Schema[key], "id">>;
      update: Updater<Omit<Schema[key], "id">>;
      delete: Deleter<Schema[key]>;
      getLastId: () => number;
    },
    "items" | "getLastId" | AvailableMethods
  >;
};
export type StorageBuilder = {
  [key in objectKey]: Pick<{
    items: Storage[objectKey]["items"];
    get: Getter<Schema[objectKey]>;
    set: Setter<Omit<Schema[objectKey], "id">>;
    update: Updater<Omit<Schema[objectKey], "id">>;
    delete: Deleter<Schema[objectKey]>;
    getLastId: () => number;
  },"items" | "getLastId" | AvailableMethods>;
};

export type Database = {
  [key in objectKey]: Pick<Storage[key], AvailableMethods>;
};
export type DatabaseBuilder = {
  [key in objectKey]: Pick<Storage[objectKey], AvailableMethods>;
};
