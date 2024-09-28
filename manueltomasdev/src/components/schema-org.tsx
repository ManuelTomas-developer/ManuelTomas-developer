import { useTranslations } from 'next-intl'

export default function SchemaOrg() {
    const t = useTranslations('schema')

    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": t('name'),
        "jobTitle": t('jobTitle'),
        "url": process.env.NEXT_PUBLIC_SITE_URL,
        "sameAs": [
            t('linkedinUrl'),
            t('githubUrl'),
            // Adicione outras redes sociais
        ]
    }

    return (
        <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}