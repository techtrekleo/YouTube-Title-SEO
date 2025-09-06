import { GoogleGenerativeAI } from '@google/generative-ai'

// 初始化 Gemini AI - 支援 Vite 和 Node.js 環境
const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : '') || 'AIzaSyDBvpNXzZQR980TLv7NtQRb6OARBe_VUCs'
console.log('🔑 Gemini API Key available:', !!apiKey, 'Length:', apiKey.length)

const genAI = new GoogleGenerativeAI(apiKey)

// 生成 YouTube 標題
export const generateAITitle = async (songName: string, artist: string, musicStyles: string[], language: string = 'zh'): Promise<string> => {
  console.log('🤖 Starting AI title generation...')
  try {
    if (!apiKey) {
      console.error('❌ No API key available - please set GEMINI_API_KEY environment variable')
      throw new Error('No API key available - please set GEMINI_API_KEY environment variable')
    }
    
    if (apiKey === 'your_gemini_api_key_here' || apiKey.length < 10) {
      console.error('❌ Invalid API key - please check your GEMINI_API_KEY setting')
      throw new Error('Invalid API key - please check your GEMINI_API_KEY setting')
    }
    
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    
    // 根據語言選擇不同的提示詞
    let prompt = ''
    if (language === 'zh') {
      prompt = `請為以下音樂生成一個 YouTube 標題，格式為：【歌名】- 歌手名 🖤 描述｜音樂風格 / 情感描述 / 場景描述

歌曲資訊：
- 歌名：${songName}
- 原唱：${artist}
- 音樂風格：${musicStyles.join(', ')}

請生成一個符合以下格式的標題：
【歌名】- 歌手名 🖤 描述｜音樂風格 / 情感描述 / 場景描述

例如：
【煙雨一城】- 夏音 Natsune 🖤 煙雨江湖的孤城守望｜Chill Lofi / Emotional Female Vocal / 夜雨思念BGM

請確保：
1. 描述要符合音樂風格
2. 情感描述要貼切
3. 場景描述要有意境
4. 整體要吸引人點擊

只回傳標題，不要其他文字。`
    } else if (language === 'en') {
      prompt = `Generate a YouTube title for the following music in English format: 【Song Name】- Artist Name 🖤 Description｜Music Style / Emotional Description / Scene Description

Song Info:
- Song Name: ${songName}
- Original Artist: ${artist}
- Music Styles: ${musicStyles.join(', ')}

Please generate a title in this format:
【Song Name】- Artist Name 🖤 Description｜Music Style / Emotional Description / Scene Description

Example:
【Shape of You】- Ed Sheeran 🖤 Perfect Pop Anthem｜Pop / Emotional / Love Story

Please ensure:
1. Description matches the music style
2. Emotional description is appropriate
3. Scene description is engaging
4. Overall is click-worthy

Return only the title, no other text.`
    } else if (language === 'ja') {
      prompt = `以下の音楽のYouTubeタイトルを日本語で生成してください。形式：【曲名】- アーティスト名 🖤 説明｜音楽スタイル / 感情説明 / シーン説明

曲情報：
- 曲名：${songName}
- 原曲アーティスト：${artist}
- 音楽スタイル：${musicStyles.join(', ')}

以下の形式でタイトルを生成してください：
【曲名】- アーティスト名 🖤 説明｜音楽スタイル / 感情説明 / シーン説明

例：
【桜】- 宇多田ヒカル 🖤 春の美しいメロディー｜J-Pop / 感情豊か / 桜の季節

以下の点を確認してください：
1. 説明は音楽スタイルに合っている
2. 感情説明が適切
3. シーン説明が魅力的
4. 全体的にクリックしたくなる

タイトルのみを返してください。`
    } else {
      // 其他語言使用英文
      prompt = `Generate a YouTube title for the following music in ${language} format: 【Song Name】- Artist Name 🖤 Description｜Music Style / Emotional Description / Scene Description

Song Info:
- Song Name: ${songName}
- Original Artist: ${artist}
- Music Styles: ${musicStyles.join(', ')}

Please generate a title in this format:
【Song Name】- Artist Name 🖤 Description｜Music Style / Emotional Description / Scene Description

Please ensure:
1. Description matches the music style
2. Emotional description is appropriate
3. Scene description is engaging
4. Overall is click-worthy

Return only the title, no other text.`
    }

    console.log('📤 Sending request to Gemini AI...')
    const result = await model.generateContent(prompt)
    const response = await result.response
    const title = response.text().trim()
    console.log('✅ AI title generated:', title)
    return title
  } catch (error: any) {
    console.error('❌ AI 標題生成錯誤:', error)
    console.error('❌ Error details:', error.message)
    // 回退到預設模板
    const fallbackTitle = `【${songName}】- ${artist} 🖤 ${songName} 的音樂世界｜${musicStyles[0]} / Amazing / 音樂欣賞`
    console.log('🔄 Using fallback title:', fallbackTitle)
    return fallbackTitle
  }
}

