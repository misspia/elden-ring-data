// export type SentenceToCamelCase<S extends string> =
//   S extends `${infer P1} ${infer P2}${infer P3}`
//     ? `${Lowercase<P1>}${Uppercase<P2>}${SentenceToCamelCase<P3>}`
//     : Lowercase<S>;

// export type SentenceCaseKeysToCamelCase<T> = {
//   [K in keyof T as SentenceToCamelCase<string & K>]: T[K] extends {}
//     ? SentenceCaseKeysToCamelCase<T[K]>
//     : T[K];
// };

export type SentenceCaseKeysToCamelCase<T> = {
  [K in keyof T as SentenceToCamelCase<string & K>]: T[K] extends {}
    ? SentenceCaseKeysToCamelCase<T[K]>
    : T[K];
};

export type SentenceToCamelCase<S extends string> =
  S extends Uppercase<S>
    ? Lowercase<S>
    : S extends `${infer P1} ${infer P2}${infer P3}`
      ? `${Lowercase<P1>}${Uppercase<P2>}${SentenceToCamelCase<P3>}`
      : Lowercase<S>;
