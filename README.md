# Estructuras de datos

## Memoria

Toda la información que guardas o corres en un pc funciona a base de 0 y 1, a esto se le llama código binario. En la memoria de tu pc, se almacena la información en forma de 0 y 1, y para poder acceder a ella, se utiliza una dirección, que es un número que representa la posición en la memoria. Por ejemplo, si tienes un número de 8 bits, puedes almacenar 256 números, y cada uno de ellos tiene una dirección, que va desde 0 hasta 255. Si tienes un número de 16 bits, puedes almacenar 65536 números, y cada uno de ellos tiene una dirección, que va desde 0 hasta 65535. Y asi sucesivamente.

Existen diferentes estructuras de datos, cada una con sus ventajas y desventajas, y cada una con su uso específico.

Pero lo que hay que comprender, es que las **diferentes estructuras de datos se almacenan de forma diferente en la memoria**, por lo tanto, se accede a ellas de forma distinta, y debes conocerlas para saber en que situación utilizar cada una.

## Abstracción

Un lenguaje de programación es una abstracción de la realidad, es decir, que no es necesario saber como funciona la memoria, ni como funciona el procesador, ni como funciona el sistema operativo... Solo es necesario saber como funciona el lenguaje de programación que estás utilizando, y como funciona la estructura de datos que estás utilizando.

JavaScript, Python, Java, C#... son **lenguajes de alto nivel**, esto quiere decir que no necesitas controlar la memoria ni muchas otras cosas, ya que el lenguaje se encarga de ello por ti.

Pero aún así es necesario saber como funciona la memoria, ya que si no sabes como funciona, no sabes como optimizar tu código, y no sabes como utilizar las diferentes estructuras de datos.

## Cota superior asintótica

La cota superior asintótica (**Big-o**) es una forma de medir la complejidad de un algoritmo, se utiliza para comparar diferentes algoritmos y saber cual deberías utilizar para un problema en concreto.

Es bastante importante comprender bien este concepto, ya que marca la diferencia entre solo programar y programar sabiendo lo que haces.

## Hash table

La primera estructura de datos que vamos a ver es una tabla hash, también conocida como **mapa hash, objeto, diccionario, listas asociativas**... Es una estructura de datos que almacena pares de valores, donde cada valor tiene una clave asociada. La clave es un identificador único, y el valor es el valor asociado a esa clave.

Estas estructuras de datos son muy buenas para realizar caching de datos, ya que puedes guardar datos en la memoria, y luego acceder a ellos muy rápidamente.

### Usos comunes

#### caching

Son excelentes para el caching, porque el tiempo de acceso es constante, y no depende del tamaño de la estructura de datos. Solo teniendo una propiedad o una llave se puede obtener inmediatamente su valor asociado.

#### optimizar operaciones

Esta estructura también se utiliza para optimizar operaciones... Por ejemplo, si estás en un bucle recorriendo una lista, es posible que quieras guardar cierta información para obtenerla rápidamente después, y no tener que recorrer la lista de nuevo.

Por ejemplo si estás recorriendo una lista de usuarios, y quieres saber si un usuario esta en la lista, puedes guardar en una tabla hash el nombre de usuario, y luego solo tienes que comprobar si el nombre de usuario esta en la tabla hash, y no tienes que recorrer la lista de nuevo.

#### detectar duplicados

Esta estructura es ideal para detectar duplicados, ya que los hash maps no pueden tener claves duplicadas, por lo que si intentas añadir una clave duplicada, simplemente se sobrescribe el valor asociado a esa clave. De esta manera puedes validar muy rápidamente si un valor ya existe en la tabla hash.

### Características

#### acceso constante

El acceso a los valores es constante, ya que solo tienes que pasar la clave, y el valor asociado a esa clave se devuelve inmediatamente.

#### almacenamiento eficiente

El almacenamiento es muy eficiente, ya que solo se almacena la clave y el valor asociado a esa clave, y no se almacena el indice.

#### orden no garantizado

El orden no esta garantizado, ya que no se almacena el indice, y por lo tanto, no se almacena el orden.

## Lista o Array

Las listas, también conocidas como arreglo, vector, formación...o en inglés también se le conocen como Arrays, Vectors, formations... Son estructuras de datos que almacenan una lista de valores, y cada valor tiene un indice asociado.

Esta estructura de datos se suele utilizar cuando **el orden en el que se guardan los datos es importante**.

### Uso de memoria

**Las listas se almacenan en la memoria de forma contigua**, es decir, que los valores se almacenan uno al lado del otro, y **no se almacenan en diferentes partes de la memoria**.

Normalmente para crear una lista se debe reservar un bloque de memoria, es decir, al inicializar la lista tu debes indicar el tamaño que esta deberá tener, y el lenguaje se encarga de reservar un bloque de memoria del tamaño indicado. Para después poder almacenar y acceder a los valores de la lista.

### Listas en JavaScript

Ahora, en Javascript funciona de forma diferente, ya que **en el fondo en JavaScript todo es un objeto**, y los arrays son objetos, por lo que no se almacenan de forma contigua en la memoria, y no es necesario indicar el tamaño que va a tener al inicializarlo.

## Pilas o Stack

Las pilas, también conocidas como stack, son estructuras de datos que almacenan una lista de valores, pero a diferencia de las listas, **las pilas solo permiten acceder al último valor añadido, y no se puede acceder a los valores anteriores**.

A esto se llama **last in first out (LIFO)**, es decir, el último valor añadido es el primero en ser eliminado.

### Pilas en JavaScript

En JavaScript las pilas se pueden implementar de varias formas, pero la forma mas sencilla es utilizando un array, ya que los arrays tienen un método llamado **pop()**, que elimina el último valor añadido, y un método llamado **push()**, que añade un valor al final del array.

