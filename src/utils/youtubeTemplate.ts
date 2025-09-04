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
  'pop': '10', // Music
  'rock': '10', // Music
  'lofi': '10', // Music
  'acoustic': '10', // Music
  'instrumental': '10', // Music
  'rnb': '10', // Music
  'hip-hop': '10', // Music
  'electronic': '10', // Music
  'hifi': '10', // Music
  'city-pop': '10', // Music
  'soul': '10', // Music
  'rap': '10', // Music
  'jazz': '10', // Music
  'classical': '10', // Music
}

// 生成 YouTube 標題
export const generateYouTubeTitle = (data: MusicTemplateData): string => {
  const { musicCategory, topic, activity, mood } = data
  
  const templates: { [key: string]: string[] } = {
    'chill': [
      `Chill {topic} Music for ${activity || 'Relaxation'} - ${mood || 'Peaceful'} Vibes`,
      `${topic} Chill Mix - Perfect for ${activity || 'Studying'} | ${mood || 'Calm'} Music`,
      `Relaxing {topic} - ${mood || 'Soothing'} Chill Music for ${activity || 'Sleep'}`,
      `${topic} Lo-Fi Beats - ${activity || 'Study'} Music | ${mood || 'Chill'} Vibes`,
      `Chill {topic} Collection - ${mood || 'Relaxing'} Music for ${activity || 'Work'}`
    ],
    'bossa-nova': [
      `Bossa Nova {topic} - Brazilian Jazz Music | ${mood || 'Smooth'} Vibes`,
      `${topic} Bossa Nova Classics - ${mood || 'Romantic'} Brazilian Jazz`,
      `Smooth Bossa Nova {topic} - ${activity || 'Cafe'} Music | ${mood || 'Elegant'}`,
      `Brazilian {topic} - Bossa Nova Style | ${mood || 'Charming'} Jazz`,
      `${topic} Jazz Bossa Nova Mix - ${mood || 'Sophisticated'} Latin Music`
    ],
    'bolero': [
      `Bolero {topic} - Romantic Latin Music | ${mood || 'Passionate'} Vibes`,
      `${topic} Bolero Classics - ${mood || 'Romantic'} Latin Dance Music`,
      `Passionate Bolero {topic} - ${activity || 'Dance'} Music | ${mood || 'Elegant'}`,
      `Latin {topic} - Bolero Style | ${mood || 'Romantic'} Ballroom Music`,
      `${topic} Romantic Bolero Mix - ${mood || 'Passionate'} Latin Vibes`
    ],
    'yandere': [
      `病嬌 {topic} - Yandere Vibes | ${mood || 'Dramatic'} Anime Music`,
      `${topic} 病嬌音樂集 - ${mood || 'Intense'} Yandere Style`,
      `Dramatic Yandere {topic} - ${mood || 'Emotional'} Anime Music`,
      `病嬌 {topic} - ${mood || 'Intense'} Emotions | Yandere Vibes`,
      `${topic} Yandere Music Mix - ${mood || 'Dramatic'} Anime Style`
    ],
    'pop': [
      `Pop {topic} - Chart Hits | ${mood || 'Catchy'} Vibes`,
      `${topic} Popular Music - ${mood || 'Trendy'} Pop Hits`,
      `Contemporary {topic} - ${mood || 'Modern'} Pop Music`,
      `${topic} Radio Hits - ${mood || 'Popular'} Music Collection`,
      `Pop {topic} Collection - ${mood || 'Chart-topping'} Hits`
    ],
    'rock': [
      `Rock {topic} - Electric Guitar | ${mood || 'Powerful'} Vibes`,
      `${topic} Rock Version - ${mood || 'Energetic'} Rock Music`,
      `Powerful Rock {topic} - ${activity || 'Concert'} Music | ${mood || 'Dynamic'}`,
      `${topic} Rock Cover - ${mood || 'Electric'} Guitar Riffs`,
      `Rock {topic} - ${mood || 'Energetic'} Band Music`
    ],
    'lofi': [
      `Lo-Fi {topic} - Chill Beats | ${mood || 'Relaxing'} Vibes`,
      `${topic} Lo-Fi Version - ${mood || 'Warm'} Study Music`,
      `Chill Lo-Fi {topic} - ${activity || 'Studying'} Music | ${mood || 'Nostalgic'}`,
      `${topic} Lo-Fi Mix - ${mood || 'Vinyl'} Vibes`,
      `Lo-Fi {topic} - ${mood || 'Study'} Music Collection`
    ],
    'acoustic': [
      `Acoustic {topic} - Unplugged | ${mood || 'Natural'} Vibes`,
      `${topic} Acoustic Version - ${mood || 'Intimate'} Live Music`,
      `Live Acoustic {topic} - ${activity || 'Concert'} Performance | ${mood || 'Organic'}`,
      `${topic} Acoustic Cover - ${mood || 'Natural'} Guitar`,
      `Acoustic {topic} - ${mood || 'Intimate'} Music Collection`
    ],
    'instrumental': [
      `Instrumental {topic} - No Vocals | ${mood || 'Pure'} Music`,
      `${topic} Instrumental Version - ${mood || 'Orchestral'} Arrangement`,
      `Orchestral {topic} - ${activity || 'Classical'} Performance | ${mood || 'Majestic'}`,
      `${topic} Piano Instrumental - ${mood || 'Refined'} Music`,
      `Instrumental {topic} - ${mood || 'Classical'} Collection`
    ],
    'rnb': [
      `R&B {topic} - Smooth Vocals | ${mood || 'Soulful'} Vibes`,
      `${topic} R&B Version - ${mood || 'Emotional'} Soul Music`,
      `Smooth R&B {topic} - ${activity || 'Lounge'} Music | ${mood || 'Romantic'}`,
      `${topic} R&B Cover - ${mood || 'Soulful'} Vocals`,
      `R&B {topic} - ${mood || 'Soulful'} Music Collection`
    ],
    'hip-hop': [
      `Hip Hop {topic} - Urban Beats | ${mood || 'Modern'} Vibes`,
      `${topic} Hip Hop Version - ${mood || 'Street'} Music`,
      `Urban Hip Hop {topic} - ${activity || 'Party'} Music | ${mood || 'Energetic'}`,
      `${topic} Hip Hop Cover - ${mood || 'Urban'} Beats`,
      `Hip Hop {topic} - ${mood || 'Modern'} Music Collection`
    ],
    'electronic': [
      `Electronic {topic} - EDM Mix | ${mood || 'Energetic'} Vibes`,
      `${topic} Techno Beats - ${mood || 'Dynamic'} Electronic Music`,
      `House {topic} Music - ${activity || 'Party'} Vibes | ${mood || 'Upbeat'}`,
      `${topic} Electronic Vibes - ${mood || 'Modern'} EDM Music`,
      `EDM {topic} Collection - ${mood || 'Electrifying'} Electronic Mix`
    ],
    'hifi': [
      `HIFI {topic} - High Fidelity | ${mood || 'Premium'} Quality`,
      `${topic} HIFI Version - ${mood || 'Studio'} Quality Music`,
      `Premium HIFI {topic} - ${activity || 'Listening'} Experience | ${mood || 'Clear'}`,
      `${topic} Studio Quality - ${mood || 'Audiophile'} Sound`,
      `HIFI {topic} - ${mood || 'Premium'} Music Collection`
    ],
    'city-pop': [
      `City Pop {topic} - Japanese Urban | ${mood || 'Fashionable'} Vibes`,
      `${topic} City Pop Version - ${mood || 'Modern'} Japanese Music`,
      `Urban City Pop {topic} - ${activity || 'Lifestyle'} Music | ${mood || 'Sophisticated'}`,
      `${topic} Japanese Pop - ${mood || 'Urban'} Vibes`,
      `City Pop {topic} - ${mood || 'Modern'} Japanese Collection`
    ],
    'soul': [
      `Soul {topic} - Soulful Vocals | ${mood || 'Emotional'} Vibes`,
      `${topic} Soul Version - ${mood || 'Passionate'} Soul Music`,
      `Soulful {topic} - ${activity || 'Gospel'} Music | ${mood || 'Deep'}`,
      `${topic} Soul Cover - ${mood || 'Soulful'} Vocals`,
      `Soul {topic} - ${mood || 'Emotional'} Music Collection`
    ],
    'rap': [
      `Rap {topic} - Urban Lyrics | ${mood || 'Street'} Vibes`,
      `${topic} Rap Version - ${mood || 'Urban'} Rap Music`,
      `Urban Rap {topic} - ${activity || 'Street'} Music | ${mood || 'Rhythmic'}`,
      `${topic} Rap Cover - ${mood || 'Urban'} Lyrics`,
      `Rap {topic} - ${mood || 'Street'} Music Collection`
    ],
    'jazz': [
      `Jazz {topic} - Classic Swing Music | ${mood || 'Smooth'} Vibes`,
      `${topic} Jazz Standards - ${mood || 'Sophisticated'} Jazz Music`,
      `Smooth Jazz {topic} - ${activity || 'Lounge'} Music | ${mood || 'Elegant'}`,
      `${topic} Bebop Classics - ${mood || 'Dynamic'} Jazz Music`,
      `Jazz Fusion {topic} - ${mood || 'Innovative'} Jazz Mix`
    ],
    'classical': [
      `Classical {topic} - Orchestral Masterpieces | ${mood || 'Elegant'} Music`,
      `${topic} Classical Music - ${mood || 'Timeless'} Orchestral Pieces`,
      `Piano {topic} - Classical | ${mood || 'Refined'} Music Collection`,
      `${topic} Symphony Classics - ${mood || 'Majestic'} Orchestral Music`,
      `Classical {topic} Collection - ${mood || 'Sophisticated'} Music`
    ]
  }

  const categoryTemplates = templates[musicCategory] || templates['pop']
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
${language ? `🌍 Language: ${language}` : ''}`,

    'rock': `🎵 Rock ${topic} music with powerful electric guitar energy.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} rock perfect for ${activity || 'concerts and parties'}` : '✨ Powerful rock perfect for energetic listening'}

🎧 Perfect for:
• ${activity || 'Concerts'} and live performances
• Parties and celebrations
• Workout and fitness
• Driving and road trips

⏰ Feel the power of rock music anytime.

#Rock #${topic} #${activity || 'RockMusic'} #${mood || 'Powerful'} #ElectricGuitar #Band #Energetic #Powerful #GuitarSolos #LiveMusic

🎵 Subscribe for more rock music!
🔔 Turn on notifications for powerful rock
💬 Share your favorite rock moments

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'lofi': `🎵 Lo-Fi ${topic} music with warm chill beats.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} lo-fi perfect for ${activity || 'studying and relaxing'}` : '✨ Warm lo-fi perfect for chill vibes'}

🎧 Perfect for:
• ${activity || 'Studying'} and concentration
• Relaxation and meditation
• Background music
• Nostalgic vibes

⏰ Enjoy the warm lo-fi atmosphere anytime.

#LoFi #${topic} #${activity || 'StudyMusic'} #${mood || 'Chill'} #ChillBeats #Relaxing #Study #Nostalgic #Vinyl #Warm

🎵 Subscribe for more lo-fi music!
🔔 Turn on notifications for chill beats
💬 Share your study vibes

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'acoustic': `🎵 Acoustic ${topic} music with natural unplugged vibes.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} acoustic perfect for ${activity || 'intimate listening'}` : '✨ Natural acoustic perfect for organic vibes'}

🎧 Perfect for:
• ${activity || 'Intimate'} listening sessions
• Live performances
• Relaxing evenings
• Natural vibes

⏰ Experience the natural acoustic sound anytime.

#Acoustic #${topic} #${activity || 'Unplugged'} #${mood || 'Natural'} #Guitar #Live #Organic #Intimate #Natural #Unplugged

🎵 Subscribe for more acoustic music!
🔔 Turn on notifications for unplugged vibes
💬 Share your acoustic moments

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'instrumental': `🎵 Instrumental ${topic} music with pure orchestral beauty.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} instrumental perfect for ${activity || 'classical appreciation'}` : '✨ Pure instrumental perfect for refined listening'}

🎧 Perfect for:
• ${activity || 'Classical'} appreciation
• Background music
• Study and focus
• Sophisticated gatherings

⏰ Enjoy the pure instrumental beauty anytime.

#Instrumental #${topic} #${activity || 'Classical'} #${mood || 'Pure'} #Orchestra #Piano #NoVocals #Classical #Refined #Symphony

🎵 Subscribe for more instrumental music!
🔔 Turn on notifications for classical vibes
💬 Share your classical appreciation

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'rnb': `🎵 R&B ${topic} music with smooth soulful vocals.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} R&B perfect for ${activity || 'romantic evenings'}` : '✨ Smooth R&B perfect for soulful listening'}

🎧 Perfect for:
• ${activity || 'Romantic'} evenings
• Lounge atmospheres
• Emotional expression
• Soulful vibes

⏰ Feel the smooth R&B vibes anytime.

#R&B #${topic} #${activity || 'SoulMusic'} #${mood || 'Smooth'} #Soulful #Vocals #Romantic #Emotional #Smooth #RhythmAndBlues

🎵 Subscribe for more R&B music!
🔔 Turn on notifications for soulful vibes
💬 Share your R&B moments

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'hip-hop': `🎵 Hip Hop ${topic} music with urban beats and rhythm.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} hip hop perfect for ${activity || 'parties and street vibes'}` : '✨ Urban hip hop perfect for modern beats'}

🎧 Perfect for:
• ${activity || 'Parties'} and celebrations
• Street culture
• Modern vibes
• Urban lifestyle

⏰ Feel the urban hip hop energy anytime.

#HipHop #${topic} #${activity || 'UrbanMusic'} #${mood || 'Modern'} #Urban #Beats #Street #Modern #Rhythm #Urban

🎵 Subscribe for more hip hop music!
🔔 Turn on notifications for urban beats
💬 Share your hip hop vibes

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

    'hifi': `🎵 HIFI ${topic} music with premium high fidelity quality.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} HIFI perfect for ${activity || 'audiophile listening'}` : '✨ Premium HIFI perfect for quality sound'}

🎧 Perfect for:
• ${activity || 'Audiophile'} listening
• Studio quality experience
• Premium sound
• Quality appreciation

⏰ Experience the premium HIFI quality anytime.

#HIFI #${topic} #${activity || 'HighFidelity'} #${mood || 'Premium'} #Audiophile #Studio #Quality #Clear #Premium #Sound

🎵 Subscribe for more HIFI music!
🔔 Turn on notifications for premium quality
💬 Share your audiophile experience

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'city-pop': `🎵 City Pop ${topic} music with Japanese urban sophistication.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} city pop perfect for ${activity || 'modern Japanese lifestyle'}` : '✨ Fashionable city pop perfect for urban vibes'}

🎧 Perfect for:
• ${activity || 'Modern'} Japanese lifestyle
• Urban sophistication
• Fashionable vibes
• Japanese culture

⏰ Experience the Japanese urban sophistication anytime.

#CityPop #${topic} #${activity || 'JapanesePop'} #${mood || 'Fashionable'} #Japanese #Urban #Modern #Sophisticated #80s #JapaneseMusic

🎵 Subscribe for more city pop music!
🔔 Turn on notifications for Japanese urban vibes
💬 Share your city pop moments

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'soul': `🎵 Soul ${topic} music with deep emotional expression.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} soul perfect for ${activity || 'emotional connection'}` : '✨ Deep soul perfect for emotional expression'}

🎧 Perfect for:
• ${activity || 'Emotional'} connection
• Gospel and spiritual
• Deep listening
• Soulful expression

⏰ Feel the deep soul connection anytime.

#Soul #${topic} #${activity || 'SoulMusic'} #${mood || 'Deep'} #Soulful #Gospel #Blues #Emotional #Passionate #Deep

🎵 Subscribe for more soul music!
🔔 Turn on notifications for soulful vibes
💬 Share your soul moments

${artist ? `🎤 Artist: ${artist}` : ''}
${year ? `📅 Year: ${year}` : ''}
${language ? `🌍 Language: ${language}` : ''}`,

    'rap': `🎵 Rap ${topic} music with urban lyrics and rhythm.

${mood ? `✨ ${mood.charAt(0).toUpperCase() + mood.slice(1)} rap perfect for ${activity || 'street culture and urban vibes'}` : '✨ Urban rap perfect for rhythmic expression'}

🎧 Perfect for:
• ${activity || 'Street'} culture
• Urban expression
• Rhythmic vibes
• Wordplay appreciation

⏰ Feel the urban rap rhythm anytime.

#Rap #${topic} #${activity || 'UrbanRap'} #${mood || 'Urban'} #Urban #Lyrics #Rhythm #Street #Wordplay #Urban

🎵 Subscribe for more rap music!
🔔 Turn on notifications for urban rap
💬 Share your rap vibes

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
${language ? `🌍 Language: ${language}` : ''}`
  }

  return descriptions[musicCategory] || descriptions['pop']
}

