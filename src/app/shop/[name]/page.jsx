import React from "react";
import Image from "next/image";

function page() {
  return <div>Single Product page
    <Image src={'./01.png'} width={200} height={200} />
  </div>;
}

export default page;
