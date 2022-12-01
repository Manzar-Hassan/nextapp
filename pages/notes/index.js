import React from "react";
import Link from "next/link";

const Notes = () => {
  console.log(process.env.HELP_APP_URL)

  return (
    <>
      <div>Notes index Notes</div>
      <Link href="/notes/[id]" as="/notes/3">
        id Notes
      </Link>
    </>
  );
};

export default Notes;
