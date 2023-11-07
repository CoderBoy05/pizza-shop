

const selectHeader = document.querySelector(".custom-select");

let selectItem = document.querySelectorAll('ustom-select__item');

selectHeader.addEventListener("click", selectToggle);

selectItem.addEventListener("click", selectChoose);

function selectToggle(){
    selectHeader.classList.toggle("is_active");
}

function selectChoose(){
    let text = this.text,
    currentText = this.closset('.select').querySelector('select__cur')
    console.log(text);
}