// 15-interpreter/variable.expression.ts
import { Expression } from "./expression";
export class VariableExpression implements Expression {
  constructor(private name: string) {}

  interpret(context: Record<string, boolean>): boolean {
    return context[this.name];
  }
}
