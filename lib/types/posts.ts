import { StructuredText } from 'datocms-structured-text-utils'

export type Post = {
  id: string
  title: string
  content: StructuredText
}
