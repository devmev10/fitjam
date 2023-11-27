import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between">
      <h3>
        <Link href="/">FitJam</Link>
      </h3>
      <nav>
        <ul className="flex justify-around gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Workouts</li>
          <li>Challenges</li>
          <li>Community</li>
          <li>Progress</li>
        </ul>
      </nav>
    </div>
  );
}
