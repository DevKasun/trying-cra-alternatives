import { createEffect, createSignal, Show, For } from "solid-js";

export interface Character {
  id: number;
  name: string;
  images: string[];
  natureType?: string[];
}

const CharactersPage = () => {
  const [characters, setCharacters] = createSignal<Character[]>([]);
  const [error, setError] = createSignal<string | null>(null);
  const [isLoading, setIsLoading] = createSignal(false);

  const fetchCharacters = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(`https://dattebayo-api.onrender.com/characters`);
      const json = await data.json();
      setCharacters(json.characters || []);
      console.log(characters());
    } catch (error: any) {
      setError(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  createEffect(() => {
    fetchCharacters();
  });

  return (
    <Show
      when={isLoading()}
      fallback={
        <Show
          when={error()}
          fallback={
            <div>
              <For each={characters()}>
                {(character: Character) => (
                  <div data-id={character.id}>
                    <div>{character.name}</div>
                    <div>
                      Nature Type:
                      <ul>
                        <For each={character.natureType || []}>
                          {(type) => <li>{type}</li>}
                        </For>
                      </ul>
                    </div>
                    <img src={character.images[0]} alt={character.name} />
                  </div>
                )}
              </For>
            </div>
          }
        >
          <div class="text-red-500">Error: {error()}</div>
        </Show>
      }
    >
      <div>Loading...</div>
    </Show>
  );
};

export default CharactersPage;
