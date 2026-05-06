import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/image";

export default async function GalleryPage() {
  const items = await client.fetch(
    `*[_type == "gallery"]`
  );

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        写真・動画
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {items.map((item: any) => (
          <div key={item._id}>
            
            {/* 画像 */}
            {item.image && (
              <img
                src={urlFor(item.image).width(400).url()}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "10px",
                }}
              />
            )}

            {/* 動画 */}
            {item.videoUrl && (
              <iframe
                src={item.videoUrl.replace("watch?v=", "embed/")}
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "12px" }}
              />
            )}

          </div>
        ))}
      </div>
    </main>
  );
}