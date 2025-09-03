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
}

// 音樂類別對應的 YouTube 分類 ID
export const musicCategoryIds: { [key: string]: string } = {
  'chill': '10', // Music
  'bossa-nova': '10', // Music
  'bolero': '10', // Music
  'yandere': '10', // Music
  'jazz': '10', // Music
  'classical': '10', // Music
  'electronic': '10', // Music
  'pop': '10', // Music
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
    'bossa-nova': [
      `Bossa Nova ${topic} - Brazilian Jazz Music | ${mood || 'Smooth'} Vibes`,
      `${topic} Bossa Nova Classics - ${mood || 'Romantic'} Brazilian Jazz`,
      `Smooth Bossa Nova ${topic} - ${activity || 'Cafe'} Music | ${mood || 'Elegant'}`,
      `Brazilian ${topic} - Bossa Nova Style | ${mood || 'Charming'} Jazz`,
      `${topic} Jazz Bossa Nova Mix - ${mood || 'Sophisticated'} Latin Music`
    ],
    'bolero': [
      `Bolero ${topic} - Romantic Latin Music | ${mood || 'Passionate'} Vibes`,
      `${topic} Bolero Classics - ${mood || 'Romantic'} Latin Dance Music`,
      `Passionate Bolero ${topic} - ${activity || 'Dance'} Music | ${mood || 'Elegant'}`,
      `Latin ${topic} - Bolero Style | ${mood || 'Romantic'} Ballroom Music`,
      `${topic} Romantic Bolero Mix - ${mood || 'Passionate'} Latin Vibes`
    ],
    'yandere': [
      `病嬌 ${topic} - Yandere Vibes | ${mood || 'Dramatic'} Anime Music`,
      `${topic} 病嬌音樂集 - ${mood || 'Intense'} Yandere Style`,
      `Dramatic Yandere ${topic} - ${mood || 'Emotional'} Anime Music`,
      `病嬌 ${topic} - ${mood || 'Intense'} Emotions | Yandere Vibes`,
      `${topic} Yandere Music Mix - ${mood || 'Dramatic'} Anime Style`
    ],
    'jazz': [
      `Jazz ${topic} - Classic Swing Music | ${mood || 'Smooth'} Vibes`,
      `${topic} Jazz Standards - ${mood || 'Sophisticated'} Jazz Music`,
      `Smooth Jazz ${topic} - ${activity || 'Lounge'} Music | ${mood || 'Elegant'}`,
      `${topic} Bebop Classics - ${mood || 'Dynamic'} Jazz Music`,
      `Jazz Fusion ${topic} - ${mood || 'Innovative'} Jazz Mix`
    ],
    'classical': [
      `Classical ${topic} - Orchestral Masterpieces | ${mood || 'Elegant'} Music`,
      `${topic} Classical Music - ${mood || 'Timeless'} Orchestral Pieces`,
      `Piano ${topic} - Classical | ${mood || 'Refined'} Music Collection`,
      `${topic} Symphony Classics - ${mood || 'Majestic'} Orchestral Music`,
      `Classical ${topic} Collection - ${mood || 'Sophisticated'} Music`
    ],
    'electronic': [
      `Electronic ${topic} - EDM Mix | ${mood || 'Energetic'} Vibes`,
      `${topic} Techno Beats - ${mood || 'Dynamic'} Electronic Music`,
      `House ${topic} Music - ${activity || 'Party'} Vibes | ${mood || 'Upbeat'}`,
      `${topic} Electronic Vibes - ${mood || 'Modern'} EDM Music`,
      `EDM ${topic} Collection - ${mood || 'Electrifying'} Electronic Mix`
    ],
    'pop': [
      `Pop ${topic} - Chart Hits | ${mood || 'Catchy'} Vibes`,
      `${topic} Popular Music - ${mood || 'Trendy'} Pop Hits`,
      `Contemporary ${topic} - ${mood || 'Modern'} Pop Music`,
      `${topic} Radio Hits - ${mood || 'Popular'} Music Collection`,
      `Pop ${topic} Collection - ${mood || 'Chart-topping'} Hits`
    ]
  }

  const categoryTemplates = templates[musicCategory] || templates['chill']
  return categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)]
}

// 生成 YouTube 說明
export const generateYouTubeDescription = (data: MusicTemplateData): string => {
  const { musicCategory, topic, activity, mood, artist, year, language } = data
  
  const descriptions: { [key: string]: string } = {
    'chill': `🎵 Relaxing ${topic} music perfect for ${activity || 'studying, working, or sleeping'}.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} vibes to help you focus and relax` : '✨ Soothing melodies to calm your mind and reduce stress'}

🎧 Perfect for:
• ${activity || 'Studying'} and concentration
• Sleep and meditation
• Work and productivity
• Stress relief and relaxation

⏰ Listen anytime you need to unwind and find your peace.

#ChillMusic #${topic} #RelaxingMusic #${activity || 'StudyMusic'} #${mood || 'ChillVibes'} #LoFi #Ambient #Meditation #SleepMusic #Peaceful

🎵 Subscribe for more relaxing music content!
🔔 Turn on notifications to never miss new uploads
💬 Comment below what you'd like to hear next

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'bossa-nova': `🎵 Beautiful Bossa Nova ${topic} music with authentic Brazilian jazz vibes.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} Brazilian rhythms perfect for ${activity || 'cafe lounging'}` : '✨ Smooth Latin jazz perfect for sophisticated listening'}

🎧 Perfect for:
• ${activity || 'Cafe'} and lounge atmospheres
• Romantic dinners and dates
• Sophisticated gatherings
• Relaxing with friends

⏰ Experience the charm of Brazilian jazz anytime.

#BossaNova #${topic} #BrazilianJazz #${activity || 'CafeMusic'} #${mood || 'SmoothVibes'} #LatinJazz #Acoustic #Vocal #Romantic #Sophisticated

🎵 Subscribe for more Bossa Nova classics!
🔔 Turn on notifications for new Brazilian jazz
💬 Share your favorite Bossa Nova memories

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'bolero': `🎵 Romantic Bolero ${topic} music with passionate Latin rhythms.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} Bolero perfect for ${activity || 'dancing and romance'}` : '✨ Passionate Latin music perfect for romantic moments'}

🎧 Perfect for:
• ${activity || 'Dancing'} and ballroom
• Romantic evenings
• Latin dance parties
• Intimate gatherings

⏰ Feel the passion of Latin romance anytime.

#Bolero #${topic} #LatinMusic #${activity || 'DanceMusic'} #${mood || 'Romantic'} #SpanishMusic #Ballroom #Passionate #Elegant #LatinDance

🎵 Subscribe for more romantic Latin music!
🔔 Turn on notifications for passionate Bolero
💬 Share your dance stories

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'yandere': `🎵 病嬌 ${topic} music with intense dramatic anime vibes.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} Yandere style perfect for ${activity || 'anime watching'}` : '✨ Intense emotional music perfect for dramatic moments'}

🎧 Perfect for:
• ${activity || 'Anime'} watching and gaming
• Dramatic storytelling
• Emotional expression
• Japanese culture appreciation

⏰ Experience the intensity of Yandere emotions anytime.

#病嬌 #Yandere #${topic} #${activity || 'AnimeMusic'} #${mood || 'Dramatic'} #JapaneseMusic #Anime #Intense #Emotional #DarkVibes

🎵 Subscribe for more 病嬌 music!
🔔 Turn on notifications for dramatic anime music
💬 Share your favorite anime moments

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'jazz': `🎵 Classic Jazz ${topic} music with sophisticated swing and bebop.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} jazz perfect for ${activity || 'lounge listening'}` : '✨ Sophisticated jazz perfect for refined listening'}

🎧 Perfect for:
• ${activity || 'Lounge'} and sophisticated settings
• Wine tasting and fine dining
• Intellectual conversations
• Relaxed social gatherings

⏰ Enjoy the sophistication of jazz anytime.

#Jazz #${topic} #${activity || 'LoungeMusic'} #${mood || 'Sophisticated'} #Swing #Bebop #Saxophone #Piano #Fusion #ClassicJazz

🎵 Subscribe for more jazz classics!
🔔 Turn on notifications for sophisticated jazz
💬 Share your jazz appreciation

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'classical': `🎵 Classical ${topic} music with timeless orchestral masterpieces.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} classical perfect for ${activity || 'refined listening'}` : '✨ Timeless classical perfect for sophisticated appreciation'}

