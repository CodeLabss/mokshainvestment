"use client";

import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#401010", color: "white" }}>
      {children}
    </div>
  );
}
