export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: "food" | "construction" | "industrial" | "metals" | "textiles" | "plastics";
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  specifications: string[];
  applications: string[];
  availableSizes: string[];
  packagingOptions: string[];
  countryOfOrigin: string;
  moq: string;
  deliveryTime: string;
  imageUrl: string;
  bannerUrl?: string;
  featured?: boolean;
  approxPriceUSD?: number; // Base USD reference for currency converter
}

export interface CategoryInfo {
  id: "food" | "construction" | "industrial" | "metals" | "textiles" | "plastics";
  name: string;
  description: string;
  bannerImage: string;
  itemCount: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  badge?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  keyProducts: string[];
}

export interface CertificationItem {
  id: string;
  code: string;
  name: string;
  authority: string;
  description: string;
  icon: string;
  status: string;
}

export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: "Export Guide" | "Incoterms" | "Packaging" | "Compliance" | "Sourcing";
  readTime: string;
  date: string;
  summary: string;
  content: string;
  author: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// ---------------------------------------------------------
// CATEGORIES DATA
// ---------------------------------------------------------
export const CATEGORIES_INFO: CategoryInfo[] = [
  {
    id: "food",
    name: "Food Products",
    description: "Premium APEDA & FSSAI certified agricultural exports including mature coconuts, extra virgin oils, wheat flour, and refined oils.",
    bannerImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    itemCount: 4,
  },
  {
    id: "construction",
    name: "Construction Materials",
    description: "High-grade structural TMT rebars, architectural Makrana marble slabs, granite tiles, and hollow masonry blocks.",
    bannerImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80",
    itemCount: 3,
  },
  {
    id: "industrial",
    name: "Industrial Materials",
    description: "High-purity electrolytic copper cathodes, custom uPVC profiles, synthetic rubbers, and engineering raw materials.",
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    itemCount: 3,
  },
  {
    id: "metals",
    name: "Metals & Alloys",
    description: "Export-quality Stainless Steel coils, structural Aluminum extrusions, brass industrial fittings, and copper wire rods.",
    bannerImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    itemCount: 3,
  },
  {
    id: "textiles",
    name: "Textiles & Yarns",
    description: "GOTS organic combed cotton yarns, pure Mulberry & Tussar silk fabrics, industrial duck canvas, and denim textiles.",
    bannerImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=80",
    itemCount: 3,
  },
  {
    id: "plastics",
    name: "Plastics & Polymers",
    description: "Virgin polymer resins (HDPE, LLDPE, PP), color masterbatch pellets, PET preforms, and engineering polycarbonate sheets.",
    bannerImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=80",
    itemCount: 3,
  },
];

