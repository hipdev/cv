import LearningByTeaching, {
  post as learningByTeaching,
} from '@/content/posts/learning-by-teaching'

// Import each local post here to publish it. Unlisted files remain drafts.
export const posts = [{ ...learningByTeaching, Content: LearningByTeaching }]

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}
