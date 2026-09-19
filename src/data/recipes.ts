import { Recipe, Category } from "@/types/recipe";

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    slug: "burgers",
    name: "Burgers",
    description: "Juicy, mouth-watering gourmet burger recipes from classic beef to crispy chicken and veggie options.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    recipeCount: 6,
    iconName: "Beef"
  },
  {
    id: "cat-2",
    slug: "fried-chicken",
    name: "Fried Chicken",
    description: "Extra crispy, perfectly spiced fried chicken tenders, wings, and popcorn chicken recipes.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
    recipeCount: 5,
    iconName: "Drumstick"
  },
  {
    id: "cat-3",
    slug: "pizza",
    name: "Pizza",
    description: "Cheesy, oven-baked homemade pizza recipes with crispy crusts and savory toppings.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    recipeCount: 4,
    iconName: "Pizza"
  },
  {
    id: "cat-4",
    slug: "sandwiches",
    name: "Sandwiches",
    description: "Stackable, toasted, and grilled sandwich masterpieces ideal for quick lunches or late snacks.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    recipeCount: 4,
    iconName: "Sandwich"
  },
  {
    id: "cat-5",
    slug: "wraps",
    name: "Wraps",
    description: "Roll-up shawarmas, chicken rolls, and veggie tortilla wraps packed with bold flavors.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    recipeCount: 4,
    iconName: "Utensils"
  },
  {
    id: "cat-6",
    slug: "fries",
    name: "Fries",
    description: "Golden french fries, loaded cheese fries, potato wedges, and crisp potato bites cooked to perfection.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    recipeCount: 11,
    iconName: "UtensilsCrossed"
  },
  {
    id: "cat-7",
    slug: "snacks",
    name: "Snacks",
    description: "Quick bites like mozzarella sticks, potato croquettes, nachos, and garlic bread for parties and game nights.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
    recipeCount: 4,
    iconName: "Cookie"
  },
  {
    id: "cat-8",
    slug: "street-food",
    name: "Street Food",
    description: "Popular street fare including crispy samosas, pakoras, potato spiral tornadoes, and hot dogs.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    recipeCount: 10,
    iconName: "Flame"
  },
  {
    id: "cat-9",
    slug: "desserts",
    name: "Desserts",
    description: "Sweet fast-food treats like churros, fried pies, and chocolate lava cakes.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    recipeCount: 3,
    iconName: "IceCream"
  },
  {
    id: "cat-10",
    slug: "drinks",
    name: "Drinks",
    description: "Creamy milkshakes, iced teas, and refreshing mocktails that pair seamlessly with fast food.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    recipeCount: 3,
    iconName: "Coffee"
  }
];

