const products = [
    {
      name: "Product 1",
      price: 10.99,
      description: "This is the description for Product 1."
    },
    {
      name: "Product 2",
      price: 19.99,
      description: "This is the description for Product 2."
    },
    {
      name: "Product 3",
      price: 5.99,
      description: "This is the description for Product 3."
    }
  ];

  const productList = document.getElementById("product-list");

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const span = document.createElement("span");

    h2.innerText = product.name;
    span.innerText = "$" + product.price.toFixed(2);
    p1.innerText = product.description;

    li.appendChild(h2);
    li.appendChild(p1);
    p2.appendChild(span);
    li.appendChild(p2);

    productList.appendChild(li);
  }