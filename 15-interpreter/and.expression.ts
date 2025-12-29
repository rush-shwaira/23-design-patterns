// 15-interpreter/and.expression.ts
import { Expression } from "./expression";

export class AndExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(context: Record<string, boolean>): boolean {
    return this.left.interpret(context) && this.right.interpret(context);
  }
}
