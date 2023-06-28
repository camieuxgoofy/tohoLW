export interface Character {
  name: string;
  species: string;
  ability: string;
  titles: string;
  threatLevel?: "Unknown" | "Very Low" | "Low" | "Medium" | "High" | "Very High";
  occupation?: string;
  friendlinessToHumans?: "Very Low" | "Low" | "Normal" | "High" | "Very High";
  mainLocation?: string;
  home?: string;
  charImage?: string;
  avatars?: string;
}

export const characters: Character[] = [
  {
    name: "Reimu Hakurei",
    species: "Human",
    ability: "Capable of flight",
    titles:
      "Hakurei Shrine Maiden, Eternal Shrine Maiden, Wonderful Shrine Maiden of Paradise",
    occupation: "Shrine Maiden",
    home: "Hakurei Shrine",
  },
  {
    name: "Marisa Kirisame",
    species: "Human",
    ability: "Capable of using magic",
    titles:
      "Western Magician of the East, Strange Magician, Ordinary Black Magician",
    occupation: "Magician",
    home: "The Forest of Magic",
  },
  {
    name: "Yukari Yakumo",
    species: "Youkai",
    ability: "Capable of manipulating boundaries",
    titles:
      "Mastermind of Spiriting Away, Youkai of Boundaries, Youkai That Lurks in the Boundary",
    threatLevel: "Unknown",
    friendlinessToHumans: "Normal",
    mainLocation: "Everywhere",
  },
];
