/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tzab8jlqefm3di5",
    "created": "2024-04-09 01:26:10.902Z",
    "updated": "2024-04-09 01:26:10.902Z",
    "name": "To_Do",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a45kwkfy",
        "name": "Title",
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
        "id": "rhkkg0t3",
        "name": "Content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tzab8jlqefm3di5");

  return dao.deleteCollection(collection);
})
