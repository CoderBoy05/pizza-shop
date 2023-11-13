import { vars } from "./vars.js";

const { selectHeader, selectItem } = vars;

export default function select() {
  selectHeader.addEventListener("click", selectToggle);

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    vars.selectHeader.classList.toggle("is_active");
  }

  function selectChoose(e) {
    const text = e.target.textContent;
    const select = this.closest(".custom-select");
    const currentText = select.querySelector(".custom-current");
    currentText.innerText = text;
    select.classList.remove(".is_active");
  }
}
