import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/equipo", label: "Comunidades" },
  { href: "/vivirenvibio", label: "Vivir en Vibio" },
  { href: "/faq", label: "Preguntas frecuentes" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-default/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-[80px] flex py-6 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="vibio.land"
            width={151}
            height={30}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-[34px]">
          <nav className="flex items-center gap-[34px]">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-[18px] font-medium leading-[140%] tracking-[0.09px] text-bg-dark text-right hover:opacity-70 transition-opacity"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Button href="/contacta" variant="amarillo" size="lg">
            Contacta
          </Button>
        </div>
      </div>
    </header>
  );
}