// ---------------------------------------------------------
// PRODUCTS DATA
// ---------------------------------------------------------
export const PRODUCTS_DATA: ProductItem[] = [
  // FOOD PRODUCTS
  {
    id: "food-1",
    name: "Mature Husked Coconut",
    slug: "husked-coconut",
    category: "food",
    categoryName: "Food Products",
    shortDescription: "Organic, Grade-A fresh Indian mature coconuts sourced directly from Pollachi coastal plantations.",
    fullDescription: "Export-quality fully husked and semi-husked mature coconuts carefully selected for weight, rich water content, and thick kernel meat. Inspected under strict APEDA standards for long ocean transit.",
    specifications: [
      "Weight: 500g - 650g per nut",
      "Nutrient Grade: High Lauric Acid (>48%)",
      "Shelf Life: 50 Days at controlled 12°C - 14°C",
      "Color: Natural Light Brown"
    ],
    applications: ["Desiccated Coconut Powder", "Coconut Milk Extraction", "Retail Supermarkets", "Culinary Processing"],
    availableSizes: ["Small (450-500g)", "Medium (500-600g)", "Large (600g+)"],
    packagingOptions: ["PP Mesh Bags (25 Nuts/Bag)", "Jute Bags (50 Nuts/Bag)", "Custom Branded Master Cartons"],
    countryOfOrigin: "India (Tamil Nadu / Kerala)",
    moq: "1 x 40ft Reefer Container (approx. 45,000 nuts)",
    deliveryTime: "7 - 14 Days FOB",
    imageUrl: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    approxPriceUSD: 0.38,
  },
  {
    id: "food-2",
    name: "Cold-Pressed Extra Virgin Coconut Oil",
    slug: "virgin-coconut-oil",
    category: "food",
    categoryName: "Food Products",
    shortDescription: "100% Raw, extra virgin cold-pressed coconut oil rich in Lauric Acid and natural aroma.",
    fullDescription: "Extracted without heat or chemical treatment using traditional cold pressing of fresh coconut meat. Unrefined, unbleached, non-deodorized virgin coconut oil conforming to international food & cosmetic standards.",
    specifications: [
      "Lauric Acid: > 50%",
      "Free Fatty Acid (FFA): < 0.1%",
      "Moisture: < 0.1%",
      "Processing: Centrifuge Cold Extract"
    ],
    applications: ["Nutraceuticals & Dietary Supplements", "Organic Skincare & Cosmetics", "Gourmet Culinary Cooking"],
    availableSizes: ["250ml", "500ml", "1 Litre Glass/PET Bottles", "210 Litre HDPE Drums", "1000 Litre Flexitanks"],
    packagingOptions: ["Bulk HDPE Drums", "Flexitank in 20ft Container", "Private Label Retail Jars"],
    countryOfOrigin: "India",
    moq: "5,000 Litres",
    deliveryTime: "10 - 15 Days",
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    approxPriceUSD: 3.20,
  },
  {
    id: "food-3",
    name: "Sharbati Whole Wheat Flour (Atta)",
    slug: "whole-wheat-atta",
    category: "food",
    categoryName: "Food Products",
    shortDescription: "High-gluten premium Sharbati whole wheat flour milled under hygienic automated roller mills.",
    fullDescription: "Milled from sun-ripened Madhya Pradesh Sharbati wheat grains. Delivers maximum water absorption, elasticity, and long-lasting softness for flatbreads and commercial baking.",
    specifications: [
      "Gluten Content: 9% - 11%",
      "Moisture: Max 12%",
      "Ash Content: Max 1.5%",
      "Protein: Min 11.5%"
    ],
    applications: ["Industrial Bakery", "Flatbread Manufacturing", "Food Distribution & Retail"],
    availableSizes: ["5kg", "10kg", "25kg", "50kg Bags"],
    packagingOptions: ["Laminated PP Bags", "Multi-Wall Kraft Paper Bags", "Jute Outer Packaging"],
    countryOfOrigin: "India (Madhya Pradesh)",
    moq: "1 x 20ft FCL (approx. 24 Metric Tons)",
    deliveryTime: "10 - 18 Days",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 0.45,
  },
  {
    id: "food-4",
    name: "Refined Edible Sunflower Oil",
    slug: "sunflower-oil",
    category: "food",
    categoryName: "Food Products",
    shortDescription: "Crystal clear, triple-refined edible sunflower oil enriched with Vitamin A & D.",
    fullDescription: "High-oleic refined sunflower oil processed under vacuum deodorization. Clean taste, high smoke point, ideal for deep frying and industrial food preparation.",
    specifications: [
      "Free Fatty Acids (FFA): Max 0.1%",
      "Peroxide Value: Max 1.0 meq/kg",
      "Iodine Value: 120 - 140",
      "Refractive Index: 1.465 - 1.468"
    ],
    applications: ["Commercial Deep Frying", "Mayonnaise & Sauce Processing", "Consumer Bottled Cooking Oil"],
    availableSizes: ["1L PET Bottle", "5L Jerry Can", "15L Tin", "Flexitank"],
    packagingOptions: ["Carton Boxes (12 x 1L)", "Bulk Flexitank 22,000L", "Jerry Cans"],
    countryOfOrigin: "India",
    moq: "20 Metric Tons",
    deliveryTime: "12 - 20 Days",
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 1.15,
  },

  // CONSTRUCTION MATERIALS
  {
    id: "const-1",
    name: "Indian Makrana & Premium Granite Slabs",
    slug: "indian-marble-granite",
    category: "construction",
    categoryName: "Construction Materials",
    shortDescription: "Architectural grade polished marble & granite slabs mined from Rajasthan & Andhra quarries.",
    fullDescription: "First-choice natural stone slabs processed with gangsaw cutting, epoxy resin coating, and mirror polish finishing. High compressive strength for luxury commercial and residential structures.",
    specifications: [
      "Thickness: 18mm, 20mm, 30mm (±1mm)",
      "Surface Finish: Polished, Honed, Flamed, Leather",
      "Compressive Strength: 1800 - 2200 kg/cm²",
      "Water Absorption: < 0.15%"
    ],
    applications: ["Commercial Flooring", "Façade Cladding", "Countertops & Vanity Tops", "Urban Landscaping"],
    availableSizes: ["Gangsaw Slabs (2800mm x 1600mm)", "Cutter Slabs", "Cut-to-Size Tiles (60x60cm, 80x80cm)"],
    packagingOptions: ["Sturdy Wooden Crates with Plastic Wrap & Foam Padding"],
    countryOfOrigin: "India (Rajasthan & Telangana)",
    moq: "1 x 20ft Container (approx. 400 - 450 sq. meters)",
    deliveryTime: "15 - 25 Days",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    approxPriceUSD: 28.00,
  },
  {
    id: "const-2",
    name: "TMT Steel Rebars (Fe-550D / Fe-500D)",
    slug: "tmt-steel-rebars",
    category: "construction",
    categoryName: "Construction Materials",
    shortDescription: "Fe-550D / Fe-500D grade high-yield ductile thermo-mechanically treated steel rebars.",
    fullDescription: "Earthquake-resistant, corrosion-treated TMT steel bars complying with IS 1786 and ASTM standards. Superior bendability and weldability for high-rise infrastructure.",
    specifications: [
      "Grade: Fe-500D, Fe-550D, Fe-600",
      "Diameter: 8mm to 32mm",
      "Yield Strength: Min 550 N/mm²",
      "Elongation: Min 16%"
    ],
    applications: ["Bridge Foundations", "High-Rise Residential Towers", "Industrial Warehouse Construction"],
    availableSizes: ["8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm"],
    packagingOptions: ["Strapped Bundles with Waterproof Wrapping (approx. 2 Tons/Bundle)"],
    countryOfOrigin: "India",
    moq: "50 Metric Tons",
    deliveryTime: "14 - 21 Days",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    approxPriceUSD: 640.00,
  },
  {
    id: "const-3",
    name: "Autoclaved Aerated AAC & Hollow Masonry Blocks",
    slug: "hollow-concrete-blocks",
    category: "construction",
    categoryName: "Construction Materials",
    shortDescription: "Precision autoclaved aerated concrete and heavy-duty hollow concrete load-bearing masonry blocks.",
    fullDescription: "Thermal insulating, lightweight, fire-resistant structural building blocks designed for rapid masonry execution and reduced building dead load.",
    specifications: [
      "Compressive Strength: 4.0 - 7.5 N/mm²",
      "Dry Density: 550 - 650 kg/m³",
      "Fire Rating: 4 Hours",
      "Sound Insulation: 42 dB"
    ],
    applications: ["External Walls", "Partition Walls", "Commercial Complexes", "Industrial Estates"],
    availableSizes: ["600 x 200 x 100mm", "600 x 200 x 150mm", "600 x 200 x 200mm"],
    packagingOptions: ["Palletized with Shrink Stretch Wrap & Corner Protectors"],
    countryOfOrigin: "India",
    moq: "1 x 40ft Container",
    deliveryTime: "10 - 15 Days",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 42.00,
  },

  // INDUSTRIAL MATERIALS
  {
    id: "ind-1",
    name: "Electrolytic Copper Cathodes & Wire Rods",
    slug: "copper-cathodes-rods",
    category: "industrial",
    categoryName: "Industrial Materials",
    shortDescription: "99.99% Ultra-pure electrolytic grade-A copper cathodes and continuous cast rods.",
    fullDescription: "High-conductivity copper manufactured for electrical transformers, cable extrusion, motors, and electronic conductors. Meets LME Grade A purity parameters.",
    specifications: [
      "Purity: 99.99% Cu",
      "Oxygen Content: < 10 ppm",
      "Electrical Conductivity: 101% IACS",
      "Standard: ASTM B115 / BS EN 1978"
    ],
    applications: ["Cable & Wire Manufacturing", "Electrical Transformers", "HVAC Coil Tubing", "Power Distribution"],
    availableSizes: ["Cathodes (914 x 914mm)", "Rods (8mm, 12.5mm diameter)"],
    packagingOptions: ["Steel Strapped Bundles on Wooden Skids (2.5 Tons/Bundle)"],
    countryOfOrigin: "India",
    moq: "25 Metric Tons",
    deliveryTime: "14 - 28 Days",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    approxPriceUSD: 8900.00,
  },
  {
    id: "ind-2",
    name: "Rigid uPVC & Technical Extrusion Profiles",
    slug: "pvc-extrusion-profiles",
    category: "industrial",
    categoryName: "Industrial Materials",
    shortDescription: "Custom engineered uPVC & flexible PVC profiles, conduit pipes, and technical extrusions.",
    fullDescription: "UV-stabilized, impact-resistant PVC profiles manufactured with high-precision extruder dies. Designed for window framing, electrical trunking, and seal gaskets.",
    specifications: [
      "Density: 1.38 - 1.42 g/cm³",
      "Vicat Softening Temp: > 80°C",
      "Tensile Strength: > 45 MPa",
      "Standards: DIN 16941 / ISO 1163"
    ],
    applications: ["Fenestration Systems", "Electrical Enclosures", "Automotive Door Seals", "Fluid Transport"],
    availableSizes: ["Custom Profiles per Engineering Drawings (Lengths up to 6 Meters)"],
    packagingOptions: ["Protective PE Film & Heavy-Duty Carton Bundles"],
    countryOfOrigin: "India",
    moq: "3 Metric Tons",
    deliveryTime: "15 - 20 Days",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 1450.00,
  },
  {
    id: "ind-3",
    name: "Industrial Synthetic Rubbers & Gaskets",
    slug: "industrial-synthetic-rubbers",
    category: "industrial",
    categoryName: "Industrial Materials",
    shortDescription: "EPDM, NBR, and Neoprene rubber sheets, seals, and vibration dampening pads.",
    fullDescription: "Heat, oil, and chemical resistant synthetic rubber sheets engineered for heavy machinery gaskets, pipe flanges, and industrial insulation.",
    specifications: [
      "Hardness: 50 - 80 Shore A",
      "Tensile Strength: 8 - 15 MPa",
      "Temperature Range: -40°C to +130°C",
      "Elongation at Break: > 300%"
    ],
    applications: ["Pipe Flange Gaskets", "Automotive Engine Seals", "HVAC Vibration Isolation", "Chemical Processing"],
    availableSizes: ["Roll Thickness: 1mm to 25mm", "Width: 1.2 Meters"],
    packagingOptions: ["Wrapped Poly Rolls on Wooden Pallets"],
    countryOfOrigin: "India",
    moq: "1 Metric Ton",
    deliveryTime: "10 - 15 Days",
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 2100.00,
  },

  // METALS & ALLOYS (NEW)
  {
    id: "metal-1",
    name: "Stainless Steel Coils & Sheets (SS 304 / SS 316L)",
    slug: "stainless-steel-coils-304-316",
    category: "metals",
    categoryName: "Metals & Alloys",
    shortDescription: "Cold rolled & hot rolled SS 304 / 316L prime stainless steel coils with 2B / BA / No. 4 mirror finish.",
    fullDescription: "High-corrosion resistant austenitic stainless steel coils manufactured to ASTM A240 standards. Ideal for chemical processing tanks, food machinery, architectural cladding, and medical equipment.",
    specifications: [
      "Grade: AISI 304, 304L, 316, 316L, 430",
      "Thickness: 0.3mm to 6.0mm",
      "Width: 1000mm, 1219mm, 1500mm",
      "Finish: 2B, BA, No. 4 Hairline, Mirror 8K"
    ],
    applications: ["Food Processing Equipment", "Pharmaceutical Storage Vessels", "Architectural Elevators", "Automotive Exhaust"],
    availableSizes: ["Coils (Inner Dia 508mm / 610mm)", "Sheets (1220x2440mm, 1500x3000mm)"],
    packagingOptions: ["Eye to Sky / Eye to Wall Wooden Skids with Waterproof VCI Paper"],
    countryOfOrigin: "India",
    moq: "10 Metric Tons",
    deliveryTime: "14 - 21 Days",
    imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    approxPriceUSD: 2650.00,
  },
  {
    id: "metal-2",
    name: "Architectural & Industrial Aluminum Extrusions",
    slug: "aluminum-extrusion-profiles",
    category: "metals",
    categoryName: "Metals & Alloys",
    shortDescription: "6063-T5 / 6061-T6 structural aluminum extrusion profiles, anodized & powder-coated.",
    fullDescription: "Precision extruded aluminum profiles engineered for curtain walls, solar panel mounting frames, structural framing, and heat sinks. High strength-to-weight ratio.",
    specifications: [
      "Alloy: 6063-T5, 6061-T6, 6082-T6",
      "Surface Finish: Anodized (15 µm), Powder Coated, PVDF, Mill Finish",
      "Tolerance: DIN EN 755-9 / ASTM B221"
    ],
    applications: ["Solar Panel Structures", "Curtain Wall Framing", "Conveyor Belts & Automation", "Windows & Doors"],
    availableSizes: ["Lengths up to 6.5 Meters (Custom Cutting Available)"],
    packagingOptions: ["Interleaved Protective PE Film & Bundle Strapping in Wooden Cases"],
    countryOfOrigin: "India",
    moq: "3 Metric Tons",
    deliveryTime: "12 - 18 Days",
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 2950.00,
  },
  {
    id: "metal-3",
    name: "Precision Machined Brass Fittings & Components",
    slug: "brass-industrial-fittings",
    category: "metals",
    categoryName: "Metals & Alloys",
    shortDescription: "High-precision CNC machined brass plumbing valves, electrical terminals, and hose barb connectors.",
    fullDescription: "CuZn39Pb3 (IS 319 / BS 2874) free cutting brass components designed for leak-proof plumbing, gas lines, HVAC equipment, and electrical power meters.",
    specifications: [
      "Material: CW614N / IS 319 Grade 1 Brass",
      "Thread Standard: NPT, BSP, BSPT, Metric",
      "Plating: Nickel Plated, Chrome Plated, Natural Brass",
      "Pressure Rating: PN 25 / 300 PSI"
    ],
    applications: ["HVAC & Refrigeration", "Plumbing & Sanitary Valves", "Electrical Panel Terminals", "Pneumatic Fittings"],
    availableSizes: ["1/8 Inch to 2 Inch Thread Sizes"],
    packagingOptions: ["Inner Polybags in Corrugated Master Cartons on Wooden Pallets"],
    countryOfOrigin: "India (Jamnagar)",
    moq: "5,000 Pieces",
    deliveryTime: "15 - 22 Days",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 1.85,
  },

  // TEXTILES
  {
    id: "tex-1",
    name: "Pure Mulberry & Tussar Silk Fabrics",
    slug: "mulberry-tussar-silk",
    category: "textiles",
    categoryName: "Textiles & Yarns",
    shortDescription: "Hand-spun 100% pure silk fabrics produced by artisan weaving hubs in Mysore and Bhagalpur.",
    fullDescription: "Lustrous Mulberry, Raw Tussar, and Matka silks dyed using eco-friendly OEKO-TEX certified reactive dyes. Unmatched drape, natural shine, and tensile resilience.",
    specifications: [
      "Weave: Plain, Satin, Dupion, Georgette",
      "Momme Weight: 12mm to 40mm",
      "Width: 44 Inch / 54 Inch",
      "Certification: Silk Mark India Certified"
    ],
    applications: ["Haute Couture Apparel", "Luxury Home Textiles", "Scarves & Stoles", "Bridal Wear"],
    availableSizes: ["Rolls of 50 Meters / 100 Meters"],
    packagingOptions: ["Vacuum-Sealed Poly Bags inside Master Export Cartons"],
    countryOfOrigin: "India (Karnataka & Bihar)",
    moq: "500 Meters",
    deliveryTime: "15 - 25 Days",
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    approxPriceUSD: 18.50,
  },
  {
    id: "tex-2",
    name: "Organic Combed Cotton Yarns (Ne 20s - Ne 80s)",
    slug: "combed-cotton-yarn",
    category: "textiles",
    categoryName: "Textiles & Yarns",
    shortDescription: "GOTS-certified 100% organic long-staple combed cotton ring-spun yarns.",
    fullDescription: "Ultra-low contamination cotton yarn spun from Gujarat Shankar-6 long staple raw cotton. Exceptional evenness, high breaking tenacity, perfect for high-speed circular knitting.",
    specifications: [
      "Count Range: Ne 20/1 to Ne 80/2",
      "Staple Length: 29mm - 32mm",
      "IPI Value: < 50",
      "Tenacity: > 18.5 cN/tex"
    ],
    applications: ["Knitting & Weaving", "Denim Manufacturing", "Bedding & Towels", "Activewear"],
    availableSizes: ["Paper Cones of 1.89kg / 2.15kg"],
    packagingOptions: ["Cartons of 24 Cones / PP Woven Bag Pallets"],
    countryOfOrigin: "India (Gujarat & Tamil Nadu)",
    moq: "1 x 20ft Container (approx. 10 Metric Tons)",
    deliveryTime: "12 - 18 Days",
    imageUrl: "https://images.unsplash.com/photo-1606760227091-3dd850d97f1d?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 3.80,
  },
  {
    id: "tex-3",
    name: "Heavyweight Industrial Duck Canvas & Greige Textiles",
    slug: "textile-raw-materials-canvas",
    category: "textiles",
    categoryName: "Textiles & Yarns",
    shortDescription: "Unbleached industrial duck canvas, greige woven cloth, and jute blended sacking fabrics.",
    fullDescription: "High-density heavy oz cotton duck and greige cloth manufactured on air-jet looms. Treated for tensile load, water repellency, and heavy-duty industrial utility.",
    specifications: [
      "Weight: 8 oz/yd² to 24 oz/yd² (270 GSM - 800 GSM)",
      "Width: 36 Inch to 120 Inch",
      "Weave: Plain 1x1, Duck 2x2, Twill"
    ],
    applications: ["Tents & Tarpaulins", "Tote Bags & Footwear", "Industrial Filtration", "Upholstery Base"],
    availableSizes: ["Rolls of 100 Yards"],
    packagingOptions: ["Heavy Duty Moisture-Proof Poly Wrapping with HDPE Outer Cover"],
    countryOfOrigin: "India",
    moq: "3,000 Meters",
    deliveryTime: "14 - 20 Days",
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 2.65,
  },

  // PLASTICS & POLYMERS (NEW)
  {
    id: "poly-1",
    name: "Industrial Virgin Polymer Granules (HDPE / LLDPE / PP)",
    slug: "industrial-polymer-resins",
    category: "plastics",
    categoryName: "Plastics & Polymers",
    shortDescription: "Virgin blow molding HDPE, LLDPE film grade, and Polypropylene homo-polymer granules.",
    fullDescription: "First-tier petrochemical polymer resins sourced from Reliance & IOCL refineries. Uniform melt flow index (MFI) and stress-crack resistance for plastic container & film manufacturing.",
    specifications: [
      "Melt Flow Index (MFI): 0.3 - 20 g/10min",
      "Density: 0.918 - 0.960 g/cm³",
      "Grade: Film, Blow Molding, Injection Molding, Pipe Grade",
      "Certification: FDA Food Contact Compliant"
    ],
    applications: ["Packaging Films", "Industrial Containers", "Automotive Components", "Irrigation Pipes"],
    availableSizes: ["25kg Pellets Bags"],
    packagingOptions: ["25kg PP Woven Bags on Heat-Treated Pallets (1.5 Tons/Pallet)"],
    countryOfOrigin: "India",
    moq: "20 Metric Tons",
    deliveryTime: "10 - 15 Days",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
    featured: true,
    approxPriceUSD: 1180.00,
  },
  {
    id: "poly-2",
    name: "PET Bottle Preforms & Food-Grade Resins",
    slug: "pet-bottle-preforms",
    category: "plastics",
    categoryName: "Plastics & Polymers",
    shortDescription: "High-clarity PET preforms for mineral water, edible oil, carbonated beverages, and cosmetics.",
    fullDescription: "Manufactured using Husky injection molding systems from 100% virgin IV 0.80 PET resin. Zero acetaldehyde level, uniform wall thickness, and crystal clarity.",
    specifications: [
      "Intrinsic Viscosity (IV): 0.80 ± 0.02 dL/g",
      "Neck Finish: PCO 1881, 28mm, 38mm, 48mm 3-Start",
      "Acetaldehyde (AA): < 1.0 ppm"
    ],
    applications: ["Mineral Water Bottling", "Edible Oil Bottles", "Carbonated Soft Drinks", "Pharmaceutical Syrups"],
    availableSizes: ["14g, 18g, 24g, 32g, 48g, 90g Preforms"],
    packagingOptions: ["Gaylord Boxes with Inner Food-Grade Poly Liner (15,000 Pcs/Box)"],
    countryOfOrigin: "India",
    moq: "100,000 Pieces",
    deliveryTime: "12 - 18 Days",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 0.045,
  },
  {
    id: "poly-3",
    name: "Color Masterbatch & Functional Additive Pellets",
    slug: "color-masterbatch-pellets",
    category: "plastics",
    categoryName: "Plastics & Polymers",
    shortDescription: "High-pigment loading White (70% TiO2), Black (40% Carbon), and UV Stabilizer Masterbatches.",
    fullDescription: "Premium dispersion masterbatch pellets compatible with PE, PP, PS, and ABS resins. Ensures brilliant color opacity, weatherability, and smooth extrusion processing.",
    specifications: [
      "Pigment Content: 40% - 70%",
      "Carrier Resin: LLDPE / PP",
      "Heat Resistance: > 280°C",
      "Dosage Rate: 1% to 3%"
    ],
    applications: ["Blow Molded Containers", "Agricultural Mulch Films", "Woven Sack Fabrics", "Consumer Electronics"],
    availableSizes: ["25kg Moisture-Proof Bags"],
    packagingOptions: ["Multi-wall Kraft Bags on Shrink-Wrapped Pallets"],
    countryOfOrigin: "India",
    moq: "2 Metric Tons",
    deliveryTime: "10 - 15 Days",
    imageUrl: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    featured: false,
    approxPriceUSD: 1650.00,
  },
];

