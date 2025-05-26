// app/books/[slug]/page.js
import BookDetails from "@/components/BookDetails";

export default async function Page({ params }) {
  const { slug } = await params;

  // Example API call using slug
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/book/get-book/${slug}`,
    {
      cache: "no-store",
    }
  );

  const book = await res.json();

  return <BookDetails book={{ ...book.data[0], available: book.available }} />;
}
