import { UserType } from '@/types/user'
import { StaticImageData } from 'next/image'
import type { IconType } from 'react-icons'

export type ClientType = {
  icon?: string
  image?: StaticImageData
  name?: string
  url?: string
}

export type ServiceType = {
  title: string
  description: string
  icon: IconType
  url?: string
}

export type TestimonialType = {
  userId?: UserType['id']
  user: UserType
  title?: string
  comment: string
  rating?: number
}
