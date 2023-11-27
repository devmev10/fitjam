export default function Result() {
  return (
    <main>
      <h1 className="text-center text-4xl my-20">Result Summary</h1>

      <hr />

      <section className="grid grid-cols-2 my-10 mx-20">
        <div className="flex justify-center items-center text-3xl font-bold">
          <h2>Personalized Summary</h2>
        </div>
        <div className="grid grid-cols-3 border p-2 border-gray-300 rounded-md">
          <div className="col-span-1">
            <img
              src="https://res.cloudinary.com/djtigzyfc/image/upload/v1700539115/fitjam/urx49emlk7jpidphzbmd.jpg"
              alt="Small Wins"
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="col-span-2 flex flex-col space-y-4 p-2">
            <h3 className="font-bold">
              You're on a journey to lose weight while managing a lactose
              intolerance.
            </h3>
            <p className="text-gray-500 text-sm">Goal: Lose Weight</p>
            <h5>
              You prefer a vegan diet and have access to a gym with a squat rack
              and cable machine.
            </h5>
            <div>
              <span className="badge-flexible">Lactose Intolerant</span>
              <span className="badge-flexible">Gym Access</span>
            </div>
          </div>
        </div>
      </section>

      <hr />
    </main>
  );
}
