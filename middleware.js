import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['ar', 'fr'],
  defaultLocale: 'fr',
});

export default intlMiddleware; // Add this line

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
