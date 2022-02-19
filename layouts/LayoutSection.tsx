export const LayoutSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid justify-center w-full grid-cols-1">{children}</main>
  );
};
