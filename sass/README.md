# Sass 
---
- Sass is a stylesheet language that’s compiled to CSS
- Hojas de estilo sintácticamente asombrosas
- Es un preprocesador de CSS que le otorga superpoderes a su CSS.

Sass y Scss es lo mismo pero con pequeñas diferencias, en Sass no se usan las {llaves} ni ;

### Este codigo de css

``` nav {
  height: 10vh;
  width: 100%;
  display: flex;
}

nav ul {
  list-style: none;
  display: flex;
}

nav li {
  margin-right: 2.5rem;
}

nav li a {
  text-decoration: none;
  color: #707070;
}

nav li a:hover {
  color: #069c54;
}  
```

### Se puede escribir asi en SCSS

``` nav {
  height: 10vh;
  width: 100%;
  display: flex;

  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 2.5rem;

    a {
      text-decoration: none;
      color: #707070;

      &:hover {
        color: #069c54;
      }
    }
  }
}
```
