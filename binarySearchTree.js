//           [8]
//         /     \
//       [3]      [10]
//       /   \        \
//     [1]   [6]      [14]
//          /   \     /   \
//        [4]  [7] [13]   [15]

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const root = new Node(8,
  new Node(3,
    new Node(1),
    new Node(6,
      new Node(4),
      new Node(7))),
  new Node(10,
    null,
    new Node(14,
      new Node(13),
      new Node(15)))
)

const inOrder = (node) => {
  if (!node) return null
  inOrder(node.left)
  console.log(node.value) // <--- Aquí es dónde accedemos al nodo
  inOrder(node.right)
}

console.log('inOrder')
inOrder(root)

const search = (node, value) => {
  if (!node) return null
  if (node.value === value) return node
  if (value < node.value) return search(node.left, value)
  return search(node.right, value)
}

console.log(search(root, 3))