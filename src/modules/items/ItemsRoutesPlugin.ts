import Hapi from "hapi";
import { getAllItems, ItemSchema, ItemDataSchema, createItem, deleteItem } from "src/models/Item";
import Joi from "joi";

export const ItemsRoutesPlugin: Hapi.Plugin<never> = {
  name: "ItemsRoutesPlugin",
  async register(server) {
    await server.route({
      method: "GET",
      path: "/items",
      options: {
        response: {
          schema: Joi.array()
        }
      },
      async handler() {
        return getAllItems();
      }
    });
    await server.route({
        method: "POST",
        path: "/items",
        options: {
          response: {
            schema: ItemSchema
          },
          validate: {
              payload: ItemDataSchema
          }
        },
        async handler(request) {
          const itemData = request.payload;
          const item = await createItem(itemData);
          return item;
        }
      });
      await server.route({
        method: "DELETE",
        path: "/items/{id}",
        options: {
          response: {
          },
          validate: {
              params: Joi.object({
                  id: Joi.number().required()
              }).required()
          }
        },
        async handler(request) {
          const id = request.params.id;
          await deleteItem(id);
          return null;
        }
      });
  }
};
