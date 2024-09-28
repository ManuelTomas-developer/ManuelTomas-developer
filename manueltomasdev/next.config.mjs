import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "images.app.goo.gl",
				protocol: "https",
			},
		],
	},
};

export default withNextIntl(nextConfig);
