export const locales = ["en", "zh-cn", "zh-tw", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; nativeName: string; htmlLang: string }
> = {
  en: { label: "English", nativeName: "English", htmlLang: "en" },
  "zh-cn": { label: "简体中文", nativeName: "简体中文", htmlLang: "zh-CN" },
  "zh-tw": { label: "繁體中文", nativeName: "繁體中文", htmlLang: "zh-TW" },
  ja: { label: "日本語", nativeName: "日本語", htmlLang: "ja" },
};

export type LocalizedAppContent = {
  name: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
};

export type App = {
  id: string;
  platforms: string[];
  accent: string;
  iconUrl: string;
  appStoreId: string;
  featured?: boolean;
  content: Record<Locale, LocalizedAppContent>;
};

export const ui = {
  "zh-cn": {
    metaDescription:
      "罗绪海开发的移动 App 作品集，包含专注、测距、无障碍、英语学习和夜视工具。",
    pageTitle: "App 作品集",
    languageNavLabel: "选择语言",
    themeToggleLabel: "切换深色模式",
    heroEyebrow: "Independent iOS Apps",
    heroTitle: "每一个 App，都为解决一个问题而生。",
    heroIntroExperienceSuffix:
      " 年独立开发经验，用设计与技术打磨细节，持续创造简洁、实用、可靠的 App。",
    viewApps: "查看 App",
    appStoreHome: "App Store 主页",
    featuredAppLabel: "精选 App",
    appConstellationLabel: "App 图标展示",
    overviewLabel: "作品概览",
    publishedProductsUnit: "款",
    publishedProductsLabel: "已发布产品",
    originalValue: "100%",
    originalLabel: "独立原创",
    nativeExperienceValue: "Apple",
    nativeExperienceLabel: "原生体验",
    daysUnit: "天",
    maintenanceLabel: "持续迭代",
    appsEyebrow: "All Apps",
    appsTitle: "全部作品",
    appsIntro:
      "从专注习惯、无障碍辅助到深度传感器工具，每款 App 都围绕一个清晰问题展开。",
    platformsLabel: "支持平台",
    tagsLabel: "标签",
    appStoreAriaPrefix: "在 App Store 查看",
    aboutEyebrow: "About",
    aboutTitle: "关于我",
    aboutDeveloperTitle: "苹果 App 独立开发者",
    aboutExperienceSuffix: "年独立开发经验",
    aboutSlogan: "为细节投入时间，为体验追求极致",
    aboutText: "独立开发者，持续打磨面向真实需求的工具与体验。",
    email: "发送邮件",
    openAppStore: "打开 App Store",
  },
  "zh-tw": {
    metaDescription:
      "緒海 羅開發的行動 App 作品集，包含專注、測距、無障礙、英文學習和夜視工具。",
    pageTitle: "App 作品集",
    languageNavLabel: "選擇語言",
    themeToggleLabel: "切換深色模式",
    heroEyebrow: "Independent iOS Apps",
    heroTitle: "每一個 App，都為解決一個問題而生。",
    heroIntroExperienceSuffix:
      " 年獨立開發經驗，用設計與技術打磨細節，持續創造簡潔、實用、可靠的 App。",
    viewApps: "查看 App",
    appStoreHome: "App Store 主頁",
    featuredAppLabel: "精選 App",
    appConstellationLabel: "App 圖示展示",
    overviewLabel: "作品概覽",
    publishedProductsUnit: "款",
    publishedProductsLabel: "已發布產品",
    originalValue: "100%",
    originalLabel: "獨立原創",
    nativeExperienceValue: "Apple",
    nativeExperienceLabel: "原生體驗",
    daysUnit: "天",
    maintenanceLabel: "持續迭代",
    appsEyebrow: "All Apps",
    appsTitle: "全部作品",
    appsIntro:
      "從專注習慣、無障礙輔助到深度感測器工具，每款 App 都圍繞一個清晰問題展開。",
    platformsLabel: "支援平台",
    tagsLabel: "標籤",
    appStoreAriaPrefix: "在 App Store 查看",
    aboutEyebrow: "About",
    aboutTitle: "關於我",
    aboutDeveloperTitle: "蘋果 App 獨立開發者",
    aboutExperienceSuffix: "年獨立開發經驗",
    aboutSlogan: "為細節投入時間，為體驗追求極致",
    aboutText: "獨立開發者，持續打磨面向真實需求的工具與體驗。",
    email: "發送郵件",
    openAppStore: "打開 App Store",
  },
  en: {
    metaDescription:
      "A mobile app portfolio by LuoXuhai , featuring focus, measuring, accessibility, English learning, and night vision tools.",
    pageTitle: "App Portfolio",
    languageNavLabel: "Choose language",
    themeToggleLabel: "Toggle dark mode",
    heroEyebrow: "Independent iOS Apps",
    heroTitle: "Every app is born to solve one problem.",
    heroIntroExperienceSuffix:
      " years of independent development experience, refining details with design and technology to keep creating simple, practical, and reliable apps.",
    viewApps: "View apps",
    appStoreHome: "App Store profile",
    featuredAppLabel: "Featured app",
    appConstellationLabel: "App icon showcase",
    overviewLabel: "Portfolio overview",
    publishedProductsUnit: "",
    publishedProductsLabel: "Published products",
    originalValue: "100%",
    originalLabel: "Independent original",
    nativeExperienceValue: "Apple",
    nativeExperienceLabel: "Native experience",
    daysUnit: " days",
    maintenanceLabel: "Continuous iteration",
    appsEyebrow: "All Apps",
    appsTitle: "All apps",
    appsIntro:
      "From focus habits and accessibility support to depth-sensor tools, every app is built around a clearly defined problem.",
    platformsLabel: "Supported platforms",
    tagsLabel: "Tags",
    appStoreAriaPrefix: "View on the App Store:",
    aboutEyebrow: "About",
    aboutTitle: "About me",
    aboutDeveloperTitle: "Independent Apple App Developer",
    aboutExperienceSuffix: " years of independent development experience",
    aboutSlogan: "Investing time in details, pursuing excellence in experience",
    aboutText:
      "Independent developer building focused tools and experiences for practical needs.",
    email: "Send email",
    openAppStore: "Open App Store",
  },
  ja: {
    metaDescription:
      "羅 緒海が開発したモバイル App ポートフォリオ。集中、測距、アクセシビリティ、英語学習、ナイトビジョンのツールを紹介します。",
    pageTitle: "App ポートフォリオ",
    languageNavLabel: "言語を選択",
    themeToggleLabel: "ダークモードを切り替え",
    heroEyebrow: "Independent iOS Apps",
    heroTitle: "すべての App は、一つの課題を解決するために生まれています。",
    heroIntroExperienceSuffix:
      "年の個人開発経験。デザインと技術で細部を磨き、シンプルで実用的、信頼できる App を作り続けています。",
    viewApps: "App を見る",
    appStoreHome: "App Store プロフィール",
    featuredAppLabel: "注目 App",
    appConstellationLabel: "App アイコン展示",
    overviewLabel: "作品概要",
    publishedProductsUnit: "本",
    publishedProductsLabel: "公開済みプロダクト",
    originalValue: "100%",
    originalLabel: "独自開発",
    nativeExperienceValue: "Apple",
    nativeExperienceLabel: "ネイティブ体験",
    daysUnit: "日",
    maintenanceLabel: "継続改善",
    appsEyebrow: "All Apps",
    appsTitle: "すべての作品",
    appsIntro:
      "集中習慣、アクセシビリティ支援、深度センサーのツールまで、各 App は明確な課題を中心に設計されています。",
    platformsLabel: "対応プラットフォーム",
    tagsLabel: "タグ",
    appStoreAriaPrefix: "App Store で見る:",
    aboutEyebrow: "About",
    aboutTitle: "私について",
    aboutDeveloperTitle: "Apple App 個人開発者",
    aboutExperienceSuffix: "年の個人開発経験",
    aboutSlogan: "細部に時間を注ぎ、体験の完成度を追求する",
    aboutText:
      "実用的なニーズに向けて、集中できるツールと体験を磨き続ける個人開発者です。",
    email: "メールを送信",
    openAppStore: "App Store を開く",
  },
} satisfies Record<Locale, Record<string, string>>;

