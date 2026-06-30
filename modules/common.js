"use strict";

export const page_list = [];

export function slug(text) {
  return text.toLowerCase()
    .replaceAll(" ", "_")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll(">", "")
    .replaceAll("<", "")
    .replaceAll("-", "")
    .replaceAll("+", "")
    .replaceAll(":", "")
    .replaceAll(";", "")
    .replaceAll("?", "")
    .replaceAll("!", "")
    // .replaceAll("/", "")
    .replaceAll("%", "")
    .replaceAll("#", "")
    .replaceAll("*", "")
    .replaceAll("&", "")
    .replaceAll("__", "_")
    .replaceAll("___", "_")
    .replaceAll("á", "a")
    .replaceAll("à", "a")
    .replaceAll("â", "a")
    .replaceAll("ã", "a")
    .replaceAll("é", "e")
    .replaceAll("è", "e")
    .replaceAll("ê", "e")
    .replaceAll("ó", "o")
    .replaceAll("ò", "o")
    .replaceAll("ô", "o")
    .replaceAll("õ", "o")
    .replaceAll("ç", "c");
}

/**
 * Takes text and formats it. Also does syntax-highlighting
 * @example
 * // Returns '<a href="https://google.com">Google</a>'
 * markup("[[https://google.com][Google]]");
 * @param {string} text - Text to be formatted
 * @returns {string} formattedText
 */
