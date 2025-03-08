import AudioUpload from "./AudioUpload";

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Upload Audio for Analysis</h2>
      <AudioUpload />
    </div>
  );
};

export default Home;