Por lo tanto, mientras solo utilices esos 2 métodos, puedes utilizar un array como una pila.

Y utilizar un stack trae varias ventajas, sobretodo en BigO notation, ya que **el tiempo de acceso a los valores es constante, y el tiempo de añadir y eliminar valores es constante**, ya que solo se añade o elimina un valor al final del array

Por lo que utilizando una **Pila siempre tendremos un O(1) en tiempo de acceso, añadir y eliminar valores**. Mientras que con una Lista será O(n).

## Cola o Queue

Las colas, también conocidas como queue, son estructuras de datos que almacenan una lista de valores, pero a diferencia de las listas, **las colas solo permiten acceder al primer valor añadido, y no se puede acceder a los valores posteriores**.

A esto se llama **first in first out (FIFO)**, es decir, el primer valor añadido es el primero en ser eliminado.

Normalmente una Cola o Queue tiene 3 métodos:
1- **enqueue**: añade un valor al final de la cola
2- **dequeue**: elimina el primer valor de la cola
3- **peek** o **front**: devuelve el primer valor de la cola

Si lo quisiéramos implementar en JavaScript tendríamos que crear la siguiente clase:

```JS
class Queue {
  length = 0
  #first = 0
  
  enqueue (item) {
    this[this.length] = item
    this.length++
    return this.length
  }
  dequeue () {
    const size = this.length - this.#first
    if (size === 0) return undefined
    const item = this[this.#first]
    delete this[this.#first]
    this.#first++
    return item
  }
  front () {
    const size = this.length - this.#first
    if (size === 0) return undefined
    return this[this.#first]
  }
}
```

Esto se podría hacer en caso de querer asegurarnos de utilizar unicamente estos métodos.

### Colas en JavaScript

En JavaScript la forma mas sencilla de implementar una cola es utilizando un array, ya que los arrays tienen un método llamado **shift()**, que elimina el primer valor añadido, y un método llamado **push()**, que añade un valor al final del array y en caso de querer acceder al primer valor añadido, podemos utilizar el método **[0]**. La desventaja es que al ser un Array tienes acceso a muchos otros métodos y tienes que ser cuidadoso de no utilizar un método que no corresponde al de una Cola, sino esta dejará de funcionar como una.

## Lista enlazada o Linked List

Las listas enlazadas, también conocidas como linked list, son estructuras de datos que almacenan una lista de valores, pero a diferencia de las listas, **las listas enlazadas no almacenan los valores de forma contigua en la memoria, sino que cada valor tiene un puntero al siguiente valor**.

Además las listas enlazadas permiten guardar valores de forma dinámica, es decir, que no es necesario indicar el tamaño de la lista al inicializarla, ya que cada elemento de esta lista es guardado en una posición de la memoria diferente, y no es necesario reservar un bloque de memoria para guardar todos los valores.

**Cada elemento de esta lista va a estar formado por diferentes nodos en los que cada nodo almacenará un valor y el puntero hacia el siguiente nodo.**

La principal ventaja con respecto a una lista normal, es que las listas enlazadas al tener los valores guardados en diferentes partes de la memoria, **al agregar o eliminar un elemento no es necesario mover de posición el resto de elementos, ya que solo se modifica el puntero del nodo anterior al que se ha añadido o eliminado**.

Esto aporta una diferencia en rendimiento notable, pero a cambio de tener que recorrer la lista para encontrar el valor que queremos, ya que no podemos acceder a un valor de forma directa.

### Listas enlazadas en JavaScript

#### Lista enlazada informal

Para implementar una lista enlazada de forma sencilla en JavaScript podemos crear la siguiente clase:

```JS
class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}
```

Con esto podemos crear un nodo, que va a almacenar un valor y un puntero al siguiente nodo. Pero si no existe un siguiente nodo, el puntero será null.

La forma de utilizar esto es la siguiente:

```JS
  const linkedList = new Node(1, new Node(2, new Node(3, new Node(4))))
```

Con esto creamos una lista enlazada con 4 nodos, y cada nodo apunta al siguiente nodo.

Cada nodo nuevo va a ocupar un espacio en memoria diferente, y va a guardar información del valor y la dirección del siguiente nodo.

#### Lista enlazada formalizada

Una lista enlazada formal normalmente tiene las propiedades **length** y **head**, donde head es el primer nodo de la lista

```JS

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  length = 0
  head = null

  add (value) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length++
    return this
  }
}
```

Para inicializar esta **linkedList** el head siempre debe ser nulo, ya que todavía no se ha almacenado ningún valor

Con esto podemos crear una lista enlazada con el método **add()**, que añade un nuevo nodo al final de la lista.

Lo primero que hacemos es crear un nodo con el valor que queremos añadir, y si la lista está vacía, será el primer nodo de la lista, por lo que head guardará su valor, y si no, recorremos la lista hasta llegar al último nodo, y añadimos el nuevo nodo al final.

La forma de utilizar esta clase sería la siguiente:

```JS
const linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
```

### Lista enlazada Big-O Notation

| Operación | Big-O Notation |
| --- | --- |
| Acceder | O(n) |
| Buscar | O(n) |
| Insertar | O(1) |
| Eliminar | O(1) |

## Árbol

Esta estructura de datos es una estructura jerárquica que se conoce como árbol por su semejanza a un árbol invertido.

El comienzo de un árbol se llama **raíz**, que puede tener diferentes **ramas** o **nodos**, que a su vez pueden tener diferentes ramas, y así sucesivamente, hasta llegar a los **nodos hoja** que son los nodos que no tienen ramas.

