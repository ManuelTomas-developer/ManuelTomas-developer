import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || "https://manueltomas.vercel.app";

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
		},
		// Adicione mais URLs conforme necessário
	];
}
