import { prisma } from "./lib/prisma.js";



const photographers = [
  { id: 243, name: "Mimi Keel", city: "London", country: "UK", tagline: "Voir le beau dans le quotidien", price: 400, portrait: "MimiKeel.jpg" },
  { id: 930, name: "Ellie-Rose Wilkens", city: "Paris", country: "France", tagline: "Capturer des compositions complexes", price: 250, portrait: "EllieRoseWilkens.jpg" },
  { id: 82, name: "Tracy Galindo", city: "Montreal", country: "Canada", tagline: "Photographe freelance", price: 500, portrait: "TracyGalindo.jpg" },
  { id: 527, name: "Nabeel Bradford", city: "Mexico City", country: "Mexico", tagline: "Toujours aller de l'avant", price: 350, portrait: "NabeelBradford.jpg" },
  { id: 925, name: "Rhode Dubois", city: "Barcelona", country: "Spain", tagline: "Je crée des souvenirs", price: 275, portrait: "RhodeDubois.jpg" },
  { id: 195, name: "Marcel Nikolic", city: "Berlin", country: "Germany", tagline: "Toujours à la recherche de LA photo", price: 300, portrait: "MarcelNikolic.jpg" }
];

const medias = [
  { photographerId: 82, title: "Fashion Yellow Beach", image: "Fashion_Yellow_Beach.jpg", likes: 62, date: "2011-12-08", price: 55 },
  { photographerId: 82, title: "Fashion Urban Jungle", image: "Fashion_Urban_Jungle.jpg", likes: 11, date: "2011-11-06", price: 55 },
  { photographerId: 82, title: "Wooden sculpture of a horse", video: "Art_Wooden_Horse_Sculpture.mp4", likes: 24, date: "2011-12-08", price: 100 },
  { photographerId: 925, title: "8 Rows", image: "Sport_2000_with_8.jpg", likes: 52, date: "2013-02-30", price: 70 },
  { photographerId: 527, title: "Rocky mountains from the air", video: "Travel_Rock_Mountains.mp4", likes: 23, date: "2017-03-18", price: 45 },
  { photographerId: 243, title: "Wild horses in the mountains", video: "Animals_Wild_Horses_in_the_mountains.mp4", likes: 142, date: "2019-08-23", price: 60 },
  { photographerId: 195, title: "Drone shot of Buenos Aires highways", video: "Architecture_coverr_circle_empty_highway_in_buenos_aires_587740985637.mp4", likes: 57, date: "2020-01-20", price: 65 },
  { photographerId: 930, title: "Tricks in te air", video: "Sport_Tricks_in_the_air.mp4", likes: 150, date: "2018-02-30", price: 70 }
];

async function main() {
  console.log("Nettoyage de la base...");
  await prisma.media.deleteMany();
  await prisma.photographer.deleteMany();

  console.log("Importation des photographes...");
  for (const p of photographers) {
    await prisma.photographer.create({ data: p });
  }

  console.log("Importation des médias...");
  for (const m of medias) {
    await prisma.media.create({
      data: {
        photographerId: m.photographerId,
        title: m.title,
        image: m.image || null,
        video: m.video || null,
        likes: m.likes,
        date: m.date,
        price: m.price
      }
    });
  }
  console.log("Succès : Base de données FishEye prête !");
}

main()
  .catch((e) => {
    console.error("Erreur durant le seed :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });