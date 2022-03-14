import { arrayToEnumObject, ValueTypeOf } from '~/utils/util'

/**
 * ECモールASP種別。
 */
export const EC_MALL_ASP_TYPE = arrayToEnumObject([
  'amazon',
  'rakuten',
  'yahoo',
])
export type EcMallAspType = ValueTypeOf<typeof EC_MALL_ASP_TYPE>
