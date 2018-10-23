import ShareImg72 from './resources/img/icon-72x72.png';
import ShareImg96 from './resources/img/icon-96x96.png';
import ShareImg128 from './resources/img/icon-128x128.png';
import ShareImg144 from './resources/img/icon-144x144.png';
import ShareImg152 from './resources/img/icon-152x152.png';
import ShareImg192 from './resources/img/icon-192x192.png';
import ShareImg384 from './resources/img/icon-384x384.png';
import ShareImg512 from './resources/img/icon-512x512.png';

export default class Routes {
  apply(routeHandler) {
    const routes = [
      {
        path: '/',
        exact: true,
        component: import('./app/components/home/home'),
      },
    ];

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
      routeHandler.setPwaSchema({
        name: 'ReactPWA | Redux',
        short_name: 'RPWAR',
        dir: 'ltr',
        lang: 'en-US',
        orientation: 'any',
        start_url: '/examples/redux',
        background_color: '#111',
        theme_color: '#111',
        display: 'standalone',
        description: 'Redux implementation using ReactPWA',
        icons: [
          {
            src: ShareImg72,
            sizes: '72x72',
          },
          {
            src: ShareImg96,
            sizes: '96x96',
          },
          {
            src: ShareImg128,
            sizes: '128x128',
          },
          {
            src: ShareImg144,
            sizes: '144x144',
          },
          {
            src: ShareImg152,
            sizes: '152x152',
          },
          {
            src: ShareImg192,
            sizes: '192x192',
          },
          {
            src: ShareImg384,
            sizes: '384x384',
          },
          {
            src: ShareImg512,
            sizes: '512x512',
          },
        ],
      });
      // eslint-disable-next-line
      routeHandler.getDefaultSeoSchema = () => ({
        title: 'ReactPWA | Redux',
        name: 'ReactPWA | Redux',
        description: 'Redux implementation using ReactPWA',
        type: 'website',
        url: 'https://www.reactpwa.com/examples/redux',
        site_name: 'ReactPWA',
        image: ShareImg512,
        meta: [
          {
            name: 'author',
            content: 'Yash Thakur',
          },
          {
            name: 'description',
            content: 'Redux implementation using ReactPWA',
          },
          {
            name: 'theme-color',
            content: '#111',
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#111',
          },
          {
            name: 'msapplication-TileColor',
            content: '#111',
          },
          {
            name: 'application-name',
            content: 'ReactPWA | Redux',
          },
          {
            name: 'generator',
            content: 'Redux',
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'ReactPWA | Redux',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, maximum-scale=5.0',
          },
        ],
      });
    });
  }
}
