const urlQuery = new URLSearchParams(window.location.search);
var prodId = parseInt(urlQuery.get('id'));
const originalID = prodId;

let product;
if (prodId >= 1 && prodId <= 6) {
  product = JSON.parse(bestSellers);
  prodId -= 1;
} else if (prodId >= 7) {
  product = JSON.parse(allCategories);
  prodId -= 7;
}

// Function that outputs the percentage of a subtraction
function percentage(original, sale) {
  const percentage = 100 - ((sale / original) * 100);
  return Math.round(percentage);
}


function pageOutput(product) {
document.write('<section class="product-details">');
document.write('<div class="image-slider">');
document.write(`<style>.image-slider{background-image: url('${product.imagePath}'); }</style>`);
document.write('<div class="product-images">');
document.write('<img src="' + product.imagePath + '" class="product-thumb" alt="">');
document.write('<img src="' + product.imagePath2 + '" class="product-thumb" alt="">');
document.write('<img src="' + product.imagePath3 + '" class="product-thumb" alt="">');
document.write('<img src="' + product.imagePath4 + '" class="product-thumb" alt="">');
document.write('</div>');
document.write('</div>');
document.write('<div class="details">');
document.write('<h2>' + product.productName + '</h2>');
document.write('<p class="product-short-des">' + product.shortDescription + '</p>');
if (product.hasOwnProperty("sale")) {
  document.write('<span class="product-price">$' + product.sale + '</span>');
  document.write('<span class="product-actual-price">$' + product.price + '</span>');
  document.write('<span class="product-discount">( ' + percentage(product.price, product.sale) + '% off )</span>');
} else {
  document.write('<span class="product-price">$' + product.price + '</span>');
};
//document.write('<a href="/html/product.html?id=' + product.id + '">');
document.write('<button class="btn cart-btn">Buy Now</button>');
//document.write('</a>');
document.write('</div>');
document.write('</section>');

document.write('<section class="detail-des">');
document.write('<h2 class="heading">Description</h2>');
document.write('<p class="des">' + product.description + '</p>');
document.write('</section>');
}



if (originalID >= 1 && originalID <= 6) 
{
  console.log("product is bestseller");
  pageOutput(product[prodId]);
} 
else if (originalID >= 7 && originalID <= 12)
{
  console.log("product is smart home");
  pageOutput(product[0].products[prodId]);
} 
else if (originalID >= 13 && originalID <= 18) 
{
  console.log("product is wearables");
  prodId -= 6;
  pageOutput(product[1].products[prodId]);
} 
else if (originalID >= 19 && originalID <= 24) 
{
  console.log("product is mobile device");
  prodId -= 12;
  pageOutput(product[2].products[prodId]);
} 
else {
  console.log("product ID is out of range");
  window.location.href = "/html/404.html";
};

