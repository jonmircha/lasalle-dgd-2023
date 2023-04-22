import { PetCard } from "./components/PetCard.mjs";
import { MyCounter } from "./components/MyCounter.mjs";

window.customElements.define("pet-card", PetCard);
window.customElements.define("my-counter", MyCounter);

console.log("Hola Mundo 🦊");
