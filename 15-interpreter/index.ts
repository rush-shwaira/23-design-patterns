// 15-interpreter/index.ts
import { AndExpression } from "./and.expression";
import { VariableExpression } from "./variable.expression";

const A = new VariableExpression("A");
const B = new VariableExpression("B");

const rule = new AndExpression(A, B);
const context = { A: true, B: false };

console.log(rule.interpret(context));
