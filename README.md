# 🎵 YouTube 標題 SEO 生成器

一個強大的 React TypeScript 應用程式，專門為 YouTube 音樂影片生成 SEO 優化的標題、描述和標籤。專為音樂內容創作者打造。

## ✨ 功能特色

- **🎵 音樂類別支援**：18種不同音樂風格，包括 Chill、Bossa Nova、Bolero、病嬌、流行、搖滾、Lo-Fi、原聲、演奏、R&B、嘻哈、電子、HIFI、都市流行、靈魂樂、饒舌、爵士和古典
- **🤖 AI 智能生成**：基於歌曲名稱和音樂風格的智能 SEO 內容生成
- **📊 SEO 評分系統**：即時 SEO 優化評分（80-100分）
- **📋 完整模板**：一鍵生成標題、描述和標籤
- **📱 響應式設計**：完美支援桌面和行動裝置
- **🎨 現代化介面**：使用 Tailwind CSS 打造的簡潔直觀介面

## 🚀 快速開始

### 環境需求

- Node.js (v16 或更高版本)
- npm 或 yarn

### 安裝步驟

1. 複製倉庫：
```bash
git clone https://github.com/techtrekleo/YouTube-Title-SEO.git
cd YouTube-Title-SEO
```

2. 安裝依賴：
```bash
npm install
```

3. 啟動開發伺服器：
```bash
npm run dev
```

4. 開啟瀏覽器並訪問 `http://localhost:5173`

## 🎵 支援的音樂類別

### 原創類別
- **Chill** - 放鬆的環境音樂
- **Bossa Nova** - 巴西爵士風格
- **Bolero** - 浪漫的拉丁舞曲
- **病嬌 (Yandere)** - 戲劇性的動漫風格音樂

### 新增類別
- **Pop (流行)** - 當代流行音樂
- **Rock (搖滾)** - 強勁的電吉他音樂
- **Lofi** - 溫暖的低保真節拍
- **Acoustic (原聲)** - 自然的無插電音樂
- **Instrumental (演奏)** - 純粹的管弦樂
- **R&B (節奏藍調)** - 充滿靈魂的節奏藍調
- **Hip Hop (嘻哈)** - 都市現代節拍
- **Electronic (電子)** - 充滿活力的 EDM 和電子音樂
- **HIFI (高保真)** - 優質高保真音質
- **City Pop (都市流行)** - 日式都市精緻風格
- **Soul (靈魂樂)** - 深層情感表達
- **Rap (饒舌)** - 都市歌詞和節奏
- **Jazz** - 經典搖擺和比博普
- **Classical** - 永恆的管弦樂傑作

## 📝 使用方式

1. **輸入歌曲名稱**：輸入您的歌曲名稱（必填）
2. **輸入歌手**：添加原唱者名稱（選填）
3. **選擇音樂風格**：從18種不同音樂類別中選擇
4. **生成內容**：點擊生成按鈕創建 SEO 內容
5. **複製結果**：使用複製按鈕複製標題、描述和標籤

## 🎯 SEO 功能

- **標題優化**：生成吸引人且 SEO 友好的標題
- **描述模板**：完整的 YouTube 描述，包含表情符號和標籤
- **標籤生成**：最多35個相關標籤，用逗號分隔
- **SEO 評分**：即時優化評分
- **字數統計**：追蹤標題和描述長度

## 🛠️ 技術架構

- **React 18** - 現代 React 與 hooks
- **TypeScript** - 類型安全的開發
- **Vite** - 快速建置工具
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Node.js** - JavaScript 運行環境

## 📁 專案結構

```
src/
├── components/          # React 組件
├── utils/              # 工具函數
│   ├── musicCategories.ts    # 音樂類別定義
│   └── geminiAI.ts          # Gemini AI 整合
├── App.tsx             # 主要應用程式組件
└── index.tsx           # 應用程式入口點
```

## 🚀 部署

### Railway 部署

應用程式已配置 Railway 部署，包含：
- 靜態檔案服務
- 環境變數支援
- 自動建置

### 本地建置

```bash
npm run build
npm start
```

## 🤝 貢獻

1. Fork 此倉庫
2. 創建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

此專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 檔案。

## 👨‍💻 作者

**音樂脈動-Sonic Pulse**

- YouTube 頻道：[🎵 音樂脈動-Sonic Pulse](https://www.youtube.com/@%E9%9F%B3%E6%A8%82%E8%84%88%E5%8B%95SonicPulse)

## 🙏 致謝

- 用 ❤️ 為音樂創作者社群打造
- 特別感謝所有音樂內容創作者
- 受到對更好 YouTube SEO 工具需求的啟發

---

**🎵 使用 AI 驅動的 SEO 優化，讓您的音樂影片更容易被發現！**