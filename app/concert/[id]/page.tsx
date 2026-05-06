export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/image";

export default async function ConcertDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: slug } = await params;

  const concert = await client.fetch(
    `*[_type == "concert" && slug.current == $slug][0]{
      _id,
      title,
      date,
      image,
      venue,
      description,
      price,
      mapUrl,
      ticketUrl
    }`,
    { slug }
  );

  if (!concert) {
    return (
      <main style={{ padding: "40px" }}>
        <p>データが見つかりませんでした。</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px" }}>
      
      {/* タイトル */}
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        {concert.title}
      </h1>

      {/* 画像 */}
      {concert.image && (
        <img
          src={urlFor(concert.image).width(800).url()}
          alt={concert.title}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        />
      )}

      {/* 日付 */}
      <p style={{ color: "#666" }}>
        {concert.date
          ? new Date(concert.date).toLocaleDateString("ja-JP")
          : ""}
      </p>

      {/* 会場 */}
      <p style={{ marginBottom: "20px" }}>
        {concert.venue}
      </p>

      {/* 詳細 */}
      {concert.description && (
        <div
          style={{
            whiteSpace: "pre-line",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}
        >
          {concert.description}
        </div>
      )}

      {/* 料金 */}
      {concert.price && (
        <p style={{ fontWeight: "bold", marginBottom: "20px" }}>
          {concert.price}
        </p>
      )}

      {/* チケットボタン */}
      {concert.ticketUrl && (
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <a
            href={concert.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              backgroundColor: "#0070f3",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            🎫 チケットを購入
          </a>
        </div>
      )}

      {/* 地図 */}
      {concert.mapUrl && (
        <div style={{ marginTop: "40px" }}>
          <h2 style={{ marginBottom: "10px" }}>会場案内</h2>

          <iframe
            src={concert.mapUrl}
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: "12px",
            }}
            loading="lazy"
          />
        </div>
      )}
    </main>
  );
}