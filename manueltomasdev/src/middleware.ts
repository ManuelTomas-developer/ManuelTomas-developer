import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: ["en", "pt", "fr", "es"],
	defaultLocale: "en",
});

export const config = {
	matcher: ["/((?!api|_next|.*\\..*).*)"],
};