Como ejemplo, la estructura HTML de una página web es un árbol, ya que la raíz es el elemento html, que tiene diferentes ramas como head, body, etc.

Esta estructura de datos es muy común en grandes compañías como Google, Facebook, etc. ya que es muy eficiente para buscar información. Además, los arboles son muy utilizados en la vida real, como por ejemplo en el sistema de archivos de un ordenador.

Esto está representado en el siguiente diagrama:

```JS
       [1] // Raíz
      / | \
    [2][3][4] // Ramas
    /|\      \
 [5][6][7]   [8] // nodos hoja
```

Esta estructura está conformada por nodos al igual que las listas enlazadas, pero en este caso **cada nodo tiene un valor y un array de nodos hijos**.

### términos

- **Nodo**: cada elemento de la estructura de datos
- **Raíz o root**: el primer nodo de la estructura
- **Rama**: cada nodo que tiene hijos
- **Nodo hoja**: cada nodo que no tiene hijos
- **Padre**: el nodo que tiene hijos
- **Hijo**: el nodo que es hijo de otro nodo
- **Profundidad o Altura**: Es el número de nodos que hay entre el nodo y la raíz, por ejemplo, el nodo 3 tiene una profundidad de 2, ya que hay 2 nodos entre el nodo 3 y la raíz.
- **Nivel**: Un nivel incluye a todos los nodos que se encuentran a la misma profundidad o altura, por lo que el nivel 0 es la raíz, el nivel 1 son los nodos hijos de la raíz, etc.

### recorrer un árbol

Para encontrar un elemento dentro de un árbol debemos recorrerlo, se puede recorrer por Profundidad o por Nivel, y cada una de estas formas de recorrer tendrá diferentes algoritmos.

#### Recorrer por profundidad - Depth First Search (DFS)

Este algoritmo consiste en recorrer el árbol por profundidad, es decir, recorrer el árbol empezando por alguno de los extremos y recorrerlo hasta el otro extremo, se puede empezar desde la raíz o desde el nodo hoja más a la izquierda.

Este algoritmo se puede implementar de dos formas:

- **Pre-order**: primero se visita el nodo, y después se visitan los nodos hijos, por lo que el orden de los nodos visitados es: raíz, hijo izquierdo, hijo derecho.
- **Post-order**: primero se visitan los nodos hijos, y después se visita el nodo, por lo que el orden de los nodos visitados es: hijo izquierdo, hijo derecho, raíz.

Veamos el siguiente ejemplo:

```JS
       [1] 
      / | \
    [2][3][4] 
    /|\      \
 [5][6][7]   [8]
```

Si utilizamos el algoritmo **Pre-order** el orden de los nodos visitados sería: *1, 2, 5, 6, 7, 3, 4, 8*. Ya que se parte desde la raíz y se visitan los nodos hijos partiendo por los hijos de la izquierda.
Partimos por la raíz [1], vamos al hijo izquierdo [2], que a su vez tiene más hijos [5] [6] [7] que recorremos de izquierda a derecha, después vamos al nodo derecho [3], que no tiene hijos, y por último vamos al nodo derecho [4], que tiene un hijo [8].

Si utilizamos el algoritmo **Post-order** el orden de los nodos visitados sería: *5, 6, 7, 2, 3, 8, 4, 1*. Ya que se parte desde el nodo hijo de más a la izquierda, y se recorren todos los nodos hijos de izquierda a derecha, y después se visita el nodo padre.
Partimos por el nodo hijo de más a la izquierda [5], que no tiene hijos, después vamos al nodo hermano [6], que tampoco tiene hijos, y por último vamos al nodo hermano [7], que tampoco tiene hijos, después vamos al nodo padre [2], que tiene un hermano [3] que tampoco tiene hijos, pero aquí vamos al nodo [8] (no al nodo [4] que es el hermano de [3]), ya que si un nodo tiene hijos, se recorren todos los hijos antes de visitar el nodo padre, por lo que ahora vamos al nodo padre [4], y por último vamos al nodo raíz [1].

#### Recorrer por nivel - Breadth First Search (BFS)

Este algoritmo consiste en recorrer el árbol por nivel, es decir, recorrer el árbol empezando por la raíz y recorrerlo por niveles, es decir, primero se visitan todos los nodos del nivel 0, después se visitan todos los nodos del nivel 1, etc.

Para implementar este algoritmo se utilizan colas (queue).

Veamos el siguiente ejemplo:

```JS
       [1] 
      / | \
    [2][3][4] 
    /|\      \
 [5][6][7]   [8]
```

El orden de los nodos visitados sería: *1, 2, 3, 4, 5, 6, 7, 8*. Ya que se parte desde la raíz y se visitan los nodos hijos partiendo por los hijos de la izquierda.

### Árbol en Javascript

En Javascript no existe un tipo de dato para los arboles, pero podemos empezar creando una clase Nodo que tenga un valor y un array de nodos hijos.

```JS
class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}
```

Ahora podríamos crear una clase Árbol para utilizar el nodo anterior, pero en realidad no es necesario, ya que podemos utilizar el nodo como raíz del árbol.

```JS
const root = new Node(1, [
  new Node(2, [
    new Node(5),
    new Node(6),
    new Node(7),
  ]),
  new Node(3),
  new Node(4, [
    new Node(8),
  ]),
]);
```

De esta manera hemos creado un árbol en la memoria.

### Recorrer un árbol en Javascript

#### Recorrer por profundidad en JS - Depth First Search (DFS)

Para recorrer un árbol por profundidad en JS podemos utilizar recursividad.

Podemos utilizar el algoritmo **Pre-order** para recorrer el árbol desde la raíz.
Esto lo podemos hacer de las siguientes maneras:

