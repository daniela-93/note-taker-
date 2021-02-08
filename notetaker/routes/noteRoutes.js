const noteData = require("../data/notes.json")

module.exports = function(app) {

  router.get("/api/notes", (req, res) => {
    res.json(data);
  });

  router.post("/api/notes", (req, res) => {
    newNote = req.body;
    newNote.id = data.length.toString();
    data.push(newNote);
    res.json(newNote);
  });

  router.delete("/api/notes/:id", (req, result) => {
    let noteId = req.params.id;
    for (i = 0; i < data.length; i++) {
      if (data[i].id === noteId) {
        data.splice(i, 1);
        break;
      }
    }
    for (i = 0; i < data.length; i++) {
      data[i].id = i.toString();
    }
    return res.json(true);
  });
};
