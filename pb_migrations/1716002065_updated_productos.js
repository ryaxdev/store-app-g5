/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75ax84nztl7fihj")

  // remove
  collection.schema.removeField("mtkn0u7t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nrfciolj",
    "name": "imagen",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("nrfciolj")

  return dao.saveCollection(collection)
})
