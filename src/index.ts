import { writable } from "svelte/store";

export interface Character {
  name: string;
  species: string;
  ability: string;
  titles: string;
  threatLevel?:
    | "Unknown"
    | "Very Low"
    | "Low"
    | "Medium"
    | "High"
    | "Very High";
  occupation?: string;
  friendlinessToHumans?: "Very Low" | "Low" | "Normal" | "High" | "Very High";
  mainLocation?: string;
  home?: string;
  charImage?: string;
  avatars?: string;
}

const currentModuleUrl = new URL(import.meta.url);
const imageDirUrl = new URL("./assets/characters/", currentModuleUrl).href;

export const characters = writable<Character[]>([
  {
    name: "Reimu Hakurei",
    species: "Human",
    ability: "Capable of flight",
    titles:
      "Hakurei Shrine Maiden, Eternal Shrine Maiden, Wonderful Shrine Maiden of Paradise",
    occupation: "Shrine Maiden",
    home: "Hakurei Shrine",
    charImage: new URL("p_hakurei.jpg", imageDirUrl).href,
  },
  {
    name: "Marisa Kirisame",
    species: "Human",
    ability: "Capable of using magic",
    titles:
      "Western Magician of the East, Strange Magician, Ordinary Black Magician",
    occupation: "Magician",
    home: "The Forest of Magic",
    charImage: new URL("p_kirisame.jpg", imageDirUrl).href,
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
    charImage: new URL("p_yakumo_y.jpg", imageDirUrl).href,
  },
  {
    name: "Sakuya Izayoi",
    species: "Human",
    ability: "Capable of manipulating time",
    titles: "Maid of the Scarlet Devil Mansion, Perfect and Elegant Servant, Dangerous Illusionist",
    threatLevel: "Unknown",
    friendlinessToHumans: "High",
    mainLocation: "The Scarlet Devil Mansion",
    charImage: new URL("p_izayoi.jpg", imageDirUrl).href,
  },
  // {
  //   name: "zxc",
  //   species: "qwe",
  //   ability: "asd",
  //   titles: "rty",
  //   threatLevel: "Unknown",
  //   friendlinessToHumans: "Low",
  //   mainLocation: "None",
  //   charImage: "url image",
  // },
  // {
  //   name: "zxc",
  //   species: "qwe",
  //   ability: "asd",
  //   titles: "rty",
  //   threatLevel: "Unknown",
  //   friendlinessToHumans: "Low",
  //   mainLocation: "None",
  //   charImage: "url image",
  // },
  // {
  //   name: "zxc",
  //   species: "qwe",
  //   ability: "asd",
  //   titles: "rty",
  //   threatLevel: "Unknown",
  //   friendlinessToHumans: "Low",
  //   mainLocation: "None",
  //   charImage: "url image",
  // },
  // {
  //   name: "zxc",
  //   species: "qwe",
  //   ability: "asd",
  //   titles: "rty",
  //   threatLevel: "Unknown",
  //   friendlinessToHumans: "Low",
  //   mainLocation: "None",
  //   charImage: "url image",
  // },
  // {
  //   name: "zxc",
  //   species: "qwe",
  //   ability: "asd",
  //   titles: "rty",
  //   threatLevel: "Unknown",
  //   friendlinessToHumans: "Low",
  //   mainLocation: "None",
  //   charImage: "url image",
  // },
  // {
  //   name: "zxc",
  //   species: "qwe",
  //   ability: "asd",
  //   titles: "rty",
  //   threatLevel: "Unknown",
  //   friendlinessToHumans: "Low",
  //   mainLocation: "None",
  //   charImage: "url image",
  // },
  // {
  //   name: "zxc",
  //   species: "qwe",
  //   ability: "asd",
  //   titles: "rty",
  //   threatLevel: "Unknown",
  //   friendlinessToHumans: "Low",
  //   mainLocation: "None",
  //   charImage: "url image",
  // },
  // {
  //   name: "zxc",
  //   species: "qwe",
  //   ability: "asd",
  //   titles: "rty",
  //   threatLevel: "Unknown",
  //   friendlinessToHumans: "Low",
  //   mainLocation: "None",
  //   charImage: "url image",
  // },
  // {
  //   name: "zxc",
  //   species: "qwe",
  //   ability: "asd",
  //   titles: "rty",
  //   threatLevel: "Unknown",
  //   friendlinessToHumans: "Low",
  //   mainLocation: "None",
  //   charImage: "url image",
  // },
]);
