export const categories = {
    womens: [
      { name: "all", link: "/products/womens" },
      { name: "heels", link: "/products/womens/heels" },
      { name: "boots", link: "/products/womens/boots" },
      { name: "trainers", link: "/products/womens/trainers" },
      { name: "flats", link: "/products/womens/flats" },
      { name: "sandals", link: "/products/womens/sandals" }
    ],
    mens: [
      { name: "all", link: "/products/mens" },
      { name: "boots", link: "/products/mens/boots" },
      { name: "trainers", link: "/products/mens/trainers" },
      { name: "shoes", link: "/products/mens/shoes" },
      { name: "sandals", link: "/products/mens/sandals" }
    ]
  },
  sizes = {
    womens: [2, 3, 4, 5, 6, 7, 8, 9],
    mens: [5, 6, 7, 8, 9, 10, 11, 12]
  },
  colors = {
    womens: ["red", "blue", "white"],
    mens: ["white", "grey/blue", "grey/red"]
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
