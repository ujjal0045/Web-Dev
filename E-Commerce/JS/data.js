const products = [
    // ==================== ACCESSORIES ====================

    {
        id: 1,
        name: "Classic Black Leather Watch",
        category: "Accessories",
        originalPrice: 2499,
        price: 1999,
        discount: 20,
        rating: 4.5,
        stock: 18,
        image: "./Assets/images/accessory1.jpeg",
        description: "A classic black leather watch with a clean dial and elegant silver-tone case."
    },
    {
        id: 2,
        name: "Classic Brown Leather Belt",
        category: "Accessories",
        originalPrice: 1499,
        price: 1199,
        discount: 20,
        rating: 4.4,
        stock: 24,
        image: "./Assets/images/accessory2.png",
        description: "A durable brown leather belt with a stylish silver buckle for everyday wear."
    },
    {
        id: 3,
        name: "Classic Black Sunglasses",
        category: "Accessories",
        originalPrice: 1299,
        price: 999,
        discount: 23,
        rating: 4.3,
        stock: 30,
        image: "./Assets/images/accessory3.png",
        description: "Stylish black sunglasses with a timeless frame designed for everyday use."
    },
    {
        id: 4,
        name: "Elegant Cream Handbag",
        category: "Accessories",
        originalPrice: 2999,
        price: 2399,
        discount: 20,
        rating: 4.6,
        stock: 12,
        image: "./Assets/images/accessory4.png",
        description: "An elegant cream handbag with a structured design perfect for casual and formal outfits."
    },
    {
        id: 5,
        name: "Rose Gold Mesh Watch",
        category: "Accessories",
        originalPrice: 2799,
        price: 2199,
        discount: 21,
        rating: 4.5,
        stock: 15,
        image: "./Assets/images/accessory5.png",
        description: "A sophisticated rose gold watch featuring a slim mesh strap and minimalist dial."
    },
    {
        id: 6,
        name: "Tortoiseshell Cat Eye Sunglasses",
        category: "Accessories",
        originalPrice: 1599,
        price: 1199,
        discount: 25,
        rating: 4.4,
        stock: 20,
        image: "./Assets/images/accessory6.png",
        description: "Fashionable tortoiseshell cat-eye sunglasses that add a stylish touch to any look."
    },
    {
        id: 7,
        name: "Classic Black Leather Wallet",
        category: "Accessories",
        originalPrice: 1199,
        price: 899,
        discount: 25,
        rating: 4.5,
        stock: 28,
        image: "./Assets/images/accessory7.png",
        description: "A slim black leather wallet with a simple and practical design for everyday use."
    },


    // ==================== MEN ====================

    {
        id: 8,
        name: "Classic White T-Shirt",
        category: "Men",
        originalPrice: 999,
        price: 799,
        discount: 20,
        rating: 4.5,
        stock: 25,
        image: "./Assets/images/men1.png",
        description: "A classic white t-shirt made with a comfortable fit for everyday wear."
    },
    {
        id: 9,
        name: "Classic Black T-Shirt",
        category: "Men",
        originalPrice: 999,
        price: 749,
        discount: 25,
        rating: 4.4,
        stock: 28,
        image: "./Assets/images/men2.png",
        description: "A versatile black t-shirt with a simple design that works for everyday outfits."
    },
    {
        id: 10,
        name: "Navy Blue Polo Shirt",
        category: "Men",
        originalPrice: 1499,
        price: 1099,
        discount: 27,
        rating: 4.5,
        stock: 20,
        image: "./Assets/images/men3.png",
        description: "A classic navy blue polo shirt combining comfort with a smart casual appearance."
    },
    {
        id: 11,
        name: "Beige Casual Polo",
        category: "Men",
        originalPrice: 1499,
        price: 1149,
        discount: 23,
        rating: 4.3,
        stock: 18,
        image: "./Assets/images/men4.png",
        description: "A soft beige polo shirt designed for relaxed everyday and casual occasions."
    },
    {
        id: 12,
        name: "Light Blue Denim Shirt",
        category: "Men",
        originalPrice: 1799,
        price: 1399,
        discount: 22,
        rating: 4.5,
        stock: 16,
        image: "./Assets/images/men5.png",
        description: "A timeless light blue denim shirt that can be styled for casual and smart looks."
    },
    {
        id: 13,
        name: "Black Casual Trousers",
        category: "Men",
        originalPrice: 1699,
        price: 1299,
        discount: 24,
        rating: 4.4,
        stock: 21,
        image: "./Assets/images/men8.png",
        description: "Comfortable black trousers with a clean silhouette suitable for everyday wear."
    },
    {
        id: 14,
        name: "Beige Cargo Pants",
        category: "Men",
        originalPrice: 1899,
        price: 1399,
        discount: 26,
        rating: 4.3,
        stock: 15,
        image: "./Assets/images/men11.png",
        description: "Relaxed beige cargo pants featuring a practical design and comfortable fit."
    },
    {
        id: 15,
        name: "Dark Blue Slim Jeans",
        category: "Men",
        originalPrice: 1999,
        price: 1599,
        discount: 20,
        rating: 4.5,
        stock: 24,
        image: "./Assets/images/men12.png",
        description: "Classic dark blue slim-fit jeans designed for comfortable everyday styling."
    },
    {
        id: 16,
        name: "Classic Blue Jeans",
        category: "Men",
        originalPrice: 1999,
        price: 1499,
        discount: 25,
        rating: 4.4,
        stock: 20,
        image: "./Assets/images/men13.png",
        description: "A pair of classic blue jeans with a versatile fit for everyday outfits."
    },
    {
        id: 17,
        name: "Olive Bomber Jacket",
        category: "Men",
        originalPrice: 2999,
        price: 2299,
        discount: 23,
        rating: 4.6,
        stock: 9,
        image: "./Assets/images/men14.png",
        description: "A stylish olive bomber jacket designed to add a modern layer to casual outfits."
    },


    // ==================== WOMEN ====================

    {
        id: 18,
        name: "Classic White T-Shirt",
        category: "Women",
        originalPrice: 999,
        price: 799,
        discount: 20,
        rating: 4.5,
        stock: 25,
        image: "./Assets/images/women1.png",
        description: "A clean and comfortable white t-shirt designed for everyday wear."
    },
    {
        id: 19,
        name: "Black Cropped T-Shirt",
        category: "Women",
        originalPrice: 899,
        price: 699,
        discount: 22,
        rating: 4.4,
        stock: 20,
        image: "./Assets/images/women2.png",
        description: "A trendy black cropped t-shirt with a simple design for casual outfits."
    },
    {
        id: 20,
        name: "Beige Casual Shirt",
        category: "Women",
        originalPrice: 1499,
        price: 1099,
        discount: 27,
        rating: 4.3,
        stock: 16,
        image: "./Assets/images/women3.png",
        description: "A lightweight beige casual shirt designed for a comfortable and relaxed look."
    },
    {
        id: 21,
        name: "Light Blue Denim Shirt",
        category: "Women",
        originalPrice: 1799,
        price: 1399,
        discount: 22,
        rating: 4.5,
        stock: 18,
        image: "./Assets/images/women4.png",
        description: "A versatile light blue denim shirt that pairs easily with jeans, trousers, or skirts."
    },
    {
        id: 22,
        name: "Pink Floral Midi Dress",
        category: "Women",
        originalPrice: 1999,
        price: 1499,
        discount: 25,
        rating: 4.6,
        stock: 14,
        image: "./Assets/images/women5.png",
        description: "A beautiful pink floral midi dress featuring a feminine and comfortable design."
    },
    {
        id: 23,
        name: "Black Pleated Dress",
        category: "Women",
        originalPrice: 1899,
        price: 1399,
        discount: 26,
        rating: 4.5,
        stock: 13,
        image: "./Assets/images/women6.png",
        description: "A stylish black pleated dress suitable for casual outings and everyday occasions."
    },
    {
        id: 24,
        name: "Classic Blue Straight Jeans",
        category: "Women",
        originalPrice: 1999,
        price: 1599,
        discount: 20,
        rating: 4.4,
        stock: 22,
        image: "./Assets/images/women7.png",
        description: "Classic blue straight-fit jeans offering comfort and effortless everyday styling."
    },
    {
        id: 25,
        name: "Beige Wide Leg Trousers",
        category: "Women",
        originalPrice: 1799,
        price: 1299,
        discount: 28,
        rating: 4.3,
        stock: 17,
        image: "./Assets/images/women8.png",
        description: "Comfortable beige wide-leg trousers designed for a relaxed and modern silhouette."
    },
    {
        id: 26,
        name: "Olive Utility Jacket",
        category: "Women",
        originalPrice: 2499,
        price: 1899,
        discount: 24,
        rating: 4.5,
        stock: 10,
        image: "./Assets/images/women9.png",
        description: "A practical olive utility jacket with a relaxed fit and multiple functional pockets."
    },
    {
        id: 27,
        name: "Cream Cable Knit Sweater",
        category: "Women",
        originalPrice: 2299,
        price: 1699,
        discount: 26,
        rating: 4.6,
        stock: 11,
        image: "./Assets/images/women11.png",
        description: "A cozy cream cable-knit sweater offering warmth and a timeless winter style."
    },


    // ==================== SHOES ====================

    {
        id: 28,
        name: "Classic Brown Oxford Shoes",
        category: "Shoes",
        originalPrice: 2999,
        price: 2299,
        discount: 23,
        rating: 4.6,
        stock: 12,
        image: "./Assets/images/shoe1.png",
        description: "Elegant brown Oxford shoes with a polished finish for formal and professional occasions."
    },
    {
        id: 29,
        name: "Classic Black Oxford Shoes",
        category: "Shoes",
        originalPrice: 2999,
        price: 2399,
        discount: 20,
        rating: 4.7,
        stock: 10,
        image: "./Assets/images/shoe2.png",
        description: "Classic black Oxford shoes offering a sophisticated look for formal occasions."
    },
    {
        id: 30,
        name: "Brown Formal Loafers",
        category: "Shoes",
        originalPrice: 2799,
        price: 2099,
        discount: 25,
        rating: 4.5,
        stock: 14,
        image: "./Assets/images/shoe3.png",
        description: "Stylish brown formal loafers designed for comfort and polished everyday dressing."
    },
    {
        id: 31,
        name: "Classic White Sneakers",
        category: "Shoes",
        originalPrice: 1999,
        price: 1499,
        discount: 25,
        rating: 4.5,
        stock: 22,
        image: "./Assets/images/shoe4.png",
        description: "Clean white sneakers with a versatile design suitable for everyday casual outfits."
    },
    {
        id: 32,
        name: "Red Canvas Sneakers",
        category: "Shoes",
        originalPrice: 1699,
        price: 1199,
        discount: 29,
        rating: 4.4,
        stock: 18,
        image: "./Assets/images/shoe5.png",
        description: "Bold red canvas sneakers that add a sporty and stylish touch to casual outfits."
    },
    {
        id: 33,
        name: "Cream Casual Sneakers",
        category: "Shoes",
        originalPrice: 1999,
        price: 1499,
        discount: 25,
        rating: 4.5,
        stock: 16,
        image: "./Assets/images/shoe6.png",
        description: "Minimal cream sneakers designed for comfortable everyday casual wear."
    },
    {
        id: 34,
        name: "White Green Sport Sneakers",
        category: "Shoes",
        originalPrice: 2499,
        price: 1899,
        discount: 24,
        rating: 4.6,
        stock: 13,
        image: "./Assets/images/shoe7.png",
        description: "Sporty white and green sneakers designed for an active and casual lifestyle."
    },
    {
        id: 35,
        name: "Black Orange Running Shoes",
        category: "Shoes",
        originalPrice: 2999,
        price: 2199,
        discount: 27,
        rating: 4.5,
        stock: 11,
        image: "./Assets/images/shoe8.png",
        description: "Lightweight black running shoes with orange accents for everyday training and running."
    },
    {
        id: 36,
        name: "Grey Athletic Sneakers",
        category: "Shoes",
        originalPrice: 3299,
        price: 2499,
        discount: 24,
        rating: 4.7,
        stock: 8,
        image: "./Assets/images/shoe9.png",
        description: "Comfortable grey athletic sneakers designed for daily walking, training, and casual wear."
    }
];