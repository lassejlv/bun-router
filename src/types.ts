type Handler = (
  c: {
    json: (json: object, status?: number) => Promise<Response>;
    pretty: (json: object, status?: number) => Promise<Response>;
    text: (text: string, status?: number) => Promise<Response>;
    html: (html: string, status?: number) => Promise<Response>;
    error: (message: string, status?: number) => Promise<Response>;
    success: (message: string, status?: number) => Promise<Response>;
    redirect: (url: string, status?: number) => Promise<Response>;
    sendFile: (filePath: string, status?: number) => Promise<Response>;
    readHtml: (filePath: string) => Promise<string>;
    params: Record<string, string>;
    query: {
      get: (key: string) => string | null;
    };
    req: Request;
  },
  params: Record<string, string>
) => Promise<Response>;
type NotFound = () => Response;
type Methods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
type Routes = { method: Methods; path: string; handler: Handler };
type Route = {
  method: Methods;
  path: string;
  handler: Handler;
};
type Plugins = {
  logger?: boolean;
  cors?: CorsOptions;
  notFound?: NotFound;
  pretterJson?: boolean;
  removeSystemLogs?: boolean;
};
type CorsOptions = { origin: string; methods: Methods[] };

export type { Handler, NotFound, Methods, Routes, Route, Plugins, CorsOptions };
