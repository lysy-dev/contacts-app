export interface DBObjectType {
  id: number;
}

export interface Contact extends DBObjectType {
  first_name: string;
  last_name: string;
  email: string;
  gender?: string;
  avatar?: string;
}

export interface Product extends DBObjectType {
  name: string;
  price: string;
}


export type AvailableMethods = "get" | "set";

export class SchemaObject {
  Contact: Contact | null  = null;
  Product: Product | null = null;
}

