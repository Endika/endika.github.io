import type { Contribution } from "../lib/contributions";

export const contributions: Contribution[] = [
  {
    repo: "DarkFlippers/unleashed-firmware",
    emoji: "🔓",
    stars: 22139,
    pr: 1048,
    desc: {
      en: "The EMV parser took each TLV length straight off the card, so tapping a crafted card wrote past several fixed-size fields and a stack buffer.",
      es: "El parser EMV tomaba la longitud de cada TLV directamente de la tarjeta, así que acercar una tarjeta manipulada escribía más allá de varios campos de tamaño fijo y de un buffer de pila.",
    },
    state: "merged",
  },
  {
    repo: "DarkFlippers/unleashed-firmware",
    emoji: "🔓",
    stars: 22139,
    pr: 1049,
    desc: {
      en: "A reader writing to the emulated NFC tag at offset 1 shifted the stored payload by a byte and spliced in a stale byte from the previous frame.",
      es: "Un lector que escribía en el tag NFC emulado en offset 1 desplazaba un byte el contenido guardado y leía un byte de la trama anterior.",
    },
    state: "merged",
  },
  {
    repo: "Next-Flip/Momentum-Firmware",
    emoji: "⚡",
    stars: 9086,
    pr: 573,
    desc: {
      en: "The same unbounded EMV lengths as the unleashed fix, except here the stack overflow is not compiled out of the release builds the project ships.",
      es: "Las mismas longitudes EMV sin acotar que en el fix de unleashed, salvo que aquí el desbordamiento de pila no se compila fuera de los builds release que distribuye el proyecto.",
    },
    state: "open",
  },
  {
    repo: "Next-Flip/Momentum-Firmware",
    emoji: "⚡",
    stars: 9086,
    pr: 574,
    desc: {
      en: "The Type 4 Tag write fix, ported to the byte-identical copy of the file this firmware carries.",
      es: "El fix de escritura en Type 4 Tag, portado a la copia byte a byte idéntica del fichero que lleva este firmware.",
    },
    state: "open",
  },
  {
    repo: "vitessio/vitess",
    emoji: "🐬",
    stars: 21278,
    pr: 20700,
    desc: {
      en: "A sharded query with EXISTS inside a CASE silently dropped half of its WHERE clause and returned the wrong rows.",
      es: "Una consulta con EXISTS dentro de un CASE perdía silenciosamente la mitad de su WHERE y devolvía filas incorrectas.",
    },
    state: "open",
  },
  {
    repo: "vitessio/vitess",
    emoji: "🐬",
    stars: 21278,
    pr: 20701,
    desc: {
      en: "An outer join against a reference table returned every preserved row once per shard instead of once.",
      es: "Un outer join contra una tabla de referencia devolvía cada fila preservada una vez por shard en lugar de una sola vez.",
    },
    state: "open",
  },
  {
    repo: "traefik/yaegi",
    emoji: "🐹",
    stars: 8381,
    pr: 1729,
    desc: {
      en: "A constant condition in an if or for statement crashed the interpreter instead of reporting a compile error, taking down any program embedding it.",
      es: "Una condición constante en un if o un for tumbaba el intérprete en lugar de reportar un error de compilación, y se llevaba por delante al programa que lo incrusta.",
    },
    state: "open",
  },
  {
    repo: "traefik/yaegi",
    emoji: "🐹",
    stars: 8381,
    pr: 1730,
    desc: {
      en: "Using a package name as a value crashed the interpreter five different ways, and inside a return statement it raised no error at all and ran.",
      es: "Usar el nombre de un paquete como valor tumbaba el intérprete de cinco formas distintas, y dentro de un return no daba ningún error y se ejecutaba.",
    },
    state: "open",
  },
  {
    repo: "traefik/yaegi",
    emoji: "🐹",
    stars: 8381,
    pr: 1731,
    desc: {
      en: "Every pull request had a red lint job: the pinned linter was built with an older Go than CI installs, so it panicked before reporting anything.",
      es: "Cada pull request tenía el job de lint en rojo: el linter fijado estaba compilado con un Go anterior al que instala el CI, así que hacía panic antes de reportar nada.",
    },
    state: "open",
  },
  {
    repo: "tobymao/sqlglot",
    emoji: "🧩",
    stars: 9579,
    pr: 7969,
    desc: {
      en: "DuckDB was modelled as returning NULL on division by zero, but it follows IEEE 754 and returns inf, so transpiled queries diverged.",
      es: "DuckDB estaba modelado como si devolviera NULL al dividir por cero, pero sigue IEEE 754 y devuelve inf, así que las consultas transpiladas divergían.",
    },
    state: "merged",
  },
  {
    repo: "fonttools/fonttools",
    emoji: "🔠",
    stars: 5222,
    pr: 4137,
    desc: {
      en: "Instancing a variable font left the BASE table untouched, so instances kept the default baselines and a dangling variation store.",
      es: "Al instanciar una fuente variable la tabla BASE quedaba intacta, así que las instancias conservaban las líneas base por defecto y un almacén de variaciones huérfano.",
    },
    state: "merged",
  },
  {
    repo: "MatthewKuKanich/FindMyFlipper",
    emoji: "📍",
    stars: 2192,
    pr: 144,
    desc: {
      en: "An infinite 2FA loop blocked report fetching: the anisette device identity was partly overwritten with random UUIDs. Behind seven reported issues.",
      es: "Un bucle infinito de 2FA impedía descargar los informes: la identidad de dispositivo de anisette se sobrescribía en parte con UUID aleatorios. Detrás de siete issues reportados.",
    },
    state: "open",
  },
  {
    repo: "chearon/dropflow",
    emoji: "📐",
    stars: 1368,
    pr: 34,
    desc: {
      en: "A box with position: absolute stayed in normal flow and ignored its insets entirely, the last piece of CSS 2.1 positioning the engine was missing.",
      es: "Una caja con position: absolute se quedaba en el flujo normal e ignoraba del todo sus insets, la última pieza del posicionamiento de CSS 2.1 que le faltaba al motor.",
    },
    state: "open",
  },
  {
    repo: "docker/compose",
    emoji: "🐳",
    stars: 38074,
    pr: 13992,
    desc: {
      en: "A single directory the user cannot read made compose watch fail to start, so nothing was watched at all: the ignore list is applied to events, never to the walk that registers the watches.",
      es: "Un solo directorio que el usuario no puede leer impedía que compose watch arrancara, así que no se vigilaba nada: la lista de ignorados se aplica a los eventos, nunca al recorrido que registra los vigilantes.",
    },
    state: "merged",
  },
  {
    repo: "python/mypy",
    emoji: "🏷️",
    stars: 20617,
    pr: 21805,
    desc: {
      en: "A walrus nested inside a condition, as in if cond and (woo := 5) + n, left the variable optional in the branch where the assignment had certainly run.",
      es: "Un walrus anidado dentro de una condición, como en if cond and (woo := 5) + n, dejaba la variable opcional en la rama donde la asignación se había ejecutado con seguridad.",
    },
    state: "open",
  },
  {
    repo: "pact-foundation/pact-python",
    emoji: "🤝",
    stars: 682,
    pr: 1669,
    desc: {
      en: "Any exception in a message handler surfaced as error sending request for url: the 200 response line was sent before the handler ran, so the dropped connection looked like a network fault.",
      es: "Cualquier excepción en un handler de mensajes aparecía como error sending request for url: la línea de respuesta 200 se enviaba antes de ejecutar el handler, así que la conexión cortada parecía un fallo de red.",
    },
    state: "merged",
  },
  {
    repo: "python/mypy",
    emoji: "🏷️",
    stars: 20617,
    pr: 21806,
    desc: {
      en: "Calling an abstract staticmethod or classmethod straight off the abstract class raised no error, even though instantiating that same class does.",
      es: "Llamar a un staticmethod o classmethod abstracto directamente sobre la clase abstracta no daba ningún error, aunque instanciar esa misma clase sí lo dé.",
    },
    state: "open",
  },
  {
    repo: "pact-foundation/pact-reference",
    emoji: "🦀",
    stars: 106,
    pr: 547,
    desc: {
      en: "A V4 message whose contents were written without the expected envelope was read as having no body at all, so the interaction verified successfully whatever the provider produced.",
      es: "Un mensaje V4 cuyo contents se escribía sin el envoltorio esperado se leía como si no tuviera cuerpo, así que la interacción verificaba correctamente sin importar lo que produjera el provider.",
    },
    state: "merged",
  },
  {
    repo: "docker/compose",
    emoji: "🐳",
    stars: 38074,
    pr: 14084,
    desc: {
      en: "Syncing a directory onto a path the image exposes as a symlink aborted the whole watch batch: the archive carried a header for that directory, and the engine refuses to replace a symlink with one.",
      es: "Sincronizar un directorio sobre una ruta que la imagen expone como symlink abortaba todo el lote de watch: el archivo llevaba una cabecera para ese directorio, y el motor se niega a reemplazar un symlink por uno.",
    },
    state: "merged",
  },
];
