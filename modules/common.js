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
    "defer": "<span class='red'>defer</span>",
    "type": "<span class='red'>type</span>",
    "fn": "<span class='red'>fn</span>",
    "let": "<span class='red'>let</span>",
    "yield": "<span class='red'>yield</span>",
    "export": "<span class='red'>export</span>",
    "match": "<span class='red'>match</span>",
    "align": "<span class='red'></span>",
    "alloc": "<span class='red'></span>",
    "def": "<span class='red'></span>",
    "done": "<span class='red'></span>",

    "::": "<span class='purple'>::</span>",
    "nomem": "<span class='purple'>nomem</span>",
    "offset": "<span class='purple'>offset</span>",
    "vaarg": "<span class='purple'>vaarg</span>",
    "vaend": "<span class='purple'>vaend</span>",
    "valist": "<span class='purple'>valist</span>",
    "vastart": "<span class='purple'>vastart</span>",

    "len": "<span class='blue'>len</span>",
    "as": "<span class='blue'>as</span>",
    "is": "<span class='blue'>is</span>",
    "append": "<span class='blue'>append</span>",
    "assert": "<span class='blue'>assert</span>",
    "free": "<span class='blue'>free</span>",
    "insert": "<span class='blue'>insert</span>",
    "abort": "<span class='blue'>abort</span>",
    "delete": "<span class='blue'>delete</span>",

    "i8": "<span class='yellow'>i8</span>",
    "i16": "<span class='yellow'>i16</span>",
    "i32": "<span class='yellow'>i32</span>",
    "i64": "<span class='yellow'>i64</span>",
    "u8": "<span class='yellow'>u8</span>",
    "u16": "<span class='yellow'>u16</span>",
    "u32": "<span class='yellow'>u32</span>",
    "u64": "<span class='yellow'>u64</span>",
    "f32": "<span class='yellow'>f32</span>",
    "f64": "<span class='yellow'>f64</span>",
    "size": "<span class='yellow'>size</span>",
    "opaque": "<span class='yellow'>opaque</span>",
    "never": "<span class='yellow'>never</span>",
    "str": "<span class='yellow'>str</span>",
    "null": "<span class='yellow'>null</span>",
    "nullable": "<span class='yellow'>nullable</span>",
    "rune": "<span class='yellow'>rune</span>",
    "uint": "<span class='yellow'>uint</span>",
    "uintptr": "<span class='yellow'>uintptr</span>",
    // C-like
    "int": "<span class='yellow'>int</span>",
    "char": "<span class='yellow'>char</span>",
    "unsigned": "<span class='yellow'>unsigned</span>",
    "signed": "<span class='yellow'>signed</span>",
    "short": "<span class='yellow'>short</span>",
    "long": "<span class='yellow'>long</span>",
    "long long": "<span class='yellow'>long long</span>",
    "float": "<span class='yellow'>float</span>",
    "double": "<span class='yellow'>double</span>",
    "long double": "<span class='yellow'>long double</span>",
    "bool": "<span class='yellow'>bool</span>",
    "void": "<span class='yellow'>void</span>",
    "void": "<span class='yellow'>void</span>",
    "intptr_t": "<span class='yellow'>intptr_t</span>",
    "uintptr_t": "<span class='yellow'>uintptr_t</span>",
    "int64_t": "<span class='yellow'>int64_t</span>",
    "int32_t": "<span class='yellow'>int32_t</span>",
    "int16_t": "<span class='yellow'>int16_t</span>",
    "int8_t": "<span class='yellow'>int8_t</span>",
    "uint64_t": "<span class='yellow'>uint64_t</span>",
    "uint32_t": "<span class='yellow'>uint32_t</span>",
    "uint16_t": "<span class='yellow'>uint16_t</span>",
    "uint8_t": "<span class='yellow'>uint8_t</span>",
    "ptrdiff_t": "<span class='yellow'>ptrdiff_t</span>",
    "size_t": "<span class='yellow'>size_t</span>",
    "_Imaginary": "<span class='yellow'>_Imaginary</span>",
    "_Complex": "<span class='yellow'>_Complex</span>",
    "_Bool": "<span class='yellow'>_Bool</span>",
    "static": "<span class='yellow'>static</span>",
    "volatile": "<span class='yellow'>volatile</span>",
    "true": "<span class='yellow'>true</span>",
    "false": "<span class='yellow'>false</span>",

    "Array": "<span class='red'>Array</span>",
    "Pointer": "<span class='red'>Pointer</span>",
    "struct": "<span class='red'>struct</span>",
    "union": "<span class='red'>union</span>",
    "enum": "<span class='red'>enum</span>",
    "typedef": "<span class='red'>typedef</span>",
    "const": "<span class='red'>const</span>",
    "auto": "<span class='red'>auto</span>",
    "return": "<span class='red'>return</span>",
    "while": "<span class='red'>while</span>",
    "for": "<span class='red'>for</span>",
    "switch": "<span class='red'>switch</span>",
    "case": "<span class='red'>case</span>",
    "continue": "<span class='red'>continue</span>",
    "default": "<span class='red'>default</span>",
    "break": "<span class='red'>break</span>",
    "do": "<span class='red'>do</span>",
    "else": "<span class='red'>else</span>",
    "register": "<span class='red'>register</span>",
    "inline": "<span class='red'>inline</span>",
    "goto": "<span class='red'>goto</span>",
    "extern": "<span class='red'>extern</span>",
    "if": "<span class='red'>if</span>",

    "NULL": "<span class='purple'>NULL</span>",

    "sizeof": "<span class='blue'>sizeof</span>",

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
    ";": "<span class='grey'>&#59;</span>",
    "!": "<span class='red'>&#33;</span>",
    "?": "<span class='red'>&#63;</span>",
    "@": "&#64;",
    "<": "<span class='red'>&#60;</span>",
    "=": "<span class='red'>&#61;</span>",
    ">": "<span class='red'>&#62;</span>",
    '"': "&#34;",
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
        /0x|[0-9]|\bstr\b|\bnever\b|\bopaque\b|\bi8\b|\bi16\b|\bi32\b|\bi64\b|\bf32\b|\bf64\b|\bsize\b|\buse\b|\bdefer\b|\btype\b|\blen\b|\bas\b|\bfn\b|\bexport\b|::|\blet\b|\byield\b|\bchar\b|\bunsigned\b|\bsigned\b|\bint\b|\bshort\b|\blong\b|\blong long\b|\bfloat\b|\bdouble\b|\blong double\b|\bbool\b|\b_Bool\b|\b_Complex\b|\b_Imaginary\b|\bsize_t\b|\bptrdiff_t\b|\bint8_t\b|\bint16_t\b|\bint32_t\b|\bint64_t\b|\buint8_t\b|\buint16_t\b|\buint32_t\b|\buint64_t\b|\bintptr_t\b|\buintptr_t\b|\bvoid\b|\bArray\b|\bPointer\b|\bstruct\b|\bunion\b|\benum\b|\btypedef\b|\bconst\b|\bauto\b|\breturn\b|\bwhile\b|\bfor\b|\bswitch\b|\bcase\b|\bmatch\b|\bcontinue\b|\bdefault\b|\bdo\b|\bbreak\b|\bgoto\b|\binline\b|\bregister\b|\bstatic\b|\bvolatile\b|\btrue\b|\bfalse\b|\brune\b|\buint\b|\buintptr\b|\bnullable\b|\bnull\b|\bNULL\b|\bdone\b|\bdef\b|\babort\b|\bfree\b|\binsert\b|\bappend\b|\balloc\b|\bassert\b|\bdelete\b|\balign\b|\belse\b|\bvaarg\b|\bvalist\b|\bvastart\b|\bvaend\b|\boffset\b|\bnomem\b|\bis\b|\bextern\b|\bif\b|\bsizeof\b|\/\/|[ \|\n\t\\&#$`%()\[\]\{\}\-+.,;:!?@<=>'"*/]/g,
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
    .replaceAll(/(&#34;[^&#34;]*&#34;)/gm, "<span class='green'>$1</span>")
    .replaceAll(/(&#60;.*&#62;)/gm, "<span>$1</span>")
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