// ---------------------------------------------------------
// SERVICES DATA (10 CORE TRADE SERVICES)
// ---------------------------------------------------------
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "export-services",
    title: "Export Services",
    tagline: "End-to-end outbound trade facilitation from Indian manufacturers to global ports.",
    description: "Full-service export management including customs clearance at major Indian seaports and airports, phytosanitary certification, port handling, and bill of lading issuance.",
    iconName: "Globe",
    features: ["Customs Duty & Tariff Advisory", "Port-to-Port Container Booking", "APEDA / Spice Board Export Clearance"],
    badge: "Core Service",
  },
  {
    id: "import-services",
    title: "Import Services",
    tagline: "Seamless inbound procurement & doorstep customs clearance.",
    description: "Navigating complex import regulations, customs valuation, tariff classification, HS code mapping, and inland freight delivery for global buyers and distributors.",
    iconName: "Ship",
    features: ["HS Code & Duty Classification", "Bonded Warehouse Storage", "Doorstep Inland Trucking Delivery"],
  },
  {
    id: "domestic-trading",
    title: "Domestic Trading",
    tagline: "Pan-India wholesale supply chain & bulk commodity distribution.",
    description: "Leveraging our deep manufacturer network across Tamil Nadu, Gujarat, Maharashtra, and Rajasthan to supply raw materials, metals, and industrial products to Indian enterprises.",
    iconName: "Truck",
    features: ["Direct Factory Procurement", "Multi-State Warehousing", "Flexible Credit & Escrow Payment Terms"],
  },
  {
    id: "global-sourcing",
    title: "Global Sourcing",
    tagline: "Can't find a product? We match you with audited, high-capacity factories.",
    description: "Our dedicated sourcing specialists audit Indian manufacturing plants to find exact raw materials, agricultural produce, or fabricated products according to your engineering specs.",
    iconName: "Search",
    badge: "Most Popular",
    features: ["Factory Capacity Verification", "Bespoke Specification Matching", "Sample Prototyping & Lab Testing"],
  },
  {
    id: "supplier-id",
    title: "Supplier Identification",
    tagline: "Rigorous background checks & financial solvency audits of suppliers.",
    description: "Eliminating supply chain risk by vetting manufacturers for financial stability, legal registration (GST/IEC), production machinery, and ethical labor standards.",
    iconName: "UserCheck",
    features: ["On-Site Factory Audits", "GST & Legal Compliance Checks", "Production Line Verification"],
  },
  {
    id: "oem-private-label",
    title: "OEM & Private Labeling",
    tagline: "Custom product formulation, private branding & retail packaging.",
    description: "Produce high-margin retail products under your own brand name. We manage custom artwork printing, specialized retail pouches, tin cans, master cartons, and barcoding.",
    iconName: "PackageCheck",
    features: ["Custom Artwork & Pouch Printing", "Private Label Retail Jars & Bottles", "Barcode & QR Code Integration"],
  },
  {
    id: "procurement-solutions",
    title: "Procurement Solutions",
    tagline: "Volume price negotiations & structured contract management.",
    description: "Leveraging our bulk buying power to secure the lowest factory prices, locking in raw material costs, and structuring secure Letter of Credit (LC) / Telegraphic Transfer (TT) terms.",
    iconName: "FileSpreadsheet",
    features: ["Volume Discount Negotiation", "Letter of Credit (LC 90 Days) Support", "Escrow & Contract Security"],
  },
  {
    id: "logistics-coordination",
    title: "Logistics Coordination",
    tagline: "Multimodal ocean FCL/LCL, air freight & temperature-controlled reefer cargo.",
    description: "Seamless freight forwarding partnerships with Maersk, MSC, and CMA CGM. We optimize container loading, reefer temperature monitoring, and marine transit insurance.",
    iconName: "Anchor",
    features: ["20ft & 40ft FCL / LCL Booking", "Cold Chain Reefer Monitoring", "Comprehensive Marine Transit Insurance"],
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection",
    tagline: "Third-party SGS, Intertek & Bureau Veritas pre-shipment auditing.",
    description: "Ensuring zero defect shipments. We provide pre-production raw material testing, inline assembly inspection, and final container loading supervision with photographic proof.",
    iconName: "CheckCircle",
    badge: "Quality Guaranteed",
    features: ["Pre-Shipment Inspection (PSI)", "Lab Chemical & Tensile Analysis", "Container Loading Supervision (CLS)"],
  },
  {
    id: "export-documentation",
    title: "Export Documentation Support",
    tagline: "Flawless compliance paperwork ensuring fast customs clearance.",
    description: "Preventing costly port delays. We prepare Certificates of Origin (COO), Commercial Invoices, Packing Lists, Bills of Lading (B/L), Phytosanitary Certificates, and Form A/EUR.1.",
    iconName: "FileText",
    features: ["Certificate of Origin (COO)", "Phytosanitary & Fumigation Certificates", "Form A / Preferential Trade Paperwork"],
  },
];

