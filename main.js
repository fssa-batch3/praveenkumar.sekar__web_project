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
                description: `Banana Cake that is total utter bliss in every bite! There's much delicious decadence and irresistible flavor here.

                Ingredients: 
                    bananas, cake flour, baking soda, vanilla extract, milk, eggs, sugar, salt, water, butter.

                Allergens:
                    May Contain Eggs (based on your order).

                Nutritional values:
                Calories: 349, Fat: 19g, Saturated Fat: 10g, Cholesterol: 44mg, Sodium: 300mg, Carbohydrates: 37g, Dietary Fiber: 3g. Sugar: 34g, Protein: 4g`,
                price_details: [
                    { size: 0, price: "500" },
                    { size: 1, price: "750" },
                    { size: 2, price: "1500" },
                ],
                v_label: "Customizable",
                image: {
                    src: "https://iili.io/HvHP9Sf.png",
                    alt: "Salted Banana Caramel Cake",
                },
                category: "Cakes",
            },

            {
                name: "Red Velvet Cake",
                product_id: "d7795e2d-df36-4d9a-addd-1e614ac9wrdf",
                description: `Red Velvet Cake that is total utter bliss in every bite! There's much delicious decadence and irresistible flavor here.

                Ingredients: 
                    bananas, cake flour, baking soda, vanilla extract, milk, eggs, sugar, salt, water, butter.

                Allergens:
                    May Contain Eggs (based on your order).

                Nutritional values:
                Calories: 349, Fat: 19g, Saturated Fat: 10g, Cholesterol: 44mg, Sodium: 300mg, Carbohydrates: 37g, Dietary Fiber: 3g. Sugar: 34g, Protein: 4g`,
                price_details: [
                    { size: 0, price: "800" },
                    { size: 1, price: "1000" },
                    { size: 2, price: "1800" },
                ],
                v_label: "Customizable",
                image: {
                    src: "https://iili.io/HgwiBat.png",
                    alt: "Salted Banana Caramel Cake",
                },
                category: "Cakes",
            },

            {
                name: "Carrot Cake",
                product_id: "d7795e2d-df36-4d9a-addd-1e614ac9eifn",
                description: `Carrot Cake that is total utter bliss in every bite! There's much delicious decadence and irresistible flavor here.

                Ingredients: 
                    bananas, cake flour, baking soda, vanilla extract, milk, eggs, sugar, salt, water, butter.

                Allergens:
                    May Contain Eggs (based on your order).

                Nutritional values:
                Calories: 349, Fat: 19g, Saturated Fat: 10g, Cholesterol: 44mg, Sodium: 300mg, Carbohydrates: 37g, Dietary Fiber: 3g. Sugar: 34g, Protein: 4g`,
                price_details: [
                    { size: 0, price: "500" },
                    { size: 1, price: "700" },
                    { size: 2, price: "1300" },
                ],
                v_label: "Customizable",
                image: {
                    src: "https://iili.io/HgwP84S.png",
                    alt: "Salted Banana Caramel Cake",
                },
                category: "Cakes",
            },

            {
                name: "Cookies and Cream Cake",
                product_id: "d7795e2d-df36-4d9a-addd-1e614ac9poav",
                description: `Cookies and Cream Cake that is total utter bliss in every bite! There's much delicious decadence and irresistible flavor here.

                Ingredients: 
                    bananas, cake flour, baking soda, vanilla extract, milk, eggs, sugar, salt, water, butter.

                Allergens:
                    May Contain Eggs (based on your order).

                Nutritional values:
                Calories: 349, Fat: 19g, Saturated Fat: 10g, Cholesterol: 44mg, Sodium: 300mg, Carbohydrates: 37g, Dietary Fiber: 3g. Sugar: 34g, Protein: 4g`,
                price_details: [
                    { size: 0, price: "550" },
                    { size: 1, price: "800" },
                    { size: 2, price: "1400" },
                ],
                v_label: "Customizable",
                image: {
                    src: "https://iili.io/HgwPyyg.png",
                    alt: "Salted Banana Caramel Cake",
                },
                category: "Cakes",
            },

            {
                name: "Vanilla Sprinkle Cake",
                product_id: "d7795e2d-df36-4d9a-adfg-1e614ac9eb7a",
                description: `Vanilla Sprinkle Cake that is total utter bliss in every bite! There's much delicious decadence and irresistible flavor here.

                Ingredients: 
                    bananas, cake flour, baking soda, vanilla extract, milk, eggs, sugar, salt, water, butter.

                Allergens:
                    May Contain Eggs (based on your order).

                Nutritional values:
                Calories: 349, Fat: 19g, Saturated Fat: 10g, Cholesterol: 44mg, Sodium: 300mg, Carbohydrates: 37g, Dietary Fiber: 3g. Sugar: 34g, Protein: 4g`,
                price_details: [
                    { size: 0, price: "600" },
                    { size: 1, price: "800" },
                    { size: 2, price: "1500" },
                ],
                v_label: "Customizable",
                image: {
                    src: "https://iili.io/HvH6ycG.png",
                    alt: "Vanilla Sprinkle Cake",
                },
                category: "Cakes",
            },

            {
                name: "Chocolate Raspberry Cake",
                product_id: "d7795e2d-df36-4d9a-poeh-1e614ac9eb7a",
                description: `Chocolate Raspberry Cake that is total utter bliss in every bite! There's much delicious decadence and irresistible flavor here.

                Ingredients: 
                    bananas, cake flour, baking soda, vanilla extract, milk, eggs, sugar, salt, water, butter.

                Allergens:
                    May Contain Eggs (based on your order).

                Nutritional values:
                Calories: 349, Fat: 19g, Saturated Fat: 10g, Cholesterol: 44mg, Sodium: 300mg, Carbohydrates: 37g, Dietary Fiber: 3g. Sugar: 34g, Protein: 4g`,
                price_details: [
                    { size: 0, price: "400" },
                    { size: 1, price: "600" },
                    { size: 2, price: "1100" },
                ],
                v_label: "Customizable",
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
                description: `A great alternative to refined flour breads, our Country Bread Loaf is made using 70% whole wheat flour and has a rich nutty flavour. Best enjoyed plain, toasted or as a sandwich.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "45" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HvH6X3b.md.png",
                    alt: "country loaf",
                },
                category: "Breads",
            },

            {
                name: "Wheat Bread",
                product_id: "d7795e2d-df36-4d9a-1567-1e614ac9eb7a",
                description: `A great alternative to refined flour breads, our Wheat Bread Loaf is made using 70% whole wheat flour and has a rich nutty flavour. Best enjoyed plain, toasted or as a sandwich.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "40" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HgN9lZ7.md.png",
                    alt: "country loaf",
                },
                category: "Breads",
            },

            {
                name: "Sweet Bread",
                product_id: "d7795e2d-df36-4d9a-a636-1e614ac9eb7a",
                description: `A great alternative to refined flour breads, our Sweet Bread Loaf is made using 70% whole wheat flour and has a rich nutty flavour. Best enjoyed plain, toasted or as a sandwich.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "45" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HgN9hyQ.md.png",
                    alt: "country loaf",
                },
                category: "Breads",
            },

            {
                name: "Burger Bun",
                product_id: "d7795e2d-df36-4d9a-a0jg-1e614ac9eb7a",
                description: `A great alternative to refined flour breads, our Burger Bun is made using 70% whole wheat flour and has a rich nutty flavour. Best enjoyed plain, toasted or as a sandwich.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "30" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HgN9CTN.md.png",
                    alt: "country loaf",
                },
                category: "Breads",
            },

            {
                name: "Cereal Bread",
                product_id: "d7795e2d-df36-4d9a-adha-1e614ac9eb7a",
                description: `A great alternative to refined flour breads, our Cereal Bread Loaf is made using 70% whole wheat flour and has a rich nutty flavour. Best enjoyed plain, toasted or as a sandwich.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "55" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HvH6haj.md.png",
                    alt: "cereal bread",
                },
                category: "Breads",
            },

            {
                name: "Gralic Bread",
                product_id: "d7795e2d-df36-4d9a-adbh-1e614ac9eb7a",
                description: `A great alternative to refined flour breads, our Garlic Bread Loaf is made using 70% whole wheat flour and has a rich nutty flavour. Best enjoyed plain, toasted or as a sandwich.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "60" }],
                v_label: "Veg",
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
                description: `Our chocolate croissants are made with a buttery, flaky dough that is filled with a rich, decadent chocolate ganache. The result is a delicious and irresistible treat that is perfect for breakfast, brunch, or a snack.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar, chocolate.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "45" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HvHiYI2.png",
                    alt: "chocolate croissant",
                },
                category: "Breakfast Pastry",
            },

            {
                name: "Multigrain Butter Croissant",
                product_id: "d7795e2d-df36-4d9a-agdb-1e614ac9eb7a",
                description: `Our multigrain butter croissants are made with a blend of whole grains, including wheat, oats, and barley. They are then filled with a generous amount of butter and baked to perfection. The result is a flaky, buttery croissant with a slightly nutty flavor from the grains.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar, chocolate.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "40" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HvHiaXS.png",
                    alt: "multigrain butter croissant",
                },
                category: "Breakfast Pastry",
            },

            {
                name: "Traditional Croissant",
                product_id: "d7795e2d-df36-4d9a-andk-1e614ac9eb7a",
                description: `Our traditional croissants are made with a buttery, flaky dough that is laminated hundreds of times to create a light and airy pastry. The croissants are then baked to perfection until they are golden brown and have a delicious, buttery aroma.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar, chocolate.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "50" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HvHicL7.md.png",
                    alt: "traditional croissant",
                },
                category: "Breakfast Pastry",
            },

            {
                name: "Sprinkled Cookies",
                product_id: "d7795e2d-df36-hfbd-andk-1e614ac9eb7a",
                description: `Our traditional croissants are made with a buttery, flaky dough that is laminated hundreds of times to create a light and airy pastry. The croissants are then baked to perfection until they are golden brown and have a delicious, buttery aroma.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar, chocolate.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "50" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HgN3nqP.md.png",
                    alt: "traditional croissant",
                },
                category: "Breakfast Pastry",
            },

            {
                name: "Cheese Croissant",
                product_id: "d7795e2d-df36-jabd-andk-1e614ac9eb7a",
                description: `Our traditional croissants are made with a buttery, flaky dough that is laminated hundreds of times to create a light and airy pastry. The croissants are then baked to perfection until they are golden brown and have a delicious, buttery aroma.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar, chocolate.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "50" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HgN3ddu.md.png",
                    alt: "traditional croissant",
                },
                category: "Breakfast Pastry",
            },

            {
                name: "White & Dark Chocolate Cookies",
                product_id: "d7795e2d-df36-pajh-andk-1e614ac9eb7a",
                description: `Our traditional croissants are made with a buttery, flaky dough that is laminated hundreds of times to create a light and airy pastry. The croissants are then baked to perfection until they are golden brown and have a delicious, buttery aroma.

                Ingredients: 
                    Whole wheat flour, Water , yeast, salt, sugar, chocolate.

                Allergens:
                    Contains gluten.

                Nutritional values:
                Calories: 246, Fat: 2g, Saturated Fat: 0.5g, Cholesterol: 0mg, Sodium: 180mg, Carbohydrates: 46g, Dietary Fiber: 6g. Sugar: 2g, Protein: 9g`,
                price_details: [{ size: 0, price: "50" }],
                v_label: "Veg",
                image: {
                    src: "https://iili.io/HgN3Amv.md.png",
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
