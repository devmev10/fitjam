import "./globals.css";

export const metadata = {
  title: "FitJam - Lose Weight, Gain Muscle & Break Barriers",
  description:
    "Join FitJam and transform your fitness journey! Our app offers personalized workouts and tracking for weight loss, muscle building, and breaking fitness plateaus. Get motivated, stay on track, and achieve your goals with FitJam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