// ---------------------------------------------------------
// INDUSTRIES WE SERVE (8 CORE SECTORS)
// ---------------------------------------------------------
export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "construction",
    name: "Construction & Real Estate",
    tagline: "Structural steel, natural stones, marble slabs & hollow masonry.",
    description: "Supplying high-rise tower developers, infrastructure contractors, and stone distributors with TMT steel bars, Makrana marble, polished granite, and AAC blocks.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80",
    keyProducts: ["TMT Rebars Fe-550D", "Makrana Marble Slabs", "Granite Tiles", "AAC Hollow Blocks"],
  },
  {
    id: "food-beverage",
    name: "Food & Beverage Processing",
    tagline: "Bulk agricultural commodities, raw ingredients & vegetable oils.",
    description: "Serving international supermarket chains, food processors, and oil bottlers with organic coconuts, cold-pressed virgin coconut oil, wheat flour, and refined oils.",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
    keyProducts: ["Mature Husked Coconuts", "Cold-Pressed Virgin Oil", "Sharbati Wheat Flour", "Sunflower Oil"],
  },
  {
    id: "textile-apparel",
    name: "Textile & Garment Manufacturing",
    tagline: "Organic cotton yarns, Mulberry silks & industrial canvas cloth.",
    description: "Powering fashion houses, garment mills, and home textile brands with GOTS organic cotton yarns, pure Bhagalpur silks, and heavy-duty duck canvas textiles.",
    icon: "Scissors",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
    keyProducts: ["Combed Cotton Yarns (Ne 20s-80s)", "Mulberry & Tussar Silk", "Duck Canvas Fabric", "Greige Textiles"],
  },
  {
    id: "manufacturing",
    name: "Industrial Heavy Manufacturing",
    tagline: "Copper cathodes, synthetic rubbers, PVC extrusions & polymer resins.",
    description: "Equipping electrical transformer plants, automotive OEMs, and cable extruders with 99.99% copper cathodes, EPDM rubber sheets, and uPVC profiles.",
    icon: "Factory",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    keyProducts: ["99.99% Copper Cathodes", "uPVC Extrusions", "Synthetic Rubber Gaskets", "HDPE Resins"],
  },
  {
    id: "retail-fmcg",
    name: "Retail & Consumer FMCG",
    tagline: "Private label packaged foods, retail oils & eco packaging.",
    description: "Enabling global hypermarkets and e-commerce brands to launch private label cooking oils, packaged flours, and eco-friendly consumer goods.",
    icon: "ShoppingBag",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80",
    keyProducts: ["Private Label Coconut Oil", "Retail Atta Pouches", "PET Preforms", "Mesh Bag Coconuts"],
  },
  {
    id: "automotive",
    name: "Automotive & Transportation",
    tagline: "Precision brass components, EPDM gaskets & alloy profiles.",
    description: "Providing Tier-1 auto component suppliers with CNC machined brass valves, engine seals, extruded aluminum chassis profiles, and polymer compounds.",
    icon: "Car",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
    keyProducts: ["Machined Brass Fittings", "EPDM Engine Seals", "Aluminum Profiles 6061-T6", "Polymer Compounds"],
  },
  {
    id: "agriculture",
    name: "Agriculture & Agro-Chemicals",
    tagline: "Plantation commodities, irrigation pipes & masterbatch films.",
    description: "Supporting commercial farms and irrigation projects with agricultural plastics, greenhouse films, coconut substrates, and export crops.",
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80",
    keyProducts: ["Coir Peat Blocks", "HDPE Irrigation Pipes", "UV Mulch Masterbatch", "Fresh Coconuts"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Energy Projects",
    tagline: "Solar mounting frames, high-yield rebars & power copper conductors.",
    description: "Partnering with EPC contractors on solar farms, port facilities, and bridge foundations with heavy TMT steel, solar aluminum framing, and high-voltage copper rods.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
    keyProducts: ["Fe-550D TMT Rebars", "Solar Aluminum Frames", "Copper Power Rods", "SS 316L Plates"],
  },
];

