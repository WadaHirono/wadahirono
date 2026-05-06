import { client } from "@/lib/sanity";

export default async function ContactPage() {
  const contact = await client.fetch(
    `*[_type == "contact"][0]{
      email,
      message
    }`
  );

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>

      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        お問い合わせ
      </h1>

      {/* 説明文 */}
      {contact?.message && (
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          {contact.message}
        </p>
      )}

      {/* メール */}
      {contact?.email && (
        <p>
          📧 メール：
          <a
            href={`mailto:${contact.email}`}
            style={{ color: "#0070f3" }}
          >
            {contact.email}
          </a>
        </p>
      )}

    </main>
  );
}