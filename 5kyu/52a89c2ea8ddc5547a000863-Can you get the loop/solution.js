function loop_size(node){
    let walker = node;
    let doubleWalker = node.next;
    while (walker !== doubleWalker) {
        doubleWalker = doubleWalker.next.next;
        walker = walker.next;
    }
    let loop_size;
    for (loop_size = 1; walker.next !== doubleWalker; loop_size++)
        walker = walker.next;
    return loop_size;
}

const assert = require('assert');

class Node {
    next;
    setNext(next_node) {
        this.next = next_node;
    }
}

{
    const A = new Node();
    A.setNext(A);
    assert(loop_size(A) === 1);
}
{
    const A = new Node(), B = new Node();
    A.setNext(B), B.setNext(A);
    assert(loop_size(A) === 2);
}
{
    const A = new Node(), B = new Node();
    A.setNext(B), B.setNext(B);
    assert(loop_size(A) === 1);
}
{
    const A = new Node(), B = new Node(), C = new Node();
    A.setNext(B), B.setNext(C), C.setNext(C);
    assert(loop_size(A) === 1);
}
{
    const A = new Node(), B = new Node(), C = new Node();
    A.setNext(B), B.setNext(C), C.setNext(B);
    assert(loop_size(A) === 2);
}
{
    const A = new Node(), B = new Node(), C = new Node();
    A.setNext(B), B.setNext(C), C.setNext(A);
    assert(loop_size(A) === 3);
}
