import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

      <section className="mb-10">
        <div className="flex flex-col items-center p-10 space-y-4">
          <h1>Personalized Plateau-Breaking Plans</h1>
          <p>Overcome plateaus with tailored strategies</p>
          <Button>Learn More</Button>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {plateaus.map((plateau) => (
            <Card key={plateau.id} className="">
              <CardHeader>
                <CardTitle>{plateau.title}</CardTitle>
                <CardDescription>{plateau.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img
                    src={plateau.image}
                    alt={plateau.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="badge">
                    <p>{plateau.level}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Show more</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <hr />
      <section className="grid grid-cols-2 mt-10 mb-10">
        <div className="flex flex-col justify-center items-center gap-6">
          <h2 className="text-4xl font-bold">Micro-Progression System</h2>
          <h4>Make small improvements for steady progress</h4>
        </div>
        <article className="flex flex-col space-y-6">
          <div className="grid grid-cols-3">
            <div className="">
              <img
                src="https://res.cloudinary.com/djtigzyfc/image/upload/v1700539115/fitjam/fag0emh5e1htx1b6ggol.jpg"
                alt="progress track"
              />
            </div>
            <div>
              <h3>Track Your Progress</h3>
              <h4>Record your workouts and monitor your progress over time</h4>
              <h5>Placeholder for icons</h5>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://res.cloudinary.com/djtigzyfc/image/upload/v1700539115/fitjam/urx49emlk7jpidphzbmd.jpg"
                alt="Small Wins"
              />
            </div>
            <div>
              <h3>Celebrate Small Wins</h3>
              <h4>Acknowledge and celebrate your micro-achievements</h4>
              <h5>Placeholder for icons</h5>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://res.cloudinary.com/djtigzyfc/image/upload/v1700539115/fitjam/itybpgo3ghilw5hbkl4y.jpg"
                alt="Consistency"
              />
            </div>
            <div>
              <h3>Stay Consistent</h3>
              <h4>Commit to regular workouts to build momentum</h4>
              <h5>Placeholder for icons</h5>
            </div>
          </div>
        </article>
      </section>

      <hr />
      <h1>hello world</h1>
    </main>
  );
}
