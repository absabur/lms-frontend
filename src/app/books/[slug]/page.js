"use client";

import BookDetails from "@/components/BookDetails";
import { useParams } from "next/navigation";

const page = () => {
  const { slug } = useParams();

  return (
    <BookDetails slug={slug}/>
  );
};


export default page;