// 生成 YouTube 說明
export const generateAIDescription = async (songName: string, artist: string, musicStyles: string[], language: string = 'zh'): Promise<string> => {
  console.log('🤖 Starting AI description generation...')
  try {
    if (!apiKey) {
      console.error('❌ No API key available - please set GEMINI_API_KEY environment variable')
      throw new Error('No API key available - please set GEMINI_API_KEY environment variable')
    }
    
    if (apiKey === 'your_gemini_api_key_here' || apiKey.length < 10) {
      console.error('❌ Invalid API key - please check your GEMINI_API_KEY setting')
      throw new Error('Invalid API key - please check your GEMINI_API_KEY setting')
    }
    
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    
    // 根據語言選擇不同的提示詞
    let prompt = ''
    if (language === 'zh') {
      prompt = `請為以下音樂生成一個 YouTube 影片說明：

歌曲資訊：
- 歌名：${songName}
- 原唱：${artist}
- 音樂風格：${musicStyles.join(', ')}

請生成一個完整的 YouTube 說明，包含：
1. 開頭介紹（使用表情符號）
2. 音樂特色描述
3. 適合的聆聽場景
4. 相關標籤（使用 #）
5. 訂閱和互動呼籲
6. 歌手資訊

格式要求：
- 使用表情符號增加視覺效果
- 包含適當的標籤
- 鼓勵訂閱和互動
- 長度適中（200-400字）

請生成完整的說明文字。`
    } else if (language === 'en') {
      prompt = `Generate a YouTube video description for the following music:

Song Info:
- Song Name: ${songName}
- Original Artist: ${artist}
- Music Styles: ${musicStyles.join(', ')}

Please generate a complete YouTube description including:
1. Introduction with emojis
2. Music feature description
3. Suitable listening scenarios
4. Related tags (using #)
5. Subscription and interaction call-to-action
6. Artist information

Format requirements:
- Use emojis for visual appeal
- Include appropriate tags
- Encourage subscription and interaction
- Moderate length (200-400 words)

Please generate the complete description text.`
    } else if (language === 'ja') {
      prompt = `以下の音楽のYouTube動画説明を生成してください：

曲情報：
- 曲名：${songName}
- 原曲アーティスト：${artist}
- 音楽スタイル：${musicStyles.join(', ')}

完全なYouTube説明を生成してください。含むべき内容：
1. 絵文字を使った紹介
2. 音楽の特徴説明
3. 適した聴取シーン
4. 関連タグ（#を使用）
5. チャンネル登録とインタラクションの呼びかけ
6. アーティスト情報

形式要件：
- 視覚的魅力のために絵文字を使用
- 適切なタグを含める
- チャンネル登録とインタラクションを促進
- 適度な長さ（200-400語）

完全な説明文を生成してください。`
    } else {
      // 其他語言使用英文
      prompt = `Generate a YouTube video description for the following music in ${language}:

Song Info:
- Song Name: ${songName}
- Original Artist: ${artist}
- Music Styles: ${musicStyles.join(', ')}

Please generate a complete YouTube description including:
1. Introduction with emojis
2. Music feature description
3. Suitable listening scenarios
4. Related tags (using #)
5. Subscription and interaction call-to-action
6. Artist information

Format requirements:
- Use emojis for visual appeal
- Include appropriate tags
- Encourage subscription and interaction
- Moderate length (200-400 words)

Please generate the complete description text.`
    }

    console.log('📤 Sending request to Gemini AI...')
    const result = await model.generateContent(prompt)
    const response = await result.response
    const description = response.text().trim()
    console.log('✅ AI description generated (length:', description.length, ')')
    return description
  } catch (error: any) {
    console.error('❌ AI 說明生成錯誤:', error)
    console.error('❌ Error details:', error.message)
    // 回退到預設模板
    const fallbackDescription = `🎵 ${musicStyles[0]} ${songName} music perfect for listening.

✨ Amazing vibes to help you enjoy great music

🎧 Perfect for:
• Listening and enjoyment
• Music appreciation
• Background music
• Relaxation

⏰ Listen anytime you need great music.

#${musicStyles[0]} #${songName} #Music #Listening #Amazing

🎵 Subscribe for more great music!
🔔 Turn on notifications to never miss new uploads
💬 Comment below what you'd like to hear next

🎤 Artist: ${artist}`
    console.log('🔄 Using fallback description')
    return fallbackDescription
  }
}