🎧 Perfect for:
• ${activity || 'Refined'} listening and appreciation
• Cultural enrichment
• Intellectual stimulation
• Sophisticated gatherings

⏰ Experience the timeless beauty of classical music anytime.

#Classical #${topic} #${activity || 'OrchestralMusic'} #${mood || 'Timeless'} #Symphony #Piano #Violin #Mozart #Beethoven #Chopin

🎵 Subscribe for more classical masterpieces!
🔔 Turn on notifications for timeless classical
💬 Share your classical appreciation

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'electronic': `🎵 Electronic ${topic} music with energetic EDM and techno beats.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} electronic perfect for ${activity || 'partying and dancing'}` : '✨ Energetic electronic perfect for dynamic listening'}

🎧 Perfect for:
• ${activity || 'Partying'} and dancing
• Workout and fitness
• Gaming and streaming
• Modern lifestyle

⏰ Feel the energy of electronic music anytime.

#Electronic #${topic} #${activity || 'EDM'} #${mood || 'Energetic'} #Techno #House #Trance #Dubstep #Synth #ModernMusic

🎵 Subscribe for more electronic beats!
🔔 Turn on notifications for energetic EDM
💬 Share your electronic music love

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'pop': `🎵 Pop ${topic} music with catchy chart-topping hits.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} pop perfect for ${activity || 'everyday listening'}` : '✨ Catchy pop perfect for mainstream enjoyment'}

🎧 Perfect for:
• ${activity || 'Everyday'} listening and enjoyment
• Radio and mainstream
• Social media and trends
• Popular culture

⏰ Enjoy the latest pop hits anytime.

#Pop #${topic} #${activity || 'PopularMusic'} #${mood || 'Catchy'} #ChartHits #Radio #Mainstream #Trendy #Contemporary #Vocal

🎵 Subscribe for more pop hits!
🔔 Turn on notifications for chart-topping music
💬 Share your favorite pop moments

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`
  }

  return descriptions[musicCategory] || descriptions['chill']
}

// 生成 YouTube 標籤
export const generateYouTubeTags = (data: MusicTemplateData): string[] => {
  const { musicCategory, topic, activity, mood } = data
  
  const baseTags: { [key: string]: string[] } = {
    'chill': ['chill', 'relaxing', 'ambient', 'lo-fi', 'chillhop', 'chillout', 'meditation', 'study', 'sleep', 'peaceful', 'calm', 'soothing'],
    'bossa-nova': ['bossa nova', 'brazilian', 'jazz', 'samba', 'latin', 'acoustic', 'guitar', 'vocal', 'romantic', 'sophisticated', 'cafe'],
    'bolero': ['bolero', 'latin', 'romantic', 'dance', 'spanish', 'ballroom', 'passionate', 'elegant', 'latin dance', 'romantic music'],
    'yandere': ['病嬌', 'yandere', 'anime', 'dramatic', 'intense', 'emotional', 'dark', 'obsessive', 'japanese', 'anime music'],
    'jazz': ['jazz', 'swing', 'bebop', 'smooth jazz', 'fusion', 'improvisation', 'saxophone', 'piano', 'sophisticated', 'classic jazz'],
    'classical': ['classical', 'orchestra', 'symphony', 'piano', 'violin', 'mozart', 'beethoven', 'chopin', 'timeless', 'refined'],
    'electronic': ['electronic', 'edm', 'techno', 'house', 'trance', 'dubstep', 'ambient', 'synth', 'energetic', 'modern'],
    'pop': ['pop', 'popular', 'mainstream', 'chart', 'hit', 'radio', 'contemporary', 'vocal', 'trendy', 'catchy']
  }

  const categoryTags = baseTags[musicCategory] || baseTags['chill']
  const topicTags = [topic, `${topic} music`, `${topic} instrumental`, `${topic} cover`]
  const activityTags = activity ? [activity, `${activity} music`, `${activity} background`] : []
  const moodTags = mood ? [mood, `${mood} music`, `${mood} vibes`] : []
  
  // 組合所有標籤並去重
  const allTags = [...categoryTags, ...topicTags, ...activityTags, ...moodTags]
  const uniqueTags = [...new Set(allTags)]
  
  // 限制標籤數量在 15 個以內（YouTube 建議）
  return uniqueTags.slice(0, 15)
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
