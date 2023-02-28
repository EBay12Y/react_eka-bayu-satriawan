// Tangkap form input dan tombol Submit
const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

function createProduct() {
    // Tangkap data pada form input
    let productName = document.getElementById("product-name");
    let productCategory = document.getElementById("product-category");
    let imageInput = document.getElementById("image-of-product");
    let productFreshness = document.querySelector('input[name="product-freshness"]:checked');
    let productDescription = document.getElementById("product-description");
    let productPrice = document.getElementById("product-price");

    // Validasi input Product Name
    if (productName.value.length === 0) {
        productName.style.border = "2px solid red";
        submitButton.disabled = true;
        return false;
    } else if (productName.value.length > 25) {
        alert("Product name must not exceed 25 characters.");
        productName.style.border = "2px solid red";
        submitButton.disabled = true;
        return false;
    } else if (productName.value.length > 10) {
        productName.style.border = "2px solid orange";
        submitButton.disabled = true;
        return false;
    }

    const pattern = /[^\w\s]/gi;
    if (pattern.test(productName.value)) {
        alert("Name must not contain symbols.");
        productName.style.border = "2px solid red";
        submitButton.disabled = true;
        return false;
    }
    productName.style.border = "2px solid green";

    // Validasi input Product Category
    if (productCategory.value === "") {
        productCategory.style.border = "2px solid red";
        submitButton.disabled = true;
        return false;
    }
    productCategory.style.border = "2px solid green";

    // Validasi input Image of Product
    if (imageInput.value === "") {
        imageInput.style.border = "2px solid red";
        submitButton.disabled = true;
        return false;
    }
    imageInput.style.border = "2px solid green";

    // Validasi input Product Freshness
    if (!productFreshness) {
        alert("Please select a valid Product Freshness.");
        submitButton.disabled = true;
        return false;
    }

    // Validasi input Additional Description
    if (productDescription.value.length === 0) {
        productDescription.style.border = "2px solid red";
        submitButton.disabled = true;
        return false;
    }
    productDescription.style.border = "2px solid green";

    // Validasi input Product Price
    if (productPrice.value.length === 0) {
        productPrice.style.border = "2px solid red";
        submitButton.disabled = true;
        return false;
    }
    productPrice.style.border = "2px solid green";

    // Aktifkan tombol Submit jika semua input valid
    submitButton.disabled = false;

    // Tampilkan alert dengan data yang telah dimasukkan
    const data = {
        productName: productName.value,
        productCategory: productCategory.value,
        productFreshness: productFreshness.value,
        productDescription: productDescription.value,
        productPrice: productPrice.value
    };
    alert(`Data yang telah dimasukkan:\n${JSON.stringify(data, null, 2)}`);
    return true;
}


const inputs = document.querySelectorAll("input, select, textarea");
const submitBtn = document.querySelector("button[type='submit']");

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        input.classList.remove("error");

        const isFormValid = createProduct();
        submitBtn.disabled = !isFormValid;
    });
});