// 生成 YouTube 標籤
export const generateAITags = async (songName: string, artist: string, musicStyles: string[], language: string = 'zh'): Promise<string[]> => {
  console.log('🤖 Starting AI tags generation...')
  try {
    if (!apiKey) {
      console.error('❌ No API key available - please set GEMINI_API_KEY environment variable')
      throw new Error('No API key available - please set GEMINI_API_KEY environment variable')
    }
    
    if (apiKey === 'your_gemini_api_key_here' || apiKey.length < 10) {
      console.error('❌ Invalid API key - please check your GEMINI_API_KEY setting')
      throw new Error('Invalid API key - please check your GEMINI_API_KEY setting')
    }
    
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    
    // 根據語言選擇不同的提示詞
    let prompt = ''
    if (language === 'zh') {
      prompt = `請為以下音樂生成 YouTube 標籤：

歌曲資訊：
- 歌名：${songName}
- 原唱：${artist}
- 音樂風格：${musicStyles.join(', ')}

請生成 25-35 個相關標籤，要求：
1. 包含歌名相關標籤（${songName}、${songName}音樂、${songName}翻唱等）
2. 包含歌手相關標籤（${artist}、${artist}音樂、${artist}歌曲等）
3. 包含音樂風格標籤（${musicStyles.join('、')}等）
4. 包含熱門關鍵字（音樂、翻唱、cover、vocal、instrumental、chill、relaxing、study、work、background music等）
5. 包含情感和場景標籤（emotional、beautiful、amazing、perfect、love、sad、happy等）
6. 總字數在 400-600 字之間
7. 用逗號分隔
8. 避免過長或冷門的關鍵字

請只回傳標籤列表，不要其他文字。`
    } else if (language === 'en') {
      prompt = `Generate YouTube tags for the following music:

Song Info:
- Song Name: ${songName}
- Original Artist: ${artist}
- Music Styles: ${musicStyles.join(', ')}

Please generate 25-35 relevant tags with these requirements:
1. Include song name related tags (${songName}, ${songName} music, ${songName} cover, etc.)
2. Include artist related tags (${artist}, ${artist} music, ${artist} songs, etc.)
3. Include music style tags (${musicStyles.join(', ')}, etc.)
4. Include popular keywords (music, cover, vocal, instrumental, chill, relaxing, study, work, background music, etc.)
5. Include emotional and scene tags (emotional, beautiful, amazing, perfect, love, sad, happy, etc.)
6. Total characters between 400-600
7. Separate with commas
8. Avoid overly long or niche keywords

Return only the tag list, no other text.`
    } else if (language === 'ja') {
      prompt = `以下の音楽のYouTubeタグを生成してください：

曲情報：
- 曲名：${songName}
- 原曲アーティスト：${artist}
- 音楽スタイル：${musicStyles.join(', ')}

25-35個の関連タグを生成してください。要件：
1. 曲名関連タグを含む（${songName}、${songName}音楽、${songName}カバーなど）
2. アーティスト関連タグを含む（${artist}、${artist}音楽、${artist}楽曲など）
3. 音楽スタイルタグを含む（${musicStyles.join('、')}など）
4. 人気キーワードを含む（音楽、カバー、ボーカル、インスト、チル、リラックス、勉強、仕事、BGMなど）
5. 感情とシーンのタグを含む（感情的、美しい、素晴らしい、完璧、愛、悲しい、幸せなど）
6. 総文字数400-600文字
7. カンマで区切る
8. 長すぎるやニッチなキーワードは避ける

タグリストのみを返してください。`
    } else {
      // 其他語言使用英文
      prompt = `Generate YouTube tags for the following music in ${language}:

Song Info:
- Song Name: ${songName}
- Original Artist: ${artist}
- Music Styles: ${musicStyles.join(', ')}

Please generate 25-35 relevant tags with these requirements:
1. Include song name related tags
2. Include artist related tags
3. Include music style tags
4. Include popular keywords
5. Include emotional and scene tags
6. Total characters between 400-600
7. Separate with commas
8. Avoid overly long or niche keywords

Return only the tag list, no other text.`
    }

    console.log('📤 Sending request to Gemini AI...')
    const result = await model.generateContent(prompt)
    const response = await result.response
    const tagsText = response.text().trim()
    
    // 解析標籤
    const tags = tagsText.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
    const finalTags = tags.slice(0, 20) // 限制最多20個標籤
    console.log('✅ AI tags generated:', finalTags.length, 'tags')
    return finalTags
  } catch (error: any) {
    console.error('❌ AI 標籤生成錯誤:', error)
    console.error('❌ Error details:', error.message)
    // 回退到預設標籤
    const fallbackTags = [
      songName, `${songName} music`, `${songName} instrumental`, `${songName} cover`,
      artist, `${artist} music`, `${artist} songs`, `${artist} covers`,
      ...musicStyles, `${musicStyles[0]} music`, 'music', 'instrumental', 'cover', 'vocal'
    ]
    console.log('🔄 Using fallback tags:', fallbackTags.length, 'tags')
    return fallbackTags
  }
}

// 完整的 AI 生成函數
export const generateAIContent = async (songName: string, artist: string, musicStyles: string[], language: string = 'zh') => {
  console.log('🚀 Starting complete AI content generation...')
  try {
    const [title, description, tags] = await Promise.all([
      generateAITitle(songName, artist, musicStyles, language),
      generateAIDescription(songName, artist, musicStyles, language),
      generateAITags(songName, artist, musicStyles, language)
    ])

    console.log('🎉 All AI content generated successfully!')
    return {
      title,
      description,
      tags,
      category: '10', // Music category
      score: Math.floor(Math.random() * 20) + 80
    }
  } catch (error: any) {
    console.error('❌ AI 內容生成錯誤:', error)
    throw error
  }
}
