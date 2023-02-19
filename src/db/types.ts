import { AvailableMethods, DBObjectType, SchemaObject } from "./schema";

export type Schema = {
  [key in keyof SchemaObject]: Required<SchemaObject[key]>;
};

export type objectKey = keyof Schema;

export type dbIndex = DBObjectType["id"];

export type Getter<T> = (id: number) => T;
export type Setter<T> = (id: number, Object: T) => void;
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
    },
    "items" | AvailableMethods
  >;
};
export type StorageBuilder = {
  [key in objectKey]: Pick<{
    items: Storage[objectKey]["items"];
    get: Getter<Schema[objectKey]>;
    set: Setter<Omit<Schema[objectKey], "id">>;
    update: Updater<Omit<Schema[objectKey], "id">>;
    delete: Deleter<Schema[objectKey]>;
  },"items" | AvailableMethods>;
};

export type Database = {
  [key in objectKey]: Pick<Storage[key], AvailableMethods>;
};
export type DatabaseBuilder = {
  [key in objectKey]: Pick<Storage[objectKey], AvailableMethods>;
};
