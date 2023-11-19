import { Button } from "@/components/ui/button";

export default function Home() {
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
        <div></div>
      </section>

      <hr />
    </main>
  );
}
