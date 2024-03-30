import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
