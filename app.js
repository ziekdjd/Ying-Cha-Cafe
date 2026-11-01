// Master Data Categories for Menu Page
const menuCategories = [
    { id: 'all', label: 'All Items' },
    { id: 'signature', label: 'Signature Beverages' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'non-coffee', label: 'Non-Coffee' },
    { id: 'frappe', label: 'Frappe (Ice Blended)' },
    { id: 'wellness', label: 'Wellness Blend' },
    { id: 'milktea', label: 'Premium Milktea' },
    { id: 'coolers', label: 'Fruit Coolers' },
    { id: 'breakfast', label: 'All Day Breakfast' },
    { id: 'pancake', label: 'Pancake' },
    { id: 'salad-omelete', label: 'Salad & Omelete' },
    { id: 'ironplate', label: 'Iron Plate Special' },
    { id: 'starters', label: 'Starters' },
    { id: 'ricemeals', label: 'Rice Meals' },
    { id: 'soup', label: 'Soup' },
    { id: 'burger', label: 'Burger' },
    { id: 'noodles', label: 'Noodles' },
    { id: 'alacarte', label: 'Ala Carte Meals' }
];

// Full Detailed Dataset for Full Menu Page
const fullMenu = [
    // SIGNATURE
    { id: "sig-tibuok", name: "Tibuok Caramel Mocha", category: "signature", type: "espresso", desc: "Rich espresso with chocolate & caramel, finished with local Tibuok sea salt & whipped cream.", image: "img/tibuok-caramel-mocha.jpg", prices: { "Hot 12oz": 130, "Iced 16oz": 145, "Iced 22oz": 160 }, defaultOption: "Iced 16oz" },
    { id: "sig-military", name: "Military", category: "signature", type: "fusion", desc: "A bold fusion of earthy matcha & intense espresso layered with creamy milk.", image: "img/military.jpg", prices: { "Hot 12oz": 130, "Iced 16oz": 145, "Iced 22oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "sig-tiramisu", name: "Tiramisu", category: "signature", type: "espresso", desc: "Creamy tiramisu inspired latte made with bold espresso, velvety milk & mascarpone topped with lady finger.", image: "img/tiramisu.jpg", prices: { "Hot 12oz": 130, "Iced 16oz": 145, "Iced 22oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "sig-twilight", name: "Twilight Mocha", category: "signature", type: "espresso", desc: "Espresso with white & dark chocolate. A smooth, dreamy mocha inspired by twilight skies.", image: "img/twilight-mocha.jpg", prices: { "Hot 12oz": 130, "Iced 16oz": 145, "Iced 22oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "sig-nectar", name: "Nectar", category: "signature", type: "fusion", desc: "A smooth espresso-based latte lightly sweetened with floral nectar syrup.", image: "img/nectar.jpg", prices: { "Hot 12oz": 130, "Iced 16oz": 145, "Iced 22oz": 160 }, defaultOption: "Iced 16oz" },
    { id: "sig-vietnamese", name: "Vietnamese Coffee", category: "signature", type: "espresso", desc: "Bold espresso layered over sweet condensed milk.", image: "img/vietnamese.jpg", prices: { "Iced 16oz": 140, "Iced 22oz": 150 }, defaultOption: "Iced 16oz" },
    { id: "sig-amamang-spicy-mocha", name: "Amamang Facio's Spicy Mocha", category: "signature", type: "fusion", desc: "Signature rich mocha blend with a warm kick of spice.", image: "img/spicy-mocha.jpg", prices: { "Hot 12oz": 120, "Iced 16oz": 120, "Iced 22oz": 135 }, defaultOption: "Hot 12oz" },

    // COFFEE
    { id: "cof-americano", name: "Americano", category: "coffee", desc: "Classic freshly pulled espresso shots diluted with hot or iced water.", image: "img/americano.jpg", prices: { "Hot 12oz": 50, "Iced 16oz": 65, "Iced 22oz": 90 }, defaultOption: "Iced 16oz" },
    { id: "cof-latte", name: "Latte", category: "coffee", desc: "Smooth espresso topped with velvety steamed milk or over ice.", image: "img/latte.jpg", prices: { "Hot 12oz": 110, "Iced 16oz": 120, "Iced 22oz": 130 }, defaultOption: "Iced 16oz" },
    { id: "cof-capuccino", name: "Cappuccino", category: "coffee", desc: "Espresso with thick, creamy steamed milk foam layer.", image: "img/cappuccino.jpg", prices: { "Hot 12oz": 110 }, defaultOption: "Hot 12oz" },
    { id: "cof-classic-mocha", name: "Classic Mocha", category: "coffee", desc: "Espresso combined with rich dark cocoa & velvety milk.", image: "img/classic-mocha.jpg", prices: { "Hot 12oz": 130, "Iced 16oz": 140, "Iced 22oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "cof-white-mocha", name: "White Mocha", category: "coffee", desc: "Espresso combined with sweet white chocolate sauce & milk.", image: "img/white-mocha.jpg", prices: { "Hot 12oz": 130, "Iced 16oz": 140, "Iced 22oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "cof-spanish-latte", name: "Spanish Latte", category: "coffee", desc: "Rich espresso combined with sweetened condensed milk & fresh milk.", image: "img/spanish-latte.jpg", prices: { "Hot 12oz": 110, "Iced 16oz": 120, "Iced 22oz": 130 }, defaultOption: "Iced 16oz" },

    // NON-COFFEE
    { id: "nc-matcha-latte", name: "Matcha Latte", category: "non-coffee", desc: "Earthy matcha tea combined with creamy milk.", image: "img/matcha-latte.jpg", prices: { "Hot 12oz": 100, "Iced 16oz": 110, "Iced 22oz": 130 }, defaultOption: "Iced 16oz" },
    { id: "nc-spicy-chocolate", name: "Amamang Facio's Spicy Chocolate", category: "non-coffee", desc: "Decadent dark chocolate infused with gentle spice.", image: "img/spicy-chocolate.jpg", prices: { "Hot 12oz": 100, "Iced 16oz": 110, "Iced 22oz": 130 }, defaultOption: "Hot 12oz" },
    { id: "nc-matcha-foam", name: "Matcha Foam Latte", category: "non-coffee", desc: "Creamy foam layered over smooth matcha milk.", image: "img/matcha-foam-latte.jpg", prices: { "Hot 12oz": 140, "Iced 16oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "nc-strawberry-foam", name: "Strawberry Foam Latte", category: "non-coffee", desc: "Luscious strawberry milk topped with sweet velvet foam.", image: "https://images.unsplash.com/photo-1553787499-6f9133860278", prices: { "Hot 12oz": 140, "Iced 16oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "nc-cocoa-foam", name: "Cocoa Foam", category: "non-coffee", desc: "Rich chocolate milk with soft foam top layer.", image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed", prices: { "Hot 12oz": 140, "Iced 16oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "nc-matcha-cocoa", name: "Matcha Cocoa Latte", category: "non-coffee", desc: "Fusion of Japanese matcha green tea & chocolate.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a", prices: { "Hot 12oz": 140, "Iced 16oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "nc-strawberry-cocoa", name: "Strawberry Cocoa Latte", category: "non-coffee", desc: "Layered blend of strawberry, cocoa & cold milk.", image: "https://images.unsplash.com/photo-1553787499-6f9133860278", prices: { "Hot 12oz": 140, "Iced 16oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "nc-strawberry-green-tea", name: "Strawberry Green Tea", category: "non-coffee", desc: "Refreshing green tea steeped & infused with sweet strawberry.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc", prices: { "Hot 12oz": 140, "Iced 16oz": 155 }, defaultOption: "Iced 16oz" },
    { id: "nc-salted-caramel-foam", name: "Salted Caramel Foam", category: "non-coffee", desc: "Sweet salted caramel drink finished with dense milk foam.", image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2", prices: { "Hot 12oz": 140, "Iced 16oz": 155 }, defaultOption: "Iced 16oz" },

    // FRAPPE
    { id: "fr-caramel", name: "Caramel Frappe", category: "frappe", desc: "Ice blended caramel shake topped with whipped cream.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699", prices: { "16oz": 135, "22oz": 155 }, defaultOption: "16oz" },
    { id: "fr-dark-mocha", name: "Dark Mocha Frappe", category: "frappe", desc: "Ice blended rich dark espresso cocoa.", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e", prices: { "16oz": 135, "22oz": 155 }, defaultOption: "16oz" },
    { id: "fr-java-jelly", name: "Java Jelly Frappe", category: "frappe", desc: "Blended coffee shake with chewy coffee jelly cubes.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c", prices: { "16oz": 135, "22oz": 155 }, defaultOption: "16oz" },
    { id: "fr-matcha", name: "Matcha Frappe", category: "frappe", desc: "Ice blended Japanese matcha green tea.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a", prices: { "16oz": 135, "22oz": 155 }, defaultOption: "16oz" },
    { id: "fr-strawberry", name: "Strawberry Frappe", category: "frappe", desc: "Sweet strawberry ice blended fruit drink.", image: "https://images.unsplash.com/photo-1553787499-6f9133860278", prices: { "16oz": 135, "22oz": 155 }, defaultOption: "16oz" },
    { id: "fr-oreo-cookie", name: "Oreo Cookie Frappe", category: "frappe", desc: "Blended cream shake loaded with crushed Oreo cookies.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699", prices: { "16oz": 135, "22oz": 155 }, defaultOption: "16oz" },
    { id: "fr-java-chip", name: "Java Chip Frappe", category: "frappe", desc: "Blended coffee frappe with chocolate chip bits.", image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e", prices: { "16oz": 135, "22oz": 155 }, defaultOption: "16oz" },

    // WELLNESS BLEND
    { id: "wb-mixed-berry-chia", name: "Mixed Berry Chia", category: "wellness", desc: "Refreshing mixed berry fruit blend with superfood chia seeds.", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bcc4", prices: { "16oz": 135, "22oz": 140 }, defaultOption: "16oz" },
    { id: "wb-classic-lemonade", name: "Classic Lemonade", category: "wellness", desc: "Freshly squeezed ice-cold lemon juice.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd", prices: { "16oz": 75, "22oz": 85 }, defaultOption: "16oz" },
    { id: "wb-probioburst", name: "Probioburst", category: "wellness", desc: "Probiotic burst drink for gut wellness and vitality.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc", prices: { "16oz": 75, "22oz": 85 }, defaultOption: "16oz" },
    { id: "wb-cucumber-lemon", name: "Cucumber Lemon", category: "wellness", desc: "Cooling cucumber & fresh lemon juice blend.", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859", prices: { "16oz": 75, "22oz": 85 }, defaultOption: "16oz" },
    { id: "wb-strawberry-lemon", name: "Strawberry Lemon", category: "wellness", desc: "Sweet strawberries infused with tangy fresh lemon.", image: "https://images.unsplash.com/photo-1553787499-6f9133860278", prices: { "16oz": 85, "22oz": 99 }, defaultOption: "16oz" },

    // PREMIUM MILKTEA
    { id: "mt-pwintermelon", name: "Pwintermelon Milktea", category: "milktea", desc: "Classic wintermelon flavored black milktea with tapioca pearls.", image: "https://images.unsplash.com/photo-1558857563-b371033873b8", prices: { "Grande": 75, "Venti": 89 }, defaultOption: "Grande" },
    { id: "mt-okinawa", name: "Okinawa Milktea", category: "milktea", desc: "Roasted brown sugar milk tea flavor.", image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69", prices: { "Grande": 75, "Venti": 89 }, defaultOption: "Grande" },
    { id: "mt-dark-chocolate", name: "Dark Chocolate Milktea", category: "milktea", desc: "Deep cocoa milk tea brew.", image: "https://images.unsplash.com/photo-1558857563-b371033873b8", prices: { "Grande": 75, "Venti": 89 }, defaultOption: "Grande" },
    { id: "mt-cookies-cream", name: "Cookies & Cream Milktea", category: "milktea", desc: "Sweet milk tea with cookie crumble infusion.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699", prices: { "Grande": 75, "Venti": 89 }, defaultOption: "Grande" },

    // FRUIT COOLERS
    { id: "fc-lychee", name: "Lychee Cooler", category: "coolers", desc: "Ice-cold lychee fruit cooler drink.", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc", prices: { "Grande": 55, "Venti": 65 }, defaultOption: "Grande" },
    { id: "fc-mango", name: "Mango Cooler", category: "coolers", desc: "Sweet mango iced refreshment.", image: "https://images.unsplash.com/photo-1546171753-97d7676e4602", prices: { "Grande": 55, "Venti": 65 }, defaultOption: "Grande" },
    { id: "fc-blue-berry", name: "Blueberry Cooler", category: "coolers", desc: "Tart & sweet blueberry iced cooler.", image: "https://images.unsplash.com/photo-1553787499-6f9133860278", prices: { "Grande": 55, "Venti": 65 }, defaultOption: "Grande" },
    { id: "fc-kiwi", name: "Kiwi Cooler", category: "coolers", desc: "Zesty kiwi iced fruit drink.", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859", prices: { "Grande": 55, "Venti": 65 }, defaultOption: "Grande" },

    // ALL DAY BREAKFAST
    { id: "br-hungarian", name: "Hungarian Sausage Meal", category: "breakfast", desc: "Savory spiced Hungarian sausage served with egg & rice.", image: "https://images.unsplash.com/photo-1544025162-d76694265947", price: 120 },
    { id: "br-bangus", name: "Bangus Meal", category: "breakfast", desc: "Seared milkfish served with egg & garlic rice.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2", price: 120 },
    { id: "br-crispy-pork-belly", name: "Crispy Pork Belly Meal", category: "breakfast", desc: "Golden fried pork belly with egg & rice.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 100 },
    { id: "br-crispy-pork-chop", name: "Crispy Pork Chop Meal", category: "breakfast", desc: "Deep fried seasoned pork chop with egg & rice.", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55", price: 100 },
    { id: "br-luncheon-meat", name: "Luncheon Meat Meal", category: "breakfast", desc: "Pan-fried luncheon meat slices with egg & rice.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8", price: 100 },
    { id: "br-beef-tapa", name: "Beef Tapa Meal", category: "breakfast", desc: "Marinated savory beef tapa served with garlic rice & egg.", image: "https://images.unsplash.com/photo-1544025162-d76694265947", price: 160 },
    { id: "br-bagnet", name: "Bagnet Meal", category: "breakfast", desc: "Crispy Ilocano style bagnet with egg & rice.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 120 },
    { id: "br-lucban-longganisa", name: "Lucban Longganisa Meal", category: "breakfast", desc: "Authentic garlic & oregano Lucban sausage with rice & egg.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8", price: 150 },

    // PANCAKES
    { id: "pc-plain", name: "Plain Pancake", category: "pancake", desc: "Fluffy golden pancakes served with syrup.", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445", price: 90 },
    { id: "pc-blueberry", name: "Blueberry Pancake", category: "pancake", desc: "Pancakes topped with juicy blueberry sauce.", image: "https://images.unsplash.com/photo-1528207776546-385fe72de8b6", price: 130 },
    { id: "pc-strawberry", name: "Strawberry Pancake", category: "pancake", desc: "Pancakes topped with sweet strawberry preserves.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff", price: 130 },
    { id: "pc-bacon", name: "Pancake & Bacon", category: "pancake", desc: "Stack of pancakes served with crispy bacon strips.", image: "https://images.unsplash.com/photo-1528207776546-385fe72de8b6", price: 140 },
    { id: "pc-sausage", name: "Pancake Sausage", category: "pancake", desc: "Fluffy pancakes paired with breakfast sausage link.", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445", price: 140 },

    // SALAD & OMELETE
    { id: "sal-tuna", name: "Tuna Salad", category: "salad-omelete", desc: "Dressing choices: Caesar, Thousand Island, or Honey Mustard.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", price: 140 },
    { id: "sal-grilled-chicken", name: "Grilled Chicken Salad", category: "salad-omelete", desc: "Dressing choices: Caesar, Thousand Island, or Honey Mustard.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999", price: 150 },
    { id: "om-sausage-mushroom", name: "Sausage Mushroom Omelete", category: "salad-omelete", desc: "Fluffy egg omelete filled with sausage & mushrooms, served with French toast.", image: "https://images.unsplash.com/photo-1510693206972-df098062cb71", price: 180 },
    { id: "om-ham-cheese", name: "Ham & Cheese Omelete", category: "salad-omelete", desc: "Classic ham & melted cheese omelete served with French toast.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8", price: 180 },

    // IRON PLATE SPECIAL
    { id: "ip-porkchop", name: "Iron Plate Porkchop", category: "ironplate", desc: "Sizzling porkchop on iron plate with gravy.", image: "https://images.unsplash.com/photo-1544025162-d76694265947", price: 130 },
    { id: "ip-porkbelly", name: "Iron Plate Pork Belly", category: "ironplate", desc: "Sizzling pork belly served with savory sauce.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 130 },
    { id: "ip-sausage", name: "Iron Plate Sausage", category: "ironplate", desc: "Sizzling sausage served piping hot.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8", price: 130 },
    { id: "ip-burger-steak", name: "Iron Plate Burger Steak", category: "ironplate", desc: "Juicy beef patty on sizzling plate with mushroom gravy.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", price: 150 },
    { id: "ip-sisig", name: "Iron Plate Sisig", category: "ironplate", desc: "Classic Filipino pork sisig served sizzling on iron plate.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 130 },
    { id: "ip-plain-rice", name: "Plain Rice", category: "ironplate", desc: "Steamed white rice cup.", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99", price: 20 },
    { id: "ip-rice-platter", name: "Plain Rice Platter", category: "ironplate", desc: "Sharing platter of steamed white rice.", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99", price: 100 },
    { id: "ip-garlic-rice", name: "Garlic Rice", category: "ironplate", desc: "Fragrant garlic fried rice cup.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b", price: 25 },
    { id: "ip-tinapa-platter", name: "Tinapa Rice Platter", category: "ironplate", desc: "Flavorful smoked fish tinapa rice sharing bowl.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b", price: 180 },

    // STARTERS
    { id: "st-fries", name: "French Fries", category: "starters", desc: "Flavors: Cheese, Barbecue, Sour Cream, or Classic.", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594", price: 60 },
    { id: "st-triple-cheese-fries", name: "Triple Cheese Fries", category: "starters", desc: "Crispy fries loaded with 3 types of melted cheese.", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594", price: 100 },
    { id: "st-mozarella-sticks", name: "Mozarella Sticks", category: "starters", desc: "Golden fried mozarella cheese sticks with dip.", image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7", price: 180 },
    { id: "st-clubhouse", name: "Clubhouse Sandwich", category: "starters", desc: "Triple decker sandwich packed with chicken, ham, egg & cheese.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af", price: 170 },
    { id: "st-overload-fries", name: "Overload Fries", category: "starters", desc: "Fries smothered in cheese, savory toppings & sauce.", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594", price: 160 },
    { id: "st-nachos-solo", name: "Nachos (Solo)", category: "starters", desc: "Tortilla chips loaded with cheese & salsa.", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d", price: 95 },
    { id: "st-nachos-sharing", name: "Nachos (Sharing)", category: "starters", desc: "Large sharing nachos tray for groups.", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d", price: 150 },
    { id: "st-mojos", name: "Mojos", category: "starters", desc: "Crispy seasoned potato slices.", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594", price: 130 },
    { id: "st-chicken-popper-norice", name: "Chicken Popper (No Rice)", category: "starters", desc: "Sauce choices: Cheese, Barbecue, Teriyaki, Honey Garlic, Orange Sauce.", image: "https://images.unsplash.com/photo-1562967914-608f82629710", price: 130 },
    { id: "st-chick-n-fries", name: "Chick N' Fries", category: "starters", desc: "Combination basket of chicken poppers & french fries.", image: "https://images.unsplash.com/photo-1562967914-608f82629710", price: 150 },

    // RICE MEALS
    { id: "rm-chicken-poppers", name: "Chicken Poppers Meal", category: "ricemeals", desc: "Flavors: Cheese, Barbecue, Teriyaki, Honey Garlic, Orange Sauce.", image: "https://images.unsplash.com/photo-1562967914-608f82629710", prices: { "Small": 85, "Medium": 99 }, defaultOption: "Small" },
    { id: "rm-chicken-wings", name: "Chicken Wings Meal", category: "ricemeals", desc: "Flavors: Cheese, Barbecue, Teriyaki, Honey Garlic, Orange Sauce.", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f", price: 99 },
    { id: "rm-chicken-ala-king", name: "Chicken Ala King Meal", category: "ricemeals", desc: "Crispy chicken in creamy white mushroom sauce over rice.", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d", price: 139 },
    { id: "rm-chicken-katsu", name: "Chicken Katsu Meal", category: "ricemeals", desc: "Japanese style breaded chicken cutlet with tonkatsu sauce & rice.", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d", price: 120 },
    { id: "rm-fish-fillet", name: "Fish Fillet Meal", category: "ricemeals", desc: "Golden fried fish fillet with tartare sauce & rice.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2", price: 150 },
    { id: "rm-baby-back-ribs", name: "Baby Back Ribs Meal", category: "ricemeals", desc: "Tender glazed baby back ribs served with rice.", image: "https://images.unsplash.com/photo-1544025162-d76694265947", price: 220 },
    { id: "rm-crispy-pork-kare-kare", name: "Crispy Pork Kare-Kare", category: "ricemeals", desc: "Pork in peanut sauce with fried eggplant & bagoong.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 150 },
    { id: "rm-crispy-chicken-kare-kare", name: "Crispy Chicken Kare-Kare", category: "ricemeals", desc: "Crispy chicken in creamy peanut sauce with vegetables.", image: "https://images.unsplash.com/photo-1562967914-608f82629710", price: 170 },
    { id: "rm-cordon-bleu", name: "Cordon Bleu Meal", category: "ricemeals", desc: "Stuffed chicken roll with ham & cheese, served with rice.", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d", price: 130 },
    { id: "rm-chicken-jalapeno", name: "Chicken Jalapeno Meal", category: "ricemeals", desc: "Spicy chicken bite meal topped with jalapeno peppers.", image: "https://images.unsplash.com/photo-1562967914-608f82629710", price: 150 },
    { id: "rm-beef-mushroom", name: "Beef & Mushroom Meal", category: "ricemeals", desc: "Tender beef slices sauteed with mushrooms in brown gravy.", image: "https://images.unsplash.com/photo-1544025162-d76694265947", price: 160 },
    { id: "rm-pork-adobo", name: "Pork Adobo Meal", category: "ricemeals", desc: "Classic braised savory soy-vinegar pork adobo.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 160 },
    { id: "rm-crispy-pork-binagoongan", name: "Crispy Pork Binagoongan", category: "ricemeals", desc: "Crispy pork belly cooked in savory shrimp paste bagoong.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 150 },
    { id: "rm-extra-sauce", name: "Extra Sauce", category: "ricemeals", desc: "Cheese, Barbecue, Teriyaki, Honey Garlic, Orange Sauce.", image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc", price: 15 },

    // SOUP
    { id: "sp-sinigang-bagnet", name: "Sinigang na Bagnet", category: "soup", desc: "Crispy pork bagnet in sour tamarind broth with vegetables.", image: "https://images.unsplash.com/photo-1547592180-85f173990554", price: 320 },
    { id: "sp-sinigang-bangus", name: "Sinigang na Bangus", category: "soup", desc: "Milkfish stewed in tangy sinigang tamarind soup.", image: "https://images.unsplash.com/photo-1547592180-85f173990554", price: 320 },
    { id: "sp-sinigang-salmon", name: "Sinigang na Salmon Belly", category: "soup", desc: "Rich salmon belly strips in piping hot sour tamarind soup.", image: "https://images.unsplash.com/photo-1547592180-85f173990554", price: 330 },
    { id: "sp-egg-drop", name: "Egg Drop Soup", category: "soup", desc: "Comforting silky egg ribbon broth.", image: "https://images.unsplash.com/photo-1547592180-85f173990554", price: 180 },

    // BURGER
    { id: "bg-classic", name: "Classic Burger", category: "burger", desc: "Chicken or beef patty with house special burger sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", price: 65 },
    { id: "bg-cheese", name: "Cheese Burger", category: "burger", desc: "Chicken or beef patty, sliced cheddar cheese & burger sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", price: 75 },
    { id: "bg-deluxe", name: "Deluxe Burger", category: "burger", desc: "Patty, sliced cheese, fresh lettuce, tomato & sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", price: 85 },
    { id: "bg-aloha", name: "Aloha Burger", category: "burger", desc: "Beef patty, grilled pineapple ring, cheese, lettuce, tomato & sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", price: 110 },
    { id: "bg-royal", name: "Royal Burger", category: "burger", desc: "Quarter pound patty, sliced cheese, lettuce, tomato, cucumber & sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", price: 120 },
    { id: "bg-burger-fries", name: "Burger & Fries", category: "burger", desc: "Chicken/beef patty burger served with a side of french fries.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", price: 120 },
    { id: "bg-eagles-nest", name: "Eagle's Nest", category: "burger", desc: "Cozy, stacked & flavorful burger like home for a hungry bird.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd", price: 155 },

    // NOODLES
    { id: "nd-pinoy-spaghetti", name: "Pinoy Spaghetti", category: "noodles", desc: "Sweet Filipino style spaghetti with meat sauce & hotdog slices.", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9", prices: { "Solo": 110, "Sharing": 270 }, defaultOption: "Solo" },
    { id: "nd-carbonara", name: "Carbonara", category: "noodles", desc: "Creamy white pasta with bacon bits & parmesan cheese.", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3", prices: { "Solo": 130, "Sharing": 290 }, defaultOption: "Solo" },
    { id: "nd-pesto", name: "Pesto Pasta", category: "noodles", desc: "Fresh basil pesto sauce tossed with pasta noodles.", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601", prices: { "Solo": 130, "Sharing": 350 }, defaultOption: "Solo" },
    { id: "nd-tuna-pasta", name: "Tuna Pasta", category: "noodles", desc: "Savory tuna pasta in light oil garlic sauce.", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9", prices: { "Solo": 130, "Sharing": 290 }, defaultOption: "Solo" },
    { id: "nd-pansit-lucban", name: "Pansit Lucban", category: "noodles", desc: "Traditional Lucban habhab noodles with pork & vegetable toppings.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624", prices: { "Solo": 130, "Sharing": 250 }, defaultOption: "Solo" },

    // ALA CARTE MEALS (FOR SHARING 2-4 PERSONS)
    { id: "ac-sisig", name: "Sargeant's Sisig", category: "alacarte", desc: "Signature large sharing plate of sizzling pork sisig.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 220 },
    { id: "ac-sweet-sour-fish", name: "Sweet & Sour Fish Fillet", category: "alacarte", desc: "Crispy fish fillet tossed in vibrant sweet & sour sauce.", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2", price: 320 },
    { id: "ac-crispy-kare-kare", name: "Crispy Kare-Kare (Sharing)", category: "alacarte", desc: "Large sharing order of crispy pork kare-kare.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 340 },
    { id: "ac-vegetable-kare-kare", name: "Vegetable Kare-Kare", category: "alacarte", desc: "Rich peanut sauce with mixed fresh garden vegetables.", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999", price: 220 },
    { id: "ac-binagoongan", name: "Crispy Binagoongan (Sharing)", category: "alacarte", desc: "Crispy pork belly tossed in savory bagoong paste.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec", price: 340 },
    { id: "ac-party-poppers", name: "Party Poppers", category: "alacarte", desc: "Platter of chicken poppers perfect for sharing.", image: "https://images.unsplash.com/photo-1562967914-608f82629710", price: 280 },
    { id: "ac-cordon-bleu", name: "Cordon Bleu (Sharing)", category: "alacarte", desc: "Sliced chicken cordon bleu sharing platter.", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d", price: 280 },
    { id: "ac-fried-chicken", name: "Fried Chicken", category: "alacarte", desc: "Golden crispy fried chicken feast.", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58", prices: { "Half": 230, "Whole": 420 }, defaultOption: "Half" }
];

let cart = [];
let activeCategory = 'all'; // Default category filter

// Initialize Page Elements
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('category-tabs')) {
        renderCategoryTabs();
    }
    renderMenu();
    setDefaultDate();
});

// Mobile Navigation Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (!menu) return;

    menu.classList.toggle('hidden');
    if (icon) {
        if (menu.classList.contains('hidden')) {
            icon.className = 'fa-solid fa-bars text-2xl';
        } else {
            icon.className = 'fa-solid fa-xmark text-2xl';
        }
    }
}

// Set Minimum Date for Reservation
function setDefaultDate() {
    const dateInput = document.getElementById('res-date');
    if (!dateInput) return;
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
}

// Render Menu Categories Tabs (on menu.html)
function renderCategoryTabs() {
    const container = document.getElementById('category-tabs');
    if (!container) return;

    // Check if index page category structure is being used
    const isIndexPage = document.getElementById('menu-search') && !document.getElementById('hero-menu-search');
    
    if (isIndexPage) return; // Keep inline buttons on index.html

    container.innerHTML = menuCategories.map(cat => `
        <button onclick="setCategory('${cat.id}')" id="cat-btn-${cat.id}" 
            class="cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition ${cat.id === 'all' ? 'bg-aura-800 text-white shadow-sm' : 'bg-aura-100 text-aura-800 hover:bg-aura-200'}">
            ${cat.label}
        </button>
    `).join('');
}

// Set Active Category Filter
function setCategory(category) {
    activeCategory = category;

    // Check if menu.html layout or index.html layout
    const categoryBtns = document.querySelectorAll('#category-tabs .cat-btn');
    categoryBtns.forEach(btn => {
        const catId = btn.id ? btn.id.replace('cat-btn-', '') : null;
        if (catId) {
            if (catId === category) {
                btn.className = "cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition bg-aura-800 text-white shadow-sm";
            } else {
                btn.className = "cat-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition bg-aura-100 text-aura-800 hover:bg-aura-200";
            }
        } else {
            // Fallback for index.html button classes
            btn.className = "cat-btn px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition bg-white text-aura-800 hover:bg-aura-200";
        }
    });

    if (event && event.target && event.target.id && !event.target.id.startsWith('cat-btn-')) {
        event.target.className = "cat-btn active px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition bg-aura-800 text-white shadow-sm";
    }

    renderMenu();
}

// Dynamic Price Selection Listener
function updateItemPrice(itemId) {
    const item = fullMenu.find(i => i.id === itemId);
    const selectEl = document.getElementById(`size-select-${itemId}`);
    const priceDisplay = document.getElementById(`price-display-${itemId}`);
    if (item && selectEl && priceDisplay) {
        const selectedOption = selectEl.value;
        priceDisplay.textContent = `₱${item.prices[selectedOption]}`;
    }
}

// Main Menu Renderer Logic
function renderMenu() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    const heroSearchVal = document.getElementById('hero-menu-search')?.value || '';
    const mainSearchVal = document.getElementById('menu-search')?.value || '';
    const searchVal = (heroSearchVal || mainSearchVal).toLowerCase();
    const noResults = document.getElementById('no-results');

    grid.innerHTML = '';

    const isIndexPage = Boolean(document.getElementById('menu') && !document.getElementById('hero-menu-search'));

    const filtered = fullMenu.filter(item => {
        let matchesCat = false;
        if (isIndexPage) {
            matchesCat = (activeCategory === 'all' || item.type === activeCategory || (activeCategory === 'signature' && item.category === 'signature'));
        } else {
            matchesCat = (activeCategory === 'all' || item.category === activeCategory);
        }
        const matchesSearch = item.name.toLowerCase().includes(searchVal) || item.desc.toLowerCase().includes(searchVal);
        return matchesCat && matchesSearch;
    });

    const catTitle = document.getElementById('cat-title');
    const catCount = document.getElementById('cat-count');
    if (catTitle && catCount) {
        const catObj = menuCategories.find(c => c.id === activeCategory);
        catTitle.textContent = catObj ? catObj.label : 'Menu';
        catCount.textContent = `${filtered.length} Items`;
    }

    if (filtered.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        return;
    } else {
        if (noResults) noResults.classList.add('hidden');
    }

    filtered.forEach(item => {
        const isMultiPrice = Boolean(item.prices);
        const initialPrice = isMultiPrice ? item.prices[item.defaultOption] : item.price;
        const options = isMultiPrice ? Object.keys(item.prices) : [];

        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-aura-200 flex flex-col justify-between group";
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden bg-aura-100">
                <img src="${item.image}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c';">
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <span class="absolute bottom-3 right-3 font-serif font-bold text-white bg-aura-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20" id="price-display-${item.id}">₱${initialPrice}</span>
            </div>

            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="font-serif text-xl font-bold text-aura-950 mb-1 group-hover:text-aura-600 transition">${item.name}</h3>
                    <p class="text-xs text-aura-600 leading-relaxed">${item.desc}</p>
                </div>

                <div class="mt-6 pt-4 border-t border-aura-100 space-y-3">
                    ${isMultiPrice ? `
                        <div>
                            <label class="block text-[10px] uppercase font-bold tracking-wider text-aura-500 mb-1">Select Size / Portion</label>
                            <select id="size-select-${item.id}" onchange="updateItemPrice('${item.id}')" class="w-full bg-aura-50 border border-aura-200 rounded-lg py-2 px-3 text-xs font-semibold text-aura-900 focus:outline-none focus:ring-1 focus:ring-aura-500">
                                ${options.map(opt => `<option value="${opt}" ${opt === item.defaultOption ? 'selected' : ''}>${opt} — ₱${item.prices[opt]}</option>`).join('')}
                            </select>
                        </div>
                    ` : ''}
                    <button onclick="addToCart('${item.id}')" type="button" class="w-full bg-aura-800 hover:bg-aura-700 active:scale-95 text-white text-xs uppercase font-bold tracking-wider py-2.5 rounded-lg transition shadow-sm flex items-center justify-center gap-2 cursor-pointer">
                        <i class="fa-solid fa-plus text-[10px]"></i>
                        <span>Add to Order</span>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function syncAndFilterMenu(val) {
    const heroSearch = document.getElementById('hero-menu-search');
    const menuSearch = document.getElementById('menu-search');

    if (heroSearch && heroSearch.value !== val) heroSearch.value = val;
    if (menuSearch && menuSearch.value !== val) menuSearch.value = val;

    renderMenu();
}

function filterMenu() {
    renderMenu();
}

function addToCart(itemId) {
    const item = fullMenu.find(i => i.id === itemId);
    if (!item) return;

    const isMultiPrice = Boolean(item.prices);
    const sizeSelect = document.getElementById(`size-select-${itemId}`);
    const selectedSize = isMultiPrice ? (sizeSelect ? sizeSelect.value : item.defaultOption) : 'Standard';
    const itemPrice = isMultiPrice ? item.prices[selectedSize] : item.price;
    const cartKey = `${itemId}-${selectedSize}`;

    const existing = cart.find(c => c.cartKey === cartKey);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            cartKey: cartKey,
            id: item.id,
            name: item.name,
            size: selectedSize,
            price: Number(itemPrice),
            image: item.image,
            qty: 1
        });
    }

    updateCartUI();
    showToast(`Added "${item.name} ${selectedSize !== 'Standard' ? '(' + selectedSize + ')' : ''}" to your order.`);
}

function updateQuantity(cartKey, change) {
    const item = cart.find(c => c.cartKey === cartKey);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.cartKey !== cartKey);
    }
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((acc, curr) => acc + curr.qty, 0);
    const badgeDesktop = document.getElementById('cart-badge');
    const badgeMobile = document.getElementById('cart-badge-mobile');

    if (count > 0) {
        if (badgeDesktop) { badgeDesktop.textContent = count; badgeDesktop.classList.remove('hidden'); }
        if (badgeMobile) { badgeMobile.textContent = count; badgeMobile.classList.remove('hidden'); }
    } else {
        if (badgeDesktop) badgeDesktop.classList.add('hidden');
        if (badgeMobile) badgeMobile.classList.add('hidden');
    }

    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="text-center py-16 text-aura-400">
                    <i class="fa-solid fa-bag-shopping text-5xl mb-3 text-aura-200"></i>
                    <p class="text-sm">Your order bag is currently empty.</p>
                </div>
            `;
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="flex items-center gap-4 p-3 bg-aura-50 rounded-2xl border border-aura-200">
                    <img src="${item.image}" class="w-16 h-16 rounded-xl object-cover" alt="${item.name}">
                    <div class="flex-1">
                        <h4 class="font-serif font-bold text-aura-950 text-sm">${item.name}</h4>
                        <p class="text-xs text-aura-600">${item.size !== 'Standard' ? item.size + ' • ' : ''}₱${item.price} each</p>
                        <div class="flex items-center gap-2 mt-2">
                            <button onclick="updateQuantity('${item.cartKey}', -1)" class="w-6 h-6 rounded-full bg-aura-200 text-aura-900 text-xs flex items-center justify-center hover:bg-aura-300">-</button>
                            <span class="text-xs font-bold px-2">${item.qty}</span>
                            <button onclick="updateQuantity('${item.cartKey}', 1)" class="w-6 h-6 rounded-full bg-aura-200 text-aura-900 text-xs flex items-center justify-center hover:bg-aura-300">+</button>
                        </div>
                    </div>
                    <span class="font-bold text-sm text-aura-900">₱${(item.price * item.qty).toFixed(2)}</span>
                </div>
            `).join('');
        }
    }

    const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');

    if (subtotalEl) subtotalEl.textContent = `₱${subtotal.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `₱${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `₱${total.toFixed(2)}`;
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal) modal.classList.toggle('hidden');
}

function checkoutCart() {
    if (cart.length === 0) {
        showToast("Please add items to your bag before checking out.");
        return;
    }
    showToast("Order placed successfully! Pickup ready in 15 mins.");
    cart = [];
    updateCartUI();
    toggleCartModal();
}

function handleReservationSubmit(e) {
    e.preventDefault();
    const date = document.getElementById('res-date')?.value;
    const time = document.getElementById('res-time')?.value;
    const guests = document.getElementById('res-guests')?.value;

    const form = document.getElementById('reservation-form');
    const conf = document.getElementById('reservation-confirmation');
    const details = document.getElementById('confirmation-details');

    if (form && conf && details) {
        form.classList.add('hidden');
        details.innerHTML = `We look forward to welcoming you to Ying Cha Café on <strong class="text-white">${date}</strong> at <strong class="text-white">${time}</strong> for <strong class="text-white">${guests}</strong>.`;
        conf.classList.remove('hidden');
    }
}

function resetReservationForm() {
    const form = document.getElementById('reservation-form');
    const conf = document.getElementById('reservation-confirmation');
    if (form && conf) {
        form.reset();
        form.classList.remove('hidden');
        conf.classList.add('hidden');
        setDefaultDate();
    }
}

function handleNewsletter(e) {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    showToast("Thank you for subscribing to the Tea Journal!");
    if (emailInput) emailInput.value = '';
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = msg;
    toast.classList.remove('hidden');

    setTimeout(() => toast.classList.add('hidden'), 2500);
}