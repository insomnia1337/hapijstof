import Joi from "joi";

export const ItemDataSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required()
}).required();

type ItemData = Joi.SchemaValue<typeof ItemDataSchema>;

export const ItemSchema = ItemDataSchema.keys({
  id: Joi.number().required(),
  createdOn: Joi.string().required()
});

type Item = Joi.SchemaValue<typeof ItemSchema>;
let lastId = 0;
let items: Item[] = [];

export const getAllItems = async () => {
  return items;
};

export const createItem = async (itemData: ItemData): Promise<Item> => {
  const id = ++lastId;
  const createdOn = String(new Date());
  const item: Item = {
    ...itemData,
    id,
    createdOn
  };

  items.push(item);
  return item;
};

export const deleteItem = async (id: Item['id']): Promise<void> => {
items = items.filter(i => i.id !== id)

}
