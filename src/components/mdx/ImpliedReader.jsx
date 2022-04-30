import React from "react"

export default function ImpliedReader({ children }) {
  return (
    <div className="rounded border p-3 mb-5">
      <span className="font-weight-bold">Implied reader: </span> {children}
    </div>
  );
}