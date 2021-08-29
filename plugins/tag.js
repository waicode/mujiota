const tags = {
  health: '健康',
  muji: '無印良品',
  lifehack: '生活術',
  customization: 'ブログカスタマイズ',
  trdr: '雑記',
  coffee: 'コーヒー',
  develop: '個人開発',
  plant: '観葉植物',
  restaurant: '飲食店',
  notyet: '未分類',
}

const getTagName = (tagSlug) => {
  const tagName = tags[tagSlug]
  return tagName || '未分類'
}

const getTagSlug = (tagName) => {
  const tagSlug = Object.keys(tags).filter((key) => {
    return tags[key] === tagName
  })
  return tagSlug || 'notyet'
}

export default (_, inject) => {
  inject('getTagName', getTagName)
  inject('getTagSlug', getTagSlug)
}
