import { client } from "@/lib/sanity";

export default async function RepertoirePage() {
  const items = await client.fetch(
    `*[_type == "repertoire"] | order(title asc)`
  );

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        レパートリー
      </h1>

      {items.map((item: any) => (
        <div
          key={item._id}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "12px 0",
          }}
        >
          <div style={{ fontWeight: "bold" }}>
            {item.title}
          </div>

          <div style={{ color: "#666" }}>
            {item.composer}
          </div>
        </div>
      ))}
    </main>
  );
}