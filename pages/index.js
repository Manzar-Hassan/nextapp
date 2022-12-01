import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Page = () => {
  const pageRouter = useRouter();

  return (
    <>
      <div>Page</div>
      <Link href="/notes">Goto notes</Link>
      <br />
      <br />

      {/* will work as it is in client side*/}
      <a href={process.env.NEXT_PUBLIC_HELP_URL} target="_blank">google</a>

      {/*
        will not work as it is in server side 

       <Link href={process.env.HELP_APP_URL}>Goto notes</Link> 
      */} 

      {/* will work in both server and client */}

      {console.log(process.env.ENV)}
      
    </>
  );
};

export default Page;
