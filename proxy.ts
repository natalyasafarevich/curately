import createIntlMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createIntlMiddleware({
  locales,
  defaultLocale: 'ru',
  localePrefix: 'always', // /ru/..., /en/...
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};