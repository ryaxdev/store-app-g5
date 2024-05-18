/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75ax84nztl7fihj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u162xh6p",
    "name": "stars",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75ax84nztl7fihj")

  // remove
  collection.schema.removeField("u162xh6p")

  return dao.saveCollection(collection)
})
