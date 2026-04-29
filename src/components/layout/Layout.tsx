"use client";

import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  mainClass?: string;
  headerClass?: string;
  footerClass?: string,
}

export default function Layout({ children, mainClass, headerClass, footerClass }: LayoutProps) {
  return (
    <>
      <Header headerClass={headerClass} />
      <main className={mainClass}>{children}</main>
      <Footer footerClass={footerClass} />
    </>
  );
}
