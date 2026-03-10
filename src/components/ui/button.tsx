import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-300/50 hover:-translate-y-0.5 hover:from-violet-600 hover:to-fuchsia-600 hover:shadow-violet-400/50",
  outline:
    "border border-purple-300 bg-white text-gray-800 hover:-translate-y-0.5 hover:border-violet-500 hover:bg-purple-50 hover:text-violet-700",
};

export const Button = ({
  href,
  children,
  className,
  variant = "primary",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) => {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
