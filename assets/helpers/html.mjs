export function htmlEscape(str) {
  return str
    .replace(/&/g, "&")
    .replace(/>/g, ">")
    .replace(/</g, "<")
    .replace(/"/g, '"')
    .replace(/'/g, "&#39;")
    .replace(/`/g, "&#96;");
}

export function html(literalSections, ...substs) {
  // Usamos el literal crudo para no interpretar
  // caracteres raros.
  let raw = literalSections.raw;

  let result = "";

  substs.forEach((subst, i) => {
    // Almacenamos el literal que precede a la
    // sustitución actual
    let lit = raw[i];

    // En el ejemplo, map() devuelve un array:
    // Si la sustitución es un array (y no una cadena),
    // la convertimos.
    if (Array.isArray(subst)) {
      subst = subst.join("");
    }

    // Si la sustitución está precedida de un signo de dolar,
    // escapamos caracteres (comillas, saltos de línea...).
    // Previamente comprobamos que se trate de una cadena y
    // no de un número.
    if (lit.endsWith("$")) {
      subst = isNaN(subst) ? htmlEscape(subst) : subst;
      lit = lit.slice(0, -1);
    }
    result += lit;
    result += subst;
  });

  // Eliminamos el último literal, el cual siempre es una
  // cadena vacía.
  result += raw[raw.length - 1];

  return result;
}
