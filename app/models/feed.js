exports.definition = {
  config: {
    columns: {
      "id": "INTEGER PRIMARY KEY",
      "content": "TEXT",
      "excerpt": "TEXT",
      "permalink": "TEXT",
      "title": "TEXT",
      "thumbnail":"TEXT"
    },
    adapter: {
      type: "json",
      url: 'http://blog.foolprooflabs.com/feed/json'
    }
  }
};