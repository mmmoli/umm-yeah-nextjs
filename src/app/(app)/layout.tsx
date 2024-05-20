import { Masthead } from "~widgets/navigation/masthead";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Masthead />
      {children}
    </>
  );
}
