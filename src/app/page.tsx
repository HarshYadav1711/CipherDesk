import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <h1>{SITE_NAME}</h1>
      <p>{SITE_TAGLINE}</p>
    </main>
  );
}
