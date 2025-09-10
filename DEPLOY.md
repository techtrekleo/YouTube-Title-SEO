# 🚀 YouTube Title SEO Tool - Deployment Guide

## 📋 部署選項

### 1. Vercel (推薦)
最簡單的部署方式，免費且自動化。

**步驟：**
1. 前往 [Vercel](https://vercel.com)
2. 使用 GitHub 帳號登入
3. 點擊 "New Project"
4. 選擇 `techtrekleo/YouTube-Title-SEO` 倉庫
5. 點擊 "Deploy"

**自動配置：**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### 2. Netlify
另一個優秀的免費部署平台。

**步驟：**
1. 前往 [Netlify](https://netlify.com)
2. 使用 GitHub 帳號登入
3. 點擊 "New site from Git"
4. 選擇 `techtrekleo/YouTube-Title-SEO` 倉庫
5. 設定：
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 點擊 "Deploy site"

### 3. GitHub Pages
使用 GitHub 的免費託管服務。

**步驟：**
1. 在 GitHub 倉庫設定中啟用 Pages
2. 選擇 "Deploy from a branch"
3. 選擇 `main` 分支
4. 設定資料夾為 `/ (root)`
5. 在 Actions 中設定自動部署

## 🛠️ 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 建置生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 📦 專案結構

```
youtube-title-seo/
├── src/
│   ├── components/          # React 組件
│   │   ├── TitleAnalyzer.tsx
│   │   ├── KeywordResearch.tsx
│   │   ├── TitleGenerator.tsx
│   │   ├── MusicTitleGenerator.tsx
│   │   ├── YouTubeTemplateGenerator.tsx
│   │   ├── CompetitorAnalysis.tsx
│   │   └── MusicCategorySelector.tsx
│   ├── utils/              # 工具函數
│   │   ├── musicCategories.ts
│   │   └── youtubeTemplate.ts
│   ├── App.tsx             # 主應用
│   ├── main.tsx            # 入口點
│   └── index.css           # 樣式
├── public/                 # 靜態資源
├── package.json            # 依賴配置
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind 配置
└── README.md               # 專案說明
```

## 🎯 功能特色

### 核心功能
- **標題分析器**：分析現有標題的 SEO 潛力
- **關鍵字研究**：發現趨勢關鍵字和搜尋詞
- **標題生成器**：基於內容和關鍵字生成優化標題
- **音樂標題生成器**：專門為音樂內容優化
- **YouTube 模板生成器**：完整的 YouTube 上傳模板
- **競爭者分析**：分析競爭者標題獲得洞察

### 音樂類別支援
- Chill - 輕鬆舒緩的音樂風格
- Bossa Nova - 巴西爵士樂風格
- Bolero - 浪漫拉丁舞曲
- 病嬌 (Yandere) - 動漫病嬌風格
- 爵士樂 (Jazz) - 經典爵士
- 古典音樂 (Classical) - 古典音樂
- 電子音樂 (Electronic) - 現代電子音樂
- 流行音樂 (Pop) - 當代流行音樂

## 🔧 技術棧

- **React 18** - 前端框架
- **TypeScript** - 類型安全
- **Vite** - 建置工具
- **Tailwind CSS** - 樣式框架
- **Node.js** - 運行環境

## 📈 SEO 優化

### 標題優化
- 長度控制在 50-60 字符
- 包含主要關鍵字
- 使用情感觸發詞
- 添加數字和統計

### 說明優化
- 包含相關關鍵字
- 使用表情符號增加視覺吸引力
- 包含行動呼籲 (CTA)
- 添加訂閱和通知提醒

### 標籤優化
- 限制在 15 個以內
- 涵蓋相關主題
- 包含趨勢關鍵字
- 避免過度標籤

## 🎨 自定義

### 添加新音樂類別
1. 在 `src/utils/musicCategories.ts` 中添加新類別
2. 更新 `MusicCategorySelector` 組件
3. 在模板生成器中添加對應邏輯

### 修改樣式
1. 編輯 `src/index.css` 中的 Tailwind 類別
2. 修改 `tailwind.config.js` 配置
3. 更新組件中的樣式類別

### 添加新功能
1. 創建新的 React 組件
2. 在 `App.tsx` 中添加路由
3. 更新導航標籤

## 🐛 故障排除

### 常見問題
1. **依賴安裝失敗**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **建置失敗**
   ```bash
   npm run build
   # 檢查錯誤訊息並修復
   ```

3. **開發服務器無法啟動**
   ```bash
   # 檢查端口是否被佔用
   lsof -ti:5173 | xargs kill -9
   npm run dev
   ```

## 📞 支援

如有問題或建議，請：
1. 在 GitHub 上創建 Issue
2. 聯繫開發者：techtrekleo
3. 查看專案文檔

## 📄 授權

MIT License - 詳見 LICENSE 檔案








