const Home = () => {
  return (
    <div>
      <h1 class="text-3xl font-medium text-center">
        Welcome to Naruto's Universe
      </h1>

      <div class="grid grid-cols-3 gap-4 pt-8">
        <div class="bg-gray-200 hover:bg-gray-400 p-4 rounded text-center">
          <a href="/characters">Characters</a>
        </div>
        <div class="bg-gray-200 hover:bg-gray-400 p-4 rounded text-center">
          <a href="/tailed-beasts">Tailed Beasts</a>
        </div>
        <div class="bg-gray-200 hover:bg-gray-400 p-4 rounded text-center">
          <a href="/akatsuki">Akatsuki</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
