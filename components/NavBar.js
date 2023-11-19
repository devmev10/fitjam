export default function NavBar() {
  return (
    <div className="flex justify-between">
      <h3>FitJam</h3>
      <nav>
        <ul className="flex justify-around gap-5">
          <li>Home</li>
          <li>Workouts</li>
          <li>Challenges</li>
          <li>Community</li>
          <li>Progress</li>
        </ul>
      </nav>
    </div>
  );
}
