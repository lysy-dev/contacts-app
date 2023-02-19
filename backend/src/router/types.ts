export type RouteProp = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  handler: (ctx: any, next: any) => any;
};
