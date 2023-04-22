const template = document.createElement("template");

template.innerHTML = /* HTML */ `
  <style>
    h1 {
      background: #fff;
      color: red;
    }

    .pet-card {
      display: flex;
      margin: 12px;
      padding: 22px;
      border-radius: 8px;
      box-shadow: 0 1px 6px #ccc;
      max-width: 400px;
      align-items: center;
      justify-content: space-around;
      font-family: Nunito;
    }

    .avatar {
      width: 120px;
      height: 120px;
      overflow: hidden;
      border-radius: 60px;
      margin-right: 2rem;
    }

    .avatar > img {
      object-fit: cover;
      width: inherit;
      height: inherit;
    }

    .details {
    }

    .details .info {
      display: none;
    }

    .details .actions button {
      border: none;
      padding: 8px 22px;
      background-color: brown;
      border-radius: 6px;
      color: white;
      background-color: #f60;
    }

    .details .actions button:first-of-type {
      margin-right: 12px;
    }
  </style>
  <div class="pet-card">
    <div class="avatar">
      <img />
    </div>
    <div class="details">
      <h2></h2>
      <div class="info">
        <p>Breed: <slot name="breed" /></p>
        <p>Age: <slot name="age" /></p>
      </div>
      <div class="actions">
        <button id="greet">Say Hi!</button>
        <button id="toggle">View Details</button>
      </div>
    </div>
  </div>
`;

export class PetCard extends HTMLElement {
  constructor() {
    super();
    this.showInfo = false;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  toggleInfo = () => {
    this.showInfo = !this.showInfo;
    this.shadowRoot.querySelector(".info").style.display = this.showInfo
      ? "block"
      : "none";
    this.shadowRoot.querySelector("#toggle").innerHTML = this.showInfo
      ? "Hide Details"
      : "View Details";
  };

  static get observedAttributes() {
    return ["name", "avatar"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.querySelector(".details h2").innerText =
      this.getAttribute("name");
    this.shadowRoot.querySelector(".avatar img").src =
      this.getAttribute("avatar");
    this.shadowRoot.querySelector(".avatar img").alt =
      this.getAttribute("name");
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .addEventListener("click", this.toggleInfo);
    this.shadowRoot
      .querySelector("#greet")
      .addEventListener("click", () =>
        window.alert(`Hey there! I'm ${this.getAttribute("name")}`)
      );
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector("#toggle")
      .removeEventListener("click", this.toggleInfo);
    this.shadowRoot
      .querySelector("#greet")
      .removeEventListener("click", () =>
        window.alert(`Hey there! I'm ${this.getAttribute("name")}`)
      );
  }
}
