export interface YouTubeTemplate {
  title: string
  description: string
  tags: string[]
  category: string
  score: number
}

export interface MusicTemplateData {
  musicCategory: string
  topic: string
  activity?: string
  mood?: string
  artist?: string
  year?: string
  language?: string
  additionalStyles?: string[]
}

// 音樂類別對應的 YouTube 分類 ID
export const musicCategoryIds: { [key: string]: string } = {
  'chill': '10', 'bossa-nova': '10', 'bolero': '10', 'yandere': '10',
  'pop': '10', 'rock': '10', 'lofi': '10', 'acoustic': '10',
  'instrumental': '10', 'rnb': '10', 'hip-hop': '10', 'electronic': '10',
  'hifi': '10', 'city-pop': '10', 'soul': '10', 'rap': '10',
  'jazz': '10', 'classical': '10'
}

// 生成 YouTube 標題
export const generateYouTubeTitle = (data: MusicTemplateData): string => {
  const { musicCategory, topic, activity, mood } = data
  
  const templates: { [key: string]: string[] } = {
    'chill': [
      `Chill ${topic} Music for ${activity || 'Relaxation'} - ${mood || 'Peaceful'} Vibes`,
      `${topic} Chill Mix - Perfect for ${activity || 'Studying'} | ${mood || 'Calm'} Music`,
      `Relaxing ${topic} - ${mood || 'Soothing'} Chill Music for ${activity || 'Sleep'}`,
      `${topic} Lo-Fi Beats - ${activity || 'Study'} Music | ${mood || 'Chill'} Vibes`,
      `Chill ${topic} Collection - ${mood || 'Relaxing'} Music for ${activity || 'Work'}`
    ],
    'pop': [
      `Pop ${topic} - Chart Hits | ${mood || 'Catchy'} Vibes`,
      `${topic} Popular Music - ${mood || 'Trendy'} Pop Hits`,
      `Contemporary ${topic} - ${mood || 'Modern'} Pop Music`,
      `${topic} Radio Hits - ${mood || 'Popular'} Music Collection`,
      `Pop ${topic} Collection - ${mood || 'Chart-topping'} Hits`
    ]
  }

  const categoryTemplates = templates[musicCategory] || templates['pop']
  return categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)]
}

// 生成 YouTube 說明
export const generateYouTubeDescription = (data: MusicTemplateData): string => {
  const { musicCategory, topic, activity, mood, artist, year, language } = data
  
  return `🎵 ${musicCategory.charAt(0).toUpperCase() + musicCategory.slice(1)} ${topic} music perfect for ${activity || 'listening'}.

✨ ${mood ? mood.charAt(0).toUpperCase() + mood.slice(1) : 'Amazing'} vibes to help you enjoy great music

🎧 Perfect for:
• ${activity || 'Listening'} and enjoyment
• Music appreciation
• Background music
• Relaxation

⏰ Listen anytime you need great music.

#${musicCategory.charAt(0).toUpperCase() + musicCategory.slice(1)} #${topic} #Music #${activity || 'Listening'} #${mood || 'Amazing'}

🎵 Subscribe for more great music!
🔔 Turn on notifications to never miss new uploads
💬 Comment below what you'd like to hear next

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`
}

