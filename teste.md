---
layout: "post"
title: "Teste"
thumbnail: aviso.jpg
---

Essa página não contém nada de útil para o leitor, como o próprio nome
dela já diz, ela é uma página de testes. Para ser mais específico, ela é
uma página de testes do CSS do site.


# Blockquote

> Não há mais nada a ser fazido  
> --- Bonaparte, Napoleon
> ![napoleon](/assets/img/napoleon.png)

# Definitions

Bostileiro
: Cidadão nativo do Bostil

# Strikethrough

O Xandão é um ~~arrombado~~ lindo.

# Table

| Item                | Nível | Durabilidade |
| ---                 | ---:  | ---:         |
| Espada              | 3     | 7/10         |
| Escudo              | 2     | 9/10         |
| Enchada de Diamante | 69    | sim/10       |


# Code-block

```c
int factorial(int n) {
    int result = 1;
    for (int i = 1; i <= n; ++i)
        result *= i;
    return result;
}

long long int fibb(int n) {
  int fnow = 0, fnext = 1, tempf;
  while(--n > 0) {
    tempf = fnow + fnext;
    fnow = fnext;
    fnext = tempf;
  }
  return fnext;
}
```  

```javascript
function factorial(n) {
  //check our edge case
  if (n < 0) { throw "Number must be non-negative"; }

  var result = 1;
  //we skip zero and one since both are 1 and are identity
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}

function fib(n) {
  var a = 0, b = 1, t;
  while (n-- > 0) {
    t = a;
    a = b;
    b += t;
    console.log(a);
  }
  return a;
}
```  

```rust
fn factorial_recursive (n: u64) -> u64 {
    match n {
        0 => 1,
        _ => n * factorial_recursive(n-1)
    }
}

fn factorial_iterative(n: u64) -> u64 {
    (1..=n).product()
}

fn main () {
    for i in 1..10 {
        println!("{}", factorial_recursive(i))
    }
    for i in 1..10 {
        println!("{}", factorial_iterative(i))
    }
}
```

```elisp
(defun fib (limit &optional style)
  "Insert numbers of the Fibonacci sequence until a certain `limit'"
  (setq a 0
        b 1)
  (while (< a limit)
    (setq c (+ a b)
          a b
          b c)
    (cond
     ((equal style 'line)
       (insert (format "\n%d" a)))
      (t
       (insert (format "%d, " a))))))
```

# Syntax-highlighting Colors
<center>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--red)"></span>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--green)"></span>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--blue)"></span>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--yellow)"></span>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--orange)"></span>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--cyan)"></span>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--magenta)"></span>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--white)"></span>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--grey)"></span>
<span style="display: inline-block; width: 64px; height: 64px; background-color: var(--black)"></span>
</center>

# Inline-code

`int` significa \"Integer\".

# Organized list

1.  A
    1.  aa
    2.  aaa
2.  B
3.  C

# Unorganized list

- A
  - aa
  - aaa
- B
- C

# Task Lists

- [ ] a
- [x] b

# Links

<https://www.markdownguide.org>

<fake@example.com>

[Markdown Guide](https://www.markdownguide.org "a free and open-source reference guide that explains how to use Markdown")

[fake email](mailto:fake@example.com)

```md
<https://www.markdownguide.org>

<fake@example.com>

[Markdown Guide](https://www.markdownguide.org "a free and open-source reference guide that explains how to use Markdown")

[fake email](mailto:fake@example.com)

```

# Level 1

## Level 2

### Level 3
