import { ScreamingSnakeCase, UnionToIntersection } from 'type-fest'
import { upperCase } from 'upper-case'
import { snakeCase } from 'change-case'

/**
 * 指定オブジェクトのKeyの型
 */
export type KeyTypeOf<T> = keyof T

/**
 * 指定オブジェクトのValueの型
 */
export type ValueTypeOf<T> = T[keyof T]

type UnionToObjectUnion<X extends string> = X extends string
  ? { [key in ScreamingSnakeCase<X>]: X }
  : never
type UnionToEnumObject<X extends string> = UnionToIntersection<
  UnionToObjectUnion<X>
>
/**
 * 文字配列から定数オブジェクトを生成
 *
 * @param args stringの配列
 * @returns 文字配列から生成した定数オブジェクト
 *
 * @example
 * const ALERT_TYPE = arrayToEnumObject(['error', 'warning'])
 *
 * // このとき、以下のように出力される
 * // ALERT_TYPE = {                                                                                                                                   23:50:18
 * //   ERROR: 'error',
 * //   WARNING: 'warning'
 * // }
 *
 */
export const arrayToEnumObject = <T extends string>(
  args: Readonly<T[]>
): UnionToEnumObject<T> =>
  args.reduce(
    (draft, value) => ({ ...draft, [upperCase(snakeCase(value))]: value }),
    {}
  ) as unknown as UnionToEnumObject<T>

type StringKeyBemRecord = Record<
  string,
  string | number | boolean | undefined | null
>
type BemModifierRecord =
  | string
  | StringKeyBemRecord
  | (string | StringKeyBemRecord)[]

/**
 * BEM Classの配列生成
 *
 * clsxのような記述でclassの記述を行うユーティリティ。
 * https://www.npmjs.com/package/clsx
 *
 * @param groupAndElement - GroupName または GroupName__ElementName を文字列
 * @param modifiers modifierの配列
 * @returns BEM Classの配列
 *
 * @example
 * const hasMod4 = true;
 * const hasMod5 = false;
 * const mod6Value = 'value6'
 *
 * const classNames = bemx(
 *   // 第1引数で GroupName または GroupName__ElementName
 *   'GroupName__ElementName',
 *   // 第2引数以下で付与するModifierを列挙
 *   'mod1', // 文字列を直接指定
 *   ['mod2', 'mod3'] // 文字列の配列
 *   { mod4: hasMod4 , mod5: hasMod5 }, // オブジェクト形式の場合valueのboolean値でつけ外し可能
 *   {
 *     mod6 : mod6Value, // valueがstringの場合は --key-value形式のmodifierの付与が可能
 *     mod7: 0, // 数値は文字列のように出力
 *     mod8: '', // 空文字とundefinedはmodifierがつかない（falseと同じ扱い）
 *     mod9: undefined
 *   }
 * )
 * // このとき、以下のように出力される
 * // classNames = [
 * //  'GroupName__ElementName',
 * //  'GroupName__ElementName--mod1',
 * //  'GroupName__ElementName--mod2',
 * //  'GroupName__ElementName--mod3',
 * //  'GroupName__ElementName--mod4',
 * //  'GroupName__ElementName--mod6-value6',
 * //  'GroupName__ElementName--mod7-0',
 * // ]
 *
 */
export const bemx = (
  groupAndElement: string,
  ...modifiers: BemModifierRecord[]
): string[] => [
  groupAndElement,
  ...modifiers
    .flat()
    .flatMap((v1) => {
      if (typeof v1 === 'string') {
        return v1 ? [v1] : []
      }
      if (typeof v1 === 'object') {
        return Object.entries(v1).flatMap(([k, v]) => {
          if (
            (typeof v === 'string' && v.length > 0) ||
            typeof v === 'number'
          ) {
            return [`${k}-${v}`]
          }

          if (v) {
            return [`${k}`]
          }
          return []
        })
      }
      return [v1]
    })
    .map((m) => `${groupAndElement}--${m}`),
]