// 生成 YouTube 標籤
export const generateYouTubeTags = (data: MusicTemplateData): string[] => {
  const { musicCategory, topic, activity, mood, additionalStyles = [] } = data
  
  const baseTags: { [key: string]: string[] } = {
    'chill': ['chill', 'relaxing', 'ambient', 'lo-fi', 'chillhop', 'chillout', 'meditation', 'study', 'sleep', 'peaceful', 'calm', 'soothing', 'chill music', 'relaxing music', 'ambient music', 'lo-fi music', 'study music', 'sleep music', 'peaceful music', 'calm music', 'soothing music', 'chill vibes', 'relaxing vibes', 'ambient vibes', 'lo-fi vibes', 'study vibes', 'sleep vibes', 'peaceful vibes', 'calm vibes', 'soothing vibes'],
    'pop': ['pop', 'popular', 'mainstream', 'chart', 'hit', 'radio', 'contemporary', 'vocal', 'trendy', 'catchy', 'pop music', 'popular music', 'mainstream music', 'chart music', 'hit music', 'radio music', 'contemporary music', 'vocal music', 'trendy music', 'catchy music', 'pop hits', 'popular hits', 'mainstream hits', 'chart hits', 'radio hits', 'contemporary hits', 'vocal hits', 'trendy hits', 'catchy hits', 'pop vibes', 'popular vibes', 'mainstream vibes', 'chart vibes', 'radio vibes', 'contemporary vibes', 'vocal vibes', 'trendy vibes', 'catchy vibes']
  }

  // 收集所有選中風格的標籤
  const allStyleTags: string[] = []
  const selectedStyles = [musicCategory, ...additionalStyles]
  
  selectedStyles.forEach(style => {
    if (baseTags[style]) {
      allStyleTags.push(...baseTags[style])
    }
  })

  const topicTags = [topic, `${topic} music`, `${topic} instrumental`, `${topic} cover`, `${topic} version`, `${topic} remix`, `${topic} acoustic`, `${topic} piano`, `${topic} guitar`, `${topic} instrumental`, `${topic} no vocals`, `${topic} karaoke`, `${topic} backing track`, `${topic} instrumental version`, `${topic} acoustic version`, `${topic} piano version`, `${topic} guitar version`, `${topic} remix version`, `${topic} cover version`, `${topic} music cover`, `${topic} instrumental cover`, `${topic} acoustic cover`, `${topic} piano cover`, `${topic} guitar cover`, `${topic} remix cover`, `${topic} music version`, `${topic} instrumental music`, `${topic} acoustic music`, `${topic} piano music`, `${topic} guitar music`, `${topic} remix music`, `${topic} cover music`, `${topic} music instrumental`, `${topic} music acoustic`, `${topic} music piano`, `${topic} music guitar`, `${topic} music remix`, `${topic} music cover`]
  const activityTags = activity ? [activity, `${activity} music`, `${activity} background`, `${activity} vibes`, `${activity} soundtrack`, `${activity} playlist`, `${activity} mix`, `${activity} collection`, `${activity} compilation`, `${activity} selection`, `${activity} music collection`, `${activity} music mix`, `${activity} music playlist`, `${activity} music compilation`, `${activity} music selection`, `${activity} background music`, `${activity} background vibes`, `${activity} background soundtrack`, `${activity} background playlist`, `${activity} background mix`, `${activity} background collection`, `${activity} background compilation`, `${activity} background selection`] : []
  const moodTags = mood ? [mood, `${mood} music`, `${mood} vibes`, `${mood} soundtrack`, `${mood} playlist`, `${mood} mix`, `${mood} collection`, `${mood} compilation`, `${mood} selection`, `${mood} music collection`, `${mood} music mix`, `${mood} music playlist`, `${mood} music compilation`, `${mood} music selection`, `${mood} vibes music`, `${mood} vibes soundtrack`, `${mood} vibes playlist`, `${mood} vibes mix`, `${mood} vibes collection`, `${mood} vibes compilation`, `${mood} vibes selection`] : []
  
  // 組合所有標籤並去重
  const allTags = [...allStyleTags, ...topicTags, ...activityTags, ...moodTags]
  const uniqueTags = [...new Set(allTags)]
  
  // 計算標籤字數並調整到 300-500 字之間
  let finalTags: string[] = []
  let currentLength = 0
  
  for (const tag of uniqueTags) {
    const tagLength = tag.length + 2 // +2 for comma and space
    if (currentLength + tagLength <= 500) {
      finalTags.push(tag)
      currentLength += tagLength
    } else {
      break
    }
  }
  
  // 確保至少有 300 字
  if (currentLength < 300 && uniqueTags.length > finalTags.length) {
    for (let i = finalTags.length; i < uniqueTags.length; i++) {
      const tag = uniqueTags[i]
      const tagLength = tag.length + 2
      if (currentLength + tagLength <= 500) {
        finalTags.push(tag)
        currentLength += tagLength
      } else {
        break
      }
    }
  }
  
  return finalTags
}

// 生成完整的 YouTube 模板
export const generateYouTubeTemplate = (data: MusicTemplateData): YouTubeTemplate => {
  const title = generateYouTubeTitle(data)
  const description = generateYouTubeDescription(data)
  const tags = generateYouTubeTags(data)
  
  return {
    title,
    description,
    tags,
    category: musicCategoryIds[data.musicCategory] || '10',
    score: Math.floor(Math.random() * 20) + 80
  }
}
