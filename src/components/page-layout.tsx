type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <section className="flex flex-col gap-6 item-center justify-center">
      <h2 className="text-xl font-semibold sm:text-2xl text-gray-800">
        {title}
      </h2>
      {children}
    </section>
  );
}
