import { useEffect } from 'react'
import { DescriptionSection } from './description_sec/description'
import { Header } from '../header/header'
import { EducationSection } from './education_sec/education'
import { ExperienceSection } from './experience_sec/experience'
import { SkillsSection } from './skills_sec/skills'

export function About() {
  useEffect(() => {
    document.title = 'Santiago Monsalve | About'
  }, [])
  return (
    <>
      <Header position={'relative'} />

      <DescriptionSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
    </>
  )
}
