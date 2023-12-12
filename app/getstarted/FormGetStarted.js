"use client";

import { useState } from "react";
export default function FormGetStarted() {
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  // return (
  //   <form>
  //     <label>
  //       Age:{" "}
  //       <input
  //         type="text"
  //         value={age}
  //         onChange={(e) => setAge(e.target.value)}
  //       />
  //     </label>
  //     <label>
  //       Gender:{" "}
  //       <input
  //         type="radio"
  //         value="Male"
  //         checked={gender === "Male"}
  //         onChange={(e) => setGender(e.target.value)}
  //       />
  //       Male
  //       <input
  //         type="radio"
  //         value="Female"
  //         checked={gender === "Female"}
  //         onChange={(e) => setGender(e.target.value)}
  //       />
  //       Female
  //     </label>
  //     <label>
  //       Height: <input type="range" min="48" max="96" step="1" />
  //     </label>
  //   </form>
  // );

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission.
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 border border-gray-300 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="age"
                  className="text-sm font-medium text-gray-700"
                >
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Repeat for other fields */}
            </div>

            {/* Diet Preference */}
            <div>
              <span className="text-sm font-medium text-gray-700">
                Diet Preference
              </span>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="dietPreference"
                    value="veg"
                  />
                  <span className="ml-2">Veg</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="dietPreference"
                    value="nonVeg"
                  />
                  <span className="ml-2">Non-Veg</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="dietPreference"
                    value="vegan"
                  />
                  <span className="ml-2">Vegan</span>
                </label>
              </div>
            </div>

            {/* Known Food Allergy */}
            <div>
              <label
                htmlFor="allergy"
                className="text-sm font-medium text-gray-700"
              >
                Any known food allergy?
              </label>
              <input
                id="allergy"
                name="allergy"
                type="text"
                placeholder="Peanuts / lactose intolerance"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Food Exclusion */}
            <div>
              <label
                htmlFor="excludeFood"
                className="text-sm font-medium text-gray-700"
              >
                Any food item you want to exclude?
              </label>
              <input
                id="excludeFood"
                name="excludeFood"
                type="text"
                placeholder="e.g., Animal product like eggs, milk"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Restrictions */}
            <div>
              <label
                htmlFor="restrictions"
                className="text-sm font-medium text-gray-700"
              >
                Any Restrictions?
              </label>
              <input
                id="restrictions"
                name="restrictions"
                type="text"
                placeholder="e.g., I have to be at work by 8am"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Struggles */}
            <div>
              <label
                htmlFor="struggles"
                className="text-sm font-medium text-gray-700"
              >
                Anything specific you are struggling with currently?
              </label>
              <input
                id="struggles"
                name="struggles"
                type="text"
                placeholder="e.g., I just like food, can't stop eating"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Health Goals */}
            <div>
              <label
                htmlFor="healthGoalsShortTerm"
                className="text-sm font-medium text-gray-700"
              >
                What do you really want to achieve healthwise in 3 weeks?
              </label>
              <input
                id="healthGoalsShortTerm"
                name="healthGoalsShortTerm"
                type="text"
                placeholder="I want to lose 2 kgs / I want to do 5 pullups"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Long Term Health Goals */}
            <div>
              <label
                htmlFor="healthGoalsLongTerm"
                className="text-sm font-medium text-gray-700"
              >
                What do you really want to achieve healthwise in 3 months?
              </label>
              <input
                id="healthGoalsLongTerm"
                name="healthGoalsLongTerm"
                type="text"
                placeholder="I want to lose 6kgs / I want to have a toned belly"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
