// Tangkap data pada form input
const productName = document.getElementById("product-name");
const productCategory = document.getElementById("product-category");
const imageInput = document.getElementById("image-of-product");
const productFreshnessRadio = document.querySelector('input[name="product-freshness"]:checked');
const productFreshness = productFreshnessRadio ? productFreshnessRadio.value : '';
const productDescription = document.getElementById("product-description");
const productPrice = document.getElementById("product-price");
const pattern = /[^\w\s]/gi;

function checkField() {
    // Validasi input Product Name
    if (!productName.value) {
        productName.style.border = "2px solid red";
        return false;
    } else if (productName.value.length > 25) {
        productName.style.border = "2px solid red";
        alert("Product name must not exceed 25 characters.");
        return false;
    } else if (productName.value.length > 10) {
        productName.style.border = "2px solid orange";
        return false;
    } else if (pattern.test(productName.value)) {
        productName.style.border = "2px solid red";
        alert('Nama produk tidak boleh mengandung simbol');
        return false;
    }
    productName.style.border = "2px solid green";

    // Validasi input Product Category
    if (!productCategory.value) {
        productCategory.style.border = "2px solid red";
        return false;
    }
    productCategory.style.border = "2px solid green";

    // Validasi input Image of Product & Product Freshness
    if (!imageInput.value || !productFreshness) {
        return false;
    }

    // Validasi input Additional Description
    if (!productDescription.value) {
        productDescription.style.border = "2px solid red";
        return false;
    }
    productDescription.style.border = "2px solid green";

    // Validasi input Product Price
    if (!productPrice.value) {
        productPrice.style.border = "2px solid red";
        return false;
    }
    productPrice.style.border = "2px solid green";

    return true;
}

const inputs = document.querySelectorAll("input, select, textarea");
const submitBtn = document.querySelector("button[type='submit']");

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        input.classList.remove("error");

        const isFormValid = checkField();
        submitBtn.disabled = !isFormValid;
    });
});

//Data Structure
const datas = []
const dataTable = document.getElementById('dataTable')
let row
const btnDelete = document.getElementById('delete')
const search = document.getElementById('search')
const btnSearch = document.getElementById('btnSearch')

function createProduct() {
    datas.push([productName.value, productCategory.value, imageInput.value, productFreshness, productDescription.value, productPrice.value]);
    dataTable.innerHTML = "";
    datas.forEach((data, index) => {
        let no = index + 1;
        let row = dataTable.insertRow();
        row.insertCell().innerHTML = no;
        data.forEach((item) => {
            row.insertCell().innerHTML = item;
        });
    });
}

btnDelete.addEventListener('click', () => {
    alert("Are you sure you want to delete Are you sure you want to delete the last data?");
    const lastRowIndex = datas.length - 1;
    dataTable.deleteRow(lastRowIndex);
    datas.pop()
})

btnSearch.addEventListener('click', () => {
    let found = false
    datas.forEach((data) => {
        if (data[0] === search.value) {
            return found = true
        }
    })
    if (found) {
        alert('Data Ada')
    } else {
        alert('Data tidak ada')
    }
})