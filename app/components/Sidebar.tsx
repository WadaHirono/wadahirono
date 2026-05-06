'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuStyle = (path: string) => ({
    marginBottom: "20px",
    paddingLeft: "10px",
    borderLeft:
      pathname === path ? "4px solid white" : "4px solid transparent",
  });

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    display: "block",
  };

  return (
    <>
      {/* ✅ ハンバーガー */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "none",
          background: "#111",
          color: "#fff",
          padding: "15px",
          cursor: "pointer",
        }}
        className="hamburger"
      >
        ☰ メニュー
      </div>

      {/* ✅ サイドメニュー */}
      <nav
        style={{
          width: "200px",
          background: "#111",
          color: "#fff",
          minHeight: "100vh",
          padding: "20px",
          position: "sticky",
          top: 0,
        }}
        className={open ? "sidebar open" : "sidebar"}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>

          <li style={menuStyle("/")}>
            <Link href="/" style={linkStyle}>
              公演情報
            </Link>
          </li>

          <li style={menuStyle("/profile")}>
            <Link href="/profile" style={linkStyle}>
              プロフィール
            </Link>
          </li>

          <li style={menuStyle("/repertoire")}>
            <Link href="/repertoire" style={linkStyle}>
              レパートリー
            </Link>
          </li>

          <li style={menuStyle("/gallery")}>
            <Link href="/gallery" style={linkStyle}>
              写真・動画
            </Link>
          </li>

          <li style={menuStyle("/contact")}>
            <Link href="/contact" style={linkStyle}>
              お問い合わせ
            </Link>
          </li>

        </ul>
      </nav>

      {/* ✅ スマホ用クラスだけ使う（styleタグは削除） */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }
          .sidebar {
            display: none;
            width: 100%;
            min-height: auto;
          }
          .sidebar.open {
            display: block;
          }
        }
      `}</style>
    </>
  );
}