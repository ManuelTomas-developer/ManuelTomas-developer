import Head from 'next/head'
import { useTranslations } from 'next-intl'

interface SEOProps {
    title?: string
    description?: string
    canonicalUrl?: string
    ogImage?: string
}

export default function SEO({ title, description, canonicalUrl, ogImage }: SEOProps) {
    const t = useTranslations('seo')
    const defaultTitle = t('defaultTitle')
    const defaultDescription = t('defaultDescription')
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manueltomas.vercel.app'

    const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
    const seoDescription = description || defaultDescription
    const seoImage = `${siteUrl}${ogImage || '/images/default-og-image.jpg'}`

    return (
        <Head>
            {/* Google tag (gtag.js) */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-7FRTJNG09N"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-7FRTJNG09N');
            </script> */}
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <link rel="canonical" href={canonicalUrl || siteUrl} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={seoImage} />
        </Head>
    )
}