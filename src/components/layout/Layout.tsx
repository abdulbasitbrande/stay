"use client";

import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  mainClass?: string;
  headerClass?: string;
}

export default function Layout({ children, mainClass, headerClass }: LayoutProps) {
  return (
    <>
      <Header className={headerClass} />
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  );
}
