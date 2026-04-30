import styles from "./page.module.css";
import { prisma } from "@/lib/prisma.js";
import DropMenu from "@/components/DropMenu/DropMenu.jsx";
import CardLarge from "@/components/CardLarge/CardLarge.jsx";
import Banner from "@/components/Banner/Banner.jsx";
import MediaGrid from "@/components/MediaGrid/MediaGrid.jsx";
import { Heart } from "lucide-react";

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

  const likes = entry.medias.reduce((acc, media) => acc + media.likes, 0);

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
        <MediaGrid medias={entry.medias}></MediaGrid>
      </main>
      <footer className={styles.footer}>
        <div className={styles.likes}>{likes} <Heart className={styles.heart} fill="black" size={16} color="black"></Heart></div>
        <div className={styles.price}>{entry.price}€ / jour</div>
      </footer>
    </div>
  );
}
