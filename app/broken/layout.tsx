import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  slot,
}: Readonly<{
  children: React.ReactNode;
  slot: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col p-4 m-4 border border-black">
      <p>In this example, we have a single parallel route and a subpath child page. The sub path gets its proper loading state but the parallel route does not get its loading state and falls back to the dashboard or root loading file. It seems like the default file isn&apos;t getting wrapped in a Suspense boundary.</p>
      {slot}
      {children}
    </div>
  );
}
