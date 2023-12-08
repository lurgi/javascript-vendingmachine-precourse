/*
- 추가한 각 상품 요소의 class명은 `product-manage-item`이며, 하위에 아래 요소들을 갖는다.
  - 상품명에 해당하는 요소의 class명은 `product-manage-name`이다.
  - 가격에 해당하는 요소의 class명은 `product-manage-price`이다.
  - 수량에 해당하는 요소의 class명은 `product-manage-quantity`이다.
 */

const items = [
  {
    name: "콜라",
    price: "1500",
    cnt: "20",
  },
];

export function addItems(event) {
  const name = event.target[0].value;
  const price = event.target[1].value;
  const cnt = event.target[2].value;

  items.push({ name, price, cnt });

  const list = document.querySelector("#itemList");
  createOneColumn(list, [name, price, cnt]);
}

function createOneColumn(container, arr) {
  const column = document.createElement("div");
  column.className = "product-manage-item";

  const ids = [
    "product-manage-name",
    "product-manage-price",
    `product-manage-quantity`,
  ];
  arr.forEach((value, index) => {
    const title = document.createElement("span");
    title.className = ids[index];
    title.innerText = value;

    column.appendChild(title);
  });

  container.appendChild(column);
}

export function createMangeListSection(event) {
  const listSectionEle = document.createElement("div");

  const listSectionTitle = document.createElement("h2");
  listSectionTitle.innerText = "상품 현황";
  listSectionEle.appendChild(listSectionTitle);

  const listSectionItems = document.createElement("div");
  const itemsList = document.createElement("div");
  itemsList.id = "itemList";
  createOneColumn(itemsList, ["상품명", "가격", "수량"]);

  listSectionItems.appendChild(itemsList);

  for (let { name, price, cnt } of items) {
    createOneColumn(itemsList, [name, price, cnt]);
  }

  listSectionEle.appendChild(listSectionItems);

  return listSectionEle;
}
