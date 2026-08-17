type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main>
      <h1>Blog Post</h1>
      <p>{slug}</p>
    </main>
  );
}
