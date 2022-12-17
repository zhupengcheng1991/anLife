const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
module.exports = {
    lang: 'zh-CN',
    title: '吾有北冥鱼，自能生双翼',
    description: 'Just playing around', 
    plugins: [
        docsearchPlugin({
            // 配置项
        }),
    ],
    theme: defaultTheme({
        logo: '/image/hero.png',
        lastUpdated: true,
        lastUpdatedText: '上次更新',
        contributors: true,
        contributorsText: '贡献者',
        navbar: [
            {
                text: '一周岁',
                link: '/oneYear',
            },

        ],
        sidebar: {
            '/oneYear/': [
                {
                    text: '目录',
                    children: ['/oneYear/README.md'],
                }
            ],
        }
    })
}