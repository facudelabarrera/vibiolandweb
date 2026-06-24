import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "amarillo" | "cafe" | "lima" | "palido";

interface BaseProps {
  variant?: Variant;
  size?: "md" | "lg";
  children: React.ReactNode;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variantClasses: Record<Variant, { base: string; hover: string }> = {
  amarillo: {
    base: "bg-cta text-bg-dark",
    hover: "hover:bg-brand-gold",
  },
  cafe: {
    base: "bg-brand-gold text-text-on-dark",
    hover: "hover:bg-text-secondary",
  },
  lima: {
    base: "bg-bg-subtle text-bg-dark",
    hover: "hover:bg-cta",
  },
  palido: {
    base: "bg-bg-alt text-bg-dark",
    hover: "hover:bg-bg-subtle",
  },
};

const sizeClasses = {
  md: "px-8 py-3",
  lg: "px-8 py-[14px]",
};

const baseNoSize =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold text-sm leading-none transition-colors duration-200 cursor-pointer select-none";

export function Button({ variant = "amarillo", size = "md", children, href, ...props }: ButtonProps | LinkProps) {
  const { base: varBase, hover } = variantClasses[variant];
  const classes = `${baseNoSize} ${sizeClasses[size]} ${varBase} ${hover}`;

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
