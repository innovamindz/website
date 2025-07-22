import { DateType } from '@/types'
import { IconType } from 'react-icons'
import { StaticImageData } from 'next/image'
import { UserType } from '@/types/user'

export type TestimonialType = {
  userId?: UserType['id']
  user: UserType
  title?: string
  comment: string
  rating?: number
}

export type CompanyType = {
  icon?: string
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}

export type CaseStudyType = {
  image?: StaticImageData
  title?: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  publishedBy?: UserType
  publishedAt?: DateType
  company: CompanyType
}

export type StepType = {
  stepNumber?: number
  icon?: IconType
  title: string
  description: string
}

export type SocialMediaType = {
  icon: IconType
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}

export type MemberType = {
  avatar: StaticImageData
  firstName: string
  lastName: string
  role?: string
  socialLinks: SocialMediaType[]
}
