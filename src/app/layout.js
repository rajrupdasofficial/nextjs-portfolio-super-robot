import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to arrowfig where everything is possible",
  description: "We are a javascript technology company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-purple-200">
          <div className="h-24">
            <NavBar />
          </div>
          <div className="h-[calc(100vh - 6rem)]"> {children}</div>
        </div>
      </body>
    </html>
  );
}
