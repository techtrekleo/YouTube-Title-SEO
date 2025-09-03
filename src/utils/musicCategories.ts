export interface MusicCategory {
  id: string
  name: string
  englishName?: string
  description: string
  keywords: string[]
  titleTemplates: string[]
  trendingTopics: string[]
}

export const musicCategories: MusicCategory[] = [
  {
    id: 'chill',
    name: 'Chill',
    description: '輕鬆舒緩的音樂風格，適合放鬆和冥想',
    keywords: ['chill', 'relaxing', 'ambient', 'lo-fi', 'chillhop', 'chillout', 'meditation', 'study', 'sleep'],
    titleTemplates: [
      'Chill {topic} Music for {activity}',
      '{topic} Chill Vibes - {mood}',
      'Relaxing {topic} - Perfect for {activity}',
      'Chill {topic} Mix - {mood}',
      '{topic} Lo-Fi Beats for {activity}'
    ],
    trendingTopics: ['study music', 'sleep music', 'meditation', 'workout', 'cafe vibes', 'rainy day']
  },
  {
    id: 'bossa-nova',
    name: 'Bossa Nova',
    englishName: 'Bossa Nova',
    description: '巴西爵士樂風格，優雅而富有節奏感',
    keywords: ['bossa nova', 'brazilian', 'jazz', 'samba', 'latin', 'acoustic', 'guitar', 'vocal'],
    titleTemplates: [
      'Bossa Nova {topic} - Brazilian Jazz',
      '{topic} Bossa Nova Classics',
      'Smooth Bossa Nova {topic} - {mood}',
      'Brazilian {topic} - Bossa Nova Style',
      '{topic} Jazz Bossa Nova Mix'
    ],
    trendingTopics: ['brazilian music', 'latin jazz', 'acoustic guitar', 'vocal jazz', 'cafe music', 'romantic']
  },
  {
    id: 'bolero',
    name: 'Bolero',
    englishName: 'Bolero',
    description: '浪漫的拉丁舞曲，充滿情感和優雅',
    keywords: ['bolero', 'latin', 'romantic', 'dance', 'spanish', 'ballroom', 'passionate', 'elegant'],
    titleTemplates: [
      'Bolero {topic} - Romantic Latin Music',
      '{topic} Bolero Classics',
      'Passionate Bolero {topic} - {mood}',
      'Latin {topic} - Bolero Style',
      '{topic} Romantic Bolero Mix'
    ],
    trendingTopics: ['latin dance', 'romantic music', 'spanish music', 'ballroom dance', 'passionate', 'elegant']
  },
  {
    id: 'yandere',
    name: '病嬌',
    englishName: 'Yandere',
    description: '動漫病嬌風格音樂，充滿戲劇性和情感張力',
    keywords: ['病嬌', 'yandere', 'anime', 'dramatic', 'intense', 'emotional', 'dark', 'obsessive', 'japanese'],
    titleTemplates: [
      '病嬌 {topic} - Yandere Vibes',
      '{topic} 病嬌音樂集',
      'Dramatic Yandere {topic} - {mood}',
      '病嬌 {topic} - Intense Emotions',
      '{topic} Yandere Music Mix'
    ],
    trendingTopics: ['anime music', 'japanese music', 'dramatic', 'emotional', 'dark vibes', 'intense']
  },
  {
    id: 'jazz',
    name: '爵士樂',
    englishName: 'Jazz',
    description: '經典爵士樂，充滿即興和複雜的和聲',
    keywords: ['jazz', 'swing', 'bebop', 'smooth jazz', 'fusion', 'improvisation', 'saxophone', 'piano'],
    titleTemplates: [
      'Jazz {topic} - Classic Swing',
      '{topic} Jazz Standards',
      'Smooth Jazz {topic}',
      '{topic} Bebop Classics',
      'Jazz Fusion {topic} Mix'
    ],
    trendingTopics: ['jazz standards', 'smooth jazz', 'bebop', 'fusion', 'saxophone', 'piano jazz']
  },
  {
    id: 'classical',
    name: '古典音樂',
    englishName: 'Classical',
    description: '經典古典音樂，優雅而永恆',
    keywords: ['classical', 'orchestra', 'symphony', 'piano', 'violin', 'mozart', 'beethoven', 'chopin'],
    titleTemplates: [
      'Classical {topic} - Orchestral Masterpieces',
      '{topic} Classical Music',
      'Piano {topic} - Classical',
      '{topic} Symphony Classics',
      'Classical {topic} Collection'
    ],
    trendingTopics: ['orchestra', 'piano classical', 'symphony', 'mozart', 'beethoven', 'chopin']
  },
  {
    id: 'electronic',
    name: '電子音樂',
    englishName: 'Electronic',
    description: '現代電子音樂，充滿節奏和創新',
    keywords: ['electronic', 'edm', 'techno', 'house', 'trance', 'dubstep', 'ambient', 'synth'],
    titleTemplates: [
      'Electronic {topic} - EDM Mix',
      '{topic} Techno Beats',
      'House {topic} Music',
      '{topic} Electronic Vibes',
      'EDM {topic} Collection'
    ],
    trendingTopics: ['edm', 'techno', 'house music', 'trance', 'dubstep', 'ambient electronic']
  },
  {
    id: 'pop',
    name: '流行音樂',
    englishName: 'Pop',
    description: '當代流行音樂，朗朗上口',
    keywords: ['pop', 'popular', 'mainstream', 'chart', 'hit', 'radio', 'contemporary', 'vocal'],
    titleTemplates: [
      'Pop {topic} - Chart Hits',
      '{topic} Popular Music',
      'Contemporary {topic}',
      '{topic} Radio Hits',
      'Pop {topic} Collection'
    ],
    trendingTopics: ['chart hits', 'radio music', 'contemporary pop', 'vocal pop', 'mainstream']
  }
]

export const getMusicCategory = (id: string): MusicCategory | undefined => {
  return musicCategories.find(category => category.id === id)
}

export const getMusicCategoryByName = (name: string): MusicCategory | undefined => {
  return musicCategories.find(category => 
    category.name.toLowerCase().includes(name.toLowerCase()) ||
    category.englishName?.toLowerCase().includes(name.toLowerCase())
  )
}

export const generateMusicTitle = (
  category: MusicCategory,
  topic: string,
  activity?: string,
  mood?: string
): string => {
  const template = category.titleTemplates[Math.floor(Math.random() * category.titleTemplates.length)]
  
  return template
    .replace('{topic}', topic)
    .replace('{activity}', activity || 'listening')
    .replace('{mood}', mood || 'Relaxation')
}
