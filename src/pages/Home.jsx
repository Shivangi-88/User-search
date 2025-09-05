import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-4">
      
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-3 mb-10 text-center sm:text-left">
        <img
          src="https://media.instahyre.com/CACHE/images/images/profile/base/employer/47511/1337a7f7b9/1715654435372/1578d5ca3987f3e80cae5a6bbbda10ae.webp"
          alt="Logo"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded"
        />
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold">
          Girman
        </h1>
      </div>

  
      <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl">
        <SearchBox />
      </div>
    </div>
  );
}

