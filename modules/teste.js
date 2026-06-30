"use strict";

import { create_priv_page, markup, tag } from "./common.js";

export function pagina_de_testes() {
  create_priv_page(
    "testes",
    "Página de testes",
    tag(
      "p",
      {},
      markup(
        `
* Formatação básica

*Negrito*, **Itálico**, ***Negrito e Itálico***, ''código inline''

* Listas

- Pera
- Uva
- Maçã
- Salada Mista

* Tabelas

| Item | Valor |
| --- | --- |
| 1kg de maçã | R$19,99 |
| 1kg de pera | R$27,99 |

* Texto pré-formatado

#+begin_note
Na moral, que saco é lidar com **regex** cara. Só vou tentar fazer um
**syntax highlighting** pra C, qualquer outra coisa eu simplesmente não vou
ligar. (foi mal ae, Hare, mas você tá inclusa nesse bolo).
#+end_note

#+begin_src
// Macros
#include <stdio.h>
#pragma once
#define NOB_IMPLEMENTATION

// Types
true false char volatile static signed unsigned short int long float
double void _Bool _Complex _Imaginary size_t ptrdiff_t int8_t int16_t
int32_t int64_t uint8_t uint16_t uint32_t uint64_t intptr_t uintptr_t

// Keywords
auto break case const continue default do else enum extern for goto
if inline register return struct switch typedef union while 

// Built-ins
sizeof typeof offsetof

// Etc
NULL
#+end_src

#+begin_src
#include <stdio.h>
#include <stdbool.h>

typedef struct {
  char* name;
  int age;
} Pessoa;

int main(void) {
  if (true) {
    puts("C is based AF");
  }
  return 0;
}
#+end_src
#+begin_example
C is based AF
#+end_example

#+begin_src
#if SUPPORT_COMPRESSION_API
    // Compress data and generate a valid DEFLATE stream
    struct sdefl *sdefl = (struct sdefl *)RL_CALLOC(1, sizeof(struct sdefl));   // WARNING: Possible stack overflow, struct sdefl is almost 1MB
    int bounds = sdefl_bound(dataSize);
    compData = (unsigned char *)RL_CALLOC(bounds, 1);

    *compDataSize = sdeflate(sdefl, compData, data, dataSize, COMPRESSION_QUALITY_DEFLATE);   // Compression level 8, same as stbiw
    RL_FREE(sdefl);

    TRACELOG(LOG_INFO, "SYSTEM: Compress data: Original size: %i -> Comp. size: %i", dataSize, *compDataSize);
#endif

// Unload directory filepaths
// WARNING: files.count is not reseted to 0 after unloading
void UnloadDirectoryFiles(FilePathList files)
{
    if (files.paths != NULL)
    {
        for (unsigned int i = 0; i < files.count; i++) RL_FREE(files.paths[i]);

        RL_FREE(files.paths);
    }
}


// Change working directory, returns true on success
int ChangeDirectory(const char *dirPath)
{
    // NOTE: On success, CHDIR() return 0; on error, returns -1 and errno is set to indicate the error,
    // depending on the filesystem, other errors can be returned
    int result = CHDIR(dirPath);

    if (result != 0) TRACELOG(LOG_WARNING, "SYSTEM: Failed to change to directory: %s", dirPath);
    else TRACELOG(LOG_INFO, "SYSTEM: Working Directory: %s", dirPath);

    return result;
}


// Check if given path point to a file
bool IsPathFile(const char *path)
{
    struct stat result = { 0 };
    stat(path, &result);

    return S_ISREG(result.st_mode);
}

#+end_src

* Código dentro de parágrafo

Lorem Ipsum Dolor <code>Sit</code> Amet

* Notas

#+begin_note
Lorem Ipsum Dolor Sit Amet
#+end_note

* Citações

#+begin_quote
Lorem Ipsum Dolor Sit Amet
#+end_quote

#+begin_quote
<span>Lorem</span>
Lorem Ipsum Dolor Sit Amet
#+end_quote

* Links

Lorem [[https://www.lipsum.com/][Ipsum]] Dolor Sit Amet

* Botões

<ul> <li> <a class="blog_entry button" href="#testes">teste</a> </li> <li> <a class="blog_entry button" href="#testes">teste</a> </li> <li> <a class="blog_entry button" href="#testes">teste</a> </li> </ul>

<a class="button" href="#testes">teste</a>
<a class="button" href="#testes">teste</a>
<a class="button" href="#testes">teste</a>

<a class="button" style="display: inline-block" href="#testes">teste</a>
<a class="button" style="display: inline-block" href="#testes">teste</a>
<a class="button" style="display: inline-block" href="#testes">teste</a>

<div style="display: flex">
<a class="button" style="display: inline-block" href="#testes">teste</a>
<a class="button" style="display: inline-block" href="#testes">teste</a>
<a class="button" style="display: inline-block" href="#testes">teste</a>
</div>
`,
      ),
    ),
  );
}