// ---------------------------------------------------------
// CERTIFICATIONS & COMPLIANCE
// ---------------------------------------------------------
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "iec",
    code: "IEC CODE: 0524XXXXXX",
    name: "Import Export Code (IEC)",
    authority: "Directorate General of Foreign Trade (DGFT), Ministry of Commerce, Govt. of India",
    description: "Official statutory registration empowering Apex Vanguard Global to conduct international import and export trade operations globally.",
    icon: "FileCheck",
    status: "Verified & Active",
  },
  {
    id: "gst",
    code: "GSTIN: 33AAAAA0000A1Z5",
    name: "Goods & Services Tax Registration",
    authority: "Central Board of Indirect Taxes & Customs (CBIC), India",
    description: "Fully compliant Indian tax registration ensuring seamless zero-rated export transactions and tax credit processing.",
    icon: "ShieldCheck",
    status: "Verified & Active",
  },
  {
    id: "msme",
    code: "UDYAM: UDYAM-TN-00-0000000",
    name: "MSME Udyam Registration",
    authority: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
    description: "Recognized enterprise status granting institutional credit access, priority export promotion, and trade fair participation.",
    icon: "Award",
    status: "Verified & Active",
  },
  {
    id: "apeda",
    code: "APEDA REG: APEDA/TN/2024",
    name: "APEDA Export Registration",
    authority: "Agricultural & Processed Food Products Export Development Authority",
    description: "Sanctioned license for the export of scheduled agricultural commodities, fresh coconuts, wheat flour, and processed foods.",
    icon: "Sprout",
    status: "Certified Ready",
  },
  {
    id: "fssai",
    code: "FSSAI LIC: 12424000000000",
    name: "FSSAI Central Food Safety License",
    authority: "Food Safety and Standards Authority of India",
    description: "Central license guaranteeing strict food safety, hygienic handling, laboratory testing, and international compliance for all food shipments.",
    icon: "CheckCircle2",
    status: "Certified Ready",
  },
  {
    id: "iso",
    code: "ISO 9001:2015",
    name: "Quality Management System Standard",
    authority: "International Organization for Standardization",
    description: "Adherence to internationally benchmarked quality control procedures from supplier procurement to final port shipment.",
    icon: "Globe2",
    status: "Compliant Processes",
  },
];

