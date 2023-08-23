interface Params {
  params: {
    id: string
  }
}

export default async function PostModalPage({ params: { id } }: Params) {
  return (
    <div className="mx-auto max-w-lg">
      <p>This is a test</p>
    </div>
  )
}
