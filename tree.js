// Vamos a crear la siguiente estructura de datos e itarla

//        [1] 
//       / | \
//     [2][3][4] 
//     /|\      \
//  [5][6][7]   [8]

class Node {
  constructor(value, children = []) {
    this.value = value
    this.children = children
  }
}

const root = new Node(1, [
  new Node(2, [new Node(5), new Node(6), new Node(7)]),
  new Node(3),
  new Node(4, [new Node(8)]),
])

// Formas de iterar el arbol con pre-order **********

// function preOrder(node) {
//   console.log(node.value) // <--- Aquí es dónde accedemos al nodo
//   node.children.forEach(preOrder)
// }

function preOrder(node) {
  if (!node) return null
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
  for (let child of node.children) {
    preOrder(child)
  }
}

console.log('preOrder')
preOrder(root)

// Formas de iterar el arbol con post-order **********

// function postOrder(node) {
//   node.children.forEach(postOrder)
//   console.log(node.value) // <--- Aquí es dónde accedemos al nodo
// }

function postOrder(node) {
  if (!node) return null
  for (let child of node.children) {
    postOrder(child)
  }
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
}

console.log('postOrder')
postOrder(root)

// Forma de iterar el arbol con breadth-first-search **********

function breadthFirstSearch(node) {
  const queue = [node]
  while (queue.length) {
    const currentNode = queue.shift()
    console.log(currentNode.value) // <--- Aquí es dónde accedemos al nodo
    queue.push(...currentNode.children)
  }
}

// function breadthFirstSearch(node) {
//   const queue = [node]
//   while (queue.length) {
//     const currentNode = queue.shift()
//     console.log(currentNode.value) // <--- Aquí es dónde accedemos al nodo
//     for (let child of currentNode.children) {
//       queue.push(child)
//     }
//   }
// }

console.log('breadthFirstSearch')
breadthFirstSearch(root)
