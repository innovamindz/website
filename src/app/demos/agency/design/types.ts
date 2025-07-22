import { IconType } from 'react-icons'
import { StaticImageData } from 'next/image'
import { UserType } from '@/types/user'

export type ServiceType = {
  icon?: IconType
  image?: StaticImageData
  title: string
  description?: string
  url?: string
}

export type DateType = {
  date?: number
  month?: string | number
  year?: number
  hour?: number
  minute?: number
}

export type ProjectType = {
  image: StaticImageData
  name: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  createdBy?: {
    user?: UserType
    team?: UserType[]
  }
  createdAt?: DateType
  status?: 'published' | 'private'
}

export type TestimonialType = {
  userId?: UserType['id']
  user: UserType
  title?: string
  comment: string
  rating?: number
}

export type StatisticType = {
  title: string
  stat: number
  description: string
  prefix?: string
  suffix?: string
}

export type BlogType = {
  image?: StaticImageData
  title: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  publishedBy?: UserType
  publishedAt?: DateType
}
