

export default function Page({ params }: { params: { album: string } }) {
  return <div>My Post: {params.album}</div>;
}