export const apps: App[] = [
  {
    id: "off-phone",
    platforms: ["iPhone", "Apple Watch"],
    accent: "#5b8cff",
    iconUrl:
      "https://api.appmetadata.com/api/v1/apple/apps/6744548607/artwork/512/image",
    appStoreId: "6744548607",
    featured: true,
    content: {
      "zh-cn": {
        name: "别碰手机",
        subtitle: "离手机远一点，专注当下",
        description:
          "佩戴 Apple Watch 靠近手机时自动提醒，帮助减少无意识刷手机，重新建立健康的专注习惯。",
        category: "健康健美",
        tags: ["数字排毒", "专注", "番茄时钟", "距离提醒"],
      },
      "zh-tw": {
        name: "別碰手機",
        subtitle: "離手機遠一點，專注當下",
        description:
          "佩戴 Apple Watch 靠近手機時自動提醒，幫助減少無意識滑手機，重新建立健康的專注習慣。",
        category: "健康健美",
        tags: ["數位排毒", "專注", "番茄鐘", "距離提醒"],
      },
      en: {
        name: "Off Phone",
        subtitle: "Keep distance from your phone and stay present",
        description:
          "Get an automatic Apple Watch reminder when you move close to your iPhone, reducing mindless scrolling and rebuilding healthier focus habits.",
        category: "Health & Fitness",
        tags: ["Digital detox", "Focus", "Pomodoro", "Distance alerts"],
      },
      ja: {
        name: "スマホに触らない",
        subtitle: "スマホから離れて、今に集中",
        description:
          "Apple Watch を着けてスマホに近づくと自動で通知し、無意識のスクロールを減らして健全な集中習慣を取り戻します。",
        category: "ヘルスケア／フィットネス",
        tags: ["デジタルデトックス", "集中", "ポモドーロ", "距離通知"],
      },
    },
  },
  {
    id: "stay-awake",
    platforms: ["iPhone", "iPad", "Apple Watch"],
    accent: "#f59e0b",
    iconUrl:
      "https://api.appmetadata.com/api/v1/apple/apps/6479893638/artwork/512/image",
    appStoreId: "6479893638",
    content: {
      "zh-cn": {
        name: "瞌睡提醒",
        subtitle: "监控疲劳状态，时刻保持清醒",
        description:
          "面向学习、工作、备考和夜间场景的疲劳提醒工具，及时提示低头或打瞌睡状态。",
        category: "效率",
        tags: ["疲劳监控", "低头提醒", "备考", "熬夜"],
      },
      "zh-tw": {
        name: "瞌睡提醒",
        subtitle: "監控疲勞狀態，時刻保持清醒",
        description:
          "面向學習、工作、備考和夜間場景的疲勞提醒工具，及時提示低頭或打瞌睡狀態。",
        category: "效率",
        tags: ["疲勞監控", "低頭提醒", "備考", "熬夜"],
      },
      en: {
        name: "Stay Awake Reminder",
        subtitle: "Monitor fatigue and stay alert",
        description:
          "A fatigue reminder for study, work, exam prep, and late-night sessions that warns you when you lower your head or start dozing off.",
        category: "Productivity",
        tags: [
          "Fatigue monitoring",
          "Head-down alerts",
          "Exam prep",
          "Late nights",
        ],
      },
      ja: {
        name: "居眠りリマインダー",
        subtitle: "疲労状態を見守り、いつでも覚醒を保つ",
        description:
          "学習、仕事、試験対策、夜間のシーン向けに、うつむきや居眠りの状態をすばやく知らせる疲労リマインダーです。",
        category: "仕事効率化",
        tags: ["疲労モニタリング", "うつむき通知", "試験対策", "夜更かし"],
      },
    },
  },
  {
    id: "laser-measure",
    platforms: ["iPhone", "iPad"],
    accent: "#22c55e",
    iconUrl:
      "https://api.appmetadata.com/api/v1/apple/apps/6466744678/artwork/512/image",
    appStoreId: "6466744678",
    content: {
      "zh-cn": {
        name: "激光测距仪",
        subtitle: "深度传感器超高精度测距",
        description:
          "利用激光雷达与原深感相机进行距离和尺寸测量，适合工程测量、装修测量和相机辅助对焦。",
        category: "工具",
        tags: ["LiDAR", "测距", "水平仪", "装修"],
      },
      "zh-tw": {
        name: "雷射測距儀",
        subtitle: "深度感測器超高精度測距",
        description:
          "利用 LiDAR 與原深感相機進行距離和尺寸測量，適合工程測量、裝修測量和相機輔助對焦。",
        category: "工具",
        tags: ["LiDAR", "測距", "水平儀", "裝修"],
      },
      en: {
        name: "Laser Measure",
        subtitle: "High-precision measuring with depth sensors",
        description:
          "Use LiDAR and the TrueDepth camera to measure distances and dimensions for engineering, renovation, and camera focus assistance.",
        category: "Utilities",
        tags: ["LiDAR", "Measuring", "Level", "Renovation"],
      },
      ja: {
        name: "レーザー測距計",
        subtitle: "深度センサーで高精度に測距",
        description:
          "LiDAR と TrueDepth カメラで距離や寸法を測定し、工事測定、リフォーム測定、カメラのフォーカス補助に役立ちます。",
        category: "ユーティリティ",
        tags: ["LiDAR", "測距", "水準器", "リフォーム"],
      },
    },
  },
  {
    id: "smart-cane",
    platforms: ["iPhone", "iPad"],
    accent: "#8b5cf6",
    iconUrl:
      "https://api.appmetadata.com/api/v1/apple/apps/6461118479/artwork/512/image",
    appStoreId: "6461118479",
    content: {
      "zh-cn": {
        name: "盲杖",
        subtitle: "检测障碍物距离，辅助视障出行",
        description:
          "实时检测与识别障碍物距离，为视障者提供出行辅助，让手机成为随身避障工具。",
        category: "辅助功能",
        tags: ["无障碍", "避障", "距离检测", "出行辅助"],
      },
      "zh-tw": {
        name: "盲杖",
        subtitle: "偵測障礙物距離，輔助視障出行",
        description:
          "即時偵測與識別障礙物距離，為視障者提供出行輔助，讓手機成為隨身避障工具。",
        category: "輔助功能",
        tags: ["無障礙", "避障", "距離偵測", "出行輔助"],
      },
      en: {
        name: "Smart Cane",
        subtitle: "Detect obstacle distance for accessible travel",
        description:
          "Detect and identify obstacle distance in real time, giving visually impaired users a phone-based companion for safer navigation.",
        category: "Accessibility",
        tags: [
          "Accessibility",
          "Obstacle avoidance",
          "Distance detection",
          "Travel aid",
        ],
      },
      ja: {
        name: "スマート白杖",
        subtitle: "障害物までの距離を検出し、視覚障がい者の移動を支援",
        description:
          "障害物までの距離をリアルタイムに検出・識別し、スマホを持ち歩ける避障支援ツールとして活用できます。",
        category: "アクセシビリティ",
        tags: ["アクセシビリティ", "障害物回避", "距離検出", "移動支援"],
      },
    },
  },
  {
    id: "igrammar",
    platforms: ["iPhone", "iPad"],
    accent: "#ec4899",
    iconUrl:
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/45/76/e0/4576e06c-75d7-2c1e-f74c-78c021fff9dc/Placeholder.mill/400x400bb-75.webp",
    appStoreId: "6447102989",
    content: {
      "zh-cn": {
        name: "爱语法",
        subtitle: "iGrammar，AI 智能分析英语语法",
        description:
          "分析词性、时态、句子成分、语气和从句结构，帮助理解英语长难句并提升学习效率。",
        category: "教育",
        tags: ["AI", "英语语法", "长难句", "词典"],
      },
      "zh-tw": {
        name: "愛語法",
        subtitle: "iGrammar，AI 智慧分析英語語法",
        description:
          "分析詞性、時態、句子成分、語氣和子句結構，幫助理解英語長難句並提升學習效率。",
        category: "教育",
        tags: ["AI", "英語語法", "長難句", "詞典"],
      },
      en: {
        name: "iGrammar",
        subtitle: "AI-powered English grammar analysis",
        description:
          "Analyze parts of speech, tenses, sentence components, moods, and clause structures to understand long English sentences more efficiently.",
        category: "Education",
        tags: ["AI", "English grammar", "Long sentences", "Dictionary"],
      },
      ja: {
        name: "iGrammar",
        subtitle: "AI が英語文法をスマートに解析",
        description:
          "品詞、時制、文の構成要素、ムード、節構造を解析し、英語の長文理解と学習効率の向上を支援します。",
        category: "教育",
        tags: ["AI", "英語文法", "長文", "辞書"],
      },
    },
  },
  {
    id: "night-vision",
    platforms: ["iPhone", "iPad", "Apple Watch"],
    accent: "#06b6d4",
    iconUrl:
      "https://api.appmetadata.com/api/v1/apple/apps/1668629667/artwork/512/image",
    appStoreId: "1668629667",
    content: {
      "zh-cn": {
        name: "夜视仪",
        subtitle: "激光雷达 + 原深感相机扫描成像",
        description:
          "在低光或无光环境下进行扫描成像、拍摄与录像，探索深度传感器带来的夜视体验。",
        category: "摄影与录像",
        tags: ["夜视", "LiDAR", "红外相机", "扫描成像"],
      },
      "zh-tw": {
        name: "夜視儀",
        subtitle: "LiDAR + 原深感相機掃描成像",
        description:
          "在低光或無光環境下進行掃描成像、拍攝與錄影，探索深度感測器帶來的夜視體驗。",
        category: "攝影與錄影",
        tags: ["夜視", "LiDAR", "紅外相機", "掃描成像"],
      },
      en: {
        name: "Night Vision",
        subtitle: "LiDAR + TrueDepth camera scanning",
        description:
          "Scan, capture photos, and record video in low-light or no-light environments while exploring night vision experiences powered by depth sensors.",
        category: "Photo & Video",
        tags: ["Night vision", "LiDAR", "Infrared camera", "Scanning"],
      },
      ja: {
        name: "ナイトビジョン",
        subtitle: "LiDAR + TrueDepth カメラでスキャン成像",
        description:
          "低照度や暗闇の環境でスキャン成像、写真撮影、動画録画を行い、深度センサーがもたらすナイトビジョン体験を探れます。",
        category: "写真／ビデオ",
        tags: ["ナイトビジョン", "LiDAR", "赤外線カメラ", "スキャン成像"],
      },
    },
  },
];

export const developer = {
  name: {
    "zh-cn": "罗绪海",
    "zh-tw": "羅緒海",
    en: "Luo Xuhai",
    ja: "羅緒海",
  } satisfies Record<Locale, string>,
  appStoreUrl:
    "https://apps.apple.com/cn/developer/%E7%BB%AA%E6%B5%B7-%E7%BD%97/id1572453992",
  githubUrl: "https://github.com/luoxuhai",
  xUrl: "https://x.com/luoxuhai",
  email: "darkce97@gmail.com",
};
