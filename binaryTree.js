class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const root = new Node(2,
  new Node(5, 
    new Node(3), 
    new Node(4)),
  new Node(7)
)

// console.log(JSON.stringify(root, null, 2))

const preOrder = (node) => {
  if (!node) return null
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
  preOrder(node.left)
  preOrder(node.right)
}
console.log('preOrder')
preOrder(root)

const inOrder = (node) => {
  if (!node) return null
  inOrder(node.left)
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
  inOrder(node.right)
}

console.log('inOrder')
inOrder(root)

const postOrder = (node) => {
  if (!node) return null
  postOrder(node.left)
  postOrder(node.right)
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
}
console.log('postOrder')
postOrder(root)

const breadthFirstSearch = (node) => {
  const queue = [node]
  while (queue.length) {
    const current = queue.shift()
    console.log(current.value) // <--- Aquí es dónde accedemos al nodo
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
}
console.log('breadthFirstSearch')
breadthFirstSearch(root)