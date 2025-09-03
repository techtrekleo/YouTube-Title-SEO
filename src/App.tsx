import React, { useState } from 'react'
import TitleAnalyzer from './components/TitleAnalyzer'
import KeywordResearch from './components/KeywordResearch'
import TitleGenerator from './components/TitleGenerator'
import CompetitorAnalysis from './components/CompetitorAnalysis'
import MusicTitleGenerator from './components/MusicTitleGenerator'
import YouTubeTemplateGenerator from './components/YouTubeTemplateGenerator'

function App() {
  const [activeTab, setActiveTab] = useState('analyzer')

  const tabs = [
    { id: 'analyzer', name: 'Title Analyzer', component: TitleAnalyzer },
    { id: 'keywords', name: 'Keyword Research', component: KeywordResearch },
    { id: 'generator', name: 'Title Generator', component: TitleGenerator },
    { id: 'music', name: '🎵 Music Titles', component: MusicTitleGenerator },
    { id: 'template', name: '🎬 YouTube Template', component: YouTubeTemplateGenerator },
    { id: 'competitor', name: 'Competitor Analysis', component: CompetitorAnalysis },
  ]

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || TitleAnalyzer

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                YouTube Title SEO Optimizer
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">by techtrekleo</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ActiveComponent />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2024 YouTube Title SEO Optimizer. Built with ❤️ by techtrekleo</p>
            <p className="mt-2">
              <a 
                href="https://github.com/techtrekleo/YouTube-Title-SEO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
