import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Params = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div>page query - {id}</div>
      <br />
      <Link href="/">main page</Link>
      <br />
      <br />
      <button onClick={(e) => router.push("/")}>Goto main page</button>
      <button onClick={(e) => router.push("/notes/[id]", `/notes/6`)}>
        Goto id page
      </button>
    </>
  );
};

export default Params;
