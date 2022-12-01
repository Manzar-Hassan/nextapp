import nc from "next-connect";

const apiHandler = nc()
  .get((req, res) => {
    res.json({ msg: "Get works !!" });
  })
  .post((req, res) => {
    res.json({ msg: "Post works !!" });
  });

export default apiHandler;
