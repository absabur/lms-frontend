import ProfileRedirect from "@/components/ProfileRedirect";

export const metadata = {
  title: "Profile",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ProfileRedirect />
      {children}
    </>
  );
}
