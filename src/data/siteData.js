// 導覽選單
export const menuItems = [
    { name: '首頁', path: '/' },
    { name: '部落格', path: '/blog' },
    { name: '作品集', path: '/#collection' },
]

// 技能卡
export const skills = [
    { name: 'React', image: '/images/React.png' },
    { name: 'Tailwind', image: '/images/Tailwindcss6.png' },
    { name: 'TypeScript', image: '/images/TypeScript.png' },
    { name: 'Node.js', image: '/images/Node.js.png' },
]

// 社群連結
export const socialLinks = [
    { name: 'GitHub', icon: 'bi bi-github', url: 'https://github.com/HsienLu' },
    { name: 'CakeResume', icon: 'bi bi-person-circle', url: 'https://www.cakeresume.com/7cc5eb' },
    { name: 'Discord', icon: 'bi bi-discord', url: 'https://discordapp.com/users/384353452035145729' },
]

// 首頁作品介紹
export const showcaseProjects = [
    {
        id: 1,
        name: 'LOL組隊平台',
        description: '上大師的夢想，從這裡開始實現',
        tags: ['JavaScript', 'Bootstrap', 'Node.js'],
        link: 'https://github.com/HsienLu/LOL-TeamMaster',
        bgImage: '/images/LOL-Master.png',
        workImage: '/images/group-work1.png',
        layout: 'right', // 圖左文右
    },
    {
        id: 2,
        name: '鍵盤電商',
        description: '讓我們用鍵盤在螢幕上編織網站的故事吧',
        tags: ['React', 'Bootstrap', 'RWD'],
        link: 'https://github.com/HsienLu/Key_traveler_big-stable-',
        bgImage: '/images/Key-travel.png',
        workImage: '/images/Key-travel.png',
        layout: 'left', // 文左
    },
    {
        id: 3,
        name: 'Oreil.ly 快速開啟連結',
        description: '幫你在看Oreil.ly書籍的過程中更順利',
        tags: ['React', 'Tailwind', 'TypeScript'],
        link: 'https://github.com/HsienLu/or-open',
        bgImage: '/images/or-open.png',
        workImage: '/images/Or-open-work.png',
        layout: 'right',
    },
]

// 作品集頁面資料（collection）
export const collections = [
    {
        id: 1,
        name: '星際旅行訂票平台',
        description: '悠遊宇宙的夢想，從這裡開始實現',
        tags: ['Bootstrap', 'Javascript', 'RWD'],
        designPrinciple: '宇宙旅行、深色背景、強烈視覺效果',
        devMethod: 'Bootstrap、Javascript、RWD',
        detail: 'STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。',
        images: [
            { src: '/images/modal-image1.png', title: '主視覺', desc: '可直接設定日期、起迄星球、張數，快速查詢可購買的票券。' },
            { src: '/images/modal-image2.png', title: '推薦查詢', desc: '給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。' },
        ],
    },
]

// 作品集頁面頂部經驗
export const experiences = [
    {
        label: '2B經驗',
        content: '內部監控系統、庫存系統、採購系統、行銷整合系統',
    },
    {
        label: '2C經驗',
        content: '跨國美妝保養電商、個人品牌網站、醫美網站、電子商務',
    },
]
