
import { Hero } from "../components/ui/hero";
import dominiosImage from "../assets/images/heroDominios.jpg";
import genesis1 from "../assets/images/genesis1.jpg";
import jinken from "../assets/images/jinken.jpg";
import bujutsu from "../assets/images/bujutsu.jpg";
import kageboshi from "../assets/images/kageboshi.jpg";
import zoshoku from "../assets/images/zoshoku.jpg";
import jujutsu from "../assets/images/jujutsu.jpg";
import reiso from "../assets/images/reiso.jpg";

import tresHermanos from "../assets/images/tresHermanos.jpg";
import omikami from "../assets/images/omikami.jpg";
import { Section } from "../components/sections/section";
import { PageContainer } from "../components/ui/pageContainer";
import { PresentacionDominio } from "../components/sections/presentacionDominio";


import logoBujutsu from "../assets/images/logoBujutsu.png";
import logoKageboshi from "../assets/images/logoKageboshi.png";
import logoJujutsu from "../assets/images/logoJujutsu.png";
import logoZoshoku from "../assets/images/logoZoshoku.png";
import logoJinken from "../assets/images/logoJinken.png";
import logoReiso from "../assets/images/logoReiso.png";

const Dominios = () => {


const irADominio = (id) => {
  const elemento = document.getElementById(id);

  if (elemento) {
    const posicion = elemento.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: posicion - 100,
      behavior: "smooth"
    });
  }
};

  return (
    <main>
      <Hero
        image={dominiosImage}
        imagePosition="center 30%"
        title="Dominios Antiguos"
        subtitle="Las antiguas maestrías del poder"
        description="Seis caminos de conocimiento y disciplina que permiten trascender los límites del espíritu y el cuerpo."
      />



<div className="flex flex-col gap-10 mr-20 ml-20 mb-20">





<PageContainer>
  <Section
    title="Dominios, antiguas maestrías del ki"
    variant="default"
    textSize="sm"
    imagePosition="top"
    className="bg-white text-stone-800"
  >
    <div className="space-y-5">

      {/* INTRODUCCIÓN */}
      <div className="space-y-3 leading-relaxed">
        <p>
          Con gran decisión y desde temprana edad, entrenando arduamente y superando los límites de sus capacidades, nuestros jóvenes protagonistas se han convertido en practicantes de las antiguas artes del ki. Estos tras años de duros entrenamientos sobre alguno de los extraordinarios estilos del dominio del ki, han definido su rumbo en la vida, valiéndose de sus habilidades lograrán comprender y enfrentar las adversidades que se les presenten.
        </p>

        <p>
          Desde el comienzo de la saga, cada personaje tendrá dominio sobre alguno de los diferentes estilos antiguos, cada uno de estos se especializara en determinados talentos y habilidades sobrenaturales, haciendo que el personaje se convierta en alguien capaz de realizar fascinantes proezas y controlar increíbles técnicas.
        </p>
      </div>

      {/* DOMINIOS */}
      <div className="pt-3">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px flex-1 bg-[#D9B95B]/60" />
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-700">
            Los estilos de los dominios del ki son:
          </h3>
          <span className="h-px flex-1 bg-[#D9B95B]/60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

          {[
            {
              id: "id_bujutsu",
              nombre: "Maestro de armas",
              simbolo: logoBujutsu,
              color: "#C5CED8",
              borde: "#718096",
              fondo: "#171D25",
              brillo: "rgba(180,195,215,0.25)",
              descripcion: "caracterizado por personajes que se especializan en el combate con armamentos, y en la comunión de su espíritu de batalla con los mismos."
            },
            {
              id: "id_kageboshi",
              nombre: "Maestro de las sombras",
              simbolo: logoKageboshi,
              color: "#C17AFF",
              borde: "#8140B5",
              fondo: "#1C1029",
              brillo: "rgba(174,83,255,0.23)",
              descripcion: "dominio sobre el engaño y la estrategia, con técnicas furtivas capaces de controlar ilusiones para manipular favorablemente el curso de situaciones."
            },
            {
              id: "id_jujutsu",
              nombre: "Hechicero",
              simbolo: logoJujutsu,
              color: "#FFC45C",
              borde: "#B77B28",
              fondo: "#251A0C",
              brillo: "rgba(255,181,55,0.22)",
              descripcion: "prestigioso dominio legado por los dragones, caracterizado por el conocimiento y la magia del mundo antiguo."
            },
            {
              id: "id_zoshoku",
              nombre: "Criador bakemono",
              simbolo: logoZoshoku,
              color: "#61E58A",
              borde: "#319653",
              fondo: "#0D2117",
              brillo: "rgba(65,225,125,0.22)",
              descripcion: "dominio sobre el salvaje mundo bakemono, este se concentra en las capacidades para entender y controlar las bestias mágicas que habitan en el universo."
            },
            {
              id: "id_jinken",
              nombre: "Guerrero de las artes marciales",
              simbolo: logoJinken,
              color: "#FF4057",
              borde: "#C51E3B",
              fondo: "#260910",
              brillo: "rgba(255,35,65,0.3)",
              descripcion: "dominio que se especializa en el combate marcial a puño limpio, explotando las capacidades físicas de un guerrero a niveles extraordinarios."
            },
            {
              id: "id_reiso",
              nombre: "Maestro espiritual",
              simbolo: logoReiso,
              color: "#42DED0",
              borde: "#238F8A",
              fondo: "#0B2224",
              brillo: "rgba(50,220,210,0.22)",
              descripcion: "generalmente caracterizado por monjes y sacerdotisas, este dominio se enfoca en la comprensión del mundo espiritual y la perseverancia contra el mal."
            }
          ].map((dominio) => (
            <button
              type="button"
              key={dominio.id}
              onClick={() => irADominio(dominio.id)}
              style={{
                "--dominio-color": dominio.color,
                "--dominio-borde": dominio.borde,
                "--dominio-brillo": dominio.brillo,
                backgroundColor: dominio.fondo,
                borderColor: dominio.borde
              }}
              className="group relative w-full text-left overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:brightness-125 hover:shadow-[0_0_22px_var(--dominio-brillo)] focus:outline-none focus:ring-2 focus:ring-[var(--dominio-color)]"
            >
              {/* RESPLANDOR DE FONDO */}
              <div
                className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-60"
                style={{ backgroundColor: dominio.color }}
              />

              {/* SÍMBOLO DECORATIVO */}
              <div className="pointer-events-none absolute right-3 top-1 h-24 w-24 opacity-20 transition-all duration-300 group-hover:scale-110 group-hover:opacity-50">
                <img
                  src={dominio.simbolo}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="relative">
                <div className="mb-3 flex items-center gap-3">

                  {/* SÍMBOLO PRINCIPAL */}
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-black/40 p-1 transition-all duration-300 group-hover:scale-110"
                    style={{
                      borderColor: dominio.borde,
                      boxShadow: `0 0 12px ${dominio.brillo}`
                    }}
                  >
                    <img
                      src={dominio.simbolo}
                      alt={dominio.nombre}
                      className="h-full w-full object-contain"
                    />
                  </div>
<h3
  className="max-w-[80%] text-sm font-black uppercase tracking-[0.12em] leading-tight transition-all duration-300 group-hover:tracking-[0.16em]"
  style={{
    color: dominio.color,
    textShadow: `
      0 1px 2px #000,
      0 0 5px ${dominio.brillo},
      0 0 12px ${dominio.brillo},
      0 0 20px ${dominio.brillo}
    `,
    WebkitTextStroke: "0.4px rgba(0,0,0,0.65)"
  }}
>
  {dominio.nombre}
</h3>
                </div>

                <div
                  className="mb-3 h-[2px] w-12 transition-all duration-300 group-hover:w-20"
                  style={{
                    backgroundColor: dominio.color,
                    boxShadow: `0 0 8px ${dominio.brillo}`
                  }}
                />

                <p className="text-xs leading-relaxed text-white/75">
                  {dominio.descripcion}
                </p>

                <div
                  className="mt-4 flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60 transition-opacity group-hover:opacity-100"
                  style={{ color: dominio.color }}
                >
                  Descubrir dominio <span>→</span>
                </div>
              </div>
            </button>
          ))}

        </div>
      </div>

      {/* DESARROLLO */}
      <div className="space-y-3 border-t border-stone-200 pt-5 leading-relaxed">
        <p>
          Un practicante de los dominios del ki verá el mundo que lo rodea bajo una visión diferente, dado que este abrió las puertas a los conocimientos y capacidades extraordinarias de eras pasadas, que le permitiran avalanzarse decididamente a sus metas e ideales en la vida. Estos personajes buscarán elevar sus capacidades y su control de técnicas sobre el arte de su dominio, para finalmente convertirse en maestros del ki, siendo capaces de desarrollar sus propias técnicas especiales, las cuales los volveran protagonistas únicos de las sagas del universo celeste.
        </p>

        <p>
          A la hora de crear un personaje el jugador deberá seleccionar uno de los seis dominios iniciales del juego. Cada dominio tendrá características de desarrollo recomendadas, una aptitud especializada, y un arte específico con un conjunto de técnicas a seleccionar, además de poseer una ventaja gratuita inicial relacionada con su contexto.
        </p>
      </div>

    </div>
  </Section>
</PageContainer>





  <PageContainer>
     {/* PRESENTACIÓN DEL DOMINIO */}
            <div className="border-t border-stone-200 pt-5">
              <PresentacionDominio
                id="id_jinken"
                nombre="Guerrero de las artes marciales"
                subtitulo="El camino de la fuerza vital"
                simbolo="拳"
                imagen={jinken}
                descripcion={`Este dominio es caracterizado por sorprendentes guerreros entrenados en el combate marcial a puño limpio, luchadores de un explosivo espíritu de batalla, de gran coraje e increíbles capacidades físicas sobrehumanas. Estos personajes constantemente buscarán bajo el camino de sus artes marciales superar sus capacidades, siempre desafiando a aquellos oponentes con los que puedan explotar al máximo su habilidad de combate, así como también no dudarán en luchar contra las peligrosas bestias del mundo salvaje que se presenten en sus aventuras.

Estos temerarios personajes serán quienes se enfrentarán cara a cara en batalla contra los peligros que se presenten, así historia tras historia se convertirán en poderosos guerreros estoicos de las sagas del universo celeste.`}
                estiloVida={`Generalmente el estilo de vida de estos personajes suele ser errante y libre, surgiendo comúnmente de las clases bajas de los reinos, pudiendo pertenecer a algún dojo prestigioso o habiendo sido entrenados por algún maestro ermitaño. No suelen ser atraídos por los títulos o los conflictos políticos del reino, sus motivaciones suelen estar siempre enfocadas en el duro camino del guerrero.

Este dominio es practicante del antiguo arte de la fuerza vital conocido como Jinken, desarrollado por los seres más fuertes que el universo haya visto. Bajo sus técnicas estos guerreros podrán mantener batallas aéreas volando por los cielos, potenciarán sorprendentemente su fortaleza ante ataques letales que ningún humano podría soportar, serán capaces de disparar desde la palma de su mano potentes descargas de energía, y alcanzando su grado máximo de técnica superior desataran la furia de su ki de batalla incrementando enormemente sus energías para la lucha.`}
                arteKi="Jinken, «Arte de la fuerza vital»"
                aptitud="Resistencia especial"
                ventajaGratuita="Temple"
                caracteristicas={[
                  "Fuerza",
                  "Fortaleza",
                  "Presencia",
                  "Alerta",
                  "Artes marciales",
                  "Manejo de arma",
                  "Atletismo",
                  "Con. de esferas",
                  "Con. bakemono"
                ]}
                ventajasDesventajas={[
                  "Golpe de furia",
                  "Extremadamente pobre",
                  "Accidentado",
                  "Deuda yakuza"
                ]}
                cita="¿Batalla de mil hombres?, jajaja!.. Onmitsu, solo dile a tu lord que dos de nuestro clan le darán su cobarde victoria"
                autor="Yamu - guerrero del linaje Kurokami"
              />
            </div>
  </PageContainer>

<PageContainer>
<PresentacionDominio
       id="id_bujutsu"
  nombre="Maestro de armas"
  subtitulo="El legado del guerrero y su arma"
  simbolo="刀"
  imagen={bujutsu}
  descripcion={`Este dominio es caracterizado por guerreros excepcionales en el manejo de sus armas, las cuales representan su genuino espíritu de batalla contra toda adversidad. Su armamento y estilo de lucha estarán íntimamente relacionados a sus verdaderos propósitos y manera de comprender el mundo que los rodea, siendo propio de un shinobi el estilo furtivo de kunais o para un guerrero samurai enfocado en el kenjutsu, la noble hoja de su katana. Estos personajes suelen enfocar sus disciplinados entrenamientos sobre el estilo de un armamento específico, logrando así en este un nivel de maestría insuperable, que combinado con su destreza y la potencia de su arma, los definirán como letales adversarios.`}
  estiloVida={`Muchos importantes clanes samurai y demás casas prestigiosas de los reinos representan en la era el legado de este dominio, blandiendo legendarios armamentos de antiguos tiempos en nombre de su señor o de sus ideales. Pero también existen tenaces guerreros que bajo su propios principios y estilo en este dominio, vagan por los mundos buscando convertirse en nuevas leyendas, consagrando así la reputación de su propio estilo y el legítimo renombre de su arma única, a través de las eras.

El Bujutsu, antiguo arte de armas, enfoca sus técnicas en la unión ideal del guerrero y su leal arma única, despertando la voluntad de esta bajo un nombre que le dará vida. Sus técnicas de combate le permitirán atacar con poderosas ondas cortantes a oponentes a grandes distancias, intensificar el filo y generar cortes de energía causando letales ataques a sus adversarios. En su grado de maestría más alto, bajo una transformación se liberará la verdadera forma de combate de su armamento único, que con su extraordinario filo servirá a la voluntad de su maestro.

Estos personajes acompañados por la presencia de sus armamentos únicos y su insuperable habilidad en el combate, definirán a través de la batalla su protagonismo en el curso de las sagas.`}
  arteKi="Bujutsu, «Arte de armas»"
  aptitud="Meditación vital"
  ventajaGratuita="Técnica adicional"
  caracteristicas={[
    "Destreza",
    "Fuerza",
    "Agilidad",
    "Alerta",
    "Atletismo",
    "Manejo de arma",
    "Academicismo",
    "Con. de esferas",
    "Forja",
    "Montar"
  ]}
  ventajasDesventajas={[
    "Código",
    "Gran maestro",
    "Equipo"
  ]}
  cita="El alma de un guerrero reside en el filo de su espada. Siendo capaz de liberarla al quitar su saya. Si fuera así, ambos cumplirían su propósito."
  autor="Asu Shinichi – samurái de lord Nobunaga"
/>
</PageContainer>


<PageContainer>

<PresentacionDominio
       id="id_kageboshi"
  nombre="Maestro de las sombras"
  subtitulo="El arte del anonimato y la estrategia"
  simbolo="影"
  imagen={kageboshi}
  descripcion={`Este dominio está caracterizado por espías expertos, maestros ladrones, sicarios y clanes shinobi de diferentes aldeas secretas, personajes de gran astucia que buscarán cumplir sus objetivos desde el anonimato. Estos suelen moverse en sus cometidos con extrema cautela, siempre siendo los más analiticos al momento de decidir sus movimientos. Un maestro de las sombras siempre buscará anticiparse a los acontecimientos, midiendo tanto a sus adversarios como a sus propios aliados, calculando siempre las probabilidades ante las situaciones adversas que se presenten, utilizando la información y planificando la mejor estrategia con el fin de alcanzar sus objetivos.`}
  estiloVida={`Este dominio es propio de los antiguos clanes ninja, quienes en sus tradiciones veneran el llamado “manto de las sombras”, la verdadera fuerza de la unión shinobi para mantener desde el anonimato y la secrecía, el orden y la justicia en sus tierras. Pero también existen maestros de las sombras que enfocan sus talentos para sus propios intereses, tales como sicarios a sueldo, espías de la yakuza o ladrones y saqueadores de tesoros, estos personajes bajo sus propios principios utilizaran sus habilidades en este dominio para actuar con eficacia en sus cometidos.

El antiguo Kageboshi o arte de las sombras, concentra su magia en diferentes técnicas ilusorias, dotando a su usuario de una presencia capaz de manipular con subterfugios hasta a los más incrédulos, acechar a sus objetivos mimetizándose con el ambiente, ocultar su identidad bajo diferentes formas y manifestar clones ilusorios de sí mismo los cuales le permitirán amplificar sus percepciones en diferentes escenarios.

Un maestro de las sombras será un personaje inquietante, lleno de secretos y estrategias, quien seguramente manipulará el curso de las situaciones, abriendo su camino en el curso de las sagas como un misterioso protagonista.`}
  arteKi="Kageboshi, «Arte de las Sombras»"
  aptitud="Manejo de sombras"
  ventajaGratuita="Fuente informativa"
  caracteristicas={[
    "Agilidad",
    "Sentidos",
    "Sabiduría",
    "Academicismo",
    "Atletismo",
    "Con. de objetos mágicos",
    "Artes marciales",
    "Manejo de armas",
    "Con. de esferas",
    "Montar",
    "Medicina"
  ]}
  ventajasDesventajas={[
    "Aldea secreta",
    "Merodeador",
    "Fuente informativa"
  ]}
  cita="¡Calla idiota, los agentes del Onmitsu podrían escucharnos!"
  autor={`Casa de té “las flores de Kioto”, un grupo de miembros reunidos del clan Udon, algo afectados por el buen sabor del sake. Más de veinte Udon fueron colgados públicamente al siguiente amanecer.

Rumores de las tierras de Edo, esfera de Saitama.`}
/>

</PageContainer>





<PageContainer>

<PresentacionDominio
       id="id_zoshoku"
  nombre="Criador Bakemono"
  subtitulo="El vínculo entre las bestias y su maestro"
  simbolo="獣"
  imagen={zoshoku}
  descripcion={`Este dominio es caracterizado por los criadores de bestias bakemono, maestros de los monstruos mágicos que habitan en todo tipo de escenarios del extenso universo celeste. Estos personajes son conocedores de las diferentes especies y sus particulares características, así como también de los peligros del mundo salvaje donde estas criaturas dominan. Los criadores bakemono mediante su presencia empática con las bestias, establecen un vínculo capaz de lograr que hasta la bestia más agresiva se les una como un leal aliado. Este estilo de personaje es el más apto para adentrarse en las peligrosas aventuras en tierras indómitas, o enfrentar a los temibles Kaiju, monstruos malignos de una sanguinaria conducta destructiva que constantemente invaden los reinos.`}
  estiloVida={`El estilo de vida bajo este dominio es propio de ermitaños que protegen la armonía de zonas naturales, valientes cazadores Kaiju, aventureros de cofradías, cazatesoros errantes y hasta temerarios guerreros vinculados a feroces bestias salvajes. Siempre acompañado por sus leales bestias, un criador buscará evolucionar las capacidades de las mismas, así como también sumar nuevos compañeros para que se unan a sus extraordinarias aventuras, de esta manera juntos recorrerán todo tipo de territorios inhóspitos.

El Zoshoku, antiguo arte de bestias, concentra sus técnicas en la unión del criador y sus bakemonos. Bajo las habilidades de este arte un criador podrá comprender el lenguaje de las bestias, comunicándose mutuamente con bakemonos y animales a la perfección, lograra curar lesiones producidas por bakemonos, asi como tambien podrá focalizar su kI manifestando un campo de protección sobre su cuerpo, que le permitirá soportar los letales ataques de los temibles Kaiju. En su grado de técnica máxima, un criador de bestias podrá invocar los sorprendentes poderes de sus bakemonos aliados, utilizándolos como si fueran propios, manifestando desde el las fuerzas del mundo salvaje.

Un criador bakemono será un protagonista que conectado a las fuerzas de la naturaleza, junto a sus bestias, buscará cumplir sus sueños e ideales en las sagas del universo celeste.`}
  arteKi="Zoshoku, «Arte de Bestias»"
  aptitud="Trato bakemono"
  ventajaGratuita="Mascota bakemono"
  caracteristicas={[
    "Presencia",
    "Fortaleza",
    "Sabiduría",
    "Academicismo",
    "Con. bakemono",
    "Con. de objetos mágicos",
    "Con. de leyendas",
    "Artes marciales",
    "Con. de esferas"
  ]}
  ventajasDesventajas={[
    "Fuente informativa",
    "Objeto mágico",
    "Cofrade"
  ]}
  cita="¡¿Qué?!¡¿Que nunca te comiste una llave maestra Chef?!. Perfecto!, mi eatman nunca comió una maldita llave. Y ahora moriremos en esta prisión por tu maldita dieta de coronas de reyes"
  autor="Zero y Chef - Un criador Bakemono y su mascota en apuros"
/>

</PageContainer>




<PageContainer>

<PresentacionDominio
       id="id_jujutsu"
  nombre="Hechicero"
  subtitulo="El legado de los antiguos dragones"
  simbolo="術"
  imagen={jujutsu}
  descripcion={`Este dominio es propio de los místicos hechiceros, representantes en esta era de los saberes y la magia del mundo antiguo. Estos personajes son poseedores de un talento único, una destreza capaz de manipular los canales mágicos que sustentan el universo. Los eruditos del arte de la hechicería también conocido como Jujutsu, son quienes representan el legado de los secretos mágicos de la antigua raza ryujin, milenarios dragones que en antaño regían sobre los cinco elementos.`}
  estiloVida={`En los tiempos presentes, los saberes elementales de este dominio pertenecen a las reconocidas academias, torres arcanas, y los clanes nobles más prestigiosos de los reinos. Sus practicantes son académicos determinados a los antiguos conocimientos, quienes tras años de estudio y práctica sobre los hechizos de los diferentes ryus, logran dominar poderosos sellos y conjuraciones, capaces de manifestar diversos e impresionantes efectos mágicos. También este dominio está vinculado a los antiguos templos religiosos, donde los onmyouji, monjes hechiceros, con gran sabiduría practican la magia sagrada de la luz y del ryu espiritual, dominando hechizos capaces de confrontar a las presencias oscuras que acechan en el universo.

Antagonizando los nobles paradigmas de los antiguos ryus, existen maestros de este dominio a los que los llama brujos, estos son hechiceros perversos que practican el siniestro ryu de oscuridad. Este estilo de magia demoníaca sirve a las influencias del mal, originada y legada por temibles demonios, con el fin de corromper y destruir la vida armoniosa del universo celeste.

El extraordinario Jujutsu, arte de la hechiceria, encierra un conjunto de precisas técnicas las cuales son la llave a diversos estilos de magia llamados ryus. Dado que los caminos de los ryus guardan diferentes paradigmas, los estilos de los practicantes de cada línea mágica suelen ser muy variados, existiendo eruditos como así también temerarios guerreros, capaces de invocar poderosos hechizos de combate. Las técnicas del arte de la hechicería dotan de la capacidad de descifrar los campos mágicos, liberar hechizos de encantamientos sobre objetos, lugares y personas que sellaran a los mismo con fascinantes capacidades, asi como tambien invocar diversas conjuraciones que resolverán contundentemente las situaciones adversas que se presenten. En su grado de técnica máxima, el hechicero será capaz de dominar una concentración que canalizará en él las energías de su entorno, revigorizando así su ki para alimentar sus invocaciones mágicas.

Estos personajes historia tras historia, con gran determinación avanzaran en sus círculos arcanos, lograrando convertirse en pináculo de la magia de las sagas del universo.`}
  arteKi="Jujutsu, «Arte de la hechicería»"
  aptitud="Con. de hechicería"
  ventajaGratuita='Objeto mágico común o "Lengua antigua"'
  caracteristicas={[
    "Principio",
    "Sabiduría",
    "Academicismo",
    "Con. de hechicería",
    "Con. de objetos mágicos",
    "Con. de esferas",
    "Medicina"
  ]}
  ventajasDesventajas={[
    "Objeto mágico",
    "Escuela de hechicería",
    "Lengua antigua"
  ]}
  cita="Muchos seres en este universo aprenden a controlar su ki para desarrollar grandes técnicas. Pero pocos son los que descubren los verdaderos secretos de las energías que utilizan. Y aún menos, son aquellos que logran hacerlas fluir nuevamente en el."
  autor="Masaharu sama — Maestro avatar del Ginkakuji"
/>

</PageContainer>

<PageContainer>
  <PresentacionDominio
         id="id_reiso"
  nombre="Maestro espiritual"
  subtitulo="El nexo entre el mundo invisible y los vivos"
  simbolo="☯"
  imagen={reiso}
  descripcion={`Este dominio es caracterizado por los maestros espirituales, seres capaces de comprender e interactuar con las esencias invisibles del mundo que los rodea, fuerzas que desde los inicios de los tiempos coexisten con el mundo de los vivos. Estos personajes son los guardianes de los campos espirituales que ayudan a preservar el balance fundamental de las fuerzas primordiales en el universo celeste, velando por encaminar las almas de los espíritus varados en este mundo hacia el descanso en paz, preservando el balance con las esencias de la naturaleza que nutren cada escenario del universo, y combatiendo incansablemente contra los temibles Ayakashis, quienes representan la verdadera esencia de los males en esta era. Un maestro espiritual siempre con sabiduría y apoyado por su familiar Shikigami combatirá contra toda presencia oscura que pretenda quebrar la armonía del universo.`}
  estiloVida={`Los saberes de este dominio están vinculados a los antiguos templos y sectas religiosas, monjes onmyoji y sacerdotisas son quienes representan los antiguos paradigmas de los armoniosos kamis, dioses naturales del universo celeste. Estos practicantes del dominio espiritual desinteresadamente acudiran siempre donde el mal habite y prolifere, purificando y conteniendo la corrupción de sus influencias, como así también librando batalla si fuera necesario. Por otro lado también existen maestros espirituales que bajo sus propios principios, utilizando las habilidades de este dominio buscarán enfrentar las diversas precencias oscuras Yokai para preservar el orden del mundo que los rodea.

El arte espiritual llamado Reiso dotará a sus practicantes de místicas técnicas que le permitirán percibir e interactuar con el mundo invisible, unir su alma en alianza a un espíritu que lo acompañara bajo un fuerte propósito, manifestar en su cuerpo un aura de protección contra las presencias Yokai capaz de soportar sus letales ataques, además de poder restablecer la fuerza espiritual propia y de sus aliados. En su grado de técnica máxima llamado “Nexo de almas”, un maestro espiritual podrá sincronizar su alma a la de su espíritu Shikigami, el cual posesionara un objeto u armamento para brindarle a su maestro sus aptitudes y poderes, unificando sus fuerzas para hacer cumplir sus propósitos juntos.

Un maestro espiritual será un personaje de grandes saberes antiguos, que junto a su espíritu Shikigami, representará el nexo del mundo invisible con el mundo de los vivos. Estos misticos protagonistas buscarán confrontar las diversas fuerzas oscuras cuando estas se presenten, preservando el orden y la armonía en el universo.`}
  arteKi='Reiso, “Arte espiritual”'
  aptitud="Meditación espiritual"
  ventajaGratuita='“Espíritu Shikigami”, “Objeto mágico común”'
  caracteristicas={[
    "Sabiduría",
    "Sentidos",
    "Principio",
    "Academicismo",
    "Con. espiritual",
    "Con. de leyendas",
    "Herbolaria",
    "Medicina",
    "Con. demonio"
  ]}
  ventajasDesventajas={[
    "Objeto mágico",
    "Templo sagrado"
  ]}
  cita="Que las aguas del Sanzu apacigüen tu inexistente corazón. ¡Espíritu del mal desaparece!. ¡¡RIO- SAGRADO!!"
  autor="Sagara Sama- Roshi del Templo dorado de Ise, invocación de la técnica sagrada “Sanzu no Kawa”."
/>
</PageContainer>
</div>
      
    </main>
  );
};

export default Dominios;
