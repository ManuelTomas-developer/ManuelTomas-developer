import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-6 border-t">
            <div className="container mx-auto flex justify-between items-center">
                <p>&copy; 2024 Manuel Tomás. Todos os direitos reservados.</p>
                <div className="flex space-x-4">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="w-6 h-6" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link href="mailto:manueldiogotomas@gmail.com" aria-label="Email">
                        <Mail className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}