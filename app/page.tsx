import { client } from "@/lib/sanity";

export default async function Home() {
  const concerts = await client.fetch(
    `*[_type == "concert"] | order(date asc)`
  );

  return (
    <main style={{ padding: "20px" }}>
      <h1>公演情報</h1>

      {concerts.map((concert: any) => (
        <div key={concert._id} style={{ marginBottom: "20px" }}>
          <h2>{concert.title}</h2>
          <p>{new Date(concert.date).toLocaleDateString()}</p>
          <p>{concert.venue}</p>
        </div>
      ))}
    </main>
  );
}