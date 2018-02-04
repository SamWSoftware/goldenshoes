export const categories = {
    womens: [
      { name: "All", link: "/products/womens" },
      { name: "Heels", link: "/products/womens?category=Heels" },
      { name: "Boots", link: "/products/womens?category=Boots" },
      { name: "Trainers", link: "/products/womens?category=Trainers" },
      { name: "Flats", link: "/products/womens?category=Flats" },
      { name: "Sandals", link: "/products/womens?category=Sandals" }
    ],
    mens: [
      { name: "All", link: "/products/mens" },
      { name: "Boots", link: "/products/mens?category=Boots" },
      { name: "Trainers", link: "/products/mens?category=Trainers" },
      { name: "Shoes", link: "/products/mens?category=Shoes" },
      { name: "Sandals", link: "/products/mens?category=Sandals" }
    ]
  },
  sizes = {
    womens: [2, 3, 4, 5, 6, 7, 8, 9],
    mens: [5, 6, 7, 8, 9, 10, 11, 12]
  },
  colors = {
    womens: ["Red", "Blue", "White", "Red Blue"],
    mens: ["White", "Grey Blue", "Grey Red"]
  },
  brand = {
    womens: ["Fred Perry", "Gestuz", "Forever New"],
    mens: ["Nike"]
  },
  filters = {
    options: {
      Category: {
        womens: categories.womens.slice(1),
        mens: categories.mens.slice(1)
      },
      Brand: brand,
      Color: colors,
      Size: sizes
    },
    names: ["category", "brand", "colors", "stock"]
  };
