import { keyEnumObject, ValueTypeOf } from '~/utils/util'

/**
 * タグ情報。
 */
export const TAG_PROPERTIES = {
  health: { name: '健康', icon: '😷' },
  muji: { name: '無印良品', icon: '🈚️' },
  lifehack: { name: '生活術', icon: '🤳🏼' },
  customization: { name: 'ブログカスタマイズ', icon: '🔨' },
  trdr: { name: '雑記', icon: '📔' },
  coffee: { name: 'コーヒー', icon: '☕️' },
  develop: { name: '個人開発', icon: '👨🏻‍💻' },
  plant: { name: '観葉植物', icon: '🪴' },
  restaurant: { name: '飲食店', icon: '🍜' },
  notyet: { name: '未分類', icon: '❔' },
} as const

/**
 * タグ情報キー定数。
 */
export const TAG_KEYS = keyEnumObject(TAG_PROPERTIES)

/**
 * タグ情報キーの型定義。
 */
export type TagKey = ValueTypeOf<typeof TAG_KEYS>

/**
 * タグ名称からスラッグ（タグ情報のキー）を取得。
 * 該当なしの場合は未分類（notyet）を返却する。
 *
 * @param tagName タグ名称
 * @returns スラッグ（タグ情報のキー）
 */
const getTagSlug = (tagName: string) => {
  const tagSlug = Object.keys(TAG_PROPERTIES).filter(
    (key) => TAG_PROPERTIES[key as TagKey].name === tagName
  )
  return tagSlug || TAG_KEYS.NOTYET
}

/**
 * タグのスラッグ（タグ情報のキー）の一覧を取得。
 *
 * @returns スラッグ（タグ情報のキー）のリスト
 */
const getTagSlugList = () => Object.keys(TAG_PROPERTIES).map((key) => key)

/**
 * タグのスラッグ（タグ情報のキー）からタグ名を取得。
 * 該当なしの場合は未分類を返却する。
 *
 * @param tagSlug スラッグ（タグ情報のキー）
 * @returns タグ名称
 */
const getTagName = (tagSlug: string) => {
  const tag = TAG_PROPERTIES[tagSlug as TagKey]
  return tag ? tag.name : TAG_PROPERTIES.notyet.name
}

/**
 * タグ名称の一覧を取得。
 *
 * @returns タグ名称のリスト
 */
const getTagNameList = () =>
  Object.keys(TAG_PROPERTIES).map((key) => TAG_PROPERTIES[key as TagKey].name)

/**
 * タグのスラッグ（タグ情報のキー）からアイコンを取得。
 * 該当なしの場合は未分類のアイコンを返却する。
 *
 * @param tagSlug スラッグ（タグ情報のキー）
 * @returns アイコン
 */
const getTagIcon = (tagSlug: string) => {
  const tag = TAG_PROPERTIES[tagSlug as TagKey]
  return tag ? tag.icon : TAG_PROPERTIES.notyet.icon
}

export default (_: unknown, inject: any) => {
  inject('getTagSlug', getTagSlug)
  inject('getTagSlugList', getTagSlugList)
  inject('getTagName', getTagName)
  inject('getTagNameList', getTagNameList)
  inject('getTagIcon', getTagIcon)
}
