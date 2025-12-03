import { Navbar } from "../components/Navbar";
import { VideoCreator } from "../components/VideoCreator";

const Create = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <VideoCreator />
      </main>
    </div>
  );
};

export default Create;
