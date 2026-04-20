"use client";

import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  mainClass?: string;
}

export default function Layout({ children, mainClass }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  );
}
