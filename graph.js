/* 
 A --- B        
 |   / |
 |  C  |
 | /   |
 D --- E

Matriz de adyacencia
  A B C D E
A 0 1 0 1 0
B 1 0 1 0 1
C 0 1 0 1 0
D 1 0 1 0 1
E 0 1 0 1 0

Lista de adyacencia

A => [B, D]
B => [A, C, E]
C => [B, D]
D => [A, C, E]
E => [B, D]

*/

class MatrixGraph {
  constructor(nodes) {
    this.nodesMap = {} // vamos a guardar un mapa de los indices de los nodos para poder acceder rapidamente a ellos 
    this.matrix = [] // matriz de adyacencia
    nodes.forEach((node, index) => {
      this.nodesMap[node] = index // guardamos el indice del nodo
      this.matrix[index] = new Array(nodes.length).fill(0) // Por cada nodo creamos una fila de la matriz de adyacencia que tenga tantos elementos como nodos haya
    })
  }

  addEdge(node1, node2) {
    const index1 = this.nodesMap[node1]
    const index2 = this.nodesMap[node2]
    this.matrix[index1][index2] = 1
    this.matrix[index2][index1] = 1
  }
}

const matrix = new MatrixGraph(['A', 'B', 'C', 'D', 'E'])

matrix.addEdge('A', 'B')
matrix.addEdge('A', 'D')
matrix.addEdge('B', 'C')
matrix.addEdge('B', 'E')
matrix.addEdge('C', 'D')
matrix.addEdge('D', 'E')

// console.log(matrix.matrix)

// Forma 1
class ListGraph {
  constructor(nodes) {
    this.nodes = nodes
    this.list = new Map()
    nodes.forEach(node => this.list.set(node, [])) // Por cada nodo creamos un Array vacio en el Mapa
  }

  addEdge(node1, node2) {
    this.list.get(node1).push(node2)
    this.list.get(node2).push(node1)
  }
}
const list = new ListGraph(['A', 'B', 'C', 'D', 'E'])
console.log(list)

// Forma 2
class ListGraph2 {
  constructor() {
    this.nodes = []
    this.list = new Map()
  }

  addNode(node) {
    this.nodes.push(node)
    this.list.set(node, [])
  }

  addEdge(node1, node2) {
    this.list.get(node1).push(node2)
    this.list.get(node2).push(node1)
  }
}

const list2 = new ListGraph2()
list2.addNode('A')
list2.addNode('B')
list2.addNode('C')
list2.addNode('D')
list2.addNode('E')

list2.addEdge('A', 'B')
list2.addEdge('A', 'D')
list2.addEdge('B', 'C')
list2.addEdge('B', 'E')
list2.addEdge('C', 'D')
list2.addEdge('D', 'E')

console.log(list2)