export function markup(text) {
  const types = [
    "int",
    "char",
    "unsigned",
    "signed",
    "short",
    "long",
    "long long",
    "float",
    "double",
    "long double",
    "bool",
    "void",
    "intptr_t",
    "uintptr_t",
    "int64_t",
    "int32_t",
    "int16_t",
    "int8_t",
    "uint64_t",
    "uint32_t",
    "uint16_t",
    "uint8_t",
    "ptrdiff_t",
    "size_t",
    "_Imaginary",
    "_Complex",
    "_Bool",
    "static",
    "volatile",
    "true",
    "false",
  ];

  const keywords = [
    "Array",
    "Pointer",
    "struct",
    "union",
    "enum",
    "typedef",
    "const",
    "auto",
    "return",
    "while",
    "for",
    "switch",
    "case",
    "continue",
    "default",
    "break",
    "do",
    "else",
    "register",
    "inline",
    "goto",
    "extern",
    "if",
  ];

  const builtins = ["sizeof", "typeof", "offsetof"];

  const ponctuation = ["[", "]", "{", "}", ";"];

  const etc = ["NULL", "0x", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const htmlEntities = {
    ...Object.fromEntries(
      types.map((k) => [k, `<span class='yellow'>${k}</span>`]),
    ),
    ...Object.fromEntries(
      keywords.map((k) => [k, `<span class='red'>${k}</span>`]),
    ),
    ...Object.fromEntries(
      builtins.map((k) => [k, `<span class='blue'>${k}</span>`]),
    ),
    ...Object.fromEntries(
      ponctuation.map(
        (k) => [k, `<span class='grey'>&#${k.charCodeAt(0)};</span>`],
      ),
    ),
    ...Object.fromEntries(etc.map((k) => {
      if (k === "NULL") return [k, "<span class='purple'>NULL</span>"];
      if (k === "0x") return [k, "<span class='purple'>&#48;x</span>"];
      return [k, `<span class='purple'>&#${48 + parseInt(k)};</span>`];
    })),
    "//": "<span class='dark-grey'>//",
    "\n": "</span>&#10;",
    "\t": "&#9;",
    "\\": "&#92;",
    "&": "&#38;",
    "#": "&#35;",
    "$": "&#36;",
    "%": "&#37;",
    "(": "&#40;",
    ")": "&#41;",
    "|": "<span class='red'>&#124;</span>",
    "~": "<span class='red'>&#126;</span>",
    "+": "<span class='red'>&#43;</span>",
    "-": "<span class='red'>&#8722;</span>",
    ",": "&#44;",
    ":": "&#58;",
    "@": "&#64;",
    "<": "<span class='red'>&#60;</span>",
    "=": "<span class='red'>&#61;</span>",
    ">": "<span class='red'>&#62;</span>",
    '"': "&#34;",
    "'": "&#39;",
    "`": "&#96;",
    "/": "<span class='red'>&#47;</span>",
    "*": "<span class='red'>&#42;</span>",
    "!": "<span class='red'>&#33;</span>",
    "?": "<span class='red'>&#63;</span>",
  };

  const words = [
    ...types,
    ...keywords.filter((k) => k !== "if" && k !== "else"),
    ...builtins,
    "NULL",
  ].map((k) => `\\b${k}\\b`);
  const tokenRegex = new RegExp(
    `"(?:[^"\\\\]|\\\\.)*"|'[^']*'|0x|[0-9]|//|${
      words.join("|")
    }|\\b(?<!#)else\\b|\\b(?<!#)if\\b|[\\|\\n\\t\\\\&#$\`%()\\[\\]\\{\\}\\-+,;:!\\?@<=>'"*/]`,
    "g",
  );

  const escapedText = text.replaceAll(
    /#\+begin_(src)([\s\S]*?)#\+end_(src)/g,
    (_, b1, content, b2) => {
      return `#+begin_${b1}${
        content.replace(tokenRegex, (char) => {
          if (char.startsWith('"') || char.startsWith("'")) {
            return `<span class='orange'>${char}</span>`;
          }
          return htmlEntities[char] || char;
        })
      }#+end_${b2}`;
    },
  );

  const parsedTables = escapedText.replace(
    /(?:(?:^|\n)\|[^\n]*)+(?:\n|$)/g,
    (match) => {
      const lines = match.trim().split("\n");
      if (lines.length < 2) return match;
      const hasSeparator = lines[1].includes("|") &&
        /^[|:\-\s]+$/.test(lines[1]);
      const startIndex = hasSeparator ? 2 : 0;
      let html = "<table>";
      if (hasSeparator) {
        const headers = lines[0].split("|").slice(1, -1);
        html += "<thead><tr>" + headers.map((h) =>
          `<th>${h.trim()}</th>`
        ).join("") + "</tr></thead>";
      }
      html += "<tbody>";
      for (let i = startIndex; i < lines.length; i++) {
        if (lines[i].trim() === "") continue;
        const cells = lines[i].split("|").slice(1, -1);
        html += "<tr>" + cells.map((c) => `<td>${c.trim()}</td>`).join("") +
          "</tr>";
      }
      html += "</tbody></table>";
      return html;
    },
  );

  return parsedTables
    .replaceAll(
      /^$/gm,
      "<span id='padding' style='display: block; margin-top: 1em'></span>",
    )
    .replaceAll("#+begin_src", "<pre class='src'>")
    .replaceAll("#+end_src", "</pre>")
    .replaceAll(
      /(\w+)(&#40;)(.*?)(&#41;)/gm,
      "<span class='green'>$1</span><span class='grey'>$2</span>$3<span class='grey'>$4</span>",
    )
    .replaceAll(/(&#40;|&#41;)/g, "<span class='grey'>$1</span>")
    .replaceAll(/(&#35;\w+)/gm, "<span class='orange'>$1</span>")
    .replaceAll("#+begin_example", "<pre class='example'>")
    .replaceAll("#+end_example", "</pre>")
    .replaceAll(
      /#\+begin_quote\n<span>(.*)<\/span>/g,
      "<blockquote class='quote'><p><span>$1<\/span><br>",
    )
    .replaceAll("#+begin_quote", "<blockquote class='quote'><p>")
    .replaceAll("#+end_quote", "</p></blockquote>")
    .replaceAll("#+begin_note", "<blockquote class='note'><p>")
    .replaceAll("#+end_note", "</p></blockquote>")
    .replaceAll(
      /,,([^:]+):(.*?),,/g,
      "<span style='color: var(--$1)'>$2</span>",
    )
    .replaceAll(/\*\*\*(.*?)\*\*\*/g, "<b><i>$1</i></b>")
    .replaceAll(/\*\*(.*?)\*\*/g, "<i>$1</i>")
    .replaceAll(/\*(.*?)\*/g, "<b>$1</b>")
    .replaceAll(/''([^'\n]+)''/g, "<code>$1</code>")
    .replaceAll(/\n- (.*)/gm, "<li>$1</li>")
    .replaceAll(/\n\* (.*$\n)/gm, "<h2>$1</h2>")
    .replaceAll("[[", "<a target='_blank' href='")
    .replaceAll("][", "'>")
    .replaceAll("]]", "</a>");
}

export function invert_date(date, separator) {
  const input = date;
  const year = input.split(separator)[2];
  const month = input.split(separator)[1];
  const day = input.split(separator)[0];
  return `${year}${separator}${month}${separator}${day}`;
}

export function tag(name, attributes, ...content) {
  if (document.getElementById("body") === null) {
    document.getElementsByTagName("body")[0].setAttribute("id", "body");
  }

  const element = document.createElement(name);

  for (const attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }

  for (const c of content) {
    switch (typeof c) {
      case "string":
        element.innerHTML = c;
        break;
      case "number":
        element.innerText = c;
        break;
      default:
        element.appendChild(c);
    }
  }

  return document.getElementById("body").appendChild(element);
}

export function create_page(name, title, content, priv = false) {
  const id = slug(name);

  tag(
    "section",
    { "id": id },
    tag("h1", { "id": `${id}_title` }, title),
    tag("div", { "id": `${id}_content` }, content),
  );

  if (!priv) {
    page_list.push(
      {
        id: `/#${id}`,
        title: `${title}`,
      },
    );
  }
}

export function create_priv_page(name, title, content) {
  create_page(name, title, content, true);
}
