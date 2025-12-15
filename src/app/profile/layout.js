import Loading from "@/components/Loading";
import ProfileRedirect from "@/components/ProfileRedirect";

export const metadata = {
  title: "LMS | Profile",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ProfileRedirect />
      <Loading />
      {children}
    </>
  );
}