// ---------------------------------------------------------
// BLOG & RESOURCES ARTICLES
// ---------------------------------------------------------
export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: "incoterms-2020-guide",
    slug: "incoterms-2020-explained-for-importers",
    title: "Mastering Incoterms 2020: FOB vs CIF vs EXW Explained for Buyers",
    category: "Incoterms",
    readTime: "6 min read",
    date: "July 2026",
    summary: "A practical breakdown of shipping responsibilities, cargo insurance, risk transfer points, and freight costs under FOB, CIF, CFR, EXW, and DDP.",
    author: "Global Trade Desk",
    content: `
### Understanding Incoterms 2020 in International Sourcing

When purchasing goods from Indian manufacturers, selecting the correct **Incoterm** dictates who pays for freight, customs duties, insurance, and where legal risk transfers from seller to buyer.

#### 1. FOB (Free on Board - Named Port of Shipment)
Under **FOB Chennai** or **FOB Nhava Sheva**, Apex Vanguard Global handles all inland transport, export customs clearance, and container loading onto the vessel. Risk transfers to the buyer once the container passes the ship's rail. The buyer pays ocean freight and destination customs.

#### 2. CIF (Cost, Insurance & Freight - Named Destination Port)
Under **CIF Dubai** or **CIF Rotterdam**, Apex Vanguard covers ocean freight charges and marine transit insurance up to your destination port. Risk transfers when goods are loaded on board, but we manage the logistics hassle for you.

#### 3. EXW (Ex-Works - Factory Door)
The buyer assumes all cost and responsibility from our supplier's factory gate in India. Recommended only for buyers with their own dedicated freight forwarder in India.

#### 4. DDP (Delivered Duty Paid - Doorstep)
Apex Vanguard handles the complete door-to-door shipment, including destination import tariffs, taxes, and final truck delivery directly to your warehouse.
    `,
  },
  {
    id: "export-packaging-standards",
    slug: "export-packaging-standards-sea-freight",
    title: "Seaworthy Export Packaging Standards: Preventing Cargo Damage",
    category: "Packaging",
    readTime: "8 min read",
    date: "June 2026",
    summary: "Discover how we protect fragile marble slabs, mature coconuts, and copper coils against humidity, salt air corrosion, and rough ocean transit.",
    author: "Quality & Logistics Team",
    content: `
### Protecting International Shipments During Ocean Freight

Long transit times across tropical sea routes present challenges like container sweat, salt air corrosion, and vibration damage. Here is how Apex Vanguard Global ensures 100% cargo integrity:

#### 1. Reefer & Mesh Packaging for Fresh Coconuts
Fresh mature coconuts require 12°C - 14°C reefer airflow. We package 25 nuts per ventilated PP mesh bag or jute bag to prevent mold growth during 35-day maritime voyages.

#### 2. Wooden Skids & VCI Paper for Metals
Stainless steel coils and copper wire rods are wrapped in Volatile Corrosion Inhibitor (VCI) anti-rust paper and strapped onto ISPM-15 heat-treated wooden pallets.

#### 3. Fumigation & Phytosanitary Compliance
All wooden pallets and crates undergo Methyl Bromide or Heat Treatment (HT) with official ISPM-15 stamping before container sealing.
    `,
  },
  {
    id: "indian-sourcing-guide",
    slug: "how-to-source-products-from-india-safely",
    title: "How to Safely Source Custom Manufactured Products from India",
    category: "Sourcing",
    readTime: "7 min read",
    date: "May 2026",
    summary: "Step-by-step checklist for foreign buyers seeking reliable Indian manufacturers, factory audits, sample validation, and secure payment terms.",
    author: "Apex Sourcing Desk",
    content: `
### Key Steps to Successful Sourcing in India

India has emerged as a premier global manufacturing hub for textiles, steel, agricultural commodities, and precision engineering. Follow this 4-step checklist to avoid common pitfalls:

1. **Verify IEC & GST Credentials**: Always ensure your trading partner holds valid DGFT Import Export Code (IEC) and active GST registration.
2. **Conduct Pre-Production Sample Testing**: Request lab-certified sample prototypes before placing full 40ft container orders.
3. **Utilize Escrow / Letter of Credit (LC)**: Protect payment with Irrevocable Letters of Credit (LC at sight) or milestone payments.
4. **Third-Party Pre-Shipment Inspection**: Require SGS or Intertek container loading supervision before final balance release.
    `,
  },
];