```JS
function preOrder(node) {
  console.log(node.value); // <--- Aquí es dónde accedemos al nodo
  node.children.forEach(preOrder);
}
```

```JS
function preOrder(node) {
  if (!node) return null;
  console.log(node.value); // <--- Aquí es dónde accedemos al nodo
  for (let child of node.children) {
    preOrder(child);
  }
}
```

Ambos algoritmos son equivalentes. El primero utiliza el método forEach, que es un método intrínseco de los arrays, y el segundo utiliza un bucle for of, que es un bucle que recorre los elementos de un array.

Ambos algoritmos devuelven el mismo resultado: **1, 2, 5, 6, 7, 3, 4, 8**

También podemos utilizar el algoritmo **Post-order** para recorrer el árbol desde el nodo hijo de más a la izquierda hasta la raíz.

```JS
function postOrder(node) {
  node.children.forEach(postOrder)
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
}
```

```JS
function postOrder(node) {
  if (!node) return null
  for (let child of node.children) {
    postOrder(child)
  }
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
}
```

Ambos algoritmos devuelven el mismo resultado **5, 6, 7, 2, 3, 8, 4, 1**

#### Recorrer por nivel en JS - Breadth First Search (BFS)

Para recorrer un árbol por nivel en JS podemos utilizar una cola (queue).

```JS
function breadthFirstSearch(node) {
  const queue = [node]
  while (queue.length > 0) {
    const currentNode = queue.shift()
    console.log(currentNode.value) // <--- Aquí es dónde accedemos al nodo
    queue.push(...currentNode.children)
  }
}
```

```JS
function breadthFirstSearch(node) {
  const queue = [node]
  while (queue.length) {
    const currentNode = queue.shift()
    console.log(currentNode.value) // <--- Aquí es dónde accedemos al nodo
    for (let child of currentNode.children) {
      queue.push(child)
    }
  }
}
```

Los pasos exactos de este algoritmo son los siguientes:

  1. Creamos una cola (queue) y añadimos el nodo raíz, que en este caso tiene el valor de 1 y tiene 3 hijos.
  2. Por lo que actualmente la cola tiene un solo elemento, el nodo raíz. **[1]**
  3. Mientras la cola no esté vacía:
      1. Sacamos el primer nodo de la cola y lo guardamos en una variable. Por lo que la cola ahora mismo estaría vacía **[]**
      2. Accedemos al nodo que guardamos en una variable, aquí es donde podemos hacer lo que queramos con el nodo.
      3. Añadimos los hijos del nodo a la cola, en este caso serían los nodos 2, 3 y 4. Por lo que la cola ahora mismo tiene 3 elementos. El nodo 2, el nodo 3 y el nodo 4. **[2, 3, 4]**
  4. Hemos terminado el bloque de código del bucle while, por lo que se evaluará la condición del bucle while, que es que la cola no esté vacía. Como la cola tiene 3 elementos, la condición es verdadera y se vuelve a ejecutar el bucle.
      1. Sacamos el primer nodo de la cola (que sería el nodo 2) y lo guardamos en una variable. Por lo que la cola ahora mismo tiene 2 elementos. El nodo 3 y el nodo 4. **[3, 4]**
      2. Accedemos al nodo que guardamos en una variable, aquí es donde podemos hacer lo que queramos con el nodo.
      3. Añadimos los hijos del nodo a la cola, en este caso serían los nodos 5, 6 y 7. Por lo que la cola ahora mismo tiene 5 elementos. El nodo 3, el nodo 4, el nodo 5, el nodo 6 y el nodo 7. **[3, 4, 5, 6, 7]**
  5. Hemos terminado el bloque de código del bucle while, por lo que se evaluará la condición del bucle while, que es que la cola no esté vacía. Como la cola tiene 5 elementos, la condición es verdadera y se vuelve a ejecutar el bucle.
      1. Sacamos el primer nodo de la cola (que sería el nodo 3) y lo guardamos en una variable. Por lo que la cola ahora mismo tiene 4 elementos. El nodo 4, el nodo 5, el nodo 6 y el nodo 7. **[4, 5, 6, 7]**
      2. Accedemos al nodo que guardamos en una variable, aquí es donde podemos hacer lo que queramos con el nodo.
      3. Cómo el nodo 3 no tiene nodos hijos, no añadimos nada a la cola.
  6. Hemos terminado el bloque de código del bucle while, por lo que se evaluará la condición del bucle while, que es que la cola no esté vacía. Como la cola tiene 4 elementos, la condición es verdadera y se vuelve a ejecutar el bucle.
      1. Sacamos el primer nodo de la cola (que sería el nodo 4) y lo guardamos en una variable. Por lo que la cola ahora mismo tiene 3 elementos. El nodo 5, el nodo 6 y el nodo 7. **[5, 6, 7]**
      2. Accedemos al nodo que guardamos en una variable, aquí es donde podemos hacer lo que queramos con el nodo.
      3. Añadimos los hijos del nodo a la cola, en este caso sería el nodo 8. Por lo que la cola ahora mismo tiene 4 elementos. El nodo 5, el nodo 6, el nodo 7 y el nodo 8. **[5, 6, 7, 8]**
  7. Hemos terminado el bloque de código del bucle while, por lo que se evaluará la condición del bucle while, que es que la cola no esté vacía. Como la cola tiene 4 elementos, la condición es verdadera y se vuelve a ejecutar el bucle.
  8. Y así seguimos hasta que la cola esté vacía.

La diferencia entre los dos algoritmos es que el primero utiliza el operador spread (...) para añadir los elementos de un array a otro array, y el segundo utiliza un bucle for of.

