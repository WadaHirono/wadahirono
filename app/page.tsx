export const revalidate = 0;

export default function Home() {
  return (
    <main>
      <div
        style={{
          position: "relative",
          height: "300px",
          marginBottom: "30px",
          background: "#222",
        }}
      >
        <div
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            height: "100%",
            filter: "brightness(70%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "36px" }}>和田広野</h1>
          <p>Bariton singer</p>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <h2>公演情報</h2>
        <p>ここに公演データを表示します</p>
      </div>
    </main>
  );
}