// 生成 YouTube 標籤
export const generateYouTubeTags = (data: MusicTemplateData): string[] => {
  const { musicCategory, topic, activity, mood } = data
  
  const baseTags: { [key: string]: string[] } = {
    'chill': ['chill', 'relaxing', 'ambient', 'lo-fi', 'chillhop', 'chillout', 'meditation', 'study', 'sleep', 'peaceful', 'calm', 'soothing'],
    'bossa-nova': ['bossa nova', 'brazilian', 'jazz', 'samba', 'latin', 'acoustic', 'guitar', 'vocal', 'romantic', 'sophisticated', 'cafe'],
    'bolero': ['bolero', 'latin', 'romantic', 'dance', 'spanish', 'ballroom', 'passionate', 'elegant', 'latin dance', 'romantic music'],
    'yandere': ['病嬌', 'yandere', 'anime', 'dramatic', 'intense', 'emotional', 'dark', 'obsessive', 'japanese', 'anime music'],
    'pop': ['pop', 'popular', 'mainstream', 'chart', 'hit', 'radio', 'contemporary', 'vocal', 'trendy', 'catchy'],
    'rock': ['rock', 'guitar', 'electric', 'powerful', 'energetic', 'band', 'drums', 'bass', 'electric guitar', 'rock music'],
    'lofi': ['lofi', 'lo-fi', 'chill', 'relaxing', 'warm', 'vinyl', 'nostalgic', 'study', 'chill beats', 'lo-fi hip hop'],
    'acoustic': ['acoustic', 'guitar', 'piano', 'unplugged', 'live', 'natural', 'organic', 'intimate', 'live acoustic'],
    'instrumental': ['instrumental', 'orchestra', 'symphony', 'piano', 'violin', 'no vocals', 'classical', 'orchestral'],
    'rnb': ['r&b', 'rhythm and blues', 'soul', 'smooth', 'vocal', 'emotional', 'romantic', 'soulful'],
    'hip-hop': ['hip hop', 'rap', 'beats', 'urban', 'street', 'modern', 'rhythm', 'urban music'],
    'electronic': ['electronic', 'edm', 'techno', 'house', 'trance', 'dubstep', 'ambient', 'synth', 'energetic', 'modern'],
    'hifi': ['hifi', 'high fidelity', 'audiophile', 'quality', 'clear', 'premium', 'studio', 'audiophile'],
    'city-pop': ['city pop', 'japanese', 'urban', 'modern', 'fashionable', 'sophisticated', '80s', 'japanese pop'],
    'soul': ['soul', 'soulful', 'emotional', 'gospel', 'blues', 'passionate', 'deep', 'soul music'],
    'rap': ['rap', 'rapping', 'lyrics', 'rhythm', 'urban', 'street', 'wordplay', 'urban rap'],
    'jazz': ['jazz', 'swing', 'bebop', 'smooth jazz', 'fusion', 'improvisation', 'saxophone', 'piano', 'sophisticated', 'classic jazz'],
    'classical': ['classical', 'orchestra', 'symphony', 'piano', 'violin', 'mozart', 'beethoven', 'chopin', 'timeless', 'refined']
  }

  const categoryTags = baseTags[musicCategory] || baseTags['pop']
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
