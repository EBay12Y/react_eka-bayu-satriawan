function createProduct() {
    // Tangkap data pada form input
    let productName = document.getElementById("product-name").value;
    let productCategory = document.getElementById("product-category");
    let imageInput = document.getElementById("image-of-product");
    let productFreshness = document.querySelector('input[name="product-freshness"]:checked');
    let productDescription = document.getElementById("product-description");
    let productPrice = document.getElementById("product-price").value;

    // Validasi input Product Name
    if (productName.length === 0) {
        alert("Please enter a valid Product name.");
        return;
    } else if (productName.length > 25) {
        alert("Product name must not exceed 25 characters.");
        return;
    } else if (productName.length > 10) {
        alert("Last Name must not exceed 25 characters.");
        return;
    }

    const pattern = /[^\w\s]/gi;
    if (pattern.test(productName)) {
        alert("Name must not contain symbols.");
        return false;
    }

    // Validasi input Product Category
    if (productCategory.value === "") {
        alert("The Product Category field must be filled in");
        return false;
    }

    // Validasi input Image of Product
    if (imageInput.value === "") {
        alert("The Image of Product field must be filled in");
        return false;
    }

    // Validasi input Product Freshness
    if (!productFreshness) {
        alert("Please select a valid Product Freshness.");
        return false;
    }

    // Validasi input Additional Description
    if (productDescription.length === 0) {
        alert("The Additional Description field must be filled in");
        return;
    }

    // Validasi input Product Price
    if (productPrice.length === 0) {
        alert("Please enter a valid Product price.");
        return;
    }

    const data = {
        productName: productName.value,
        productCategory: productCategory.value,
        productFreshness: productFreshness.value,
        productDescription: productDescription.value,
        productPrice: productPrice.value
    };
    alert(`Data yang telah dimasukkan:\n${JSON.stringify(data, null, 2)}`);

}
