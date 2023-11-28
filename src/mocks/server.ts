import { createServer } from "@mswjs/http-middleware";
import { handlers } from "./handlers";
import { HttpHandler } from "msw";

const httpServer = createServer(...(handlers as HttpHandler[]));

httpServer.listen(9090);
