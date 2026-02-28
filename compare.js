const products = {
  wallart: {
    name: "Metal Wall Art",
    price: "PKR 4,999",
    material: "Iron Metal",
    quality: "Premium Finish",
    rating: "★★★★☆"
  },
  shelf: {
    name: "Wall Shelf",
    price: "PKR 6,499",
    material: "Wood & Metal",
    quality: "High Strength",
    rating: "★★★★★"
  }
};

function compareProducts() {
  const p1 = document.getElementById("product1").value;
  const p2 = document.getElementById("product2").value;

  if (p1) {
    document.getElementById("p1").innerText = products[p1].name;
    document.getElementById("price1").innerText = products[p1].price;
    document.getElementById("material1").innerText = products[p1].material;
    document.getElementById("quality1").innerText = products[p1].quality;
    document.getElementById("rating1").innerText = products[p1].rating;
  }

  if (p2) {
    document.getElementById("p2").innerText = products[p2].name;
    document.getElementById("price2").innerText = products[p2].price;
    document.getElementById("material2").innerText = products[p2].material;
    document.getElementById("quality2").innerText = products[p2].quality;
    document.getElementById("rating2").innerText = products[p2].rating;
  }
}
