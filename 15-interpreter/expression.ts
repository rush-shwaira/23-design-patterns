// 15-interpreter/expression.ts
export interface Expression {
  interpret(context: Record<string, boolean>): boolean;
}
