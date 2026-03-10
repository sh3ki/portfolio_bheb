import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div className="container-width">{children}</div>
    </section>
  );
};
