import Footer from "@/components/Footer";
import React from "react";
import NavBar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}
export default function LandingPageLayout({ children }: Props) {
  return (
    <div className="relative">
      <NavBar />
      <div className=" overflow-hidden pt-24">{children}</div>
      <Footer />
    </div>
  );
}
