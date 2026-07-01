import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ComoFuncionaContactForm } from "@/components/sections/ComoFuncionaContactForm";
import { RazonesAccordion } from "@/components/sections/RazonesAccordion";

export const metadata: Metadata = {
  title: "Vivir en Vibio — Vibioland",
  description:
    "La vida en común, repensada. Comunidades de primera residencia en entornos rurales de alta biodiversidad.",
};

export default function VivirEnVibioPage() {
  return (
    <>
      {/* 1. Hero — full-width photo */}
      <section className="relative h-[240px] lg:h-[483px] overflow-hidden">
        <Image
          src="/images/hero-vivirenvibio.jpg"
          alt="Valle rural de Vibio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </section>

      {/* 2. Un país que se vacía por dentro */}
      <section className="bg-white py-16 lg:py-[160px] px-4 lg:px-[80px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4 lg:flex-row lg:gap-[155px] lg:items-start">
          <h2 className="font-serif text-[32px] lg:text-[48px] leading-[1.1] tracking-[-0.96px] text-text-primary lg:shrink-0 lg:whitespace-nowrap">
            Un país que se<br />
            vacía por dentro
          </h2>
          <div className="font-sans text-[18px] lg:text-[23px] leading-normal text-text-primary space-y-5 lg:space-y-[30px]">
            <p>España es uno de los países europeos con menor población rural, según el Eurostat, y la tendencia no para.</p>
            <p>Durante décadas, los pueblos han perdido población, servicios y oportunidades. La España vaciada.</p>
            <p>Mientras tanto, las ciudades crecen pero no mejoran: más caras, más saturadas, más solitarias.</p>
            <p>Cada vez más personas quieren salir, vivir de otra manera y arraigarse en un lugar donde conectar con la naturaleza y construir comunidad. Pero faltan condiciones para hacerlo.</p>
            <p>Vibio nace para crearlas. Para que volver al campo sea posible.</p>
          </div>
        </div>
      </section>

      {/* 3. Manifesto */}
      <section className="bg-white pb-12 lg:pb-[100px] px-4 lg:px-[80px]">
        <div className="max-w-[1200px] mx-auto lg:px-[120px]">
          {/* Photo */}
          <div className="relative w-full h-[220px] lg:h-[502px] rounded-[16px] lg:rounded-[25px] overflow-hidden">
            <Image
              src="/images/manifiesto.jpg"
              alt="Comunidad Vibio compartiendo una comida"
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
          </div>

          {/* Manifesto text box */}
          <div className="bg-bg-default mt-4 lg:mt-[24px] rounded-[24px] lg:rounded-[48px] p-6 lg:p-[72px] flex flex-col gap-5 lg:gap-[31px]">
            <p className="font-sans text-[16px] font-semibold text-brand-gold uppercase">
              nuestro manifiesto
            </p>

            <div className="font-sans text-[18px] lg:text-[23px] text-text-secondary leading-[1.5] lg:leading-[30px] flex flex-col gap-5 lg:gap-[30px]">
              <p>
                Creemos que la vida en común necesita ser repensada.<br />
                La convivencia mejora cuando se le presta atención y se diseñan las condiciones que la sostienen.
              </p>
              <p>
                El diseño no es solo arquitectura. Es la forma en la que se organizan los espacios, las relaciones y las decisiones que compartimos.
              </p>
              <p>
                La comunidad no aparece. Se construye. En lo cotidiano.<br />
                En los acuerdos. En los cuidados. Y también en las diferencias. Necesita estructuras claras, pero también flexibles. Capaces de evolucionar y crecer con quienes las habitan.
              </p>
              <p>
                El territorio no es un escenario. Es el centro. Su historia, sus ritmos y sus límites definen cómo vivimos y cómo nos relacionamos.
              </p>
              <p>
                Habitar no es ocupar un lugar. Es formar parte de él. Por eso diseñamos desde lo común, desde el equilibrio entre personas y entorno.
              </p>
              <p>
                Porque cuando las condiciones están bien diseñadas, la vida en común no solo funciona: florece.
              </p>
              <p>
                <strong>Vibio</strong><br />
                Reencuentra. Rediseña. Regenera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ¿Cómo empezó todo? */}
      <section
        className="py-12 lg:py-[100px] px-4 lg:px-[80px]"
        style={{ backgroundColor: "#7AB782" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:flex-row lg:gap-[155px] lg:items-start">
          <h2 className="font-serif text-[28px] lg:text-[48px] leading-[1.1] tracking-[-0.96px] text-text-primary lg:shrink-0 lg:whitespace-nowrap">
            ¿Cómo empezó todo?
          </h2>

          <div className="flex flex-col gap-8 lg:gap-[48px]">
            <div className="font-sans text-[18px] lg:text-[23px] leading-normal text-text-primary flex flex-col gap-5 lg:gap-[30px]">
              <p>La primavera de 2021, en plena salida de la pandemia, Miguel Rico apareció en la oficina de sAtt y Distrito Natural con una idea bajo el brazo. Una idea de vida. Un sueño.</p>
              <p>No todos los sueños tienen su momento. Pero Vibio sí. Llegó cargado de contexto y de sentido.</p>
              <p>Vibio —viviendas para la biodiversidad— era un proyecto de rabiosa actualidad: una respuesta concreta a preguntas que muchos nos estábamos haciendo. ¿Puedo vivir de otra manera? ¿Salir de la ciudad y criar a mis hijos en el campo es posible de verdad? ¿Puedo tener privacidad, comunidad y naturaleza a la vez sin renunciar a nada esencial?</p>
              <p>Los sueños también tienen que poder bajar a tierra. Vimos que este podía hacerlo. No iba a ser fácil pero el proyecto avanza cada vez más sólido.</p>
              <p>Vibio es fruto de muchas manos, cabezas y corazones.</p>
            </div>
            <Link
              href="/equipo"
              className="self-start bg-bg-alt rounded-full px-[32px] py-[12px] font-sans font-medium text-[16px] leading-[1.4] tracking-[0.08px] text-bg-dark hover:opacity-80 transition-opacity"
            >
              Conoce al equipo
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Video full-width */}
      <section className="h-[300px] lg:h-[812px] overflow-hidden">
        <video
          src="/images/lasta-cta-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </section>

      {/* 6. Un día en Vibio */}
      <section className="bg-white py-12 lg:py-[100px] px-4 lg:px-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-sans text-[13px] font-semibold tracking-[0.08em] uppercase text-tierra-500 mb-8 lg:mb-[72px]">
            UN DÍA EN VIBIO
          </p>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-[72px] lg:items-start">
            {/* Photo collage — mobile: small scattered, spread horizontally; desktop: absolute collage */}
            <div className="lg:hidden relative w-full h-[310px]">
              <div className="absolute left-0 top-[80px] w-[44%] aspect-[4/5] rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] rotate-[-5deg] z-[2]">
                <Image src="/images/vibio1.jpg" alt="Vida en Vibio" fill sizes="45vw" className="object-cover" />
              </div>
              <div className="absolute left-[20%] top-[10px] w-[42%] aspect-[3/4] rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] rotate-[4deg] z-[1]">
                <Image src="/images/vibio2.jpg" alt="Vida en Vibio" fill sizes="42vw" className="object-cover" />
              </div>
              <div className="absolute left-[42%] top-[95px] w-[44%] aspect-[4/5] rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] rotate-[-4deg] z-[3]">
                <Image src="/images/vibio3.jpg" alt="Vida en Vibio" fill sizes="45vw" className="object-cover" />
              </div>
              <div className="absolute right-0 top-[20px] w-[44%] aspect-[4/5] rounded-[16px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] rotate-[5deg] z-[4]">
                <Image src="/images/vibio4.jpg" alt="Vida en Vibio" fill sizes="45vw" className="object-cover" />
              </div>
            </div>
            <div className="hidden lg:block relative shrink-0 w-[418px] h-[844px]">
              <div className="absolute left-[32px] top-[15px] w-[252px] h-[301px] rounded-[25px] overflow-hidden z-[1]">
                <Image
                  src="/images/vibio1.jpg"
                  alt="Vida en Vibio"
                  fill
                  sizes="252px"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-[184px] top-[138px] w-[234px] h-[286px] rounded-[25px] overflow-hidden z-[2]">
                <Image
                  src="/images/vibio2.jpg"
                  alt="Vida en Vibio"
                  fill
                  sizes="234px"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-0 top-[386px] w-[274px] h-[318px] rounded-[25px] overflow-hidden z-[1]">
                <Image
                  src="/images/vibio3.jpg"
                  alt="Vida en Vibio"
                  fill
                  sizes="274px"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-[182px] top-[524px] w-[276px] h-[319px] rounded-[25px] overflow-hidden z-[2]">
                <Image
                  src="/images/vibio4.jpg"
                  alt="Vida en Vibio"
                  fill
                  sizes="276px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story */}
            <div className="lg:flex-1 font-serif italic text-[17px] lg:text-[18px] leading-[1.6] lg:leading-[30px] text-bg-dark space-y-5 lg:space-y-[30px]">
              <p>
                ¿Qué te parece levantarte cada mañana escuchando a los pájaros del otro
                lado de la ventana? ¿Y desayunar la fruta que recogiste el día anterior
                de los árboles del huerto común? Luego, después del café, caminas al
                coworking. Ayer compartiste coche con Marcelo para ir a la ciudad; tú a
                tus reuniones, él a su estudio. Hoy te toca quedarte. No te importa. De
                camino te cruzas con Sofía y su inseparable perra, que vuelven del paseo
                de siempre. La perra va suelta. Sofía, feliz.
              </p>
              <p>
                El coworking de tu Vibio es perfecto para estar muy concentrado y
                aprovechar el día. Allí te encuentras con Juan, tu vecino de dos casas
                más para allá, y te invita a comer. Otra vez que no comes en casa. A la
                vuelta pasas a recoger a tus hijos al cole, los dos mayores suelen volver
                solos, pero la pequeña viene de vivir sus aventuras en la escuela, siempre
                feliz y claro, necesita un atento oyente. De camino os paráis un momento:
                Álvaro y Claudia, la pareja joven que llegó hace 2 meses y ya son casi
                familia, están lijando algo en el cobertizo. La pequeña les pregunta si
                puede ayudar. Ellos dicen que sí.
              </p>
              <p>
                Una vez en casa y como miembro de la Comisión de energía, compruebas los
                consumos y todo lo que habéis ahorrado durante los últimos meses. Ya
                llevas un tiempo dándote cuenta de que la comunidad genera más de lo que
                consume. «En breve habrá que decidir qué hacer con ese excedente», le
                escribes al grupo.
              </p>
              <p>
                Entrada la tarde, tu pareja vuelve de la ciudad y decidís dar un paseo a
                las afueras, el de siempre, casi sin hablar. Observando. Disfrutando.
                Saludáis a Lola y María, que riegan las macetas de la entrada del
                cohousing ahora que ya no aprieta el sol. Volviendo, pensáis en qué cenar.
                Juntos, vais al huerto y veis que la cesta de la semana está preparada. El
                grupo del huerto funciona como un reloj, en el mismo sitio, a la misma
                hora. Allí está nuestra cesta de verduras. «Mil gracias», les escribes en
                una nota.
              </p>
              <p>
                Ya en casa, preparáis la cena, comentáis el día y os echáis unas risas
                con las batallas de la pequeña. Luego de una rica conversación llena de
                cariños, cada uno a su cuarto, desconexión… y a imaginar el día siguiente.
              </p>
              <p className="not-italic font-semibold">
                Ahora te toca a ti soñar tu historia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA strip */}
      <section
        className="py-12 lg:py-[100px] px-4 lg:px-[80px]"
        style={{ backgroundColor: "#ABC2D9" }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Mobile: centered title (3 lines) + 2 compact white CTAs side by side */}
          <div className="lg:hidden flex flex-col items-center gap-8 text-center">
            <h2 className="font-serif text-[28px] leading-[1.1] text-text-primary">
              Ya tenemos territorios.
              <br />
              Ya hay comunidad.
              <br />
              Ya es real. ¿Te sumas?
            </h2>
            <div className="flex flex-row gap-3 w-full">
              <Link
                href="/higuera"
                className="flex-1 h-[45px] rounded-full flex items-center justify-center font-sans text-[14px] text-[#3f3926] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#f1efe4" }}
              >
                Ver vibio.higuera
              </Link>
              <Link
                href="/berlanga"
                className="flex-1 h-[45px] rounded-full flex items-center justify-center font-sans text-[14px] text-[#3f3926] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#f1efe4" }}
              >
                Ver vibio.berlanga
              </Link>
            </div>
          </div>

          {/* Desktop: title left + 2 amarillo CTAs stacked right (unchanged) */}
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-[24px]">
            <h2 className="font-serif text-[48px] leading-[1.1] text-text-primary">
              Ya tenemos territorios. Ya hay comunidad.
              <br />
              Ya es real. ¿Te sumas?
            </h2>
            <div className="flex flex-col gap-[16px] shrink-0">
              <Button href="/como-funciona" variant="amarillo" size="lg">
                Ver viviendas disponibles
              </Button>
              <Button href="#formulario" variant="amarillo" size="lg">
                Contacta con nosotros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 10 razones */}
      <section className="bg-white py-12 lg:py-[100px] px-4 lg:px-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-sans text-[13px] font-semibold tracking-[0.08em] uppercase text-tierra-500 mb-10 lg:mb-[94px]">
            10 razones para vivir en vibio
          </p>
          <RazonesAccordion />
        </div>
      </section>

      {/* 9. Formulario de contacto */}
      <section id="formulario" className="bg-bg-default py-12 lg:py-[100px] px-4 lg:px-[80px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:flex-row lg:gap-[48px] lg:items-start">
          <div className="lg:w-[400px] lg:shrink-0 flex flex-col gap-5 lg:gap-[24px]">
            <h2 className="font-serif text-[28px] lg:text-[48px] leading-[1.1] text-text-primary">
              Dos proyectos en ejecución y cuatro en evaluación
            </h2>
            <p className="font-sans text-[17px] lg:text-[23px] text-text-primary">
              Este formulario nos ayuda a entender tu contexto: quién eres, dónde estás,
              qué buscas y qué comunidad o territorio podrían encajar contigo.
            </p>
            <p className="font-sans text-[16px] lg:text-[18px] text-text-primary">
              También puedes comunicarte por teléfono al{" "}
              <a
                href="tel:+34655920839"
                className="font-semibold underline text-brand-gold"
              >
                +34 655 920 839
              </a>
            </p>
          </div>

          <div className="flex-1">
            <ComoFuncionaContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
