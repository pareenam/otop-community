async function loadProducts() {
    const container = document.getElementById("products-container");

    container.innerHTML = "<p>กำลังโหลด...</p>";

    try {
        const response = await fetch("http://localhost:3000/api/products");
        const products = await response.json();

        console.log("สินค้า", products);

        container.innerHTML = "";

        products.forEach(product => {
            const card = document.createElement("article");
            card.className = "card";

            card.innerHTML = `
                <img src="http://localhost:3000/assets/product-${product.id}.svg" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>ผลไม้สดจากสวน</p>
                <span class="price">฿ ${product.price}</span>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        container.innerHTML = `
            <p style="color:red;">
                โหลดข้อมูลไม่สำเร็จ: ${error.message}
            </p>
        `;
    }
}

loadProducts();