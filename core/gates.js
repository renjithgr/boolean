export default {
    AND: (A, B) => A && B,
    OR: (A, B) => A || B,
    NOT: (A) => !A,
    NAND: (A, B) => NOT(AND(A, B)),
    NOR: (A, B) => NOT(OR(A, B)),
    XOR: (A, B) => OR(AND(A, NOT(B)), AND(NOT(A), B)),
    XNOR: (A, B) => NOT(XOR(A, B))
};