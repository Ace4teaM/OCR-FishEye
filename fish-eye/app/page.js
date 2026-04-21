import styles from "./page.module.css";
import { prisma } from "../lib/prisma.js";
import Card from "@/components/Card/Card.jsx";

export default async function Home() {
  
  // Fetch all users with their posts
  const all = await prisma.Photographer.findMany();
  console.log("All:", JSON.stringify(all, null, 2));

  return (
    <div>
      <main>
        <Card></Card>
      </main>
    </div>
  );
}
