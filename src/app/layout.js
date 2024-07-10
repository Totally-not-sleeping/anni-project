import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/store/auth-context";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome... to the grand anni project",
  description:
    "Welcome to the grand anni project! I sincerely hope you have lots of fun exploring this place; if not... well, you'll see what happens :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <AuthContextProvider>{children}</AuthContextProvider>
        <div className="fixed w-[100%] h-[100vh] bg-bg-img bg-[length:70px_70px] opacity-20 -z-10 top-0 left-0"></div>
      </body>
    </html>
  );
}
