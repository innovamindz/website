import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export type ServiceType = {
  icon?: ReactNode
  image?: StaticImageData
  title: string
  description?: string
  url?: string
  features: {
    icon: IconType
    title: string
  }[]
}

export type WorkFlowStepType = {
  image?: StaticImageData
  stepNumber?: number
  icon: IconType
  title: string
  description: string
}

export type ClientType = {
  icon?: string
  image?: StaticImageData
  name?: string
  externalLink?: string
  url?: string
}
