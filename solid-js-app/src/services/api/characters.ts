import { apiClient } from "./client";
import { API_ENDPOINTS } from "./config";

export interface Character {
  id: number;
  name: string;
  image: [];
  clan: string;
  tailBeast: string;
}

export interface CharacterResponse {
  characters: Character[];
  currentPage: number;
  totalPages: number;
}

export const CharacterService = {
  getAll: async (page = 1) => {
    return apiClient.get<CharacterResponse>(
      `${API_ENDPOINTS.characters}?page=${page}`,
    );
  },

  getById: async (id: number) => {
    return apiClient.get<Character>(`${API_ENDPOINTS.characters}/${id}`);
  },
};
