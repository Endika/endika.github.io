import type { Contribution } from "../lib/contributions";

export const contributions: Contribution[] = [
  {
    repo: "vitessio/vitess",
    emoji: "🐬",
    stars: 21000,
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
    stars: 21000,
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
    stars: 8300,
    pr: 1729,
    desc: {
      en: "A constant condition in an if or for statement crashed the interpreter instead of reporting a compile error, taking down any program embedding it.",
      es: "Una condición constante en un if o un for tumbaba el intérprete en lugar de reportar un error de compilación, y se llevaba por delante al programa que lo incrusta.",
    },
    state: "open",
  },
  {
    repo: "tobymao/sqlglot",
    emoji: "🧩",
    stars: 8000,
    pr: 7969,
    desc: {
      en: "DuckDB was modelled as returning NULL on division by zero, but it follows IEEE 754 and returns inf, so transpiled queries diverged.",
      es: "DuckDB estaba modelado como si devolviera NULL al dividir por cero, pero sigue IEEE 754 y devuelve inf, así que las consultas transpiladas divergían.",
    },
    state: "open",
  },
  {
    repo: "fonttools/fonttools",
    emoji: "🔠",
    stars: 4600,
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
    stars: 2170,
    pr: 144,
    desc: {
      en: "An infinite 2FA loop blocked report fetching: the anisette device identity was partly overwritten with random UUIDs. Behind seven reported issues.",
      es: "Un bucle infinito de 2FA impedía descargar los informes: la identidad de dispositivo de anisette se sobrescribía en parte con UUID aleatorios. Detrás de siete issues reportados.",
    },
    state: "open",
  },
];
