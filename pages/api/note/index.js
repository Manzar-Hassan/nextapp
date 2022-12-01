// /api/note/:id  && /api/note
import nc from "next-connect";
import notes from "../../../src/data/data";

const handler = nc().post((req, res) => {
  const note = { ...req.body, id: Date.now() };
  notes.push(note);
  res.status(200).json({ data: notes });
}).get((req,res) => {
  res.status(200).json({data: notes})
})

export default handler;
