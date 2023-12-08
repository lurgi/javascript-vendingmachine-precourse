import { createMangeAddSection } from "./content/manage/add.js";
import { createMangeListSection } from "./content/manage/status.js";

function createManageBtn(content) {
  const manageBtn = document.createElement("button");
  manageBtn.innerText = "상품 관리";
  manageBtn.id = "product-purchase-menu";
  manageBtn.addEventListener("click", () => {
    content.innerHTML = "";

    const manageAddEle = createMangeAddSection();
    const manageListEle = createMangeListSection();
    content.appendChild(manageAddEle);
    content.appendChild(manageListEle);
  });

  return manageBtn;
}

function createChargeBtn(content) {
  const chargeBtn = document.createElement("button");
  chargeBtn.innerText = "잔돈 충전";
  chargeBtn.id = "vending-machine-manage-menu";
  chargeBtn.addEventListener("click", () => {
    content.innerText = "잔돈 충전";
    // TODO 화면 비우고 잔돈 충전 열기
  });

  return chargeBtn;
}

function createPurchaseBtn(content) {
  const purchaseBtn = document.createElement("button");
  purchaseBtn.innerText = "상품 구매";
  purchaseBtn.id = "product-add-menu";
  purchaseBtn.addEventListener("click", () => {
    content.innerText = "상품 구매";
    // TODO 화면 비우고 상품 구매 열기
  });

  return purchaseBtn;
}

function header() {
  const nav = document.querySelector("#header");
  const content = document.querySelector("#content");

  nav.appendChild(createManageBtn(content));
  nav.appendChild(createChargeBtn(content));
  nav.appendChild(createPurchaseBtn(content));
}

export default header;