Ambos algoritmos devuelven el mismo resultado **1, 2, 3, 4, 5, 6, 7, 8**

### Árbol Big-O notation

| Operación | Big-O |
| --- | --- |
| Acceder | O(n) |
| Buscar | O(n) |
| Insertar | O(log n) |
| Eliminar | O(log n) |

## Árbol Binario o Binary Tree

**Un árbol binario es un árbol en el que cada nodo tiene como máximo dos hijos**. Los hijos se denominan hijo izquierdo e hijo derecho.

Las aplicaciones de estos Binary Trees son muy variadas, por ejemplo, se utilizan en las tablas de enrutamiento por IP, también son utilizadas para realizar evaluación de expresiones, y en muchos casos también se utilizan para compresión de datos, como por ejemplo en el algoritmo de Huffman.

Veamos un ejemplo de un Binary Tree:

```js
      [2]
      / \
    [5] [7]
    / \   
  [3] [4]
```

Para recorrer estos arboles se utilizan los algoritmos de recorrido en profundidad (Depth First Search) y recorrido en anchura o niveles (Breadth First Search).

### Recorrido Árbol Binario en profundidad (Depth First Search)

A diferencia de un árbol normal, aquí tenemos una forma extra de recorrer el árbol, podemos hacerlo de 3 formas:
  
  1. **Pre-order**: Primero visitamos el nodo raíz, luego el hijo izquierdo y luego el hijo derecho. El resultado sería: **2, 5, 3, 4, 7**.
  2. **Post-order**: Primero visitamos el hijo izquierdo, luego el hijo derecho y luego el nodo. El resultado sería: **3, 4, 5, 7, 2**.
  3. **In-order**: Primero visitamos el hijo izquierdo, luego el nodo y luego el hijo derecho. El resultado sería: **3, 5, 4, 2, 7**.

**El algoritmo *In-Order* se utiliza exclusivamente en árboles binarios (Binary Trees)**.

### Recorrido Árbol Binario en anchura (Breadth First Search)

Este algoritmo es muy similar al algoritmo de recorrido en anchura de un árbol normal, la única diferencia es que en este caso tenemos que tener en cuenta que cada nodo puede tener como máximo dos hijos.

EL resultado sería: **2, 5, 7, 3, 4**.

### Árbol balanceado o desbalanceado

#### Árbol balanceado o Balanced Tree

Un árbol balanceado es un árbol en el que la diferencia de altura entre los subárboles izquierdo y derecho de cada nodo no es mayor que 1.

ejemplo:

```js
        [2]
       /   \
    [5]     [7]
    / \     / \
  [3] [4] [6] [8]
```

#### Árbol desbalanceado o Unbalanced Tree

Un árbol desbalanceado es un árbol en el que la diferencia de altura entre los subárboles izquierdo y derecho de cada nodo es mayor que 1.

ejemplo:

```js
        [2]
       /   \
    [5]     [7]
              \
              [8]
                \
                 [9]
```

### Árbol Binario en Javascript

En Javascript no existe un tipo de dato para los arboles binarios, pero podemos crear una clase que nos permita crear arboles binarios. vamos a replicar el ejemplo que hemos visto anteriormente:

```js
        [2]
       /   \
    [5]     [7]
    / \  
  [3] [4]
```

En este ejemplo vamos a crear la clase Nodo que va a ser la clase base de nuestro árbol binario.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

Para replicar la estructura del ejemplo anterior vamos a utilizar esta clase Node.

```js
const root = new Node(2,
  new Node(5, 
    new Node(3), 
    new Node(4)),
  new Node(7)
)
```

#### Recorrido Árbol Binario en profundidad en JS (Depth First Search)

Recordemos que tenemos 3 formas de recorrer un árbol binario en profundidad, **pre-order, post-order e in-order**. Vamos a ver como implementar cada uno de estos algoritmos en Javascript.

##### Pre-order

```js
const preOrder = (node) => {
  if (!node) return null
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
  preOrder(node.left)
  preOrder(node.right)
}
```

Con esta función recursiva accedemos primero al nodo raíz [2], luego al hijo izquierdo [5] que a su vez tiene un hijo izquierdo también[3], luego accedemos al hijo derecho [4], y por ultimo al hijo derecho del nodo raíz [7].

Por lo tanto el resultado es el siguiente: **2, 5, 3, 4, 7**.

##### Post-order

```js
const postOrder = (node) => {
  if (!node) return null
  postOrder(node.left)
  postOrder(node.right)
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
}
```

Con esta función recursiva lo que hacemos es acceder primero al hijo izquierdo más profundo [3], después a su hermano derecho [4], luego al padre [5], luego a su hermano derecho [7] y por ultimo al nodo raíz [2].

Por lo tanto el resultado es el siguiente: **3, 4, 5, 7, 2**.

##### In-order

```js
const inOrder = (node) => {
  if (!node) return null
  inOrder(node.left)
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
  inOrder(node.right)
}
```

Por último, vamos a ver **In-order**, que es el algoritmo que **se utiliza exclusivamente en árboles binarios.**

Con esta función recursiva lo que hacemos es acceder primero al hijo izquierdo más profundo [3], luego al padre [5], después a su hermano derecho [4], luego al nodo raíz [2] y por ultimo a su hermano derecho [7].

Por lo tanto el resultado es el siguiente: **3, 5, 4, 2, 7**.

#### Recorrido Árbol Binario en anchura o nivel en JS (Breadth First Search)

```js
const breadthFirstSearch = (node) => {
  const queue = [node]
  while (queue.length) {
    const current = queue.shift()
    console.log(current.value) // <--- Aquí es dónde accedemos al nodo
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
}
```

