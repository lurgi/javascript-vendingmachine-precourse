import { addItems } from "./status.js";

export function createMangeAddSection() {
  const addItemEle = document.createElement("div");

  const addItemTitle = document.createElement("h2");
  addItemTitle.innerText = "상품 추가하기";
  addItemEle.appendChild(addItemTitle);

  const addItemInputForm = document.createElement("form");

  const nameInput = document.createElement("input");
  nameInput.placeholder = "상품명";
  nameInput.id = "product-price-input";
  addItemInputForm.appendChild(nameInput);

  const priceInput = document.createElement("input");
  priceInput.placeholder = "가격";
  priceInput.type = "number";
  priceInput.id = "product-name-input";
  addItemInputForm.appendChild(priceInput);

  const cntInput = document.createElement("input");
  cntInput.placeholder = "수량";
  cntInput.type = "number";
  cntInput.id = "product-quantity-input";
  addItemInputForm.appendChild(cntInput);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.innerText = "추가하기";
  submitBtn.id = "product-add-button";

  addItemInputForm.appendChild(submitBtn);
  addItemInputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addItems(event);
  });

  addItemEle.appendChild(addItemInputForm);

  return addItemEle;
}
