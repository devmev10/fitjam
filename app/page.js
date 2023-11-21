import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export async function getPlateau() {
  const result = await fetch("http://localhost:4000/plateaus");
  return result.json();
}

export default async function Home() {
  const plateaus = await getPlateau();

  return (
    <main>
      <header className="flex flex-col items-center p-10 space-y-4">
        <h1 className="text-3xl font-bold">Welcome to FitJam</h1>
        <p>Stay motivated and break through plateaus</p>
        <Button>Get Started</Button>
      </header>

      <hr />

      <section className="mb-10">
        <div className="flex flex-col items-center p-10 space-y-4">
          <h1 className="text-3xl font-bold">
            Personalized Plateau-Breaking Plans
          </h1>
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
          <div className="grid grid-cols-3 border p-2 border-black">
            <div className="col-span-1">
              <img
                src="https://res.cloudinary.com/djtigzyfc/image/upload/v1700539115/fitjam/fag0emh5e1htx1b6ggol.jpg"
                alt="progress track"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col space-y-4 p-2">
              <h3 className="text-xl font-bold">Track Your Progress</h3>
              <h4>Record your workouts and monitor your progress over time</h4>
              <h5>Placeholder for icons</h5>
            </div>
          </div>
          <div className="grid grid-cols-3 border p-2 border-black">
            <div className="col-span-1">
              <img
                src="https://res.cloudinary.com/djtigzyfc/image/upload/v1700539115/fitjam/urx49emlk7jpidphzbmd.jpg"
                alt="Small Wins"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col space-y-4 p-2">
              <h3 className="text-xl font-bold">Celebrate Small Wins</h3>
              <h4>Acknowledge and celebrate your micro-achievements</h4>
              <h5>Placeholder for icons</h5>
            </div>
          </div>
          <div className="grid grid-cols-3 border p-2 border-black">
            <div className="col-span-1">
              <img
                src="https://res.cloudinary.com/djtigzyfc/image/upload/v1700539115/fitjam/itybpgo3ghilw5hbkl4y.jpg"
                alt="Consistency"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col space-y-4 p-2">
              <h3 className="text-xl font-bold">Stay Consistent</h3>
              <h4>Commit to regular workouts to build momentum</h4>
              <h5>Placeholder for icons</h5>
            </div>
          </div>
        </article>
      </section>

      <hr />

      <section className="mb-10">
        <div className="flex flex-col items-center p-10 space-y-4">
          <h1 className="text-3xl font-bold">Join the FitJam Community</h1>
          <p>
            Connect with fellow fitness enthusiasts, share progress, and find
            workout buddies
          </p>
          <Button>Join Community</Button>
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

      <section className="mb-10">
        <div className="flex flex-col items-center p-10 space-y-4">
          <h1 className="text-3xl font-bold">Get Personalized Advice</h1>
          <p>
            Need guidance? Fill out the form below and our fitness experts will
            provide personalized recommendations
          </p>
        </div>
        <div>
          <form action="" className="flex flex-col items-center space-y-4">
            <label className="flex flex-col items-start">
              Name:
              <input
                type="text"
                id="name"
                className="border border-gray-200 "
              />
            </label>
            <label className="flex flex-col items-start">
              Fitness Goal:
              <ToggleGroup type="single">
                <ToggleGroupItem value="musclebuilding">
                  Muscle Building
                </ToggleGroupItem>
                <ToggleGroupItem value="weightloss">
                  Weight Loss
                </ToggleGroupItem>
                <ToggleGroupItem value="strengthtraining">
                  Strength Training
                </ToggleGroupItem>
              </ToggleGroup>
            </label>
            <label className="flex flex-col items-start">
              Plateau Details:
              <input
                type="text"
                id="name"
                placeholder="Describe your current plateau"
                className="border border-gray-200"
              />
            </label>
            <Button>Submit</Button>
          </form>
        </div>
      </section>

      <hr />

      <section className="mb-10">
        <div className="flex flex-col items-center p-10 space-y-4">
          <h1 className="text-3xl font-bold">Track Your Progress</h1>
          <p>Monitor your fitness journey with data analytics</p>
          <Button>View Analytics</Button>
        </div>

        <div className="grid grid-cols-3 gap-10 px-20">
          <div className="flex flex-col border-2 border-gray-200 p-2 gap-1">
            <p className="text-gray-400">Weight Lifted</p>
            <h6 className="text-2xl font-bold">2500 kg</h6>
            <p>+10% last week</p>
          </div>
          <div className="flex flex-col border-2 border-gray-200 p-2 gap-1">
            <p className="text-gray-400">Workout duration</p>
            <h6 className="text-2xl font-bold">5 hours</h6>
            <p>+1 hour last week</p>
          </div>
          <div className="flex flex-col border-2 border-gray-200 p-2 gap-1">
            <p className="text-gray-400">Plateau Breakthroughs</p>
            <h6 className="text-2xl font-bold">3</h6>
          </div>
        </div>
      </section>

      <hr />

      <footer className="flex ">
        <h3>About Us</h3>
        <h3>Terms of Service</h3>
        <h3>Privacy Policy</h3>{" "}
      </footer>
    </main>
  );
}
