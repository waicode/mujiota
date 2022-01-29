type TagProperty = {
  name: string
  icon: string
}
type Tags = {
  [key: string]: TagProperty
}

const tags: Tags = {
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
}

const getTagSlug = (tagName: string) => {
  const tagSlug = Object.keys(tags).filter((key) => tags[key].name === tagName)
  return tagSlug || 'notyet'
}

const getTagSlugList = () => Object.keys(tags).map((key) => key)

const getTagName = (tagSlug: string) => {
  const tag = tags[tagSlug]
  if (tag) return tag.name
  return tags.notyet.name
}

const getTagNameList = () => Object.keys(tags).map((key) => tags[key].name)

const getTagIcon = (tagSlug: string) => {
  const tag = tags[tagSlug]
  if (tag) {
    return tag.icon
  }
  return tags.notyet.icon
}

export default (_: unknown, inject: any) => {
  inject('getTagSlug', getTagSlug)
  inject('getTagSlugList', getTagSlugList)
  inject('getTagName', getTagName)
  inject('getTagNameList', getTagNameList)
  inject('getTagIcon', getTagIcon)
}
