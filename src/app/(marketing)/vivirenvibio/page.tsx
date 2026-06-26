import type { Metadata } from "next";
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
      <section className="relative h-[483px] overflow-hidden">
        <Image
          src="/images/lacomunidad.jpg"
          alt="Comunidad Vibio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </section>

      {/* 2. Un país que se vacía por dentro */}
      <section className="bg-white py-[160px] px-[80px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[314px_1fr] gap-[155px] items-start">
          <h2 className="font-serif text-[48px] leading-[1.1] text-text-primary">
            Un país que se vacía por dentro
          </h2>
          <p className="font-sans text-[23px] text-text-primary">
            España es uno de los países europeos con menor población rural, según el
            Eurostat, y la tendencia no para. Durante décadas, los pueblos han perdido
            población, servicios y oportunidades. La España vaciada. Mientras tanto,
            las ciudades crecen pero no mejoran: más caras, más saturadas, más
            solitarias. Cada vez más personas quieren salir, vivir de otra manera y
            arraigarse en un lugar donde conectar con la naturaleza y construir
            comunidad. Pero faltan condiciones para hacerlo.{" "}
            <strong>Vibio nace para crearlas. Para que volver al campo sea posible.</strong>
          </p>
        </div>
      </section>

      {/* 3. Manifesto */}
      <section className="bg-white pb-[100px] px-[80px]">
        <div className="max-w-[1200px] mx-auto px-[120px]">
          {/* Photo */}
          <div className="relative w-full h-[502px] rounded-[25px] overflow-hidden">
            <Image
              src="/images/vibio-higuera.png"
              alt="Vibio — comunidad y naturaleza"
              fill
              sizes="960px"
              className="object-cover"
            />
          </div>

          {/* Manifesto text box */}
          <div className="bg-bg-default mt-[24px] p-[72px]">
            <p className="font-sans text-[16px] font-semibold text-tierra-500">
              nuestro manifiesto
            </p>

            <div className="mt-[31px] font-sans text-[23px] text-tierra-700 leading-[30px] space-y-[30px]">
              <p>
                Creemos que la vida en común necesita ser repensada. La convivencia
                mejora cuando se le presta atención y se diseñan las condiciones que la
                sostienen. El diseño no es solo arquitectura. Es la forma en la que se
                organizan los espacios, las relaciones y las decisiones que compartimos.
              </p>
              <p>
                La comunidad no aparece. Se construye. En lo cotidiano. En los acuerdos.
                En los cuidados. Y también en las diferencias. Necesita estructuras
                claras, pero también flexibles. Capaces de evolucionar y crecer con
                quienes las habitan.
              </p>
              <p>
                El territorio no es un escenario. Es el centro. Su historia, sus ritmos y
                sus límites definen cómo vivimos y cómo nos relacionamos. Habitar no es
                ocupar un lugar. Es formar parte de él.
              </p>
              <p>
                Por eso diseñamos desde lo común, desde el equilibrio entre personas y
                entorno. Porque cuando las condiciones están bien diseñadas, la vida en
                común no solo funciona: florece.
              </p>
              <p>
                <strong>Vibio</strong> Reencuentra. Rediseña. Regenera.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ¿Cómo empezó todo? */}
      <section
        className="py-[100px] px-[80px]"
        style={{ backgroundColor: "#7AB782" }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-[417px_1fr] gap-[155px] items-start">
          <h2 className="font-serif text-[48px] leading-[1.1] text-text-primary">
            ¿Cómo empezó todo?
          </h2>

          <div className="flex flex-col gap-[30px]">
            <p className="font-sans text-[23px] text-text-primary">
              La primavera de 2021, en plena salida de la pandemia, Miguel Rico apareció
              en la oficina de sAtt y Distrito Natural con una idea bajo el brazo. Una
              idea de vida. Un sueño. No todos los sueños tienen su momento. Pero{" "}
              <strong>Vibio</strong> sí. Llegó cargado de contexto y de sentido.
            </p>
            <p className="font-sans text-[23px] text-text-primary">
              <strong>Vibio</strong> —viviendas para la biodiversidad— era un proyecto
              de rabiosa actualidad: una respuesta concreta a preguntas que muchos nos
              estábamos haciendo. ¿Puedo vivir de otra manera? ¿Salir de la ciudad y
              criar a mis hijos en el campo es posible de verdad? ¿Puedo tener
              privacidad, comunidad y naturaleza a la vez sin renunciar a nada esencial?
            </p>
            <p className="font-sans text-[23px] text-text-primary">
              Los sueños también tienen que poder bajar a tierra. Vimos que este podía
              hacerlo. No iba a ser fácil pero el proyecto avanza cada vez más sólido.{" "}
              <strong>Vibio</strong> es fruto de muchas manos, cabezas y corazones.
            </p>
            <div className="mt-[18px]">
              <Button href="/equipo" variant="amarillo" size="lg">
                Conoce al equipo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Video full-width */}
      <section className="h-[812px] overflow-hidden">
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
      <section className="bg-white py-[100px] px-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-sans text-[13px] font-semibold tracking-[0.08em] uppercase text-tierra-500 mb-[72px]">
            UN DÍA EN VIBIO
          </p>

          <div className="flex gap-[72px] items-start">
            {/* Photo collage */}
            <div className="relative shrink-0 w-[418px] h-[844px]">
              <div className="absolute left-[32px] top-[15px] w-[252px] h-[301px] rounded-[25px] overflow-hidden z-[1]">
                <Image
                  src="/images/card1.jpg"
                  alt="Vida en Vibio"
                  fill
                  sizes="252px"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-[184px] top-[138px] w-[234px] h-[286px] rounded-[25px] overflow-hidden z-[2]">
                <Image
                  src="/images/card2.jpg"
                  alt="Vida en Vibio"
                  fill
                  sizes="234px"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-0 top-[386px] w-[274px] h-[318px] rounded-[25px] overflow-hidden z-[1]">
                <Image
                  src="/images/card3.jpg"
                  alt="Vida en Vibio"
                  fill
                  sizes="274px"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-[182px] top-[524px] w-[276px] h-[319px] rounded-[25px] overflow-hidden z-[2]">
                <Image
                  src="/images/card4.jpg"
                  alt="Vida en Vibio"
                  fill
                  sizes="276px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story */}
            <div className="flex-1 font-serif italic text-[18px] leading-[30px] text-bg-dark space-y-[30px]">
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
        className="py-[100px] px-[80px]"
        style={{ backgroundColor: "#ABC2D9" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-[24px]">
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
      </section>

      {/* 8. 10 razones */}
      <section className="bg-white py-[100px] px-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-sans text-[13px] font-semibold tracking-[0.08em] text-tierra-500 mb-[94px]">
            10 razOnes para vivir en vibio
          </p>
          <RazonesAccordion />
        </div>
      </section>

      {/* 9. Formulario de contacto */}
      <section id="formulario" className="bg-bg-default py-[100px] px-[80px]">
        <div className="max-w-[1200px] mx-auto flex gap-[48px] items-start">
          <div className="w-[400px] shrink-0 flex flex-col gap-[24px]">
            <h2 className="font-serif text-[48px] leading-[1.1] text-text-primary">
              Dos proyectos en ejecución y cuatro en evaluación
            </h2>
            <p className="font-sans text-[23px] text-text-primary">
              Este formulario nos ayuda a entender tu contexto: quién eres, dónde estás,
              qué buscas y qué comunidad o territorio podrían encajar contigo.
            </p>
            <p className="font-sans text-[18px] text-text-primary">
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
