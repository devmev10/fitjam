import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Result() {
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

      <section className="grid grid-cols-2 my-10 mx-20">
        <div className="flex flex-col items-start p-10 space-y-4">
          <h1 className="text-3xl font-bold">Customized Action Plan</h1>
          <p>Step-by-step workouts and dietary suggestions just for you!</p>
          <Button>View Action Plan</Button>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <img
                  src="#"
                  alt="workout"
                  className="w-full h-64 object-cover"
                />
                <CardTitle>Full Body Workout</CardTitle>
                <CardDescription>Duration: 45 mins</CardDescription>
              </CardHeader>
              <CardContent>🏋️ 🥗</CardContent>
              <CardFooter></CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <img src="#" alt="diet" className="w-full h-64 object-cover" />
                <CardTitle>Vegan Meal Plan</CardTitle>
                <CardDescription>Calories: 1500</CardDescription>
              </CardHeader>
              <CardContent>🏋️ 🥗</CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <hr />

      <section className="grid grid-cols-2 my-10 mx-20">
        <div className="flex justify-center items-center text-3xl font-bold">
          <h2>Fitness Challenges</h2>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 border p-2 border-gray-300 rounded-md">
            <div className="col-span-1">
              <img
                src="https://res.cloudinary.com/djtigzyfc/image/upload/v1700539115/fitjam/urx49emlk7jpidphzbmd.jpg"
                alt="Small Wins"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col space-y-4 p-2">
              <h3 className="font-bold">2-Week Squat Challenge</h3>
              <h5>Get ready for stronger and toned legs!</h5>
              <div>
                <span className="badge-flexible">Cardio</span>
                <span className="badge-flexible">Challenge</span>
                <span className="badge-flexible">Outdoor</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1>Fitness Coach</h1>
                </div>
                <p>🏋️ 🚶</p>
              </div>
            </div>
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
              <h3 className="font-bold">5k Steps Daily</h3>
              <h5>Stay active with a daily goal of 5k steps!</h5>
              <div>
                <span className="badge-flexible">Cardio</span>
                <span className="badge-flexible">Challenge</span>
                <span className="badge-flexible">Outdoor</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1>Fitness Coach</h1>
                </div>
                <p>🏋️ 🚶</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <section className="grid grid-cols-2 my-10 mx-20">
        <div className="flex flex-col items-center ">
          <h2 className="text-3xl font-bold">Educational Resources</h2>
          <p>Learn more about health, nutrition, and exercise</p>
        </div>
        <div className="flex flex-between gap-10">
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h5>10 Tips for Weight Loss</h5>
            <span className="text-gray-400">Article</span>
            <h4 className="text-xl font-bold">Author: Nutritionist</h4>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h5>Exercise Form Tutorial</h5>
            <span className="text-gray-400">Video </span>
            <h4 className="text-xl font-bold">Duration: 10 mins</h4>
          </div>
        </div>
      </section>

      <hr />

      <section className="grid grid-cols-2 my-10 mx-20">
        <div className="flex justify-center items-center text-3xl font-bold">
          <h2>Motivational Quotes or Facts</h2>
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
            <h3 className="font-bold">Did you know?</h3>
            <p>Exercise boosts your mood by releasing endorphins!</p>

            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1>Health Expert</h1>
              </div>
              <p>🏋️ 🚶</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="my-10 mx-20 flex justify-center ">
        <img
          src="https://res.cloudinary.com/djtigzyfc/image/upload/v1701091526/fitjam/ke4wojh4ssrstopd992t.jpg"
          alt="nearby gyms"
        />
      </section>

      <hr />

      <section></section>
    </main>
  );
}
