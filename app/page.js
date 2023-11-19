import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export async function getPlateau() {
  const result = await fetch("http://localhost:4000/plateaus");
  return result.json();
}

export default async function Home() {
  const plateaus = await getPlateau();

  return (
    <main>
      <header className="flex flex-col items-center p-10 space-y-4">
        <h1>Welcome to FitJam</h1>
        <p>Stay motivated and break through plateaus</p>
        <Button>Get Started</Button>
      </header>

      <hr />

      <section>
        <div className="flex flex-col items-center p-10 space-y-4">
          <h1>Personalized Plateau-Breaking Plans</h1>
          <p>Overcome plateaus with tailored strategies</p>
          <Button>Learn More</Button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {plateaus.map((plateau) => (
            <Card key={plateau.id}>
              <CardHeader>
                <CardTitle>{plateau.title}</CardTitle>
                <CardDescription>{plateau.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Image
                    src={plateau.image}
                    alt={plateau.title}
                    width={500}
                    height={500}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Show more</Button>
                <p>{plateau.level}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <hr />
      <h1>hello world</h1>
    </main>
  );
}
