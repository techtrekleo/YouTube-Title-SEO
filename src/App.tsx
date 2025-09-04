import React, { useState } from 'react'
import { musicCategories, getMusicCategory } from './utils/musicCategories'
import { generateYouTubeTemplate } from './utils/youtubeTemplate'

interface SEOContent {
  title: string
  description: string
  tags: string[]
  score: number
}

function App() {
  const [songName, setSongName] = useState('')
  const [artist, setArtist] = useState('')
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [seoContent, setSeoContent] = useState<SEOContent | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const toggleStyle = (styleId: string) => {
    setSelectedStyles(prev => 
      prev.includes(styleId) 
        ? prev.filter(id => id !== styleId)
        : [...prev, styleId]
    )
  }

  const generateSEO = async () => {
    if (!songName.trim() || selectedStyles.length === 0) return

    setIsGenerating(true)
    
    setTimeout(() => {
      const primaryStyle = selectedStyles[0]
      const musicCategory = getMusicCategory(primaryStyle)
      if (!musicCategory) return

      const template = generateYouTubeTemplate({
        musicCategory: primaryStyle,
        topic: songName,
        artist: artist || undefined,
        activity: undefined,
        mood: undefined,
        year: undefined,
        language: undefined,
        additionalStyles: selectedStyles.slice(1)
      })

      setSeoContent({
        title: template.title,
        description: template.description,
        tags: template.tags,
        score: template.score
      })
      setIsGenerating(false)
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600'
    if (score >= 75) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                🎵 YouTube SEO Generator
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">by 音樂脈動-Sonic Pulse</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Generate SEO-friendly titles and tags for your music covers
            </h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="songName" className="block text-sm font-medium text-gray-700 mb-2">
                  Song Name *
                </label>
                <input
                  id="songName"
                  type="text"
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                  placeholder="e.g., Shape of You, Bohemian Rhapsody"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="artist" className="block text-sm font-medium text-gray-700 mb-2">
                  Original Artist (Optional)
                </label>
                <input
                  id="artist"
                  type="text"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  placeholder="e.g., Ed Sheeran, Queen"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Music Style * (可多選)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {musicCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => toggleStyle(category.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                        selectedStyles.includes(category.id)
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-medium text-sm">
                        {category.name}
                        {category.englishName && (
                          <span className="block text-xs text-gray-500 mt-1">
                            {category.englishName}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                {selectedStyles.length > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    已選擇: {selectedStyles.map(id => musicCategories.find(c => c.id === id)?.name).join(', ')}
                  </p>
                )}
              </div>

              <button
                onClick={generateSEO}
                disabled={!songName.trim() || selectedStyles.length === 0 || isGenerating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? '🤖 AI is generating...' : 'Generate'}
              </button>
            </div>
          </div>

          {seoContent && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">SEO Score</h3>
                  <span className={`text-3xl font-bold ${getScoreColor(seoContent.score)}`}>
                    {seoContent.score}/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${seoContent.score}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {seoContent.score >= 85 ? 'Excellent SEO optimization' : 
                   seoContent.score >= 75 ? 'Good SEO potential' : 'Needs improvement'}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Title (標題)</h3>
                  <button
                    onClick={() => copyToClipboard(seoContent.title)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Copy Title
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg font-medium text-gray-900">{seoContent.title}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Length: {seoContent.title.length} characters
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Description (歌曲說明)</h3>
                  <button
                    onClick={() => copyToClipboard(seoContent.description)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Copy Description
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm text-gray-900 font-sans">{seoContent.description}</pre>
                  <p className="text-sm text-gray-500 mt-2">
                    Length: {seoContent.description.length} characters
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Tags (標籤)</h3>
                  <button
                    onClick={() => copyToClipboard(seoContent.tags.join(', '))}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Copy Tags
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {seoContent.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Tags with comma separator: {seoContent.tags.join(', ')}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Total tags: {seoContent.tags.length} | Total characters: {seoContent.tags.join(', ').length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 YouTube SEO Generator. Built with ❤️ by 音樂脈動-Sonic Pulse</p>
            <p className="mt-2">
              <a 
                href="https://www.youtube.com/@%E9%9F%B3%E6%A8%82%E8%84%88%E5%8B%95SonicPulse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                🎵 音樂脈動-Sonic Pulse YouTube Channel
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
