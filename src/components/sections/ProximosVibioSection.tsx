import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export function ProximosVibioSection() {
  return (
    <section className="bg-bg-default pb-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-[77px]">
          <div className="max-w-[653px]">
            <div className="flex items-center gap-6 mb-3">
              <h2 className="font-serif text-[36px] text-text-primary leading-[1.2]">
                Próximos Vibio
              </h2>
              <Badge variant="en-estudio">EN ESTUDIO</Badge>
            </div>
            <p className="font-sans text-[18px] text-text-primary leading-relaxed">
              Actualmente estamos evaluando nuevos territorios. Dinos si quieres
              ser parte de lo que viene, ya sois una comunidad o conoces el lugar
              adecuado.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contacta"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-sans text-base font-medium hover:opacity-80 transition-opacity text-bg-dark"
              style={{ backgroundColor: "#dbc56c" }}
            >
              Futuras comunidades
            </Link>
            <Link
              href="/contacta"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-sans text-base font-medium hover:opacity-80 transition-opacity text-bg-default"
              style={{ backgroundColor: "#a79854" }}
            >
              Somos una comunidad
            </Link>
            <Link
              href="/contacta#proponer-un-territorio"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-sans text-base font-medium hover:opacity-80 transition-opacity text-bg-dark"
              style={{ backgroundColor: "#DEDAA9" }}
            >
              Propón un territorio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
