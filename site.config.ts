import { siteConfig } from './lib/site-config'
import { parsePageId } from 'notion-utils'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: process.env.LANG === "ru_RU.UTF-8"
    ? parsePageId('https://supreme-pound-39d.notion.site/ab9599230e624aaabd9e9c7b8e81df61')
    : parsePageId('https://supreme-pound-39d.notion.site/6fef6a20338d494d8329ce24d68844d5'),
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Diadoc Promo Demo',
  domain: 'nextjs-notion-starter-kit-for-intern-conf',
  author: 'Конференция стажеров в Контуре',

  // open graph metadata (optional)
  description: 'Пример промо страницы с использованием NextJS шаблона',

  // social usernames (optional)
  twitter: 'transitive_bs',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/about': parsePageId('https://supreme-pound-39d.notion.site/13cbabea6a9d46fc83a631b81f240b83'),
    '/contacts': parsePageId('https://supreme-pound-39d.notion.site/48119e213e1d45d0bd7dbb9709e45806')
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'О нас',
      pageId: parsePageId('https://supreme-pound-39d.notion.site/13cbabea6a9d46fc83a631b81f240b83')
    },
    {
      title: 'Контакты',
      pageId: parsePageId('https://supreme-pound-39d.notion.site/48119e213e1d45d0bd7dbb9709e45806')
    }
  ]
})
