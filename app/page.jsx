import connectDB from "@/config/database";
import Link from "next/link";
import Hero from "./components/Hero";
import InfoBoxes from "./components/InfoBoxes";

const Homepage = async () => {
  await connectDB();
  
  return (
    <div>
      <Hero />
      <InfoBoxes />
    </div>
  );
};

export default Homepage;
