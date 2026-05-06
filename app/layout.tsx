import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>
        <div
          style={{
            display: "flex",
          }}
        >
          {/* ✅ サイドバー */}
          <Sidebar />

          {/* ✅ メイン */}
          <main style={{ flex: 1 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}