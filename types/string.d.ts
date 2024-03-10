/// <reference path="generic.d.ts" />
/// <reference path="index.d.ts" />
/// <reference path="tuple.d.ts" />
import { CamelCase, PascalCase, SnakeCase, TitleCase, Words } from 'string-ts';

declare global {
  export namespace StringLiteralList {
    export namespace string {
      /**
       * @credit @gustavoguichard
       * For the string manipulation types,
       * borrowed and adapted from the library string-ts
       */

      type GetStringPositiveIndex<T extends string, I extends number> =
        generic.IsNegative<I> extends false
          ? I
          : generic.Subtract<Length<T>, generic.Abs<I>>;

      type IsStringLiteral<T extends string> = [T] extends [string]
        ? [string] extends [T]
          ? false
          : Uppercase<T> extends Uppercase<Lowercase<T>>
            ? Lowercase<T> extends Lowercase<Uppercase<T>>
              ? true
              : false
            : false
        : false;

      export type Split<T extends string, delimiter extends string = ''> =
        IsStringLiteral<T | delimiter> extends true
          ? T extends `${infer first}${delimiter}${infer rest}`
            ? [first, ...Split<rest, delimiter>]
            : T extends ''
              ? []
              : [T]
          : string[];

      type Length<T extends string> =
        IsStringLiteral<T> extends true ? Split<T>['length'] : number;

      export type StringConcat<
        T1 extends string | number | bigint | boolean,
        T2 extends string | number | bigint | boolean,
      > = `${T1}${T2}`;

      type CaseTransform<
        T extends string,
        Transform extends
          | 'uppercase'
          | 'lowercase'
          | 'capitalize'
          | 'unCapitalize'
          | 'pascalCase'
          | 'camelCase'
          | 'snakeCase',
      > = Transform extends 'uppercase'
        ? Uppercase<T>
        : Transform extends 'lowercase'
          ? Lowercase<T>
          : Transform extends 'capitalize'
            ? TitleCase<T>
            : Transform extends 'unCapitalize'
              ? Split<T, ' '> extends [
                  infer U extends string,
                  ...infer Rest extends string[],
                ]
                ? U extends string
                  ? [Rest['length']] extends [0]
                    ? Uncapitalize<U>
                    : Rest extends readonly string[]
                      ? `${Uncapitalize<U>} ${tuple.Join<tuple.TupleWithCaseTransform<Rest, 'unCapitalize', []>, ' '>}`
                      : T
                  : T
                : T
              : Transform extends 'pascalCase'
                ? PascalCase<ReplaceAll<T, ','>>
                : Transform extends 'camelCase'
                  ? CamelCase<ReplaceAll<T, ','>>
                  : Transform extends 'snakeCase'
                    ? SnakeCase<ReplaceAll<T, ','>>
                    : T;

      export type DropSuffix<
        sentence extends string,
        suffix extends string,
      > = string extends sentence | suffix
        ? string
        : sentence extends `${infer rest}${suffix}`
          ? rest
          : sentence;

      export type DropPrefix<
        sentence extends string,
        prefix extends string,
      > = string extends sentence | prefix
        ? string
        : sentence extends `${prefix}${infer rest}`
          ? rest
          : sentence;

      type TrimStart<T extends string> =
        IsStringLiteral<T> extends true
          ? T extends ` ${infer rest}`
            ? TrimStart<rest>
            : T
          : string;

      type TrimEnd<T extends string> =
        IsStringLiteral<T> extends true
          ? T extends `${infer rest} `
            ? TrimEnd<rest>
            : T
          : string;

      export type Trim<T extends string> = TrimEnd<TrimStart<T>>;

      export type Replace<
        sentence extends string,
        lookup extends string | RegExp,
        replacement extends string = '',
      > = lookup extends string
        ? IsStringLiteral<lookup | sentence | replacement> extends true
          ? sentence extends `${infer rest}${lookup}${infer rest2}`
            ? `${rest}${replacement}${rest2}`
            : sentence
          : string
        : string;

      type ReplaceAll<
        sentence extends string,
        lookup extends string | RegExp,
        replacement extends string = '',
      > = lookup extends string
        ? IsStringLiteral<lookup | sentence | replacement> extends true
          ? sentence extends `${infer rest}${lookup}${infer rest2}`
            ? `${rest}${replacement}${ReplaceAll<rest2, lookup, replacement>}`
            : sentence
          : string
        : string;
    }
  }
}

export {};
