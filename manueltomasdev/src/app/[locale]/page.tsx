/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useProjects } from '@/hooks/use-projects'
import { AnimatedSection, StaggeredList, StaggeredItem, HoverScaleCard, FloatingElement, RotatingBadge } from '@/components/animations'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'
import SEO from '@/components/seo'
import manuel from "../../../public/assets/manuel.png"
import Meteors from '@/components/ui/meteors'
// import { unstable_setRequestLocale } from 'next-intl/server';


type projectsType = {
  title: string,
  description: string,
  technologies: string[],
  github: string,
  live: string,
}

export default function Home() {
  const { projects, isLoading, isError } = useProjects<projectsType[]>()
  const [formStatus, setFormStatus] = useState('')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])


  const t = useTranslations()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus(t('contact.success'))
      } else {
        setFormStatus(t('contact.error'))
      }
    } catch (error) {
      setFormStatus(t('contact.error'))
    }
  }

  return (
    <>
      <SEO
        title={t('home.title')}
        description={t('home.description')}
        ogImage={`/og?title=${encodeURIComponent(t('home.title'))}`}
      />
      <div className="space-y-24">
        <AnimatedSection>
          <section id="about" className="text-center min-h-screen flex flex-col justify-center items-center relative">
            <motion.div style={{ opacity, scale }} className="mb-8">
              <h1 className="text-6xl font-bold mb-4">{t('hero.title')}</h1>
              <p className="text-2xl mb-4">{t('hero.subtitle')}</p>
            </motion.div>
            <FloatingElement>
              <p className="max-w-2xl mx-auto text-lg">
                {t('hero.description')}
              </p>
            </FloatingElement>
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects">
            <h2 className="text-4xl font-semibold mb-8 text-center">{t('sections.projects')}</h2>
            {isLoading ? (
              <p>Loading projects...</p>
            ) : isError ? (
              <p>Error loading projects.</p>
            ) : (
              <StaggeredList>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects?.map((project) => (
                    <StaggeredItem key={project.title}>
                      <HoverScaleCard>
                        <Card className="h-full flex flex-col">
                          <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <Image
                              src={manuel.src}
                              alt={project.title}
                              width={manuel.width}
                              height={manuel.height}
                              className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <RotatingBadge key={tech}>
                                  <Badge variant="secondary">{tech}</Badge>
                                </RotatingBadge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <Button variant="outline" asChild>
                              <Link href={project.github}>
                                <Github className="mr-2 h-4 w-4" /> {t('project.viewGithub')}
                              </Link>
                            </Button>
                            <Button asChild>
                              <Link href={project.live}>
                                <ExternalLink className="mr-2 h-4 w-4" /> {t('project.viewProject')}
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </HoverScaleCard>
                    </StaggeredItem>
                  ))}
                </div>
              </StaggeredList>
            )}
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="skills">
            <h2 className="text-4xl font-semibold mb-8 text-center">{t('sections.skills')}</h2>
            <StaggeredList>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                  <StaggeredItem key={skill}>
                    <RotatingBadge>
                      <Badge variant="outline" className="text-lg py-2 px-4">
                        {skill}
                      </Badge>
                    </RotatingBadge>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredList>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="experience">
            <h2 className="text-4xl font-semibold mb-8 text-center">{t('sections.experience')}</h2>
            <StaggeredList>
              {experiences.map((exp) => (
                <StaggeredItem key={exp.period}>
                  <HoverScaleCard>
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company} | {exp.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5">
                          {exp.responsibilities.map((resp) => (
                            <li key={resp}>{resp}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </HoverScaleCard>
                </StaggeredItem>
              ))}
            </StaggeredList>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact">
            <h2 className="text-4xl font-semibold mb-8 text-center">{t('sections.contact')}</h2>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">{t('contact.name')}</label>
                      <input id="name" name="name" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">{t('contact.email')}</label>
                      <input id="email" name="email" type="email" className="w-full p-2 border rounded" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">{t('contact.message')}</label>
                    <textarea id="message" name="message" className="w-full p-2 border rounded" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">{t('contact.send')}</Button>
                </form>
                {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
              </CardContent>
            </Card>
          </section>
        </AnimatedSection>
      </div>
    </>
  )
}

const skills = [
  "JavaScript", "React", "Node.js", "TypeScript", "HTML5", "CSS3", "Git", "MongoDB", "SQL", "AWS"
]

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2020 - Present",
    responsibilities: [
      "Led technical aspects of large-scale e-commerce projects",
      "Implemented microservices architectures",
      "Mentored junior and mid-level developers"
    ]
  },
  {
    title: "Front-end Developer",
    company: "Web Innovations Ltd.",
    period: "Mar 2018 - Dec 2019",
    responsibilities: [
      "Developed responsive interfaces with React",
      "Optimized web application performance",
      "Integrated with RESTful APIs"
    ]
  }
]
