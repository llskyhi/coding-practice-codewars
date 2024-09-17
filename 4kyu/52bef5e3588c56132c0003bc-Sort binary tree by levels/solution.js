// https://www.codewars.com/kata/52bef5e3588c56132c0003bc

// class Node {
//     constructor(value, left = null, right = null) {
//         this.value = value;
//         this.left  = left;
//         this.right = right;
//     }
// }

function treeByLevels (rootNode) {
    if (rootNode === null)
        return [];

    let nodes = [rootNode];
    for (let traversalIndex = 0; traversalIndex < nodes.length; traversalIndex++) {
        let node = nodes[traversalIndex]
        if (node.left !== null)
            nodes.push(node.left)
        if (node.right !== null)
            nodes.push(node.right)
    }

	return nodes.map((node) => node.value);
}
