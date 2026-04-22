import styles from "./page.module.css";
import { prisma } from "@/lib/prisma.js";
import DropMenu from "@/components/DropMenu/DropMenu.jsx";
import CardGrid from "@/components/CardGrid/CardGrid.jsx";
import Banner from "@/components/Banner/Banner.jsx";

export default async function Home() {
  
  // Obtiens tous les profiles
  const all = await prisma.Photographer.findMany();

  return (
    <div>
      <header>
        <Banner title = "Nos photographes"></Banner>
      </header>
      <nav>
        <DropMenu></DropMenu>
      </nav>
      <main>
        <CardGrid items={all}></CardGrid>
      </main>
    </div>
  );
}
