import React from "react";

export const LayoutDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid grid-cols-1 justify-center sm:w-[640px] w-full mx-auto">
      {children}
    </main>
  );
};
