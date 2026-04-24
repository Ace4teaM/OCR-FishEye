import styles from "./page.module.css";
import { prisma } from "@/lib/prisma.js";
import DropMenu from "@/components/DropMenu/DropMenu.jsx";
import CardLarge from "@/components/CardLarge/CardLarge.jsx";
import Banner from "@/components/Banner/Banner.jsx";
import Media from "@/components/Media/Media.jsx";

export default async function Page({ params }) {
  
  // Récupère les paramètres de l'URL
  const { slug } = await params;

  // Récupère les infos sur le photographe
  const entry = await prisma.Photographer.findUnique({
    where: {
      id: parseInt(slug, 10),
    },
    include: {
      medias: true,
    },
  });
console.log(entry);
  return (
    <div>
      <header>
        <Banner title={null}></Banner>
        <CardLarge {...entry}></CardLarge>
      </header>
      <nav className={styles.nav}>
        <div>Trier par: <DropMenu></DropMenu></div>
      </nav>
      <main className={styles.container}>
        <div className={styles.grid}>
        {entry.medias.map((media, index)=>
          <Media {...media}></Media>
        )}
        </div>
      </main>
    </div>
  );
}
