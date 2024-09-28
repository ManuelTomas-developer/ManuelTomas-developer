"use client"
import Link from 'next/link'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from 'next/navigation'

export default function Header() {
    const { theme, setTheme } = useTheme()
    const t = useTranslations('nav')
    const pathname = usePathname()
    const router = useRouter()

    const switchLanguage = (newLocale: string) => {
        const currentPath = pathname.split('/').slice(2).join('/') // Remove the current locale from the path
        router.push(`/${newLocale}/${currentPath}`)
    }

    return (
        <header className="py-4 px-4 border-b">
            <div className="container mx-auto flex justify-between items-center">
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/#about" className="hover:underline">{t('about')}</Link></li>
                        <li><Link href="/#projects" className="hover:underline">{t('projects')}</Link></li>
                        <li><Link href="/#skills" className="hover:underline">{t('skills')}</Link></li>
                        <li><Link href="/#experience" className="hover:underline">{t('experience')}</Link></li>
                        <li><Link href="/#contact" className="hover:underline">{t('contact')}</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <Select onValueChange={switchLanguage} defaultValue={pathname.split('/')[1]}>
                        <SelectTrigger className="w-[100px]">
                            <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="pt">Português</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="es">Español</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle theme"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                </div>
            </div>
        </header>
    )
}