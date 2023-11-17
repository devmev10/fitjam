import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FitJam - Lose Weight, Gain Muscle & Break Barriers",
  description:
    "Join FitJam and transform your fitness journey! Our app offers personalized workouts and tracking for weight loss, muscle building, and breaking fitness plateaus. Get motivated, stay on track, and achieve your goals with FitJam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
