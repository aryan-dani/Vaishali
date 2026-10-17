export interface MenuItem {
  id: string;
  name: string;
  description: string;
  tag?: string;
  signature?: boolean;
  price: string;
}

export interface MenuCategory {
  id: "breakfast" | "dosas" | "uttapam" | "rice" | "thalis" | "beverages" | "desserts";
  label: string;
  subtitle: string;
  timing: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    subtitle: "Steamed rice-lentil classics, crisp urad vadas & FC Road rituals served with piping hot drumstick sambar and fresh coconut chutney.",
    timing: "Served from 7:00 AM onwards",
    items: [
      {
        id: "b1",
        name: "Steamed Idli Sambar",
        description: "Two pillowy fermented rice and urad dal idlis served with house drumstick sambar and stone-ground white coconut chutney.",
        tag: "Morning Staple",
        signature: true,
        price: "₹ --",
      },
      {
        id: "b2",
        name: "Crispy Medu Vada Sambar",
        description: "Golden-fried lentil vadas spiced with crushed black pepper, curry leaves, and ginger—crisp outside, cloud-soft within.",
        tag: "House Classic",
        signature: true,
        price: "₹ --",
      },
      {
        id: "b3",
        name: "Idli Vada Mix",
        description: "The quintessential Fergusson College Road morning order: one steamed idli and one crisp medu vada submerged in hot sambar.",
        tag: "Most Ordered",
        signature: true,
        price: "₹ --",
      },
      {
        id: "b4",
        name: "Butter Idli with Podi",
        description: "Warm steamed idlis finished with farm butter and dusted with roasted lentil, sesame, and red chilli podi.",
        price: "₹ --",
      },
      {
        id: "b5",
        name: "Vaishali Special SPDP",
        description: "Pune's iconic Sev Potato Dahi Puri—crisp puris layered with spiced potato, sweet tamarind, green chutney, chilled curd, and fine nylon sev.",
        tag: "Pune Legend",
        signature: true,
        price: "₹ --",
      },
      {
        id: "b6",
        name: "South Indian Rava Upma",
        description: "Slow-roasted semolina tempered with mustard seeds, curry leaves, green chillies, and golden cashews.",
        price: "₹ --",
      },
    ],
  },
  {
    id: "dosas",
    label: "Dosas",
    subtitle: "Cast-iron griddled rice and lentil crepes roasted with farm butter or pure ghee, paired with signature house-blended masala.",
    timing: "Griddled fresh to order all day",
    items: [
      {
        id: "d1",
        name: "Vaishali Special Mysore Masala Dosa",
        description: "Lacy golden crepe brushed with our fiery red garlic-chilli chutney and folded around turmeric-spiced potato onion bhaji.",
        tag: "Signature Dish",
        signature: true,
        price: "₹ --",
      },
      {
        id: "d2",
        name: "Butter Masala Dosa",
        description: "Crisp fermented crepe roasted in white farm butter with a generous core of classic potato masala.",
        tag: "House Classic",
        signature: true,
        price: "₹ --",
      },
      {
        id: "d3",
        name: "Ghee Roast Paper Dosa",
        description: "Wafer-thin, extra-long golden roast brushed with pure cow ghee, served with dual chutneys and sambar.",
        tag: "Extra Crisp",
        signature: true,
        price: "₹ --",
      },
      {
        id: "d4",
        name: "Cut Butter Masala Dosa",
        description: "Thick-crust golden masala dosa neatly sectioned into bite-sized pieces and crowned with melting butter.",
        tag: "Table Favourite",
        signature: true,
        price: "₹ --",
      },
      {
        id: "d5",
        name: "Cheese Masala Dosa",
        description: "Golden roast dosa layered with freshly grated cheese melted directly into the hot spiced potato filling.",
        price: "₹ --",
      },
      {
        id: "d6",
        name: "Onion Rava Masala Dosa",
        description: "Netted semolina and rice-flour crepe studded with caramelized red onions, cumin seeds, and black pepper.",
        price: "₹ --",
      },
      {
        id: "d7",
        name: "Spring Vegetable Dosa",
        description: "Crisp dosa rolled with wok-tossed julienned cabbage, capsicum, carrots, spring onions, and house spice blend.",
        price: "₹ --",
      },
      {
        id: "d8",
        name: "Plain Sada Dosa",
        description: "Unfilled, crisp golden crepe showcasing the natural tang of our slow-fermented batter.",
        price: "₹ --",
      },
    ],
  },
  {
    id: "uttapam",
    label: "Uttapam",
    subtitle: "Thick, open-pan savory pancakes with crisp golden edges and a soft, pillowy center studded with fresh produce.",
    timing: "Slow-cooked on seasoned iron tavas",
    items: [
      {
        id: "u1",
        name: "Onion Tomato Uttapam",
        description: "Our most-requested uttapam, generously topped with ripe tomatoes, finely diced red onions, green chillies, and fresh coriander.",
        tag: "House Classic",
        signature: true,
        price: "₹ --",
      },
      {
        id: "u2",
        name: "Butter Onion Uttapam",
        description: "Sweet caramelized shallots and red onions pressed into thick batter and roasted in farm butter.",
        tag: "Bestseller",
        signature: true,
        price: "₹ --",
      },
      {
        id: "u3",
        name: "Masala Uttapam",
        description: "Hearty uttapam crowned with spiced potato masala, onions, and fresh herbs.",
        price: "₹ --",
      },
      {
        id: "u4",
        name: "Mixed Garden Vegetable Uttapam",
        description: "Studded with finely diced carrots, green peas, tomatoes, capsicum, and onions.",
        price: "₹ --",
      },
      {
        id: "u5",
        name: "Cheese Chilli Onion Uttapam",
        description: "Savory pancake finished with grated cheese, crisp onions, and fiery green chillies.",
        price: "₹ --",
      },
      {
        id: "u6",
        name: "Fresh Coconut Uttapam",
        description: "Topped with freshly grated coastal coconut, mild chillies, and tempered mustard seeds.",
        price: "₹ --",
      },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    subtitle: "Comforting, aromatic South Indian rice bowls tempered with curry leaves, ghee, and roasted lentils.",
    timing: "Midday & Evening Service",
    items: [
      {
        id: "r1",
        name: "Bisi Bele Bath",
        description: "Traditional Karnataka-style hot lentil and rice pot simmered with tamarind, seasonal vegetables, and freshly ground spice masala.",
        tag: "House Classic",
        signature: true,
        price: "₹ --",
      },
      {
        id: "r2",
        name: "Tempered Curd Rice (Thayir Sadam)",
        description: "Cooling soft rice folded with fresh yogurt and tempered with mustard seeds, urad dal, ginger, and curry leaves.",
        tag: "Soothing",
        signature: true,
        price: "₹ --",
      },
      {
        id: "r3",
        name: "South Indian Lemon Rice",
        description: "Fragrant turmeric rice tossed with fresh lime juice, roasted groundnuts, chana dal, and crisp curry leaves.",
        price: "₹ --",
      },
      {
        id: "r4",
        name: "Pure Ghee Dal Khichdi",
        description: "Slow-simmered yellow moong lentils and rice finished with a fragrant cumin and curry-leaf ghee tadka.",
        price: "₹ --",
      },
      {
        id: "r5",
        name: "Tawa Vegetable Pulao",
        description: "Spiced garden vegetables and long-grain rice griddled with house masala, served with chilled cucumber raita.",
        price: "₹ --",
      },
    ],
  },
  {
    id: "thalis",
    label: "Thalis",
    subtitle: "Complete, balanced platters bringing together our kitchen's daily curries, breads, sambar, rasam, and sweets.",
    timing: "Lunch & Dinner Hours",
    items: [
      {
        id: "t1",
        name: "Vaishali Special South Indian Thali",
        description: "Pooris or warm chapatis, two vegetable preparations, sambar, peppery rasam, steamed rice, curd, papad, pickle, and dessert.",
        tag: "Complete Meal",
        signature: true,
        price: "₹ --",
      },
      {
        id: "t2",
        name: "Mini Tiffin Tasting Platter",
        description: "A curated sampler of mini steamed idli, crisp medu vada, mini masala dosa, pineapple sheera, sambar, chutneys, and filter coffee.",
        tag: "Signature Sampler",
        signature: true,
        price: "₹ --",
      },
      {
        id: "t3",
        name: "Weekday Executive Lunch Thali",
        description: "Seasonal vegetable bhaji, dal fry, jeera rice, phulkas, roasted papad, spiced buttermilk, and sweet of the day.",
        price: "₹ --",
      },
      {
        id: "t4",
        name: "Evening Courtyard Platter",
        description: "Designed for sharing under the trees: SPDP, crisp onion bhajiyas, medu vada, and two brass tumblers of filter coffee.",
        price: "₹ --",
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    subtitle: "From frothy chicory-blended South Indian filter coffee in brass davara tumblers to fresh fruit coolers.",
    timing: "Brewed fresh throughout the day",
    items: [
      {
        id: "v1",
        name: "Traditional Brass-Cup Filter Coffee",
        description: "Rich Peaberry and Arabica decoction poured high with boiling farm milk until crowned with a thick, aromatic froth.",
        tag: "Iconic Ritual",
        signature: true,
        price: "₹ --",
      },
      {
        id: "v2",
        name: "Cardamom & Ginger Masala Chai",
        description: "Brisk Assam leaf tea simmered with crushed green cardamom pods and fresh ginger root.",
        tag: "All-Day Classic",
        signature: true,
        price: "₹ --",
      },
      {
        id: "v3",
        name: "Fresh Sweet Lime Soda",
        description: "Hand-pressed mosambi juice served sweet, salted, or mixed with chilled club soda.",
        price: "₹ --",
      },
      {
        id: "v4",
        name: "Spiced Masala Buttermilk (Chaas)",
        description: "Chilled churned curd seasoned with roasted cumin, black salt, ginger, and coriander.",
        price: "₹ --",
      },
      {
        id: "v5",
        name: "Thick Alphonso Mango Milkshake",
        description: "Velvety Ratnagiri Alphonso mango pulp blended with chilled milk (available with vanilla ice cream).",
        tag: "Seasonal Favourite",
        signature: true,
        price: "₹ --",
      },
      {
        id: "v6",
        name: "Rose & Cardamom Sweet Lassi",
        description: "Thick hand-churned yogurt drink lightly scented with rose water and cardamom.",
        price: "₹ --",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    subtitle: "Nostalgic Pune café puddings, coastal ice cream sundaes, and warm pure-ghee Indian sweets.",
    timing: "Available all day",
    items: [
      {
        id: "s1",
        name: "Kesari Pineapple Rava Sheera",
        description: "Warm semolina pudding slow-cooked in pure ghee with saffron strands, sweet pineapple, cashews, and golden raisins.",
        tag: "House Classic",
        signature: true,
        price: "₹ --",
      },
      {
        id: "s2",
        name: "Classic Baked Caramel Custard",
        description: "Silky, old-school café custard glazed with deep amber caramel—a nostalgic favourite for decades.",
        tag: "Heritage Dessert",
        signature: true,
        price: "₹ --",
      },
      {
        id: "s3",
        name: "Coastal Gadbad Ice Cream",
        description: "Tall sundae glass layered with vanilla, mango, and strawberry ice creams, jelly, fresh fruit, and roasted nuts.",
        tag: "Family Favourite",
        signature: true,
        price: "₹ --",
      },
      {
        id: "s4",
        name: "Warm Gulab Jamun (2 Pcs)",
        description: "Soft khoya dumplings steeped in warm cardamom and rose-water syrup.",
        price: "₹ --",
      },
      {
        id: "s5",
        name: "Fresh Fruit Salad with Ice Cream",
        description: "Chilled seasonal fruits topped with a scoop of classic vanilla ice cream.",
        price: "₹ --",
      },
    ],
  },
];

export const FACILITIES_INDEX = [
  {
    number: "01",
    title: "The Banyan-Shaded Courtyard",
    category: "Open-Air Garden Dining",
    description:
      "Sit beneath the sprawling canopy of Fergusson College Road’s rain trees. Our breezy semi-open courtyard is Pune’s quintessential morning and evening gathering spot.",
  },
  {
    number: "02",
    title: "Classic Family Dining Hall",
    category: "Indoor Seating",
    description:
      "Cool, sheltered indoor tables with classic teak seating and swift service—designed for multi-generational family meals and unhurried conversations.",
  },
  {
    number: "03",
    title: "Express Parcel & Takeaway Desk",
    category: "Takeaway Counter",
    description:
      "A dedicated dispatch counter near the entrance packing steaming idlis, crisp vadas, and neatly separated sambar and chutneys for home dining.",
  },
  {
    number: "04",
    title: "Celebration & Institutional Orders",
    category: "Bulk & Party Catering",
    description:
      "Curated South Indian breakfast boxes and bulk snack trays arranged with advance notice through our administrative office.",
  },
  {
    number: "05",
    title: "100% Pure Vegetarian Kitchen",
    category: "Culinary Discipline",
    description:
      "Every batter is stone-ground in-house and every spice blend is roasted to our closely guarded recipes in a strictly vegetarian kitchen.",
  },
  {
    number: "06",
    title: "Step-Free FC Road Access & Digital Billing",
    category: "Guest Convenience",
    description:
      "Direct ground-level entry off Fergusson College Road with seamless UPI, card, and cash billing at every desk.",
  },
];

export const PATRON_VOICES = [
  {
    id: "v1",
    quote:
      "From my student days at Fergusson College in the late 1970s to bringing my grandchildren here on Sunday mornings—the crispness of the Mysore Masala Dosa and the aroma of the brass-cup filter coffee have not changed a fraction.",
    author: "Prakash Kulkarni",
    context: "Patron for 45 Years · Deccan Gymkhana",
    era: "Since 1979",
  },
  {
    id: "v2",
    quote:
      "Even when there is a lively queue on a Saturday evening, the captains manage the courtyard with effortless rhythm. Sharing a plate of SPDP and hot Medu Vada Sambar under the trees is the truest ritual of Pune.",
    author: "Ananya Deshmukh",
    context: "Conservation Architect · Shivajinagar",
    era: "Regular Guest",
  },
  {
    id: "v3",
    quote:
      "When you come to Vaishali, you share tables with everyone—poets, students, industrialists, and families. Their white coconut chutney and specially blended masala carry a flavour you simply cannot find anywhere else in India.",
    author: "Dr. Rohan Sawant",
    context: "Visiting Professor & Alumni · Pune",
    era: "Since 1994",
  },
  {
    id: "v4",
    quote:
      "Whether it is a 7:30 AM solo coffee after a morning walk or a Sunday family feast of Onion Tomato Uttapams, the staff greets you with a familiarity that makes a bustling landmark feel like home.",
    author: "Meera Gokhale",
    context: "Classical Vocalist · Prabhat Road",
    era: "Since 1988",
  },
];

export const PRESS_CLIPPINGS = [
  {
    id: "p1",
    publication: "Pune Cultural Chronicle",
    year: "Culinary Landmark Feature",
    title: "Why Every Fergusson College Road Morning Still Begins at Hotel Vaishali",
    summary:
      "An archival portrait of the open-air courtyard where generations of Punekars have debated literature, cinema, and politics over steaming plates of idli-sambar.",
  },
  {
    id: "p2",
    publication: "Indian Hospitality Journal",
    year: "Heritage Institutions",
    title: "The Art of Consistency: How Vaishali Serves Thousands Without Losing Its Soul",
    summary:
      "Inside the disciplined morning kitchen, the house-blended masalas, and the visionary ethos established by Late Shri Jagannath B. Shetty.",
  },
  {
    id: "p3",
    publication: "Maharashtra Food & Travel",
    year: "City Icons",
    title: "From Mysore Masala Dosa to SPDP: The Dishes That Defined a City’s Palate",
    summary:
      "Tracing the evolution of Pune’s most beloved meeting place and why its shaded garden tables remain packed from dawn to night.",
  },
];

export const DOWNLOAD_RESOURCES = [
  {
    id: "dl1",
    title: "Complete Dine-In & Takeaway Tariff",
    meta: "PDF · 1.4 MB · Updated Edition",
    description: "Full directory of breakfast classics, roast dosas, uttapams, rice bowls, thalis, beverages, and desserts.",
  },
  {
    id: "dl2",
    title: "Bulk Parcel & Gathering Order Guide",
    meta: "PDF · 860 KB · Office Desk",
    description: "Box configurations, advance notice timelines, and direct office contact details for family and institutional orders.",
  },
  {
    id: "dl3",
    title: "Hotel Vaishali Heritage Monograph & Press Kit",
    meta: "ZIP · 3.2 MB · Archival Notes",
    description: "High-resolution photography of the restaurant, founding history on FC Road, and fact sheet for media inquiries.",
  },
];
