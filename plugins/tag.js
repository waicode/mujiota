const tags = {
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

const getTagSlug = (tagName) => {
  const tagSlug = Object.keys(tags).filter((key) => {
    return tags[key].name === tagName
  })
  return tagSlug || 'notyet'
}

const getTagName = (tagSlug) => {
  const tag = tags[tagSlug]
  if (tag) {
    return tag.name
  }
  return tags.notyet.name
}

const getTagIcon = (tagSlug) => {
  const tag = tags[tagSlug]
  if (tag) {
    return tag.icon
  }
  return tags.notyet.icon
}

export default (_, inject) => {
  inject('getTagSlug', getTagSlug)
  inject('getTagName', getTagName)
  inject('getTagIcon', getTagIcon)
}