export const RECIPES: Recipe[] = [
  {
    id: "rec-1",
    slug: "chicken-burger",
    title: "Ultimate Crispy Chicken Burger",
    description: "Golden fried seasoned chicken breast topped with melted cheddar, crunchy slaw, pickles, and signature house burger sauce inside a toasted brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    category: "Burgers",
    tags: ["Burger", "Chicken", "Crispy", "Comfort Food", "Fast Food"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: true,
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    difficulty: "Easy",
    servings: 4,
    rating: 4.9,
    reviewCount: 342,
    createdAt: "2026-01-10",
    ingredients: [
      { id: "ing-1", name: "Chicken Breasts (boneless, skinless)", quantity: "4 pieces", category: "Meat" },
      { id: "ing-2", name: "Buttermilk", quantity: "1 cup", category: "Dairy" },
      { id: "ing-3", name: "All-Purpose Flour", quantity: "1.5 cups", category: "Pantry" },
      { id: "ing-4", name: "Cornstarch", quantity: "2 tbsp", category: "Pantry" },
      { id: "ing-5", name: "Garlic Powder", quantity: "1 tsp", category: "Spices" },
      { id: "ing-6", name: "Smoked Paprika", quantity: "1.5 tsp", category: "Spices" },
      { id: "ing-7", name: "Cayenne Pepper", quantity: "1/2 tsp", category: "Spices" },
      { id: "ing-8", name: "Salt and Black Pepper", quantity: "To taste", category: "Spices" },
      { id: "ing-9", name: "Brioche Burger Buns", quantity: "4 buns", category: "Bakery" },
      { id: "ing-10", name: "Cheddar Cheese Slices", quantity: "4 slices", category: "Dairy" },
      { id: "ing-11", name: "Shredded Lettuce or Coleslaw", quantity: "1 cup", category: "Produce" },
      { id: "ing-12", name: "Dill Pickle Slices", quantity: "8 slices", category: "Pantry" },
      { id: "ing-13", name: "Mayonnaise & Sriracha Sauce", quantity: "3 tbsp each", category: "Pantry" },
      { id: "ing-14", name: "Vegetable Oil for frying", quantity: "3 cups", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Marinate the Chicken",
        description: "Pound chicken breasts to an even thickness. Submerge in buttermilk seasoned with 1 tsp salt, 1/2 tsp black pepper, and 1/2 tsp paprika for at least 20 minutes (or overnight).",
        tip: "Buttermilk tenderizes the chicken fibers making it juicy on the inside."
      },
      {
        stepNumber: 2,
        title: "Prepare the Seasoned Flour Dredge",
        description: "In a shallow dish, whisk together flour, cornstarch, garlic powder, remaining smoked paprika, cayenne, 1 tsp salt, and black pepper. Drizzle 2 tbsp of buttermilk into the flour mix and fork around to create crunchy flakes.",
        tip: "Adding buttermilk droplets to the flour creates those extra crunchy nooks and crannies!"
      },
      {
        stepNumber: 3,
        title: "Dredge & Coat",
        description: "Lift chicken from buttermilk marinate, let excess drip off, then press firmly into the flour mixture, coating thoroughly on all sides."
      },
      {
        stepNumber: 4,
        title: "Fry to Golden perfection",
        description: "Heat oil in a heavy skillet or deep fryer to 350°F (175°C). Fry chicken for 6-7 minutes per side until golden brown and internal temperature reaches 165°F (74°C). Place cheese slice on top in the last minute of cooking to melt.",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80"
      },
      {
        stepNumber: 5,
        title: "Assemble the Burgers",
        description: "Lightly toast brioche buns with butter. Spread spicy mayo sauce on bottom bun, layer with pickles, crispy chicken with melted cheese, crunchy coleslaw, and top bun. Serve hot!"
      }
    ],
    tips: [
      "Use cornstarch in the flour mix for maximum crispiness.",
      "Never overcrowd the oil while frying to avoid dropping the temperature.",
      "Rest fried chicken on a wire rack rather than paper towels so bottom stays crunchy."
    ],
    chefTips: [
      "For extra kick, dip fried chicken in warm honey butter laced with cayenne immediately after frying."
    ],
    commonMistakes: [
      "Frying at too high temperature causes outside to burn while inside remains raw.",
      "Using cold chicken directly from fridge lowers oil temperature instantly."
    ],
    storageInfo: "Store leftover fried chicken patties in an airtight container in the fridge for up to 3 days. Reheat in an air fryer or oven at 375°F for 8-10 minutes to restore crispiness.",
    nutrition: {
      calories: 680,
      protein: 42,
      carbs: 58,
      fat: 31,
      fiber: 3
    }
  },
  {
    id: "rec-2",
    slug: "crispy-chicken-wings",
    title: "Honey Buffalo Crispy Wings",
    description: "Restaurant-quality extra crispy oven-baked or fried wings tossed in a glossy honey buffalo glaze served with homemade ranch dipping sauce.",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=1200&q=80",
    category: "Fried Chicken",
    tags: ["Wings", "Chicken", "Spicy", "Appetizer", "Party Food"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: true,
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    difficulty: "Medium",
    servings: 4,
    rating: 4.8,
    reviewCount: 289,
    createdAt: "2026-01-12",
    ingredients: [
      { id: "ing-21", name: "Chicken Wings (split into drums and flats)", quantity: "2 lbs (1 kg)", category: "Meat" },
      { id: "ing-22", name: "Baking Powder (aluminum-free)", quantity: "1 tbsp", category: "Pantry" },
      { id: "ing-23", name: "Garlic Powder & Onion Powder", quantity: "1 tsp each", category: "Spices" },
      { id: "ing-24", name: "Salt and Black Pepper", quantity: "1 tsp each", category: "Spices" },
      { id: "ing-25", name: "Hot Sauce (Frank's RedHot)", quantity: "1/2 cup", category: "Pantry" },
      { id: "ing-26", name: "Unsalted Butter", quantity: "1/4 cup", category: "Dairy" },
      { id: "ing-27", name: "Honey", quantity: "3 tbsp", category: "Pantry" },
      { id: "ing-28", name: "Ranch Dip or Blue Cheese Dressing", quantity: "For serving", category: "Dairy" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Dry & Season Wings",
        description: "Pat chicken wings thoroughly dry with paper towels. Toss with baking powder, garlic powder, onion powder, salt, and black pepper until evenly coated.",
        tip: "Baking powder changes the pH of chicken skin, making it super crispy when baked."
      },
      {
        stepNumber: 2,
        title: "Bake on Wire Rack",
        description: "Arrange wings in a single layer on a parchment-lined baking sheet fitted with a wire rack. Bake at 425°F (220°C) for 40-45 minutes, flipping halfway through."
      },
      {
        stepNumber: 3,
        title: "Make Honey Buffalo Sauce",
        description: "Melt butter in a small saucepan over low heat. Whisk in hot sauce and honey until emulsified and glossy."
      },
      {
        stepNumber: 4,
        title: "Toss and Serve",
        description: "Transfer hot crispy wings to a large bowl, pour sauce over them, and toss until evenly glazed. Serve immediately with celery sticks and cool ranch."
      }
    ],
    tips: [
      "Ensure baking powder is aluminum-free to prevent metallic taste.",
      "Drying the wings completely is the single most important secret for crunch."
    ],
    chefTips: [
      "Rest tossed wings for 2 minutes before serving so the sauce clings perfectly."
    ],
    commonMistakes: [
      "Using baking soda instead of baking powder.",
      "Crowding wings on flat baking tray without a wire rack."
    ],
    storageInfo: "Keep sauce separate if meal prepping. Reheat wings in air fryer at 400°F for 5 minutes.",
    nutrition: {
      calories: 520,
      protein: 34,
      carbs: 16,
      fat: 36,
      fiber: 1
    }
  },
  {
    id: "rec-3",
    slug: "french-fries",
    title: "Double-Fried Classic French Fries",
    description: "Golden, crispy restaurant-style fries with fluffy potato interior, seasoned with sea salt and rosemary garlic dust.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=80",
    category: "Fries",
    tags: ["Fries", "Potato", "Vegetarian", "Snack", "Classic"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: true,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    difficulty: "Easy",
    servings: 4,
    rating: 4.9,
    reviewCount: 410,
    createdAt: "2026-01-14",
    ingredients: [
      { id: "ing-31", name: "Russet Potatoes (large)", quantity: "4 large (approx 1kg)", category: "Produce" },
      { id: "ing-32", name: "Cold Water & Ice", quantity: "4 cups", category: "Pantry" },
      { id: "ing-33", name: "White Vinegar", quantity: "1 tbsp", category: "Pantry" },
      { id: "ing-34", name: "Peanut or Vegetable Oil", quantity: "4 cups for deep frying", category: "Pantry" },
      { id: "ing-35", name: "Flaky Sea Salt & Garlic Powder", quantity: "To taste", category: "Spices" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Cut & Soak Potatoes",
        description: "Peel potatoes and slice into 1/4-inch uniform sticks. Soak in cold water with 1 tbsp vinegar for 30 minutes to wash away excess surface starch."
      },
      {
        stepNumber: 2,
        title: "First Fry (Blanching)",
        description: "Drain and pat potatoes bone-dry. Heat oil to 325°F (160°C). Fry in batches for 4-5 minutes until pale and cooked through but not browned. Drain on paper towels and cool completely."
      },
      {
        stepNumber: 3,
        title: "Second Fry (Crisping)",
        description: "Increase oil temperature to 375°F (190°C). Fry blanched potatoes a second time for 2-3 minutes until golden brown and super crispy."
      },
      {
        stepNumber: 4,
        title: "Season Immediately",
        description: "Transfer hot fries directly to a bowl, toss with flaky sea salt and garlic powder while still hot. Serve right away with ketchup!"
      }
    ],
    tips: [
      "Double frying is non-negotiable for authentic diner fries.",
      "Russet potatoes have the ideal high-starch content."
    ],
    chefTips: ["Add a pinch of sugar to soaking water for enhanced golden color during frying."],
    commonMistakes: ["Frying wet potatoes will cause splattering and soggy fries."],
    storageInfo: "Best eaten fresh. Leftover fries can be re-crisped in an oven at 400°F for 6 minutes.",
    nutrition: {
      calories: 340,
      protein: 5,
      carbs: 48,
      fat: 15,
      fiber: 4
    }
  },
  {
    id: "rec-4",
    slug: "chicken-nuggets",
    title: "Homemade Golden Chicken Nuggets",
    description: "Bite-sized tender chicken breast pieces in a crunchy seasoned panko batter, served with sweet mustard sauce.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80",
    category: "Fried Chicken",
    tags: ["Nuggets", "Chicken", "Kid-Friendly", "Snack"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: false,
    prepTime: 20,
    cookTime: 12,
    totalTime: 32,
    difficulty: "Easy",
    servings: 4,
    rating: 4.7,
    reviewCount: 195,
    createdAt: "2026-01-18",
    ingredients: [
      { id: "ing-41", name: "Chicken Breast cut into bite cubes", quantity: "500g", category: "Meat" },
      { id: "ing-42", name: "Panko Breadcrumbs", quantity: "1.5 cups", category: "Pantry" },
      { id: "ing-43", name: "Eggs", quantity: "2 beaten", category: "Dairy" },
      { id: "ing-44", name: "All-Purpose Flour", quantity: "1/2 cup", category: "Pantry" },
      { id: "ing-45", name: "Garlic & Onion Powder", quantity: "1 tsp each", category: "Spices" },
      { id: "ing-46", name: "Oil for frying", quantity: "2 cups", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Prep Dredging Station",
        description: "Set up 3 bowls: Bowl 1 with flour, garlic powder, onion powder, salt; Bowl 2 with beaten eggs; Bowl 3 with panko breadcrumbs."
      },
      {
        stepNumber: 2,
        title: "Coat Nuggets",
        description: "Dip chicken pieces into flour, then egg bath, and finally coat firmly with panko."
      },
      {
        stepNumber: 3,
        title: "Fry till Golden",
        description: "Heat oil to 350°F (175°C). Fry nuggets in small batches for 4-5 minutes until internal temp hits 165°F and crust is golden brown."
      }
    ],
    tips: ["Panko gives a lighter, crunchier texture than regular breadcrumbs."],
    chefTips: ["Mix parmesan into panko for extra savory savoriness."],
    commonMistakes: ["Overcrowding pan drops temperature and causes soggy crust."],
    storageInfo: "Freeze un-cooked breaded nuggets on baking sheet, then bag up for quick month-long meals.",
    nutrition: {
      calories: 390,
      protein: 30,
      carbs: 26,
      fat: 18,
      fiber: 2
    }
  },
  {
    id: "rec-5",
    slug: "shawarma",
    title: "Authentic Chicken Shawarma Wrap",
    description: "Middle Eastern marinated spiced chicken wrapped in warm pita bread with garlic toum sauce, pickles, and crispy fries inside.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
    category: "Wraps",
    tags: ["Shawarma", "Wrap", "Chicken", "Middle Eastern", "Street Food"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: true,
    prepTime: 25,
    cookTime: 15,
    totalTime: 40,
    difficulty: "Medium",
    servings: 4,
    rating: 4.9,
    reviewCount: 310,
    createdAt: "2026-01-20",
    ingredients: [
      { id: "ing-51", name: "Boneless Chicken Thighs", quantity: "700g", category: "Meat" },
      { id: "ing-52", name: "Greek Yogurt", quantity: "1/2 cup", category: "Dairy" },
      { id: "ing-53", name: "Garlic (minced)", quantity: "4 cloves", category: "Produce" },
      { id: "ing-54", name: "Shawarma Spice Blend (Cumin, Coriander, Cardamom, Paprika, Turmeric)", quantity: "2 tbsp total", category: "Spices" },
      { id: "ing-55", name: "Lemon Juice & Olive Oil", quantity: "2 tbsp each", category: "Pantry" },
      { id: "ing-56", name: "Pita Flatbreads", quantity: "4 breads", category: "Bakery" },
      { id: "ing-57", name: "Garlic Sauce (Toum) & Pickles", quantity: "For wrapping", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Marinate Chicken",
        description: "Combine yogurt, garlic, lemon juice, olive oil, and spices. Coat chicken thighs thoroughly and marinate 30 min (up to 12 hours)."
      },
      {
        stepNumber: 2,
        title: "Sear Chicken",
        description: "Heat a heavy cast iron skillet on high. Sear chicken for 6-8 minutes per side until charred edges appear and cooked through. Slice into thin ribbons."
      },
      {
        stepNumber: 3,
        title: "Wrap & Toast",
        description: "Spread garlic toum on pita, top with spiced chicken ribbons, pickled cucumbers, fries. Roll tight and press on hot skillet for 1 minute until crisp."
      }
    ],
    tips: ["Thigh meat stays moist and flavorful compared to breast meat for shawarma."],
    chefTips: ["Charring the chicken edges in cast iron mimics the rotating vertical spit char."],
    commonMistakes: ["Overstuffing pita flatbread leads to tears while rolling."],
    storageInfo: "Keep ingredients separated. Marinated raw chicken can freeze for 1 month.",
    nutrition: {
      calories: 590,
      protein: 38,
      carbs: 45,
      fat: 28,
      fiber: 3
    }
  },
  {
    id: "rec-6",
    slug: "chicken-sandwich",
    title: "Classic Club Chicken Sandwich",
    description: "Triple-decker toasted sandwich stacked with juicy grilled chicken, crispy bacon, cheddar, tomatoes, lettuce, and avocado mayonnaise.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
    category: "Sandwiches",
    tags: ["Sandwich", "Chicken", "Bacon", "Lunch", "Classic"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: false,
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    difficulty: "Easy",
    servings: 2,
    rating: 4.8,
    reviewCount: 175,
    createdAt: "2026-01-22",
    ingredients: [
      { id: "ing-61", name: "Sandwich Bread Slices", quantity: "6 slices", category: "Bakery" },
      { id: "ing-62", name: "Cooked Chicken Breast (sliced)", quantity: "200g", category: "Meat" },
      { id: "ing-63", name: "Crispy Bacon Strips", quantity: "4 strips", category: "Meat" },
      { id: "ing-64", name: "Ripe Tomato (sliced)", quantity: "1 medium", category: "Produce" },
      { id: "ing-65", name: "Fresh Crisp Lettuce", quantity: "4 leaves", category: "Produce" },
      { id: "ing-66", name: "Cheddar Cheese Slices", quantity: "2 slices", category: "Dairy" },
      { id: "ing-67", name: "Herb Mayonnaise", quantity: "3 tbsp", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Toast Bread",
        description: "Toast 6 slices of sandwich bread until golden brown."
      },
      {
        stepNumber: 2,
        title: "Build Layer 1",
        description: "Spread mayo on bottom slice, add lettuce, sliced tomatoes, grilled chicken, and cheese."
      },
      {
        stepNumber: 3,
        title: "Build Layer 2 & Top",
        description: "Place middle toast slice, spread mayo, add crispy bacon and extra lettuce. Top with third toast slice, secure with toothpicks, cut into triangles."
      }
    ],
    tips: ["Use toothpicks in all 4 corners before cutting diagonally into quarters."],
    chefTips: ["Mix fresh dill and garlic into mayonnaise for restaurant taste."],
    commonMistakes: ["Soggy tomatoes without draining excess moisture first."],
    storageInfo: "Eat immediately after assembly to preserve bread crispness.",
    nutrition: {
      calories: 610,
      protein: 36,
      carbs: 42,
      fat: 32,
      fiber: 4
    }
  },
  {
    id: "rec-7",
    slug: "pizza",
    title: "Cheesy Pepperoni Pan Pizza",
    description: "Thick, airy pan crust loaded with tangy tomato marinara, melted mozzarella cheese, and crispy cupping pepperoni slices.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    category: "Pizza",
    tags: ["Pizza", "Pepperoni", "Cheese", "Italian", "Comfort Food"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: true,
    prepTime: 30,
    cookTime: 18,
    totalTime: 48,
    difficulty: "Medium",
    servings: 4,
    rating: 4.9,
    reviewCount: 520,
    createdAt: "2026-01-25",
    ingredients: [
      { id: "ing-71", name: "Pizza Dough Ball", quantity: "1 (approx 400g)", category: "Pantry" },
      { id: "ing-72", name: "Pizza Sauce (Marinara)", quantity: "1/2 cup", category: "Pantry" },
      { id: "ing-73", name: "Low-Moisture Mozzarella (shredded)", quantity: "2 cups", category: "Dairy" },
      { id: "ing-74", name: "Pepperoni Slices", quantity: "20-25 slices", category: "Meat" },
      { id: "ing-75", name: "Olive Oil & Dried Oregano", quantity: "2 tbsp", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Prepare Pan & Dough",
        description: "Coat a cast iron pan or round baking dish generously with olive oil. Press pizza dough out evenly to edges."
      },
      {
        stepNumber: 2,
        title: "Sauce & Cheese",
        description: "Spread sauce leaving 1/2 inch border. Cover fully with low-moisture mozzarella all the way to the rim for crispy caramelized edges."
      },
      {
        stepNumber: 3,
        title: "Bake at Max Temp",
        description: "Layer pepperoni slices on top. Bake in preheated oven at 475°F (245°C) for 15-18 minutes until crust is dark golden and cheese bubbles."
      }
    ],
    tips: ["Shred whole-milk low-moisture mozzarella yourself for superior melt."],
    chefTips: ["Drizzle spicy hot honey over hot pizza right out of oven."],
    commonMistakes: ["Using fresh mozzarella with high moisture makes pan pizza soggy."],
    storageInfo: "Reheat leftover pizza slices on a dry skillet over medium heat for crispy bottom.",
    nutrition: {
      calories: 720,
      protein: 31,
      carbs: 68,
      fat: 35,
      fiber: 4
    }
  },
  {
    id: "rec-8",
    slug: "beef-burger",
    title: "Double Smokey Smash Beef Burger",
    description: "Two crispy-edged smash beef patties topped with caramelized onions, American cheese, and smoked barbecue sauce on toasted brioche.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    category: "Burgers",
    tags: ["Smash Burger", "Beef", "Cheese", "Grill", "Fast Food"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: true,
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    difficulty: "Easy",
    servings: 2,
    rating: 4.9,
    reviewCount: 380,
    createdAt: "2026-01-28",
    ingredients: [
      { id: "ing-81", name: "Ground Beef (80/20 chuck blend)", quantity: "400g (divided into 4 balls)", category: "Meat" },
      { id: "ing-82", name: "American Cheese Slices", quantity: "4 slices", category: "Dairy" },
      { id: "ing-83", name: "Yellow Onion (thinly sliced)", quantity: "1 medium", category: "Produce" },
      { id: "ing-84", name: "Brioche Buns", quantity: "2 buns", category: "Bakery" },
      { id: "ing-85", name: "Kosher Salt & Coarse Black Pepper", quantity: "1 tbsp", category: "Spices" },
      { id: "ing-86", name: "Burger Sauce / BBQ sauce", quantity: "2 tbsp", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Heat Griddle & Prep Meat",
        description: "Heat cast iron griddle or skillet until smoking hot. Roll beef gently into loose 100g balls."
      },
      {
        stepNumber: 2,
        title: "Smash & Sear",
        description: "Place beef balls on hot griddle, top with sliced onions, and press down hard with heavy spatula into paper-thin patties. Season generously with salt and pepper."
      },
      {
        stepNumber: 3,
        title: "Flip & Melt Cheese",
        description: "Sear for 2 minutes until lace edges turn dark brown. Flip, add cheese slice to each patty, stack two patties per burger, and serve inside toasted buns."
      }
    ],
    tips: ["80/20 beef chuck gives the exact fat needed for juicy smash burgers."],
    chefTips: ["Smash ONCE immediately when meat hits hot griddle; never smash mid-cooking!"],
    commonMistakes: ["Overworking ground beef balls makes them tough instead of tender."],
    storageInfo: "Eat smash burgers hot out of the pan. Raw ground beef can be frozen up to 3 months.",
    nutrition: {
      calories: 780,
      protein: 48,
      carbs: 40,
      fat: 46,
      fiber: 2
    }
  },
  {
    id: "rec-9",
    slug: "hot-dog",
    title: "Loaded NYC Style Hot Dog",
    description: "Grilled beef frankfurter in a soft warm bun topped with warm sauerkraut, caramelised onions, and tangy yellow mustard.",
    image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Hot Dog", "Beef", "NYC Style", "Street Food", "Quick"],
    isVegetarian: false,
    isPopular: false,
    isFeatured: false,
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    difficulty: "Easy",
    servings: 4,
    rating: 4.6,
    reviewCount: 140,
    createdAt: "2026-02-01",
    ingredients: [
      { id: "ing-91", name: "All-Beef Frankfurters / Hot Dogs", quantity: "4 links", category: "Meat" },
      { id: "ing-92", name: "Hot Dog Buns (split top)", quantity: "4 buns", category: "Bakery" },
      { id: "ing-93", name: "Sauerkraut (drained)", quantity: "1 cup", category: "Pantry" },
      { id: "ing-94", name: "Caramelized Onion Sauce", quantity: "1/2 cup", category: "Pantry" },
      { id: "ing-95", name: "Yellow Mustard & Relish", quantity: "To taste", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Grill Hot Dogs",
        description: "Score hot dogs lightly and cook on hot grill or pan for 6-8 minutes until charred and blistered."
      },
      {
        stepNumber: 2,
        title: "Steam Buns",
        description: "Lightly steam or toast split-top buns with butter until soft."
      },
      {
        stepNumber: 3,
        title: "Assemble",
        description: "Place grilled frank into bun, top with warm sauerkraut, onion sauce, and squirt of mustard."
      }
    ],
    tips: ["Scoring hot dogs prevents bursting while cooking."],
    chefTips: ["Warm sauerkraut in saucepan with pinch of caraway seed before loading."],
    commonMistakes: ["Over-boiling hot dogs dilutes meat flavor."],
    storageInfo: "Store unopened hot dogs in fridge up to 2 weeks.",
    nutrition: {
      calories: 410,
      protein: 16,
      carbs: 34,
      fat: 23,
      fiber: 2
    }
  },
  {
    id: "rec-10",
    slug: "chicken-popcorn",
    title: "Crispy Spicy Chicken Popcorn",
    description: "Bite-size crunchy fried chicken nuggets tossed with paprika garlic sprinkle and dip sauces.",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=1200&q=80",
    category: "Fried Chicken",
    tags: ["Popcorn Chicken", "Chicken", "Snack", "Crispy", "Finger Food"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: false,
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    difficulty: "Easy",
    servings: 4,
    rating: 4.8,
    reviewCount: 220,
    createdAt: "2026-02-03",
    ingredients: [
      { id: "ing-101", name: "Chicken Breast cut in small 1-cm cubes", quantity: "500g", category: "Meat" },
      { id: "ing-102", name: "Cornstarch & Flour Blend", quantity: "1 cup total", category: "Pantry" },
      { id: "ing-103", name: "Chili Powder & Garlic Powder", quantity: "1 tbsp", category: "Spices" },
      { id: "ing-104", name: "Egg & Milk Bath", quantity: "1 egg + 1/4 cup milk", category: "Dairy" },
      { id: "ing-105", name: "Oil for deep frying", quantity: "3 cups", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Marinate & Coat",
        description: "Toss chicken cubes with spices. Dip into egg bath and toss into cornstarch flour mix."
      },
      {
        stepNumber: 2,
        title: "Fry Batch",
        description: "Fry in hot oil at 360°F (180°C) for 4 minutes until golden and extra crunchy."
      }
    ],
    tips: ["Cornstarch creates a glass-like crunch on small chicken pieces."],
    chefTips: ["Toss hot popcorn chicken with peri-peri seasoning right after oil extraction."],
    commonMistakes: ["Cutting chicken pieces unevenly causes inconsistent cooking."],
    storageInfo: "Reheat in air fryer for 4 minutes at 380°F.",
    nutrition: {
      calories: 420,
      protein: 32,
      carbs: 28,
      fat: 20,
      fiber: 1
    }
  },
  {
    id: "rec-11",
    slug: "mozzarella-sticks",
    title: "Gooey Cheesy Mozzarella Sticks",
    description: "Crispy breaded mozzarella cheese sticks fried golden on the outside with melted stretch inside, served with warm marinara.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80",
    category: "Snacks",
    tags: ["Mozzarella Sticks", "Cheese", "Vegetarian", "Appetizer", "Snack"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: true,
    prepTime: 20,
    cookTime: 5,
    totalTime: 25,
    difficulty: "Medium",
    servings: 4,
    rating: 4.9,
    reviewCount: 360,
    createdAt: "2026-02-05",
    ingredients: [
      { id: "ing-111", name: "Low-Moisture Mozzarella String Cheese", quantity: "12 sticks", category: "Dairy" },
      { id: "ing-112", name: "Italian Seasoned Breadcrumbs", quantity: "1 cup", category: "Pantry" },
      { id: "ing-113", name: "Flour", quantity: "1/2 cup", category: "Pantry" },
      { id: "ing-114", name: "Eggs beaten", quantity: "2 eggs", category: "Dairy" },
      { id: "ing-115", name: "Warm Marinara Sauce", quantity: "1 cup for dipping", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Double Bread",
        description: "Dip string cheese in flour, egg bath, breadcrumbs, then repeat egg bath and breadcrumbs for double coating."
      },
      {
        stepNumber: 2,
        title: "Freeze Solid!",
        description: "Freeze breaded sticks for at least 1 hour before frying. THIS IS MANDATORY!"
      },
      {
        stepNumber: 3,
        title: "Quick Fry",
        description: "Fry in 375°F (190°C) oil for 1.5 to 2 minutes only until golden. Serve instantly with warm marinara sauce!"
      }
    ],
    tips: ["Freezing prevents the cheese from melting into oil before coating crisps!"],
    chefTips: ["Double breading creates a bulletproof shell for cheese expansion."],
    commonMistakes: ["Frying unfrozen cheese sticks will make them leak entirely into the oil."],
    storageInfo: "Keep frozen sticks in freezer bag and fry directly from frozen whenever craving strikes.",
    nutrition: {
      calories: 450,
      protein: 22,
      carbs: 30,
      fat: 27,
      fiber: 2
    }
  },
  {
    id: "rec-12",
    slug: "spring-rolls",
    title: "Crispy Vegetable Spring Rolls",
    description: "Golden fried Asian spring roll wrappers stuffed with seasoned shredded cabbage, carrots, mushrooms, and glass noodles.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Spring Rolls", "Vegetarian", "Asian", "Crispy", "Appetizer"],
    isVegetarian: true,
    isPopular: false,
    isFeatured: false,
    prepTime: 25,
    cookTime: 10,
    totalTime: 35,
    difficulty: "Medium",
    servings: 4,
    rating: 4.7,
    reviewCount: 165,
    createdAt: "2026-02-08",
    ingredients: [
      { id: "ing-121", name: "Spring Roll Wrappers", quantity: "12 sheets", category: "Pantry" },
      { id: "ing-122", name: "Shredded Cabbage & Carrots", quantity: "2 cups total", category: "Produce" },
      { id: "ing-123", name: "Soy Sauce & Sesame Oil", quantity: "1 tbsp each", category: "Pantry" },
      { id: "ing-124", name: "Garlic & Ginger minced", quantity: "1 tsp each", category: "Produce" },
      { id: "ing-125", name: "Sweet Chili Sauce", quantity: "For serving", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Sauté Filling",
        description: "Stir-fry garlic, ginger, shredded veggies with soy sauce and sesame oil until wilted. Cool completely."
      },
      {
        stepNumber: 2,
        title: "Roll Tight",
        description: "Place filling in corner of wrapper, roll tightly folding sides in, seal tip with flour paste."
      },
      {
        stepNumber: 3,
        title: "Fry Golden",
        description: "Deep fry at 350°F (175°C) for 3-4 minutes until pale golden and crispy."
      }
    ],
    tips: ["Filling must be cool and dry so wrappers don't tear."],
    chefTips: ["Brush with oil and air fry at 390°F for a lighter baked option."],
    commonMistakes: ["Wet filling makes roll soggy."],
    storageInfo: "Uncooked rolled spring rolls freeze exceptionally well.",
    nutrition: {
      calories: 280,
      protein: 6,
      carbs: 36,
      fat: 12,
      fiber: 3
    }
  },
  {
    id: "rec-13",
    slug: "samosa",
    title: "Crispy Potato Peas Samosa",
    description: "Classic Indian fried flaky pastry pockets filled with spiced potato, green peas, cumin, and garam masala.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Samosa", "Potato", "Deshi", "Indian", "Vegetarian", "Spicy", "Street Food"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: true,
    prepTime: 35,
    cookTime: 20,
    totalTime: 55,
    difficulty: "Hard",
    servings: 6,
    rating: 4.9,
    reviewCount: 430,
    createdAt: "2026-02-10",
    ingredients: [
      { id: "ing-131", name: "All-Purpose Flour (Maida)", quantity: "2 cups", category: "Pantry" },
      { id: "ing-132", name: "Ghee or Oil", quantity: "4 tbsp", category: "Pantry" },
      { id: "ing-133", name: "Boiled Potatoes (mashed coarsely)", quantity: "4 medium", category: "Produce" },
      { id: "ing-134", name: "Green Peas", quantity: "1/2 cup", category: "Produce" },
      { id: "ing-135", name: "Cumin, Garam Masala, Amchur (mango powder)", quantity: "1 tsp each", category: "Spices" },
      { id: "ing-136", name: "Mint & Tamarind Chutneys", quantity: "For serving", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Make Flaky Dough",
        description: "Rub ghee into flour until crumbly, knead with stiff cold water into firm dough. Rest 30 minutes."
      },
      {
        stepNumber: 2,
        title: "Cook Potato Filling",
        description: "Sauté spices, add green peas and boiled potato chunks. Season with amchur and garam masala."
      },
      {
        stepNumber: 3,
        title: "Shape & Fry Low-Heat",
        description: "Form cones, fill potato, seal edges with water. Fry in low temperature oil (300°F) slowly for 15 minutes for ultimate flaky crust."
      }
    ],
    tips: ["Slow frying on low heat gives the iconic smooth blistered crispy crust."],
    chefTips: ["Ajwain (carom seeds) in dough adds traditional savory aroma."],
    commonMistakes: ["Frying in hot oil creates soft crust with air bubbles instead of flaky crunch."],
    storageInfo: "Re-crisp baked samosas in oven at 350°F for 10 minutes.",
    nutrition: {
      calories: 320,
      protein: 7,
      carbs: 42,
      fat: 14,
      fiber: 4
    }
  },
  {
    id: "rec-14",
    slug: "pakora",
    title: "Crispy Vegetable Onion Pakora",
    description: "Crispy spiced Indian fritters made with sliced onions, spinach, and chickpea flour (besan) deep-fried golden.",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Pakora", "Indian", "Deshi", "Vegetarian", "Gluten-Free", "Snack"],
    isVegetarian: true,
    isPopular: false,
    isFeatured: false,
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    difficulty: "Easy",
    servings: 4,
    rating: 4.7,
    reviewCount: 180,
    createdAt: "2026-02-12",
    ingredients: [
      { id: "ing-141", name: "Onions (thinly sliced)", quantity: "2 large", category: "Produce" },
      { id: "ing-142", name: "Besan (Gram / Chickpea Flour)", quantity: "1 cup", category: "Pantry" },
      { id: "ing-143", name: "Rice Flour", quantity: "2 tbsp", category: "Pantry" },
      { id: "ing-144", name: "Green Chilies & Cilantro", quantity: "2 chopped", category: "Produce" },
      { id: "ing-145", name: "Ajwain & Turmeric", quantity: "1/2 tsp each", category: "Spices" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Mix Onions & Spices",
        description: "Massage onions with salt until they release moisture. Mix in spices, besan, and rice flour without adding extra water."
      },
      {
        stepNumber: 2,
        title: "Drop & Fry",
        description: "Drop loose dollops of batter into hot oil at 350°F (175°C). Fry for 4-5 minutes until deep golden crisp."
      }
    ],
    tips: ["Rice flour adds extra lightness and crunch."],
    chefTips: ["Do not add water to batter; moisture from sliced onions is sufficient."],
    commonMistakes: ["Adding too much water turns fritters doughy."],
    storageInfo: "Best eaten immediately with hot chai.",
    nutrition: {
      calories: 260,
      protein: 8,
      carbs: 30,
      fat: 12,
      fiber: 5
    }
  },
  {
    id: "rec-15",
    slug: "nachos",
    title: "Loaded Cheese Supreme Nachos",
    description: "Crunchy tortilla chips layered with melted cheddar, seasoned black beans, jalapenos, salsa, guacamole, and sour cream drizzle.",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=1200&q=80",
    category: "Snacks",
    tags: ["Nachos", "Mexican", "Cheese", "Vegetarian", "Party Food"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: false,
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    difficulty: "Easy",
    servings: 4,
    rating: 4.8,
    reviewCount: 290,
    createdAt: "2026-02-15",
    ingredients: [
      { id: "ing-151", name: "Tortilla Chips", quantity: "1 large bag (300g)", category: "Pantry" },
      { id: "ing-152", name: "Shredded Cheddar & Monterey Jack", quantity: "2.5 cups", category: "Dairy" },
      { id: "ing-153", name: "Seasoned Black Beans", quantity: "1 cup", category: "Pantry" },
      { id: "ing-154", name: "Pickled Jalapenos", quantity: "1/4 cup", category: "Pantry" },
      { id: "ing-155", name: "Pico de Gallo & Guacamole", quantity: "1/2 cup each", category: "Produce" },
      { id: "ing-156", name: "Sour Cream", quantity: "1/4 cup", category: "Dairy" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Layer Sheet Pan",
        description: "Arrange half chips on sheet pan, top with half cheese and beans. Repeat second layer of chips, cheese, and beans."
      },
      {
        stepNumber: 2,
        title: "Bake & Melt",
        description: "Bake at 400°F (200°C) for 8-10 minutes until cheese is fully melted and bubbling."
      },
      {
        stepNumber: 3,
        title: "Top Cold Fillings",
        description: "Spoon freshly made salsa, guacamole, sour cream, and jalapenos on top right before serving."
      }
    ],
    tips: ["Layering chips ensures no single chip is left dry!"],
    chefTips: ["Use fresh shredded cheese so it melts seamlessly."],
    commonMistakes: ["Putting cold guacamole on chips before baking."],
    storageInfo: "Best served immediately hot off sheet pan.",
    nutrition: {
      calories: 580,
      protein: 20,
      carbs: 52,
      fat: 32,
      fiber: 6
    }
  },
  {
    id: "rec-16",
    slug: "loaded-fries",
    title: "Cheesy Bacon Loaded Fries",
    description: "Crispy french fries smothered in warm cheddar cheese sauce, crispy bacon bits, chopped chives, and ranch drizzle.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=1200&q=80",
    category: "Fries",
    tags: ["Loaded Fries", "Fries", "Potato", "Bacon", "Cheese", "Fast Food"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: true,
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    difficulty: "Easy",
    servings: 4,
    rating: 4.9,
    reviewCount: 380,
    createdAt: "2026-02-18",
    ingredients: [
      { id: "ing-161", name: "Crispy Cooked French Fries", quantity: "1 large batch (500g)", category: "Pantry" },
      { id: "ing-162", name: "Warm Melted Cheese Sauce", quantity: "1 cup", category: "Dairy" },
      { id: "ing-163", name: "Crispy Bacon (crumbled)", quantity: "6 strips", category: "Meat" },
      { id: "ing-164", name: "Fresh Green Chives / Scallions", quantity: "2 tbsp", category: "Produce" },
      { id: "ing-165", name: "Ranch Dressing", quantity: "3 tbsp", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Cook Fries Super Crispy",
        description: "Bake or fry french fries extra crispy to hold the toppings weight."
      },
      {
        stepNumber: 2,
        title: "Smother & Garnish",
        description: "Pour warm cheese sauce over fries, scatter crispy bacon crumbles, drizzle ranch, and top with fresh chives."
      }
    ],
    tips: ["Keep cheese sauce warm so it flows smoothly over hot fries."],
    chefTips: ["Add pickled jalapeno slices for a spicy loaded variation."],
    commonMistakes: ["Using limp fries that turn soggy under cheese sauce weight."],
    storageInfo: "Assemble right before eating.",
    nutrition: {
      calories: 640,
      protein: 18,
      carbs: 56,
      fat: 38,
      fiber: 4
    }
  },
  {
    id: "rec-17",
    slug: "fried-chicken",
    title: "Southern Classic Fried Chicken",
    description: "Traditional Southern-style fried chicken pieces with ultra-crunchy seasoned skin and juicy, tender interior.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1200&q=80",
    category: "Fried Chicken",
    tags: ["Fried Chicken", "Southern", "Chicken", "Comfort Food"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: true,
    prepTime: 30,
    cookTime: 25,
    totalTime: 55,
    difficulty: "Medium",
    servings: 6,
    rating: 4.9,
    reviewCount: 480,
    createdAt: "2026-02-20",
    ingredients: [
      { id: "ing-171", name: "Whole Chicken (cut into 8 pieces)", quantity: "1.5 kg", category: "Meat" },
      { id: "ing-172", name: "Buttermilk & Hot Sauce Bath", quantity: "2 cups buttermilk + 2 tbsp hot sauce", category: "Dairy" },
      { id: "ing-173", name: "Self-Rising Flour", quantity: "2 cups", category: "Pantry" },
      { id: "ing-174", name: "Paprika, Garlic Powder, Poultry Seasoning", quantity: "1 tbsp each", category: "Spices" },
      { id: "ing-175", name: "Oil for deep frying", quantity: "4 cups", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Overnight Marinate",
        description: "Soak chicken pieces in buttermilk hot sauce marinade for 4-12 hours in refrigerator."
      },
      {
        stepNumber: 2,
        title: "Double Seasoned Dredge",
        description: "Dredge chicken pieces in flour spice mix, dip back into buttermilk, dredge in flour again pressing firmly."
      },
      {
        stepNumber: 3,
        title: "Deep Fry Low & Steady",
        description: "Fry chicken at 330°F (165°C) for 14-16 minutes turning occasionally until deep golden brown and temp hits 165°F inside."
      }
    ],
    tips: ["Frying at 330°F ensures bone-in chicken cooks through without burning skin."],
    chefTips: ["Rest fried chicken 10 minutes on wire rack before serving so juices settle."],
    commonMistakes: ["Frying straight from fridge causes raw meat inside."],
    storageInfo: "Reheat in 375°F oven on wire rack for 15 minutes.",
    nutrition: {
      calories: 690,
      protein: 48,
      carbs: 32,
      fat: 40,
      fiber: 2
    }
  },
  {
    id: "rec-18",
    slug: "club-sandwich",
    title: "Triple Deck Turkey Club Sandwich",
    description: "Classic hotel-style club sandwich with roasted turkey, crisp bacon, lettuce, tomatoes, and mayo on toasted sourdough.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    category: "Sandwiches",
    tags: ["Club Sandwich", "Sandwich", "Turkey", "Lunch"],
    isVegetarian: false,
    isPopular: false,
    isFeatured: false,
    prepTime: 12,
    cookTime: 5,
    totalTime: 17,
    difficulty: "Easy",
    servings: 2,
    rating: 4.7,
    reviewCount: 130,
    createdAt: "2026-02-22",
    ingredients: [
      { id: "ing-181", name: "Sourdough Toast Slices", quantity: "6 slices", category: "Bakery" },
      { id: "ing-182", name: "Deli Roasted Turkey Slices", quantity: "200g", category: "Meat" },
      { id: "ing-183", name: "Bacon", quantity: "4 slices", category: "Meat" },
      { id: "ing-184", name: "Swiss Cheese", quantity: "2 slices", category: "Dairy" },
      { id: "ing-185", name: "Tomato & Lettuce", quantity: "Sliced", category: "Produce" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Layer & Stack",
        description: "Toast sourdough, layer turkey on bottom, middle toast, bacon swiss lettuce tomato, top toast."
      }
    ],
    tips: ["Sourdough adds sturdy crunch!"],
    chefTips: ["Spread mayo on both sides of middle bread slice."],
    commonMistakes: ["Over-toasting bread until dry and hard to bite."],
    storageInfo: "Eat immediately.",
    nutrition: {
      calories: 550,
      protein: 34,
      carbs: 40,
      fat: 26,
      fiber: 3
    }
  },
  {
    id: "rec-19",
    slug: "garlic-bread",
    title: "Cheesy Garlic Herb Baguette",
    description: "Warm toasted French baguette brushed with garlic parsley butter and melted mozzarella parmesan blend.",
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=1200&q=80",
    category: "Snacks",
    tags: ["Garlic Bread", "Bread", "Cheese", "Vegetarian", "Side Dish"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: false,
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    difficulty: "Easy",
    servings: 6,
    rating: 4.9,
    reviewCount: 310,
    createdAt: "2026-02-25",
    ingredients: [
      { id: "ing-191", name: "French Baguette (halved lengthwise)", quantity: "1 loaf", category: "Bakery" },
      { id: "ing-192", name: "Unsalted Butter (softened)", quantity: "1/2 cup", category: "Dairy" },
      { id: "ing-193", name: "Garlic (minced)", quantity: "4 cloves", category: "Produce" },
      { id: "ing-194", name: "Fresh Parsley (chopped)", quantity: "2 tbsp", category: "Produce" },
      { id: "ing-195", name: "Mozzarella & Parmesan Blend", quantity: "1.5 cups", category: "Dairy" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Make Garlic Butter",
        description: "Mix soft butter, minced garlic, fresh parsley, salt, and black pepper until creamy."
      },
      {
        stepNumber: 2,
        title: "Spread & Top",
        description: "Spread garlic butter generously on bread cut surfaces, top with shredded mozzarella and parmesan cheese."
      },
      {
        stepNumber: 3,
        title: "Bake & Broil",
        description: "Bake at 400°F (200°C) for 10 minutes, broil 2 minutes until cheese is golden bubbly."
      }
    ],
    tips: ["Using fresh garlic yields far better flavor than garlic powder."],
    chefTips: ["Wrap in foil for soft garlic bread, bake open for crunchy edges."],
    commonMistakes: ["Broiling too long and burning garlic."],
    storageInfo: "Wrap leftover bread in foil and bake at 350°F for 8 minutes.",
    nutrition: {
      calories: 310,
      protein: 11,
      carbs: 32,
      fat: 16,
      fiber: 2
    }
  },
  {
    id: "rec-20",
    slug: "chicken-wrap",
    title: "Grilled Chicken Caesar Wrap",
    description: "Tender grilled chicken strips, romaine lettuce, creamy Caesar dressing, and parmesan cheese rolled in a warm spinach flour tortilla.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=80",
    category: "Wraps",
    tags: ["Wrap", "Chicken", "Caesar", "Healthy", "Lunch"],
    isVegetarian: false,
    isPopular: false,
    isFeatured: false,
    prepTime: 15,
    cookTime: 10,
    totalTime: 25,
    difficulty: "Easy",
    servings: 2,
    rating: 4.8,
    reviewCount: 210,
    createdAt: "2026-02-28",
    ingredients: [
      { id: "ing-201", name: "Large Spinach or Flour Tortillas", quantity: "2 tortillas", category: "Bakery" },
      { id: "ing-202", name: "Grilled Chicken Breast (sliced)", quantity: "300g", category: "Meat" },
      { id: "ing-203", name: "Romaine Lettuce (chopped)", quantity: "2 cups", category: "Produce" },
      { id: "ing-204", name: "Shredded Parmesan Cheese", quantity: "1/2 cup", category: "Dairy" },
      { id: "ing-205", name: "Creamy Caesar Dressing", quantity: "4 tbsp", category: "Pantry" },
      { id: "ing-206", name: "Croutons (crushed)", quantity: "1/4 cup", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Toss Salad",
        description: "In a bowl, toss chopped romaine, parmesan, crushed croutons, grilled chicken, and Caesar dressing."
      },
      {
        stepNumber: 2,
        title: "Warm & Wrap",
        description: "Warm tortilla 15 sec, spoon chicken caesar mix into center, fold sides and roll tightly. Slice diagonally!"
      }
    ],
    tips: ["Warming tortilla makes it pliable and easy to wrap."],
    chefTips: ["Add bacon crumbles for an extra smoky touch."],
    commonMistakes: ["Adding too much liquid dressing turns wrap soggy."],
    storageInfo: "Wrap in foil for lunchboxes up to 6 hours.",
    nutrition: {
      calories: 490,
      protein: 38,
      carbs: 35,
      fat: 22,
      fiber: 3
    }
  },
  {
    id: "rec-21",
    slug: "pasta",
    title: "Creamy Alfredo Penne Pasta",
    description: "Rich garlic parmesan cream sauce tossed with al dente penne pasta and topped with fresh basil and black pepper.",
    image: "https://images.unsplash.com/photo-1621996346565-e3def616401c?auto=format&fit=crop&w=1200&q=80",
    category: "Snacks",
    tags: ["Pasta", "Italian", "Vegetarian", "Creamy", "Comfort Food"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: false,
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    difficulty: "Easy",
    servings: 4,
    rating: 4.8,
    reviewCount: 320,
    createdAt: "2026-03-02",
    ingredients: [
      { id: "ing-211", name: "Penne Pasta", quantity: "400g", category: "Pantry" },
      { id: "ing-212", name: "Heavy Cream", quantity: "1 cup", category: "Dairy" },
      { id: "ing-213", name: "Unsalted Butter", quantity: "4 tbsp", category: "Dairy" },
      { id: "ing-214", name: "Parmesan Cheese (freshly grated)", quantity: "1 cup", category: "Dairy" },
      { id: "ing-215", name: "Garlic minced", quantity: "3 cloves", category: "Produce" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Boil Penne",
        description: "Cook penne in salted boiling water until al dente. Save 1/2 cup pasta water."
      },
      {
        stepNumber: 2,
        title: "Make Alfredo Sauce",
        description: "Melt butter, sauté garlic 1 min, pour heavy cream and simmer 3 mins. Whisk in parmesan off heat until smooth."
      },
      {
        stepNumber: 3,
        title: "Combine",
        description: "Toss penne into Alfredo sauce, add pasta water as needed to create silky coating."
      }
    ],
    tips: ["Grate parmesan yourself; pre-grated bottled cheese won't melt smoothly."],
    chefTips: ["Top with sliced grilled chicken for Alfredo chicken penne."],
    commonMistakes: ["Boiling sauce after adding cheese breaks emulsion."],
    storageInfo: "Reheat gently with splash of milk.",
    nutrition: {
      calories: 610,
      protein: 18,
      carbs: 62,
      fat: 34,
      fiber: 3
    }
  },
  {
    id: "rec-22",
    slug: "tacos",
    title: "Street Style Seasoned Beef Tacos",
    description: "Warm corn tortillas filled with spiced ground beef, diced onions, cilantro, fresh salsa, and lime wedges.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Tacos", "Mexican", "Beef", "Street Food", "Quick"],
    isVegetarian: false,
    isPopular: true,
    isFeatured: true,
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    difficulty: "Easy",
    servings: 4,
    rating: 4.9,
    reviewCount: 390,
    createdAt: "2026-03-05",
    ingredients: [
      { id: "ing-221", name: "Ground Beef", quantity: "500g", category: "Meat" },
      { id: "ing-222", name: "Corn Tortillas", quantity: "8 small tortillas", category: "Bakery" },
      { id: "ing-223", name: "Taco Seasoning (Cumin, Chili, Garlic)", quantity: "2 tbsp", category: "Spices" },
      { id: "ing-224", name: "White Onion (diced fine)", quantity: "1/2 cup", category: "Produce" },
      { id: "ing-225", name: "Fresh Cilantro & Lime Wedges", quantity: "For serving", category: "Produce" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Brown Meat",
        description: "Brown beef in skillet, drain excess grease, stir in taco seasoning and 1/4 cup water. Simmer 5 mins."
      },
      {
        stepNumber: 2,
        title: "Warm Tortillas",
        description: "Warm corn tortillas on dry hot skillet 30 seconds per side until soft."
      },
      {
        stepNumber: 3,
        title: "Assemble Tacos",
        description: "Double up tortillas, spoon spiced beef, garnish with raw onions, cilantro, squeeze of lime juice."
      }
    ],
    tips: ["Double corn tortillas prevents tacos from breaking apart."],
    chefTips: ["Crisp tortillas in beef fat drippings for authentic street flavor."],
    commonMistakes: ["Over-filling tacos makes them impossible to hold."],
    storageInfo: "Store meat in airtight container for up to 4 days.",
    nutrition: {
      calories: 460,
      protein: 28,
      carbs: 32,
      fat: 24,
      fiber: 4
    }
  },
  {
    id: "rec-23",
    slug: "churros",
    title: "Cinnamon Sugar Fried Churros",
    description: "Crispy Spanish fried pastry dough dusted generously with cinnamon sugar, served with warm chocolate dipping sauce.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    category: "Desserts",
    tags: ["Churros", "Dessert", "Sweet", "Cinnamon", "Spanish"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: false,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    difficulty: "Medium",
    servings: 4,
    rating: 4.9,
    reviewCount: 260,
    createdAt: "2026-03-08",
    ingredients: [
      { id: "ing-231", name: "Water & Butter", quantity: "1 cup water + 4 tbsp butter", category: "Dairy" },
      { id: "ing-232", name: "All-Purpose Flour", quantity: "1 cup", category: "Pantry" },
      { id: "ing-233", name: "Eggs", quantity: "2 eggs", category: "Dairy" },
      { id: "ing-234", name: "Cinnamon & Granulated Sugar Coating", quantity: "1/2 cup sugar + 1 tbsp cinnamon", category: "Pantry" },
      { id: "ing-235", name: "Dark Chocolate & Heavy Cream for Dip", quantity: "100g chocolate + 1/3 cup cream", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Make Dough",
        description: "Boil water, butter, and sugar. Stir in flour until ball forms. Cool slightly, beat in eggs one at a time until glossy paste."
      },
      {
        stepNumber: 2,
        title: "Pipe & Fry",
        description: "Pipe dough through star tip into 375°F oil, cutting 4-inch strips with scissors. Fry 3-4 mins until dark golden."
      },
      {
        stepNumber: 3,
        title: "Toss Sugar & Dip",
        description: "Roll immediately in cinnamon sugar. Dip in warm melted chocolate ganache!"
      }
    ],
    tips: ["Star piping tip creates classic ridges for maximum cinnamon sugar adhesion."],
    chefTips: ["Ensure oil stays at 375°F so churros cook inside without getting oily."],
    commonMistakes: ["Frying too fast leaves raw dough inside."],
    storageInfo: "Best eaten hot within 30 minutes.",
    nutrition: {
      calories: 430,
      protein: 6,
      carbs: 52,
      fat: 22,
      fiber: 2
    }
  },
  {
    id: "rec-24",
    slug: "chocolate-shake",
    title: "Double Chocolate Thick Milkshake",
    description: "Rich and creamy Belgian chocolate milkshake topped with whipped cream, chocolate drizzle, and maraschino cherry.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=80",
    category: "Drinks",
    tags: ["Milkshake", "Drink", "Chocolate", "Dessert", "Sweet"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: false,
    prepTime: 5,
    cookTime: 0,
    totalTime: 5,
    difficulty: "Easy",
    servings: 2,
    rating: 4.9,
    reviewCount: 310,
    createdAt: "2026-03-10",
    ingredients: [
      { id: "ing-241", name: "Chocolate Ice Cream", quantity: "4 large scoops", category: "Dairy" },
      { id: "ing-242", name: "Whole Milk", quantity: "3/4 cup", category: "Dairy" },
      { id: "ing-243", name: "Chocolate Fudge Syrup", quantity: "3 tbsp", category: "Pantry" },
      { id: "ing-244", name: "Whipped Cream", quantity: "For topping", category: "Dairy" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Blend Thick",
        description: "Combine ice cream, milk, and chocolate syrup in blender. Pulse until thick, smooth, and creamy."
      },
      {
        stepNumber: 2,
        title: "Garnish & Serve",
        description: "Drizzle chocolate inside glass walls, pour milkshake, top with whipped cream!"
      }
    ],
    tips: ["Let ice cream soften for 5 mins before blending for rich texture."],
    chefTips: ["Use full-fat milk for diner-style thickness."],
    commonMistakes: ["Adding ice dilutes creaminess."],
    storageInfo: "Enjoy instantly!",
    nutrition: {
      calories: 490,
      protein: 9,
      carbs: 64,
      fat: 22,
      fiber: 2
    }
  },
  {
    id: "rec-25",
    slug: "iced-mango-boba",
    title: "Refreshing Mango Passionfruit Iced Tea",
    description: "Refreshing green tea infused with real mango puree, passionfruit nectar, and popping boba pearls over crushed ice.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    category: "Drinks",
    tags: ["Iced Tea", "Drink", "Mango", "Refreshing", "Summer"],
    isVegetarian: true,
    isPopular: false,
    isFeatured: false,
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    difficulty: "Easy",
    servings: 2,
    rating: 4.8,
    reviewCount: 150,
    createdAt: "2026-03-12",
    ingredients: [
      { id: "ing-251", name: "Brewed Jasmine Green Tea (chilled)", quantity: "2 cups", category: "Pantry" },
      { id: "ing-252", name: "Mango Nectar / Puree", quantity: "1/2 cup", category: "Produce" },
      { id: "ing-253", name: "Passionfruit Syrup", quantity: "2 tbsp", category: "Pantry" },
      { id: "ing-254", name: "Mango Popping Boba Pearls", quantity: "1/2 cup", category: "Pantry" },
      { id: "ing-255", name: "Ice Cubes & Fresh Mint", quantity: "For serving", category: "Produce" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Shake Tea",
        description: "In a cocktail shaker with ice, combine chilled green tea, mango puree, passionfruit syrup. Shake vigorously 15 seconds."
      },
      {
        stepNumber: 2,
        title: "Serve",
        description: "Place boba pearls in bottom of tall glass, fill with ice, strain shaken tea on top. Garnish with fresh mint!"
      }
    ],
    tips: ["Shake tea with ice to create a frothy top surface."],
    chefTips: ["Adjust sweetness with agave or simple syrup."],
    commonMistakes: ["Pouring hot tea directly over ice dilutes flavor."],
    storageInfo: "Keep tea base chilled in fridge up to 3 days.",
    nutrition: {
      calories: 180,
      protein: 1,
      carbs: 44,
      fat: 0,
      fiber: 1
    }
  },
  // --- POTATO SNACKS COLLECTION ---
  {
    id: "rec-26",
    slug: "crispy-potato-wedges",
    title: "Crispy Garlic Herb Potato Wedges",
    description: "Thick-cut russet potato wedges coated in olive oil, garlic powder, paprika, and grated parmesan cheese baked to crispy perfection.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80",
    category: "Fries",
    tags: ["Potato", "Wedges", "Fries", "Vegetarian", "Snack", "Baked"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: false,
    prepTime: 15,
    cookTime: 35,
    totalTime: 50,
    difficulty: "Easy",
    servings: 4,
    rating: 4.9,
    reviewCount: 275,
    createdAt: "2026-03-14",
    ingredients: [
      { id: "ing-261", name: "Russet Potatoes (cut into wedges)", quantity: "4 large", category: "Produce" },
      { id: "ing-262", name: "Olive Oil", quantity: "3 tbsp", category: "Pantry" },
      { id: "ing-263", name: "Cornstarch", quantity: "1 tbsp", category: "Pantry" },
      { id: "ing-264", name: "Garlic Powder & Smoked Paprika", quantity: "1 tsp each", category: "Spices" },
      { id: "ing-265", name: "Parmesan Cheese & Italian Herbs", quantity: "2 tbsp each", category: "Dairy" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Par-Boil Wedges",
        description: "Boil potato wedges in salted water for 5 minutes. Drain thoroughly and pat dry."
      },
      {
        stepNumber: 2,
        title: "Coat with Seasoning",
        description: "Toss warm wedges with olive oil, cornstarch, garlic powder, paprika, herbs, salt, and parmesan cheese."
      },
      {
        stepNumber: 3,
        title: "Bake Crisp",
        description: "Arrange in single layer skin-side down on parchment sheet. Bake at 425°F (220°C) for 30-35 minutes until golden and crispy."
      }
    ],
    tips: ["Par-boiling in salted water seasons the potato core and makes interior extra fluffy."],
    chefTips: ["Serve with spicy garlic aioli dipping sauce."],
    commonMistakes: ["Overcrowding baking sheet causes steam instead of roast crispiness."],
    storageInfo: "Reheat in air fryer at 400°F for 5 minutes.",
    nutrition: {
      calories: 290,
      protein: 6,
      carbs: 44,
      fat: 11,
      fiber: 5
    }
  },
  {
    id: "rec-27",
    slug: "potato-tots",
    title: "Golden Homemade Potato Tots",
    description: "Crispy diner-style potato tater tots made from par-boiled grated potatoes seasoned with garlic and onion salt.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=1200&q=80",
    category: "Fries",
    tags: ["Potato", "Tater Tots", "Vegetarian", "Snack", "Crispy"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: false,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    difficulty: "Medium",
    servings: 4,
    rating: 4.8,
    reviewCount: 210,
    createdAt: "2026-03-15",
    ingredients: [
      { id: "ing-271", name: "Russet Potatoes", quantity: "1 kg", category: "Produce" },
      { id: "ing-272", name: "All-Purpose Flour", quantity: "1 tbsp", category: "Pantry" },
      { id: "ing-273", name: "Garlic Powder & Onion Powder", quantity: "1 tsp each", category: "Spices" },
      { id: "ing-274", name: "Dried Parsley", quantity: "1 tsp", category: "Spices" },
      { id: "ing-275", name: "Vegetable Oil for frying", quantity: "3 cups", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Par-Boil & Shred",
        description: "Boil whole unpeeled potatoes for 6 minutes (they should remain firm). Cool, peel, and shred using a box grater."
      },
      {
        stepNumber: 2,
        title: "Season & Shape",
        description: "Squeeze out excess moisture with cheesecloth. Toss grated potato with flour, garlic powder, onion powder, and parsley. Form into 1-inch cylinders."
      },
      {
        stepNumber: 3,
        title: "Fry Golden",
        description: "Fry in batches at 375°F (190°C) for 3-4 minutes until dark golden crisp. Drain on paper towels and salt instantly."
      }
    ],
    tips: ["Squeezing out moisture is crucial so tots don't break apart in oil."],
    chefTips: ["Freeze shaped tots for 20 minutes before frying for perfect retention."],
    commonMistakes: ["Fully boiling potatoes turns them into mash instead of shreds."],
    storageInfo: "Uncooked shaped tots freeze up to 2 months.",
    nutrition: {
      calories: 310,
      protein: 4,
      carbs: 42,
      fat: 14,
      fiber: 3
    }
  },
  {
    id: "rec-28",
    slug: "crispy-potato-croquettes",
    title: "Cheesy Mashed Potato Croquettes",
    description: "Melt-in-your-mouth creamy mashed potato balls stuffed with gooey mozzarella cheese, coated in crunchy panko breadcrumbs.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80",
    category: "Snacks",
    tags: ["Potato", "Croquettes", "Cheese", "Vegetarian", "Snack", "Crispy"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: true,
    prepTime: 25,
    cookTime: 10,
    totalTime: 35,
    difficulty: "Medium",
    servings: 4,
    rating: 4.9,
    reviewCount: 340,
    createdAt: "2026-03-16",
    ingredients: [
      { id: "ing-281", name: "Mashed Potatoes (cooled & firm)", quantity: "3 cups", category: "Produce" },
      { id: "ing-282", name: "Mozzarella Cheese cubes", quantity: "12 small cubes", category: "Dairy" },
      { id: "ing-283", name: "Panko Breadcrumbs", quantity: "1.5 cups", category: "Pantry" },
      { id: "ing-284", name: "Eggs beaten", quantity: "2 eggs", category: "Dairy" },
      { id: "ing-285", name: "Flour & Garlic Powder", quantity: "1/2 cup flour + 1 tsp garlic", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Stuff & Shape",
        description: "Flatten a golf-ball sized portion of mashed potato, insert a cube of mozzarella, and roll into a tight cylinder or sphere."
      },
      {
        stepNumber: 2,
        title: "Dredge",
        description: "Coat potato balls in flour, dip into beaten eggs, and press firmly into panko breadcrumbs."
      },
      {
        stepNumber: 3,
        title: "Fry Golden",
        description: "Fry in 365°F (185°C) oil for 3 minutes until deep golden brown. Serve hot with chipotle dip."
      }
    ],
    tips: ["Use leftover chilled mashed potatoes for firm non-sticky handling."],
    chefTips: ["Mix chives and bacon bits into mashed potato base for non-veg variation."],
    commonMistakes: ["Using warm wet mashed potato makes croquettes burst in oil."],
    storageInfo: "Freeze breaded croquettes on baking sheet then store in freezer bag.",
    nutrition: {
      calories: 380,
      protein: 12,
      carbs: 46,
      fat: 17,
      fiber: 3
    }
  },
  {
    id: "rec-29",
    slug: "tornado-potato",
    title: "Crispy Spiral Tornado Potato Skewers",
    description: "Famous Korean street-style spiraled potato on a stick, fried crispy and dusted with cheese onion seasoning.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Potato", "Tornado Potato", "Spiral", "Street Food", "Vegetarian", "Korean"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: true,
    prepTime: 20,
    cookTime: 10,
    totalTime: 30,
    difficulty: "Medium",
    servings: 2,
    rating: 4.9,
    reviewCount: 295,
    createdAt: "2026-03-17",
    ingredients: [
      { id: "ing-291", name: "Medium Russet Potatoes", quantity: "2 whole", category: "Produce" },
      { id: "ing-292", name: "Melted Butter or Oil", quantity: "2 tbsp", category: "Dairy" },
      { id: "ing-293", name: "Cheddar Cheese Powder & Onion Dust", quantity: "2 tbsp", category: "Pantry" },
      { id: "ing-294", name: "Cornstarch", quantity: "2 tbsp", category: "Pantry" },
      { id: "ing-295", name: "Wooden Skewers (long)", quantity: "2 skewers", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Skew & Spiral Cut",
        description: "Insert wooden skewer through potato center. Cut at an angle down to skewer while rotating potato to create a continuous spiral ribbon. Gently stretch along skewer."
      },
      {
        stepNumber: 2,
        title: "Dust Cornstarch",
        description: "Lightly dust cornstarch between potato spirals for extra crispiness."
      },
      {
        stepNumber: 3,
        title: "Fry & Season",
        description: "Deep fry at 360°F for 5-6 minutes until golden crisp. Immediately sprinkle with cheese and onion powder."
      }
    ],
    tips: ["Soak skewers in water beforehand so they don't splinter."],
    chefTips: ["Use a sharp knife held at a 45-degree angle for easy spiral cuts."],
    commonMistakes: ["Cutting all the way through the core snaps the potato ribbon."],
    storageInfo: "Best eaten hot off the skewer.",
    nutrition: {
      calories: 270,
      protein: 4,
      carbs: 40,
      fat: 11,
      fiber: 4
    }
  },
  {
    id: "rec-30",
    slug: "aloo-tikki",
    title: "Crispy Indian Spiced Aloo Tikki",
    description: "Traditional North Indian spiced potato patties with crispy shallow-fried crust, served with green chutney and yogurt.",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Potato", "Aloo Tikki", "Indian", "Deshi", "Street Food", "Vegetarian", "Spicy"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: false,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    difficulty: "Easy",
    servings: 4,
    rating: 4.8,
    reviewCount: 310,
    createdAt: "2026-03-18",
    ingredients: [
      { id: "ing-301", name: "Boiled Potatoes (mashed)", quantity: "4 large", category: "Produce" },
      { id: "ing-302", name: "Cornstarch or Rice Flour", quantity: "3 tbsp", category: "Pantry" },
      { id: "ing-303", name: "Green Chilies & Ginger", quantity: "1 tbsp minced", category: "Produce" },
      { id: "ing-304", name: "Cumin Seeds, Chaat Masala, Red Chili", quantity: "1 tsp each", category: "Spices" },
      { id: "ing-305", name: "Oil for shallow pan frying", quantity: "1/4 cup", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Mix Potato Dough",
        description: "Combine mashed potatoes, cornstarch, green chilies, ginger, and spices until smooth dough forms."
      },
      {
        stepNumber: 2,
        title: "Shape Patties",
        description: "Divide dough into 8 round thick disc patties."
      },
      {
        stepNumber: 3,
        title: "Shallow Fry",
        description: "Shallow fry on medium cast iron skillet with oil for 6-8 minutes per side until deep golden and crunchy."
      }
    ],
    tips: ["Cornstarch absorbs moisture for a super crisp exterior without soaking oil."],
    chefTips: ["Stuff centered with seasoned chana dal (yellow split peas) for authentic street tikki."],
    commonMistakes: ["Frying on low heat absorbs excess oil and softens crust."],
    storageInfo: "Store uncooked shaped patties in fridge for up to 2 days.",
    nutrition: {
      calories: 260,
      protein: 5,
      carbs: 38,
      fat: 10,
      fiber: 4
    }
  },
  {
    id: "rec-31",
    slug: "hasselback-potatoes",
    title: "Garlic Butter Hasselback Crisp Potatoes",
    description: "Accordion thin-sliced baked potatoes brushed with garlic herb butter, crispy fan edges, and fluffy potato bottom.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80",
    category: "Snacks",
    tags: ["Potato", "Hasselback", "Vegetarian", "Baked", "Snack", "Garlic"],
    isVegetarian: true,
    isPopular: false,
    isFeatured: false,
    prepTime: 15,
    cookTime: 45,
    totalTime: 60,
    difficulty: "Easy",
    servings: 4,
    rating: 4.7,
    reviewCount: 185,
    createdAt: "2026-03-19",
    ingredients: [
      { id: "ing-311", name: "Medium Yukon Gold Potatoes", quantity: "4 whole", category: "Produce" },
      { id: "ing-312", name: "Melted Butter", quantity: "1/4 cup", category: "Dairy" },
      { id: "ing-313", name: "Garlic minced", quantity: "3 cloves", category: "Produce" },
      { id: "ing-314", name: "Fresh Rosemary & Thyme", quantity: "1 tbsp minced", category: "Produce" },
      { id: "ing-315", name: "Sea Salt & Black Pepper", quantity: "To taste", category: "Spices" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Slice Accordion",
        description: "Place potato between two wooden chopstick handles. Make thin cuts 1/8-inch apart all along length (chopsticks prevent slicing through base)."
      },
      {
        stepNumber: 2,
        title: "Brush Garlic Butter",
        description: "Mix melted butter, garlic, herbs, salt. Generously brush over potato fanning slices."
      },
      {
        stepNumber: 3,
        title: "Bake Crisp",
        description: "Bake at 425°F (220°C) for 45 minutes, re-brushing butter halfway through until fan edges crisp brown."
      }
    ],
    tips: ["Chopsticks act as safety guards so you don't cut all the way down!"],
    chefTips: ["Insert thin cheddar slices between cuts in last 5 minutes of baking."],
    commonMistakes: ["Cutting base makes potato fall apart."],
    storageInfo: "Re-crisp in oven at 400°F for 8 minutes.",
    nutrition: {
      calories: 280,
      protein: 5,
      carbs: 39,
      fat: 12,
      fiber: 4
    }
  },

  // --- DESHI (SOUTH ASIAN / BENGALI / INDIAN) POTATO SNACKS ENRICHMENT ---
  {
    id: "rec-32",
    slug: "aloo-chop",
    title: "Deshi Street Style Spiced Aloo Chop",
    description: "Classic Bengali street food spiced mashed potato balls stuffed with roasted spices, dipped in turmeric besan batter and fried golden.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Potato", "Aloo Chop", "Deshi", "Bengali", "Street Food", "Vegetarian", "Crispy"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: true,
    prepTime: 20,
    cookTime: 15,
    totalTime: 35,
    difficulty: "Easy",
    servings: 4,
    rating: 4.9,
    reviewCount: 380,
    createdAt: "2026-03-20",
    ingredients: [
      { id: "ing-321", name: "Boiled Potatoes (mashed)", quantity: "4 large", category: "Produce" },
      { id: "ing-322", name: "Besan (Chickpea Flour)", quantity: "1 cup", category: "Pantry" },
      { id: "ing-323", name: "Rice Flour", quantity: "2 tbsp", category: "Pantry" },
      { id: "ing-324", name: "Roasted Bhaja Masala (Cumin, Coriander, Dry Red Chili)", quantity: "1.5 tbsp", category: "Spices" },
      { id: "ing-325", name: "Chopped Ginger & Green Chilies", quantity: "1 tbsp", category: "Produce" },
      { id: "ing-326", name: "Baking Soda", quantity: "1/4 tsp", category: "Pantry" },
      { id: "ing-327", name: "Mustard Oil & Deep Fry Oil", quantity: "3 cups", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Prepare Spiced Aloo Stuffing",
        description: "Heat 1 tbsp mustard oil, sauté ginger, green chilies, and roasted bhaja masala. Toss in mashed potatoes, salt, and cilantro. Shape into flat round discs."
      },
      {
        stepNumber: 2,
        title: "Make Fluffy Besan Batter",
        description: "Whisk besan, rice flour, turmeric, red chili powder, salt, baking soda, and water into a smooth thick coating batter."
      },
      {
        stepNumber: 3,
        title: "Dip & Deep Fry",
        description: "Dip potato discs into besan batter, drop into hot oil at 350°F (175°C) and fry for 4-5 minutes until golden puffy crisp. Serve with muri (puffed rice) and hot tea!"
      }
    ],
    tips: ["Bhaja masala (dry roasted cumin, coriander, red chili) gives authentic Deshi tea-stall flavor."],
    chefTips: ["A pinch of rice flour in the besan batter prevents the chop from becoming soggy."],
    commonMistakes: ["Batter too thin will slip off the potato disc during frying."],
    storageInfo: "Best eaten hot fresh off the wok.",
    nutrition: {
      calories: 320,
      protein: 8,
      carbs: 45,
      fat: 13,
      fiber: 5
    }
  },
  {
    id: "rec-33",
    slug: "aloo-chaat",
    title: "Crispy Street Style Delhi Aloo Chaat",
    description: "Crispy pan-fried fried potato cubes tossed with tangy tamarind chutney, spicy green mint sauce, chaat masala, and pomegranate seeds.",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Potato", "Aloo Chaat", "Deshi", "Street Food", "Vegetarian", "Tangy", "Spicy"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: false,
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    difficulty: "Easy",
    servings: 4,
    rating: 4.9,
    reviewCount: 410,
    createdAt: "2026-03-21",
    ingredients: [
      { id: "ing-331", name: "Par-boiled Potatoes (diced in cubes)", quantity: "4 large", category: "Produce" },
      { id: "ing-332", name: "Sweet Tamarind Chutney", quantity: "3 tbsp", category: "Pantry" },
      { id: "ing-333", name: "Spicy Mint Cilantro Chutney", quantity: "2 tbsp", category: "Pantry" },
      { id: "ing-334", name: "Chaat Masala & Roasted Cumin Powder", quantity: "1 tbsp each", category: "Spices" },
      { id: "ing-335", name: "Black Salt (Kala Namak) & Lemon Juice", quantity: "1 tsp each", category: "Spices" },
      { id: "ing-336", name: "Fresh Pomegranate Seeds & Sev", quantity: "For garnish", category: "Produce" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Fry Potato Cubes Super Crispy",
        description: "Deep fry or shallow fry potato cubes in hot oil until dark golden and super crunchy on the outside."
      },
      {
        stepNumber: 2,
        title: "Toss with Spice Dust & Chutneys",
        description: "Immediately transfer hot fried potatoes to a bowl. Sprinkle chaat masala, black salt, cumin powder, tamarind chutney, mint chutney, and fresh lemon juice."
      },
      {
        stepNumber: 3,
        title: "Garnish & Serve",
        description: "Toss vigorously, top with crunchy sev and juicy pomegranate seeds. Serve with toothpicks!"
      }
    ],
    tips: ["Kala namak (black salt) delivers the signature street-style umami punch."],
    chefTips: ["Par-boil potatoes with a pinch of turmeric for golden color before dicing."],
    commonMistakes: ["Spoonfuls of cold liquid chutney added too early will soften fried potato crunch."],
    storageInfo: "Enjoy instantly upon tossing.",
    nutrition: {
      calories: 290,
      protein: 5,
      carbs: 48,
      fat: 10,
      fiber: 4
    }
  },
  {
    id: "rec-34",
    slug: "dum-aloo-bites",
    title: "Spicy Deshi Chhotto Aloo Dum",
    description: "Baby potatoes slow-roasted in mustard oil with spicy ginger-garlic tomato gravy, dry red chilies, and roasted cumin.",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Potato", "Aloo Dum", "Deshi", "Bengali", "Spicy", "Vegetarian", "Street Food"],
    isVegetarian: true,
    isPopular: false,
    isFeatured: false,
    prepTime: 20,
    cookTime: 25,
    totalTime: 45,
    difficulty: "Medium",
    servings: 4,
    rating: 4.8,
    reviewCount: 225,
    createdAt: "2026-03-22",
    ingredients: [
      { id: "ing-341", name: "Baby Potatoes (boiled & pricked)", quantity: "500g", category: "Produce" },
      { id: "ing-342", name: "Mustard Oil", quantity: "3 tbsp", category: "Pantry" },
      { id: "ing-343", name: "Tomato Puree & Ginger Paste", quantity: "1/2 cup + 1 tbsp", category: "Produce" },
      { id: "ing-344", name: "Kashmiri Red Chili & Garam Masala", quantity: "1 tbsp each", category: "Spices" },
      { id: "ing-345", name: "Bay Leaf, Cardamom, Cinnamon", quantity: "Whole spices", category: "Spices" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Sear Baby Potatoes",
        description: "Prick baby potatoes with a fork. Fry in hot mustard oil with turmeric and salt until skin is golden blistered."
      },
      {
        stepNumber: 2,
        title: "Cook Spicy Masala Base",
        description: "In remaining oil, temper whole spices. Sauté ginger, tomato puree, Kashmiri red chili, and cumin until oil separates."
      },
      {
        stepNumber: 3,
        title: "Simmer & Coating",
        description: "Add fried potatoes and 1/4 cup water. Simmer covered on low heat for 10 minutes until thick aromatic sauce coats each potato."
      }
    ],
    tips: ["Pricking baby potatoes allows spices to penetrate straight to the core."],
    chefTips: ["Finish with a pinch of bhaja masala for authentic Bengali street stall taste."],
    commonMistakes: ["Using large potatoes cut in half breaks them during slow roasting."],
    storageInfo: "Tastes even better the next day as potatoes absorb gravy overnight.",
    nutrition: {
      calories: 310,
      protein: 6,
      carbs: 46,
      fat: 12,
      fiber: 5
    }
  },
  {
    id: "rec-35",
    slug: "bread-pakora",
    title: "Deshi Stuffed Potato Bread Pakora",
    description: "Classic Deshi tea-time snack: triangular sandwich filled with spicy mashed potato filling, dipped in seasoned chickpea batter and deep-fried.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
    category: "Street Food",
    tags: ["Potato", "Bread Pakora", "Deshi", "Street Food", "Vegetarian", "Snack"],
    isVegetarian: true,
    isPopular: true,
    isFeatured: true,
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    difficulty: "Easy",
    servings: 4,
    rating: 4.9,
    reviewCount: 360,
    createdAt: "2026-03-23",
    ingredients: [
      { id: "ing-351", name: "White Bread Slices", quantity: "8 slices", category: "Bakery" },
      { id: "ing-352", name: "Spiced Mashed Potato Filling", quantity: "2 cups", category: "Produce" },
      { id: "ing-353", name: "Besan (Gram Flour)", quantity: "1.5 cups", category: "Pantry" },
      { id: "ing-354", name: "Ajwain (Carom seeds) & Turmeric", quantity: "1 tsp each", category: "Spices" },
      { id: "ing-355", name: "Green Chutney & Sweet Chutney", quantity: "2 tbsp each", category: "Pantry" }
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Build Potato Sandwich",
        description: "Spread green chutney on bread slice, spread generous layer of spiced potato mash, top with second bread slice. Cut diagonally into triangles."
      },
      {
        stepNumber: 2,
        title: "Whisk Batter",
        description: "Whisk besan, ajwain, turmeric, chili powder, salt, and water into medium-thick smooth batter."
      },
      {
        stepNumber: 3,
        title: "Dip & Fry",
        description: "Dip stuffed sandwich triangle in besan batter, seal edges, and fry in hot oil at 350°F (175°C) for 4-5 minutes until puffy and golden."
      }
    ],
    tips: ["Ajwain aids digestion and gives iconic street stall bread pakora aroma."],
    chefTips: ["Add a thin slice of paneer inside the potato sandwich for royal paneer bread pakora!"],
    commonMistakes: ["Soaking bread too long in batter will cause it to tear."],
    storageInfo: "Reheat in air fryer at 380°F for 4 minutes to restore crispiness.",
    nutrition: {
      calories: 390,
      protein: 11,
      carbs: 54,
      fat: 16,
      fiber: 4
    }
  }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return RECIPES.find((recipe) => recipe.slug === slug);
}

export function getRecipesByCategory(categorySlug: string): Recipe[] {
  const category = CATEGORIES.find((cat) => cat.slug === categorySlug);
  if (!category) return [];
  return RECIPES.filter((recipe) => recipe.category.toLowerCase() === category.name.toLowerCase());
}

export function getRelatedRecipes(currentRecipe: Recipe, limit = 4): Recipe[] {
  return RECIPES.filter(
    (recipe) => recipe.id !== currentRecipe.id && (recipe.category === currentRecipe.category || recipe.tags.some(t => currentRecipe.tags.includes(t)))
  ).slice(0, limit);
}

export function searchRecipes(query: string): Recipe[] {
  const q = query.toLowerCase().trim();
  if (!q) return RECIPES;

  return RECIPES.filter((recipe) => {
    const titleMatch = recipe.title.toLowerCase().includes(q);
    const descMatch = recipe.description.toLowerCase().includes(q);
    const categoryMatch = recipe.category.toLowerCase().includes(q);
    const tagMatch = recipe.tags.some((tag) => tag.toLowerCase().includes(q));
    const ingredientMatch = recipe.ingredients.some((ing) => ing.name.toLowerCase().includes(q));

    return titleMatch || descMatch || categoryMatch || tagMatch || ingredientMatch;
  });
}
