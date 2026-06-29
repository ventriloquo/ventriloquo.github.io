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

export function markup(text) {
  // Jesus Cristo, como que eu iria fazer um bloco desses sem IA?
  const htmlEntities = {
    // Hare-like
    "use": "<span class='red'>use</span>",
    "::": "<span class='purple'>::</span>",
    "fn": "<span class='red'>fn</span>",
    "let": "<span class='red'>let</span>",
    "yield": "<span class='red'>yield</span>",
    "export": "<span class='red'>export</span>",
    "i8": "<span class='green'>i8</span>",
    "i16": "<span class='green'>i16</span>",
    "i32": "<span class='green'>i32</span>",
    "i64": "<span class='green'>i64</span>",
    "u8": "<span class='green'>u8</span>",
    "u16": "<span class='green'>u16</span>",
    "u32": "<span class='green'>u32</span>",
    "u64": "<span class='green'>u64</span>",
    "f32": "<span class='green'>f32</span>",
    "f64": "<span class='green'>f64</span>",
    "opaque": "<span class='green'>opaque</span>",
    "never": "<span class='green'>never</span>",
    // C-like
    "int": "<span class='green'>int</span>",
    "char": "<span class='green'>char</span>",
    "unsigned char": "<span class='green'>unsigned char</span>",
    "unsigned int": "<span class='green'>unsigned int</span>",
    "short": "<span class='green'>short</span>",
    "unsigned short": "<span class='green'>unsigned short</span>",
    "long": "<span class='green'>long</span>",
    "unsigned long": "<span class='green'>unsigned long</span>",
    "long long": "<span class='green'>long long</span>",
    "unsigned long long": "<span class='green'>unsigned long long</span>",
    "float": "<span class='green'>float</span>",
    "double": "<span class='green'>double</span>",
    "long double": "<span class='green'>long double</span>",
    "bool": "<span class='green'>bool</span>",
    "void": "<span class='green'>void</span>",

    "Array": "<span class='red'>Array</span>",
    "Pointer": "<span class='red'>Pointer</span>",
    "struct": "<span class='red'>struct</span>",
    "union": "<span class='red'>union</span>",
    "enum": "<span class='red'>enum</span>",
    "typedef": "<span class='red'>typedef</span>",
    "const": "<span class='red'>const</span>",
    "return": "<span class='red'>return</span>",
    "while": "<span class='red'>while</span>",
    "for": "<span class='red'>for</span>",
    "switch": "<span class='red'>switch</span>",
    "case": "<span class='red'>case</span>",
    "break": "<span class='red'>break</span>",
    "if": "<span class='red'>if</span>",
    "sizeof": "<span class='yellow'>sizeof</span>",

    " ": "&#32;",
    "//": "<span class='dark-grey'>//",
    "\n": "</span>&#10;",
    "\t": "&#9;",
    "\\": "&#92;",
    "&": "&#38;",
    "#": "&#35;",
    "$": "&#36;",
    "`": "&#39;",
    "%": "&#37;",
    "(": "&#40;",
    ")": "&#41;",
    "[": "<span class='grey'>&#91;</span>",
    "]": "<span class='grey'>&#93;</span>",
    "{": "<span class='grey'>&#123;</span>",
    "}": "<span class='grey'>&#125;</span>",
    "|": "<span class='red'>&#124;</span>",
    "~": "<span class='red'>&#126;</span>",
    "+": "<span class='red'>&#43;</span>",
    "-": "<span class='red'>&#8722;</span>",
    ".": "&#46;",
    ",": "&#44;",
    ":": "&#58;",
    ";": "<span style='color: #C1C0C0'>&#59;</span>",
    "!": "<span class='red'>&#33;</span>",
    "?": "<span class='red'>&#63;</span>",
    "@": "&#64;",
    "<": "<span class='red'>&#60;</span>",
    "=": "<span class='red'>&#61;</span>",
    ">": "<span class='red'>&#62;</span>",
    "'": "&#39;",
    "_": "&#39;",
    "/": "<span class='red'>&#47;</span>",
    "*": "<span class='red'>&#42;</span>",
    "0x": "<span class='purple'>&#48;x</span>",
    "0": "<span class='purple'>&#48;</span>",
    "1": "<span class='purple'>&#49;</span>",
    "2": "<span class='purple'>&#50;</span>",
    "3": "<span class='purple'>&#51;</span>",
    "4": "<span class='purple'>&#52;</span>",
    "5": "<span class='purple'>&#53;</span>",
    "6": "<span class='purple'>&#54;</span>",
    "7": "<span class='purple'>&#55;</span>",
    "8": "<span class='purple'>&#56;</span>",
    "9": "<span class='purple'>&#57;</span>",
  };

  const escapedText = text.replaceAll(
    /#\+begin_(src|example)([\s\S]*?)#\+end_(src|example)/g,
    (match, blockType1, content, blockType2) => {
      const escapedContent = content.replace(
        /0x|[0-9]|\buse\b|\bfn\b|\bexport\b|::|\blet\b|\byield\b|\b\/\/\b|\bchar\b|\bunsigned char\b|\bint\b|\bunsigned int\b|\bshort\b|\bunsigned short\b|\blong\b|\bunsigned long\b|\blong long\b|\bunsigned long long\b|\bfloat\b|\bdouble\b|\blong double\b|\bbool\b|\bvoid\b|\bArray\b|\bPointer\b|\bstruct\b|\bunion\b|\benum\b|\btypedef\b|\bconst\b|\breturn\b|\bwhile\b|\bfor\b|\bswitch\b|\bcase\b|\bbreak\b|\bif\b|\bsizeof\b|\/\/|[ \|\n\t\\&#$`%()\[\]\{\}\-+.,;:!?@<=>'*/]/g,
        (char) => htmlEntities[char],
      );
      return `#+begin_${blockType1}${escapedContent}#+end_${blockType2}`;
    },
  );

  return escapedText
    .replaceAll(
      /^$/gm,
      "<span id='padding' style='display: block; margin-top: 1em'></span>",
    )
    .replaceAll("#+begin_src", "<pre class='src'>")
    .replaceAll("#+end_src", "</pre>")
    .replaceAll(/("[^"]*")/gm, "<span class='green'>$1</span>")
    .replaceAll(/(&#64;\w+)/gm, "<span class='orange'>$1</span>")
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
