import { Navbar } from "../components/Navbar";
import { VideoGallery } from "../components/VideoGallery";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <VideoGallery />
      </main>
    </div>
  );
};

export default Gallery;
