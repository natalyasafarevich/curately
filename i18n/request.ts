import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = locales.includes(requested as Locale) ? requested : "ru";

  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
