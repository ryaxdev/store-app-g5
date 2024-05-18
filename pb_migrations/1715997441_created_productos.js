/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "75ax84nztl7fihj",
    "created": "2024-05-18 01:57:21.139Z",
    "updated": "2024-05-18 01:57:21.139Z",
    "name": "productos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "883y6koo",
        "name": "nombre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "g9xxq6tm",
        "name": "descripcion",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dz7zypft",
        "name": "precio",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "edf7jdos",
        "name": "activo",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("75ax84nztl7fihj");

  return dao.deleteCollection(collection);
})
