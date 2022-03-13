import { arrayToEnumObject, ValueTypeOf } from '~/composables/util'

/**
 * 書籍取り扱いASP種別。
 */
export const BOOK_ASP_TYPE = arrayToEnumObject([
  'amazon',
  'kindle',
  'rakuten',
  'kobo',
])
export type BookAspType = ValueTypeOf<typeof BOOK_ASP_TYPE>