Esta función es muy similar a la función de recorrido en anchura de un árbol normal, la única diferencia es que en este caso tenemos que tener en cuenta que cada nodo puede tener como máximo dos hijos (izquierdo y derecho).

EL funcionamiento es crear una cola con el nodo raíz, entramos en un bucle y mientras la cola tenga elementos, sacamos el primer elemento de la cola y lo guardamos en una variable current (aquí es donde podemos hacer cosas con el nodo), luego comprobamos si el nodo tiene un hijo izquierdo, si lo tiene lo añadimos a la cola, y lo mismo con el hijo derecho. Mientras se vayan añadiendo elementos a la cola, se van a ir sacando y procesando.

Por lo tanto el resultado es el siguiente: **2, 5, 7, 3, 4**.

### Árbol Binario Big-o Notation

| Operación | Big-O |
| --- | --- |
| Buscar | O(log n) |
| Insertar | O(log n) |
| Eliminar | O(log n) |

## Árbol Binario de Búsqueda (Binary Search Tree)

Un árbol **binario de búsqueda (BST)** es un tipo especial de árbol binario en el que cada nodo tiene un valor único y cumple con las siguientes propiedades:

- Cada nodo solo puede tener dos hijos, un hijo izquierdo y un hijo derecho.
- El valor de todos los nodos del subárbol izquierdo es menor que el valor del nodo raíz.
- El valor de todos los nodos del subárbol derecho es mayor que el valor del nodo raíz.
- Los subárboles izquierdo y derecho también son BST.

Esto quiere decir que si un nodo tiene un hijo izquierdo este tendrá un valor inferior, y si el nodo tiene un hijo derecho este tendrá un valor superior.

Además ningún nodo izquierdo puede tener un valor superior al nodo raíz, y ningún nodo derecho puede tener un valor inferior al nodo raíz.

Veamos un ejemplo:

```js
         [8]
       /     \
    [3]      [10]
    /   \        \
  [1]   [6]      [14]
       /   \     /   \
     [4]   [7] [13]  [15]
```

Esta estructura de datos es **muy eficiente para buscar elementos**, ya que podemos ir comparando el valor del nodo con el valor que estamos buscando, si el valor del nodo es mayor que el valor que estamos buscando, nos vamos al subárbol izquierdo, y si el valor del nodo es menor que el valor que estamos buscando, nos vamos al subárbol derecho. De esta forma **podemos ir descartando la mitad de los nodos en cada iteración**. Lo que provoca que cuanto más grande sea el árbol, más rápida será la búsqueda.

Hay que destacar que si bien es cierto que para la búsqueda es muy eficiente, para insertar y eliminar elementos no lo es tanto, ya que si modificamos el árbol, tenemos que volver a ordenarlo para que siga cumpliendo las propiedades de un BST. Por lo tanto, si tenemos que insertar o eliminar muchos elementos, es mejor utilizar un **árbol binario normal**.

Una característica muy importante, es que si realizamos una búsqueda con **DFS In-Order, nos devolverá los elementos ordenados de menor a mayor**.
Por ejemplo si realizamos una búsqueda con DFS In-Order en el árbol anterior, nos devolverá los elementos ordenados de menor a mayor: **1, 3, 4, 6, 7, 8, 10, 13, 14, 15**.

### Árbol Binario de Búsqueda en JS

```js
class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}
```

### recorrer el árbol con DFS In-Order

```js
const inOrder = (node) => {
  if (!node) return null
  inOrder(node.left)
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
  inOrder(node.right)
}
```

Dadas las características de un Árbol Binario de Búsqueda, al realizar un recorrido DFS In-Order, nos devolverá los elementos ordenados de menor a mayor. Por lo tanto el resultado es el siguiente: **1, 3, 4, 6, 7, 8, 10, 13, 14, 15**.

### Buscar en un Árbol Binario de Búsqueda

```js
const search = (node, value) => {
  if (!node) return null
  if (node.value === value) return node
  if (value < node.value) return search(node.left, value)
  return search(node.right, value)
}
```

Para buscar un elemento en un BST tenemos que ir comparando el valor del nodo con el valor que estamos buscando, si el valor del nodo es mayor que el valor que estamos buscando, nos vamos al subárbol izquierdo, y si el valor del nodo es menor que el valor que estamos buscando, nos vamos al subárbol derecho.

### Insertar en un Árbol Binario de Búsqueda

```js
const insert = (node, value) => {
  if (!node) return new Node(value)
  if (value < node.value) node.left = insert(node.left, value)
  else node.right = insert(node.right, value)
  return node
}
```

Para insertar un elemento en un BST tenemos que ir comparando el valor del nodo con el valor que estamos insertando, si el valor del nodo es mayor que el valor que estamos insertando, nos vamos al subárbol izquierdo, y si el valor del nodo es menor que el valor que estamos insertando, nos vamos al subárbol derecho. Cuando llegamos a un nodo que no tiene hijos, insertamos el nuevo nodo.

## Grafo o Graph

Un **grafo** es una estructura de datos que consiste en un conjunto de nodos y conexiones entre ellos. Los nodos se conocen como **vértices** (o en inglés **vertices**), y las conexiones se conocen como **aristas** (o en inglés **edges**).

**Los grafos son muy útiles para representar relaciones entre elementos**, por ejemplo, si queremos representar las relaciones entre personas, podemos utilizar un grafo, donde cada persona es un nodo, y cada relación entre personas es una arista. Esto es muy útil para representar redes sociales. Otra aplicación muy común es representar mapas, donde cada ciudad es un nodo, y cada carretera es una arista.

### Aristas o Edges

