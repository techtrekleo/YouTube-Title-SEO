import { GoogleGenerativeAI } from '@google/generative-ai'

// 初始化 Gemini AI - 支援 Vite 和 Node.js 環境
const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : '') || 'AIzaSyDBvpNXzZQR980TLv7NtQRb6OARBe_VUCs'
console.log('🔑 Gemini API Key available:', !!apiKey, 'Length:', apiKey.length)

const genAI = new GoogleGenerativeAI(apiKey)

// 生成 YouTube 標題
export const generateAITitle = async (songName: string, artist: string, musicStyles: string[]): Promise<string> => {
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
    
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })
    
    const prompt = `請為以下音樂生成一個 YouTube 標題，格式為：【歌名】- 歌手名 🖤 描述｜音樂風格 / 情感描述 / 場景描述

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
export const generateAIDescription = async (songName: string, artist: string, musicStyles: string[]): Promise<string> => {
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
    
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })
    
    const prompt = `請為以下音樂生成一個 YouTube 影片說明：

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
export const generateAITags = async (songName: string, artist: string, musicStyles: string[]): Promise<string[]> => {
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
    
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' })
    
    const prompt = `請為以下音樂生成 YouTube 標籤：

歌曲資訊：
- 歌名：${songName}
- 原唱：${artist}
- 音樂風格：${musicStyles.join(', ')}

請生成 15-20 個相關標籤，要求：
1. 包含歌名相關標籤
2. 包含歌手相關標籤
3. 包含音樂風格標籤
4. 包含情感和場景標籤
5. 總字數在 300-500 字之間
6. 用逗號分隔

請只回傳標籤列表，不要其他文字。`

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
export const generateAIContent = async (songName: string, artist: string, musicStyles: string[]) => {
  console.log('🚀 Starting complete AI content generation...')
  try {
    const [title, description, tags] = await Promise.all([
      generateAITitle(songName, artist, musicStyles),
      generateAIDescription(songName, artist, musicStyles),
      generateAITags(songName, artist, musicStyles)
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