// ---------------------------------------------------------
// FREQUENTLY ASKED QUESTIONS (FAQ)
// ---------------------------------------------------------
export const FAQ_DATA: FAQItem[] = [
  {
    question: "What is Apex Vanguard Global's core business model?",
    answer: "Apex Vanguard Global operates as a premier international trading house and global sourcing partner. We connect overseas buyers with top-tier, audited manufacturers across India for food products, steel, marble, metals, textiles, and industrial polymers.",
    category: "General",
  },
  {
    question: "Can Apex Vanguard Global source products not listed on the website?",
    answer: "Yes! Our 'Request Any Product' service is built specifically for custom requirements. If you require a specific raw material, custom dimension marble, or OEM manufactured item, enter your specifications on our Request a Product page and our sourcing team will find and quote it for you.",
    category: "Sourcing",
  },
  {
    question: "What payment terms do you accept for international orders?",
    answer: "We support standard international trade payment methods: 1) Irrevocable Letter of Credit (LC at Sight / LC 30-90 Days) issued by top tier banks, and 2) Telegraphic Transfer (TT) with 30% advance deposit upon Proforma Invoice and 70% balance against Bill of Lading (B/L) copy.",
    category: "Payments",
  },
  {
    question: "How do you ensure product quality before container loading?",
    answer: "Every order undergoes strict pre-shipment quality auditing. We check specifications, moisture levels, dimensions, and tensile strength. We also coordinate independent third-party inspections (SGS, Intertek, Bureau Veritas) upon customer request.",
    category: "Quality",
  },
  {
    question: "What are your minimum order quantities (MOQ)?",
    answer: "MOQs vary by product category. For bulk agricultural goods and steel rebars, MOQ is typically 1 x 20ft Full Container Load (FCL). For high-value silk fabrics or machined brass fittings, MOQs start as low as 500 meters or 5,000 pieces.",
    category: "Logistics",
  },
  {
    question: "Do you offer private labeling and custom packaging?",
    answer: "Yes. We offer complete OEM private labeling for consumer retail products (e.g., bottled coconut oil, packaged flour, custom master cartons, and barcoding) tailored to your target market's language and regulatory requirements.",
    category: "Services",
  },
];