**Las aristas pueden ser dirigidas o no dirigidas**. Si las aristas son dirigidas, significa que la conexión solo es válida en una dirección. Si las aristas no son dirigidas, significa que la conexión es válida en ambas direcciones.

Un ejemplo de una arista dirigida es un **grafo de redes sociales**, donde cada nodo es una persona, y cada arista es una conexión entre dos personas. Si la arista es dirigida, significa que la persona A sigue a la persona B, pero la persona B no sigue a la persona A.

Un ejemplo de una arista no dirigida es un **grafo de carreteras**, donde cada nodo es una ciudad, y cada arista es una carretera entre dos ciudades. Si la arista no es dirigida, significa que la carretera es válida en ambas direcciones.

### Representación de un grafo en código

Estas estructuras pueden llegar a ser muy complejas, por lo que es muy importante saber cómo representarlas en código.

Algunas formas de representar grafos en código es mediante una **Matriz de Adyacencia** o mediante una **Lista de Adyacencia**.

Veamos el siguiente grafo:

```js
  A --- B
  |   / |
  |  C  |
  | /   |
  D --- E
```

### Matriz de Adyacencia

Una **Matriz de Adyacencia** es una matriz bidimensional, dónde cada fila y columna representa un nodo, y cada celda representa una arista entre dos nodos. Si la celda tiene un 1, significa que hay una arista entre los dos nodos, y si la celda tiene un 0, significa que no hay una arista entre los dos nodos.

En el ejemplo anterior, la matriz de adyacencia sería la siguiente:

```js
  A B C D E
A 0 1 0 1 0
B 1 0 1 0 1
C 0 1 0 1 0
D 1 0 1 0 1
E 0 1 0 1 0
```

Algo excelente de esta representación es que **podemos añadir, actualizar y borrar diferentes conexiones en un tiempo constante O(1)**, lo que lo hace muy eficiente y te permite tener acceso a operaciones entre matrices.

Pero **el problema es que si tenemos un grafo con muchos nodos, la matriz de adyacencia puede llegar a ser muy grande**, y puede llegar a ser muy costoso en memoria. Ya que si tenemos un grafo con N nodos, **la matriz de adyacencia tendrá un tamaño de NxN**. Por ejemplo, si tenemos un grafo con 1000 nodos, la matriz de adyacencia tendrá un tamaño de 1000x1000, lo que es 1 millón de celdas, y cada celda ocupa 4 bytes, lo que es 4MB de memoria. Es algo a tener en cuenta.

Por lo que es posible que tengamos que utilizar una **Lista de Adyacencia**.

### Lista de Adyacencia

Una **Lista de Adyacencia** es una lista de listas, donde cada lista representa un nodo, y cada elemento de la lista representa una arista entre el nodo y otro nodo.

En el ejemplo anterior, la lista de adyacencia sería la siguiente:

```js
A: [B, D] // El nodo A tiene una arista con el nodo B y con el nodo D
B: [A, C, E]
C: [B, D]
D: [A, C, E]
E: [B, D]
```

En la mayoría de situaciones las listas de adyacencia pueden ser las mas útiles, ya que **cada nodo guarda solo la información de las aristas que tiene**, pero el problema es que encontrar una arista entre dos nodos puede ser un poco costoso, ya que tenemos que recorrer la lista del nodo A, y luego la lista del nodo B, por lo tanto no es directo como las matrices. Pero **en la mayoría de situaciones, esto no es un problema, ya que la mayoría de las operaciones que hagamos con grafos no serán de encontrar una arista entre dos nodos, sino de recorrer el grafo**.

### Grafo en JavaScript

Existen muchas formas de implementar un grafo en JS, pero a pesar de que cada elemento de un grafo es un nodo, en este caso no vamos a implementar la clase Nodo y vamos a implementar directamente la Matriz de Adyacencia y la Lista de Adyacencia.

```js
  A --- B
  |   / |
  |  C  |
  | /   |
  D --- E
```

#### Matriz de Adyacencia en JS

Vamos a crear una clase llamada **MatrixGraph** que recibirá la lista de nodos como parámetro. La clase tendrá 2 propiedades, **nodesMap** que será un Mapa con los indices de los nodos, este mapa nos ayudará a acceder de forma muy rápida a los nodos en la matriz. La segunda propiedad es **matrix** que será la matriz de adyacencia, la inicializamos como un Array vacio, pero al construir el objeto vamos a añadirle tantos elementos como nodos haya, y por cada elemento creamos un nuevo Array con la misma cantidad de nodos, todos los elementos los inicializamos a 0 ya que no hay ninguna arista entre los nodos de momento.

Veamoslo en código:

```js
class MatrixGraph {
  constructor(nodes) {
    this.nodesMap = {} // vamos a guardar un mapa de los indices de los nodos para poder acceder rápidamente a ellos 
    this.matrix = [] // matriz de adyacencia
    nodes.forEach((node, index) => {
      this.nodesMap[node] = index // guardamos el valor del nodo como Key y el indice como Value
      this.matrix[index] = new Array(nodes.length).fill(0) // Por cada nodo creamos una fila de la matriz de adyacencia que tenga tantos elementos como nodos haya
    })
  }
}
```

Vamos a agregar la lista de nodos del grafo que creamos anteriormente:

```js
const matrix = new MatrixGraph(['A', 'B', 'C', 'D', 'E'])
```

El resultado será el siguiente:

```js
MatrixGraph {
  nodesMap: { A: 0, B: 1, C: 2, D: 3, E: 4 }, // mapa de los indices de los nodos
  matrix: [
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
  ] // matriz de adyacencia sin aristas
}
```

Para verlo más gráficamente aún, sería así:

```js
  A B C D E
A 0 0 0 0 0
B 0 0 0 0 0
C 0 0 0 0 0
D 0 0 0 0 0
E 0 0 0 0 0
```

Ahora vamos a crear las aristas o edges entre los nodos, para ello vamos a crear un método llamado **addEdge** que reciba como parámetros el nodo de origen y el nodo de destino, recordemos que en la matriz de adyacencia, si hay una arista entre dos nodos, el valor de la celda será 1, por lo que vamos a cambiar el valor de la celda a 1.

```js
class MatrixGraph {
  constructor(nodes) {
    this.nodesMap = {}
    this.matrix = []
    nodes.forEach((node, index) => {
      this.nodesMap[node] = index 
      this.matrix[index] = new Array(nodes.length).fill(0) 
    })
  }

  addEdge(node1, node2) {
    // Aquí es dónde nos es de mucha ayuda el Mapa de nodos, ya que podremos acceder directamente a la matriz con el indice del nodo, 
    // sin esto tendríamos que recorrer la matriz.
    const index1 = this.nodesMap[node1] 
    const index2 = this.nodesMap[node2]
    this.matrix[index1][index2] = 1 // Cambiamos el valor de la celda a 1
    this.matrix[index2][index1] = 1 
  }
}
```

Ahora vamos a agregar las aristas que vemos en el grafo:

```js
matrix.addEdge('A', 'B')
matrix.addEdge('A', 'D')
matrix.addEdge('B', 'C')
matrix.addEdge('B', 'E')
matrix.addEdge('C', 'D')
matrix.addEdge('D', 'E')
```

El resultado será el siguiente:

```js
[
  [ 0, 1, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1 ],
  [ 0, 1, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1 ],
  [ 0, 1, 0, 1, 0 ]
]
```

Podemos ver que es el mismo que habíamos indicado en un principio:

```js
  A B C D E
A 0 1 0 1 0
B 1 0 1 0 1
C 0 1 0 1 0
D 1 0 1 0 1
E 0 1 0 1 0
```

#### Lista de Adyacencia en JS

Vamos a crear una clase llamada **ListGraph** que recibirá la lista de nodos como parámetro. La clase tendrá 2 propiedades, **nodes** que será un Array con los nodos, y **list** que será un Mapa con los nodos como Key y un Array con los nodos adyacentes como Value.

Veamoslo en código:

```js
class ListGraph {
  constructor(nodes) {
    this.nodes = nodes
    this.list = new Map()
    nodes.forEach(node => this.list.set(node, [])) // Por cada nodo creamos un Array vació en el Mapa
  }
}
```

De esta forma tendríamos que inicializar el grafo pasándole los nodos como parámetro:

```js
const list = new ListGraph(['A', 'B', 'C', 'D', 'E'])
```

El resultado será el siguiente:

```js
ListGraph {
  nodes: [ 'A', 'B', 'C', 'D', 'E' ],
  list: Map(5) {
    'A' => [],
    'B' => [],
    'C' => [],
    'D' => [],
    'E' => []
  }
}
```

Pero veamos como lo haríamos en caso de querer ir **añadiendo los nodos de forma dinámica**:

```js
class ListGraph {
  constructor() {
    this.nodes = []
    this.list = new Map()
  }

  addNode(node) {
    this.nodes.push(node)
    this.list.set(node, [])
  }
}
```

De esta forma para agregar los nodos tenemos que llamar al método **addNode**:

```js
const list = new ListGraph()
list.addNode('A')
list.addNode('B')
list.addNode('C')
list.addNode('D')
list.addNode('E')
```

El resultado será exactamente el mismo que el anterior, pero en este caso podemos ir añadiendo los nodos de forma dinámica:

```js
ListGraph {
  nodes: [ 'A', 'B', 'C', 'D', 'E' ],
  list: Map(5) {
    'A' => [],
    'B' => [],
    'C' => [],
    'D' => [],
    'E' => []
  }
}
```

Ahora vamos a crear las aristas o edges entre los nodos, para ello vamos a crear un método llamado **addEdge** que reciba como parámetros el nodo de origen y el nodo de destino, recordemos que en la lista de adyacencia, si un nodo tiene una arista con otro nodo, el nodo de destino se añade al Array del nodo de origen.

```js
class ListGraph2 {
  constructor() {
    this.nodes = []
    this.list = new Map()
  }

  addNode(node) {
    this.nodes.push(node)
    this.list.set(node, [])
  }

  // Buscamos el nodo de origen en el Mapa y añadimos el nodo de destino al Array
  // esto lo tenemos que hacer para el nodo de origen y para el nodo de destino
  addEdge(node1, node2) {
    this.list.get(node1).push(node2) 
    this.list.get(node2).push(node1)
  }
}
```

Ahora vamos a añadir las aristas que vemos en el grafo:

```js
list2.addEdge('A', 'B')
list2.addEdge('A', 'D')
list2.addEdge('B', 'C')
list2.addEdge('B', 'E')
list2.addEdge('C', 'D')
list2.addEdge('D', 'E')
```

El resultado será el siguiente:

```js
ListGraph2 {
  nodes: [ 'A', 'B', 'C', 'D', 'E' ],
  list: Map(5) {
    'A' => [ 'B', 'D' ],
    'B' => [ 'A', 'C', 'E' ],
    'C' => [ 'B', 'D' ],
    'D' => [ 'A', 'C', 'E' ],
    'E' => [ 'B', 'D' ]
  }
}
```

Que es el mismo que habíamos visto en un principio:

```js
A: [B, D]
B: [A, C, E]
C: [B, D]
D: [A, C, E]
E: [B, D]
```
