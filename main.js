const prod = JSON.parse(localStorage.getItem("prod_detail"));

const admin = JSON.parse(localStorage.getItem("user_cred"));

if (!prod) {
  localStorage.setItem(
    "prod_detail",
    JSON.stringify([
      // CAKES
      {
        name: "Banana Salted Caramel",
        product_id: "d7795e2d-df36-4d9a-addd-1e614ac9eb7a",
        description: "It is very delecious",
        price_details: [
          { size: 0, price: "500" },
          { size: 1, price: "750" },
          { size: 2, price: "1500" },
        ],
        image: {
          src: "https://iili.io/HvHP9Sf.png",
          alt: "Salted Banana Caramel Cake",
        },
        category: "Cakes",
      },

      {
        name: "Vanilla Sprinkle Cake",
        product_id: "d7795e2d-df36-4d9a-adfg-1e614ac9eb7a",
        description: "It is very delecious",
        price_details: [
          { size: 0, price: "600" },
          { size: 1, price: "800" },
          { size: 2, price: "1500" },
        ],
        image: {
          src: "https://iili.io/HvH6ycG.png",
          alt: "Vanilla Sprinkle Cake",
        },
        category: "Cakes",
      },

      {
        name: "Chocolate Raspberry Cake",
        product_id: "d7795e2d-df36-4d9a-poeh-1e614ac9eb7a",
        description: "It is very delecious",
        price_details: [
          { size: 0, price: "400" },
          { size: 1, price: "600" },
          { size: 2, price: "1100" },
        ],
        image: {
          src: "https://iili.io/HvHPJ94.png",
          alt: "Chocolate raspberry cake",
        },
        category: "Cakes",
      },

      // BREADS

      {
        name: "Country Loaf",
        product_id: "d7795e2d-df36-4d9a-apdo-1e614ac9eb7a",
        description: "It is very delecious",
        price_details: [{ size: 0, price: "45" }],
        image: {
          src: "https://iili.io/HvH6X3b.md.png",
          alt: "country loaf",
        },
        category: "Breads",
      },

      {
        name: "Cereal Bread",
        product_id: "d7795e2d-df36-4d9a-adha-1e614ac9eb7a",
        description: "It is very delecious",
        price_details: [{ size: 0, price: "55" }],
        image: {
          src: "https://iili.io/HvH6haj.md.png",
          alt: "cereal bread",
        },
        category: "Breads",
      },

      {
        name: "Gralic Bread",
        product_id: "d7795e2d-df36-4d9a-adbh-1e614ac9eb7a",
        description: "It is very delecious",
        price_details: [{ size: 0, price: "60" }],
        image: {
          src: "https://iili.io/HvH6V6u.md.png",
          alt: "Garlic Bread",
        },
        category: "Breads",
      },

      // BREAKFAST PASTRIES
      {
        name: "Chocolate Croissant",
        product_id: "d7795e2d-df36-4d9a-bhdy-1e614ac9eb7a",
        description: "It is very delecious",
        price_details: [{ size: 0, price: "45" }],
        image: {
          src: "https://iili.io/HvHiYI2.png",
          alt: "chocolate croissant",
        },
        category: "Breakfast Pastry",
      },

      {
        name: "Multigrain Butter Croissant",
        product_id: "d7795e2d-df36-4d9a-agdb-1e614ac9eb7a",
        description: "It is very delecious",
        price_details: [{ size: 0, price: "40" }],
        image: {
          src: "https://iili.io/HvHiaXS.png",
          alt: "multigrain butter croissant",
        },
        category: "Breakfast Pastry",
      },

      {
        name: "Traditional Croissant",
        product_id: "d7795e2d-df36-4d9a-andk-1e614ac9eb7a",
        description: "It is very delecious",
        price_details: [{ size: 0, price: "50" }],
        image: {
          src: "https://iili.io/HvHicL7.md.png",
          alt: "traditional croissant",
        },
        category: "Breakfast Pastry",
      },
    ])
  );
}

if (!admin) {
  localStorage.setItem(
    "user_cred",
    JSON.stringify([
      {
        Phone: "9999999999",
        address: "qwertyuiop",
        email: "admin123@gmail.com",
        first_name: "Admin",
        last_name: "123",
        password: "1234",
        uuid: "7ae6a781-cd7d-4393-a9e2-04305eaa880e",
      },
    ])
  );
}
