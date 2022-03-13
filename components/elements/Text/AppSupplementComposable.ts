import { arrayToEnumObject, ValueTypeOf } from '~/composables/util'

/**
 * 補足説明種別。
 */
export const SUPPLEMENT_TYPE = arrayToEnumObject(['normal', 'warning'])
export type SupplementType = ValueTypeOf<typeof SUPPLEMENT_TYPE>
