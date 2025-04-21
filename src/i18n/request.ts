import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const locales: Record<string, string> = {
  en: "en",
  it: "it",
  "it-IT": "it",
  "it-CH": "it",
  "it-VA": "it",
  "en-IE": "en",
};

export default getRequestConfig(async () => {
  const h = await headers();
  const defaultLocale = h.get("accept-language")?.split(",")[0];
  const l = cookies().get("NEXT_LOCALE")?.value || defaultLocale || "en";
  const locale = locales[l] || "en";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
