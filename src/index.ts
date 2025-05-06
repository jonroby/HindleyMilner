export type Expression =
  | VariableExpression
  | ApplicationExpression
  | AbstractionExpression
  | LetExpression;

export interface VariableExpression {
  type: "var";
  x: string;
}

export interface ApplicationExpression {
  type: "app";
  x: string;
}

export interface AbstractionExpression {
  type: "abs";
  x: string;
  e: Expression;
}

export interface LetExpression {
  type: "let";
  x: string;
  e1: Expression;
  e2: Expression;
}

export type MonoType =
| TypeVariable
| TypeFunctionApplication

export type PolyType =
| MonoType
| TypeQuantifier

export type TypeFunction = "->" | "Bool" | "Int" | "List"

export interface TypeVariable {
  type: 'ty-var',
  a: string
}

export interface TypeFunctionApplication {
  type: 'ty-app',
  C: TypeFunction,
  mus: MonoType[],
}

export interface TypeQuantifier {
  type: 'ty-quantifier',
  a: string,
  sigma: PolyType,
}
