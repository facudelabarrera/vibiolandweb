import type { Metadata } from "next";
import { AccordionGroup } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Preguntas frecuentes — Vibioland",
  description:
    "Esto no es una compra de casa habitual. Aquí van las respuestas a las preguntas que más nos llegan.",
};

const faqData = [
  {
    category: "Sobre el proyecto",
    items: [
      {
        question: "¿Qué son los proyectos regenerativos?",
        answer:
          "Un proyecto regenerativo parte de una pregunta distinta. No «¿cómo reducimos el impacto?» sino «¿cómo devolvemos más de lo que tomamos?». Eso cambia todo el diseño. La energía, el agua, el paisaje, la comunidad: cada elemento se piensa para dejar el lugar mejor de como se encontró. Más biodiversidad, más resiliencia, más vida.\n\nNo es una idea nueva. Hay referentes en todo el mundo. EcoVillage en Ithaca, Nueva York, funciona desde 1991 con diseño pasivo y agricultura ecológica, y ha logrado reducir la huella ecológica de sus residentes un 70% respecto a la media americana. Crystal Waters, en Australia, nació en 1986 y recibió el World Habitat Award en 1996. En Europa, Svanholm en Dinamarca lleva desde 1977 combinando agricultura comunal y economía compartida. ZEGG, cerca de Berlín, integra infraestructura ecológica con depuración propia, calefacción CO₂ neutra y gobernanza comunitaria activa.\n\nVibio bebe de estas experiencias. Pero añade algo que la mayoría no tienen: un modelo económico viable y replicable.",
      },
      {
        question: "¿Qué es Vibio exactamente?",
        answer:
          "Vibio es una promotora de comunidades de primera residencia en entornos rurales. No es un resort, no es un camping y no es una ecoaldea alternativa. Es un lugar donde vivir de verdad, con vecinos reales, infraestructura real y un modelo económico que funciona sin depender de subvenciones.",
      },
      {
        question: "¿Y qué no es Vibio?",
        answer:
          "No es una segunda residencia ni un proyecto vacacional. No es una comuna donde se comparte todo. No es una urbanización convencional disfrazada de ecológica. Y no es para quienes buscan aislarse del mundo, sino para quienes quieren habitarlo mejor.",
      },
      {
        question: "¿En qué se diferencia Vibio de una urbanización o de una ecoaldea?",
        answer:
          "De una urbanización se diferencia en que diseña comunidad de forma activa: los vecinos se conocen antes de mudarse, participan en las decisiones y comparten espacios que hacen la vida más rica. De una ecoaldea, en que tiene un modelo económico convencional y replicable, sin ideología de por medio.",
      },
      {
        question: "¿Qué significa que Vibio sea regenerativo?",
        answer:
          "Que no busca solo «hacer menos daño», sino devolver más de lo que toma. Agua, biodiversidad, suelo, comunidad local: todos los sistemas se diseñan para mejorar con el tiempo, no para degradarse.",
      },
      {
        question: "¿Qué tiene el momento actual que hace necesario un proyecto como este?",
        answer:
          "El trabajo remoto ha desacoplado por primera vez en la historia el lugar de trabajo del lugar de vida. La crisis de vivienda en las ciudades es estructural. Y hay una generación entera que empieza a preguntarse si la vida urbana es la única forma posible de vivir bien. Vibio responde a esas tres fuerzas al mismo tiempo.",
      },
      {
        question: "¿Cómo puedo saber si Vibio es para mí?",
        answer:
          "Si valoras la naturaleza como parte de tu vida cotidiana, si te importa quiénes son tus vecinos y qué construís juntos, y si estás dispuesto a vivir en un pueblo pequeño con acceso a ciudad, es muy probable que Vibio sea para ti. La mejor forma de comprobarlo es venir a una de nuestras jornadas de convivencia.",
      },
    ],
  },
  {
    category: "Sobre la comunidad",
    items: [
      {
        question: "¿Qué tipo de personas viven en Vibio?",
        answer:
          "Personas de entre 35 y 65 años, en su mayoría. Con trabajos remotos o a punto de jubilarse. Que valoran la naturaleza, la calidad de las relaciones y la sostenibilidad. No hay un perfil único: hay familias, parejas, personas solas. Lo que las une es una forma de entender la vida, no una ideología.",
      },
      {
        question: "¿Cómo es el día a día viviendo en Vibio?",
        answer:
          "Como en cualquier pueblo, pero con vecinos que has elegido y espacios comunes diseñados para encontrarse. Cada uno vive en su casa, con su rutina. Lo compartido no se impone: se elige. Hay actividades, huertos, talleres... pero nada es obligatorio.",
      },
      {
        question: "¿Vivir en comunidad no es renunciar a tu privacidad?",
        answer:
          "Todo lo contrario. La privacidad en Vibio se cuida de forma activa. Cada vivienda es completamente autónoma. Los espacios comunes complementan, no sustituyen, el espacio privado. La diferencia con un bloque de pisos urbano es que aquí sabes quiénes son tus vecinos y elegiste estar cerca de ellos.",
      },
      {
        question: "¿Cómo funciona la toma de decisiones? ¿Quién manda aquí?",
        answer:
          "La comunidad se gobierna mediante un modelo de sociocracia adaptado. Las decisiones que afectan a todos se toman entre todos, con herramientas de consenso probadas. No hay un «dueño» de la comunidad: hay una entidad gestora que facilita y una comunidad que decide.",
      },
      {
        question: "¿Cómo se construye comunidad antes de que existan las casas?",
        answer:
          "Desde el primer día. Los futuros vecinos participan en jornadas de convivencia, talleres de diseño y reuniones de comunidad durante los dos o tres años que dura la construcción. Cuando se mudan, ya son conocidos. Algunos ya son amigos.",
      },
      {
        question: "¿Qué pasa si mis vecinos y yo no nos llevamos bien?",
        answer:
          "Es algo que se trabaja activamente. Hay protocolos de gestión de conflictos, espacios de mediación y una cultura comunitaria que prioriza la escucha. No todos los conflictos se resuelven, pero sí se gestionan mejor que en un bloque de pisos anónimo.",
      },
    ],
  },
  {
    category: "Sobre el territorio",
    items: [
      {
        question: "¿Por qué el mundo rural y no la ciudad?",
        answer:
          "Porque el mundo rural tiene lo que la ciudad no puede dar: silencio, naturaleza, espacio, ritmo. Y cada vez más, tiene conectividad. El trabajo remoto ha eliminado la principal razón para vivir en ciudad. Lo que queda es la inercia.",
      },
      {
        question: "¿Qué tiene que ver la biodiversidad con una comunidad de viviendas?",
        answer:
          "Todo. El diseño de Vibio parte de la premisa de que vivir bien y vivir de forma regenerativa no son cosas distintas. Plantar 400 árboles de 96 especies no es un gesto estético: es restaurar el ecosistema que los seres humanos necesitamos para estar bien.",
      },
      {
        question: "¿Qué relación tiene Vibio con el territorio donde se instala?",
        answer:
          "Vibio se instala junto a pueblos existentes, no lejos de ellos. Se integra en la economía local, emplea a personas del lugar y contribuye a mantener vivo un tejido social que de otro modo desaparece. No somos una burbuja: somos parte del pueblo.",
      },
      {
        question: "¿En qué se parece Vibio a un pueblo tradicional y en qué se diferencia?",
        answer:
          "Se parece en lo esencial: vida de calle, conocer a tus vecinos, el mercado local, las fiestas. Se diferencia en que está diseñado desde cero con criterios de sostenibilidad, eficiencia energética y gobernanza participativa.",
      },
    ],
  },
  {
    category: "Sobre economía",
    items: [
      {
        question: "¿Cómo se financian los proyectos?",
        answer:
          "Con financiación bancaria de Triodos Bank (el primer banco ético europeo, B Corp) y con la aportación de los propios futuros residentes como copromotores. Sin subvenciones, sin dependencia de ayudas públicas.",
      },
      {
        question: "¿Qué significa beneficio limitado al 15%?",
        answer:
          "Que la promotora no puede ganar más de un 15% en cada proyecto. El resto revierte en la calidad de lo construido y en el precio de las viviendas. Es un modelo alineado con las Housing Associations europeas, orientado al triple impacto económico, social y medioambiental.",
      },
      {
        question: "¿Es Vibio un proyecto sostenible económicamente o depende de subvenciones?",
        answer:
          "Es completamente autosuficiente. El modelo funciona con financiación privada ética y copromotores. Las subvenciones, si llegan, son un bonus, no una condición.",
      },
    ],
  },
  {
    category: "Sobre las casas",
    items: [
      {
        question: "¿Qué modelos de vivienda y de convivencia ofrece Vibio?",
        answer:
          "Tres: coliving (alquiler temporal de media estancia, 4-12 meses), cohousing (vivienda en propiedad de primera residencia con espacios comunes) y covivienda (una fórmula intermedia con más espacios compartidos). Cada uno responde a un momento vital diferente.",
      },
      {
        question: "¿Se puede vivir en Vibio y trabajar con normalidad?",
        answer:
          "Sí. Todas las viviendas tienen fibra óptica y espacios de trabajo. Muchos residentes trabajan en remoto desde sus casas o desde el coworking comunitario.",
      },
      {
        question: "¿Puedo personalizar mi casa?",
        answer:
          "Sí, dentro de los parámetros del diseño pasivo y la eficiencia energética. Los futuros residentes participan en talleres de diseño donde definen sus necesidades. El resultado es una vivienda hecha a medida, no un producto estándar.",
      },
      {
        question: "¿Qué significa que son viviendas de alta eficiencia y bajo impacto?",
        answer:
          "Arquitectura pasiva (orientación, inercia térmica, ventilación natural), aerotermia, fotovoltaica y aislamiento con textiles reciclados. El resultado: un gasto eléctrico de entre 20 y 50 € al mes y 22 toneladas de CO₂ capturadas de la atmósfera, por vivienda.",
      },
    ],
  },
  {
    category: "Dar el paso",
    items: [
      {
        question: "¿Cómo funciona el proceso para unirse a Vibio?",
        answer:
          "Empieza con una conversación. Luego una jornada de convivencia. Si encaja, se firma una reserva y se entra en el proceso de copromotoría. No hay prisa: el proceso dura entre 6 meses y un año antes de comprometerse económicamente.",
      },
      {
        question: "¿Puedo conocer el proyecto y la comunidad antes de decidir?",
        answer:
          "Sí. Organizamos jornadas de convivencia periódicas en los territorios donde estamos desarrollando proyectos. Es la mejor forma de conocer a las personas y sentir el lugar.",
      },
      {
        question: "¿En qué momento hay que comprometerse económicamente?",
        answer:
          "Después de haber participado en al menos una jornada de convivencia y haber tenido varias conversaciones con el equipo. El primer compromiso económico es una reserva, no la compra.",
      },
      {
        question: "¿Cómo se elige dónde construir el próximo proyecto?",
        answer:
          "Combinamos criterios de paisaje, precio del suelo, accesibilidad, tejido social local y demanda de la comunidad interesada. Si ya tenéis un grupo formado y conocéis un lugar, hablemos.",
      },
      {
        question: "¿Puedo proponer un territorio para un nuevo proyecto Vibio?",
        answer:
          "Sí. Si conoces un lugar con potencial y ya tienes un grupo de personas interesadas, contáctanos. Así es como han surgido algunos de los proyectos más prometedores.",
      },
    ],
  },
  {
    category: "Sobre el equipo",
    items: [
      {
        question: "¿Quién está detrás del proyecto?",
        answer:
          "sAtt, estudio de arquitectura sostenible con 25 años de experiencia y la primera empresa de arquitectura B Corp de España, y Distrito Natural, promotora especializada en vivienda colaborativa y ecológica. A ellos se suma una red de más de veinte especialistas en ingeniería, paisajismo, agua, energía y gobernanza.",
      },
      {
        question: "¿Qué experiencia tiene el equipo?",
        answer:
          "Más de 400 proyectos construidos, el primer cohousing ecológico de Madrid, premios internacionales en sostenibilidad (Saint-Gobain 2025, Triodos 2023, Latinoamérica Verde 2021, Green Solutions Awards 2019) y 25 años de trayectoria haciendo exactamente esto: arquitectura que regenera.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-bg-default pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">
            <h1 className="font-serif text-5xl text-text-primary leading-tight">
              Preguntas frecuentes
            </h1>
            <div className="font-sans text-base text-text-secondary leading-relaxed space-y-4">
              <p>
                Esto no es una compra de casa habitual. Esto es un proyecto de
                vida, por eso sabemos que surgen muchas dudas.
              </p>
              <p>
                Aquí van las respuestas a las preguntas que más nos llegan.
              </p>
              <p>
                Si la tuya no está, escríbenos a{" "}
                <a
                  href="mailto:hola@vibio.land"
                  className="text-text-primary underline hover:text-text-secondary transition-colors"
                >
                  hola@vibio.land
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-bg-default pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:ml-[calc(33.333%+3rem)]">
            {faqData.map((group) => (
              <AccordionGroup
                key={group.category}
                category={group.category}
                items={group.items}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
