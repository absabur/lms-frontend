import AuthRedirect from "@/components/AuthRedirect";
import Loading from "@/components/Loading";

export const metadata = {
  title: "Authentication For BPI Library",
  description: "Register and Login to BPI library.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <AuthRedirect />
      <Loading />
      {children}
    </>
  );
}
