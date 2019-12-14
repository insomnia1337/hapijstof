import Hapi from "hapi";
import { ContactRoutesPlugin } from "./modules/contact/ContactRoutesPlugin";
import { ItemsRoutesPlugin } from "./modules/items/ItemsRoutesPlugin";

const server = new Hapi.Server({
  port: 3000,
  host: "localhost",
  routes: {
    cors: true
  }
});

(async () => {
  await server.register({ plugin: ContactRoutesPlugin });
  await server.register({ plugin: ItemsRoutesPlugin });

  server.start().then(() => {
    console.log("Server running on %s", server.info.uri);
  });
})();
