// /api/note/:id  && /api/note
import nc from "next-connect";
import notes from "../../../src/data/data";

const findNote = (id) => notes.find((note) => note.id === Number(id));

const singleNoteHandler = nc().get((req, res) => {
  const note = findNote(req.query.id);

  console.log(req.query.id);

  if (!note) {
    res.json({ msg: "note not found !!" });
  }

  res.status(200).json(note);
});

export default singleNoteHandler;
