export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return <div>Movie id: {id}</div>;
}
