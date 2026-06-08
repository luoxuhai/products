export type App = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  platforms: string[];
  tags: string[];
  accent: string;
  icon: string;
  storeUrl: string;
  featured?: boolean;
};

export const apps: App[] = [
  {
    id: 'off-phone',
    name: '别碰手机',
    subtitle: '离手机远一点，专注当下',
    description:
      '佩戴 Apple Watch 靠近手机时自动提醒，帮助减少无意识刷手机，重新建立健康的专注习惯。',
    category: '健康健美',
    platforms: ['iPhone', 'Apple Watch'],
    tags: ['数字排毒', '专注', '番茄时钟', '距离提醒'],
    accent: '#5b8cff',
    icon: '📵',
    storeUrl:
      'https://apps.apple.com/cn/app/%E5%88%AB%E7%A2%B0%E6%89%8B%E6%9C%BA-%E7%A6%BB%E6%89%8B%E6%9C%BA%E8%BF%9C%E4%B8%80%E7%82%B9-%E4%B8%8D%E5%81%9A%E6%89%8B%E6%9C%BA%E6%8E%A7-%E4%B8%93%E6%B3%A8%E5%BD%93%E4%B8%8B-%E4%B8%8D%E7%8E%A9%E6%89%8B%E6%9C%BA/id6744548607',
    featured: true,
  },
  {
    id: 'stay-awake',
    name: '瞌睡提醒',
    subtitle: '监控疲劳状态，时刻保持清醒',
    description:
      '面向学习、工作、备考和夜间场景的疲劳提醒工具，及时提示低头或打瞌睡状态。',
    category: '效率',
    platforms: ['iPhone', 'iPad', 'Apple Watch'],
    tags: ['疲劳监控', '低头提醒', '备考', '熬夜'],
    accent: '#f59e0b',
    icon: '👀',
    storeUrl:
      'https://apps.apple.com/cn/app/%E7%9E%8C%E7%9D%A1%E6%8F%90%E9%86%92-%E7%9B%91%E6%8E%A7%E7%96%B2%E5%8A%B3%E7%8A%B6%E6%80%81-%E6%97%B6%E5%88%BB%E4%BF%9D%E6%8C%81%E6%B8%85%E9%86%92/id6479893638',
  },
  {
    id: 'laser-measure',
    name: '激光测距仪',
    subtitle: '深度传感器超高精度测距',
    description:
      '利用激光雷达与原深感相机进行距离和尺寸测量，适合工程测量、装修测量和相机辅助对焦。',
    category: '工具',
    platforms: ['iPhone', 'iPad'],
    tags: ['LiDAR', '测距', '水平仪', '装修'],
    accent: '#22c55e',
    icon: '📏',
    storeUrl:
      'https://apps.apple.com/cn/app/%E6%BF%80%E5%85%89%E6%B5%8B%E8%B7%9D%E4%BB%AA-%E6%B7%B1%E5%BA%A6%E4%BC%A0%E6%84%9F%E5%99%A8%E8%B6%85%E9%AB%98%E7%B2%BE%E5%BA%A6%E6%B5%8B%E8%B7%9D-%E6%BF%80%E5%85%89%E9%9B%B7%E8%BE%BE-%E5%8E%9F%E6%B7%B1%E6%84%9F%E7%9B%B8%E6%9C%BA/id6466744678',
  },
  {
    id: 'smart-cane',
    name: '盲杖',
    subtitle: '检测障碍物距离，辅助视障出行',
    description:
      '实时检测与识别障碍物距离，为视障者提供出行辅助，让手机成为随身避障工具。',
    category: '辅助功能',
    platforms: ['iPhone', 'iPad'],
    tags: ['无障碍', '避障', '距离检测', '出行辅助'],
    accent: '#8b5cf6',
    icon: '🦯',
    storeUrl:
      'https://apps.apple.com/cn/app/%E7%9B%B2%E6%9D%96-%E6%A3%80%E6%B5%8B%E9%9A%9C%E7%A2%8D%E7%89%A9%E8%B7%9D%E7%A6%BB-%E8%A7%86%E9%9A%9C%E4%B8%8D%E5%86%8D%E6%98%AF%E9%9A%9C%E7%A2%8D-%E7%9B%B2%E4%BA%BA%E9%81%BF%E9%9A%9C%E4%B8%93%E7%94%A8/id6461118479',
  },
  {
    id: 'igrammar',
    name: '爱语法',
    subtitle: 'iGrammar，AI 智能分析英语语法',
    description:
      '分析词性、时态、句子成分、语气和从句结构，帮助理解英语长难句并提升学习效率。',
    category: '教育',
    platforms: ['iPhone', 'iPad'],
    tags: ['AI', '英语语法', '长难句', '词典'],
    accent: '#ec4899',
    icon: '📚',
    storeUrl:
      'https://apps.apple.com/cn/app/%E7%88%B1%E8%AF%AD%E6%B3%95-igrammar-ai%E6%99%BA%E8%83%BD%E5%88%86%E6%9E%90%E8%8B%B1%E8%AF%AD%E8%AF%AD%E6%B3%95/id6447102989',
  },
  {
    id: 'night-vision',
    name: '夜视仪',
    subtitle: '激光雷达 + 原深感相机扫描成像',
    description:
      '在低光或无光环境下进行扫描成像、拍摄与录像，探索深度传感器带来的夜视体验。',
    category: '摄影与录像',
    platforms: ['iPhone', 'iPad', 'Apple Watch'],
    tags: ['夜视', 'LiDAR', '红外相机', '扫描成像'],
    accent: '#06b6d4',
    icon: '🌙',
    storeUrl:
      'https://apps.apple.com/cn/app/%E5%A4%9C%E8%A7%86%E4%BB%AA-%E6%BF%80%E5%85%89%E9%9B%B7%E8%BE%BE-%E5%8E%9F%E6%B7%B1%E6%84%9F%E7%9B%B8%E6%9C%BA%E6%89%AB%E6%8F%8F%E6%88%90%E5%83%8F-%E6%97%A0%E5%85%89%E7%8E%AF%E5%A2%83%E6%8B%8D%E6%91%84%E5%BD%95%E5%83%8F/id1668629667',
  },
];

export const developer = {
  name: '绪海 罗',
  appStoreUrl:
    'https://apps.apple.com/cn/developer/%E7%BB%AA%E6%B5%B7-%E7%BD%97/id1572453992',
  email: 'darkce97@gmail.com',
};
