module.exports = {
    title: 'xrDebug',
    description: 'Lightweight debug utility',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#23a8e0'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logo.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }]
    ],
    themeConfig: {
        logo: '/logo.svg',
        pwa: false,
        repo: 'chevere/xrdebug',
        docsRepo: 'chevere/xrdebug-docs',
        docsBranch: 'main',
        smoothScroll: true,
        editLinks: true,
        lastUpdated: true
    },
};
