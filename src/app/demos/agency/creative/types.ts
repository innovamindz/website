import { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

export type ClientType = {
  icon?: string
  image?: StaticImageData
  name?: string
  url?: string
}

export type ServiceType = {
  icon?: ReactNode
  image?: StaticImageData
  title: string
  description?: string
  url?: string
}

export type FeatureType = ServiceType

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
  createdAt?: string
  status?: 'published' | 'private'
}

export type RecentProjectType = {
  categoryClass: string
} & ProjectType

export type CompanyType = {
  icon?: string
  image?: StaticImageData
  name: string
  externalLink?: string
  url?: string
}

type AuthorType = {
  company?: CompanyType
} & UserType

export type TestimonialType = {
  userId?: AuthorType['id']
  user: AuthorType
  title?: string
  comment: string
  rating?: number
}

export type BlogType = {
  image: StaticImageData
  title: string
  description?: string
  category?: string
  tags?: string[]
  url: string
  publishedBy?: AuthorType
  publishedAt?: string
}
