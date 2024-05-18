/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75ax84nztl7fihj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mtkn0u7t",
    "name": "imagen",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75ax84nztl7fihj")

  // remove
  collection.schema.removeField("mtkn0u7t")

  return dao.saveCollection(collection)
})
