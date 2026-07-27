export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: "food" | "construction" | "industrial" | "textiles";
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
}

export const PRODUCTS_DATA: ProductItem[] = [
  // FOOD PRODUCTS
  {
    id: "food-1",
    name: "Mature Husked Coconut",
    slug: "husked-coconut",
    category: "food",
    categoryName: "Food Products",
    shortDescription: "Organic, Grade-A fresh Indian coconuts sourced directly from Pollachi coastal plantations.",
    fullDescription: "Export-quality fully husked and semi-husked mature coconuts carefully selected for weight, rich water content, and thick kernel meat. Inspected under strict APEDA standards.",
    specifications: [
      "Weight: 500g - 650g per nut",
      "Nutrient Grade: High Lauric Acid",
      "Shelf Life: 50 Days at controlled temperature",
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
  },
  {
    id: "food-2",
    name: "Cold-Pressed Virgin Coconut Oil",
    slug: "virgin-coconut-oil",
    category: "food",
    categoryName: "Food Products",
    shortDescription: "100% Raw, extra virgin cold-pressed coconut oil rich in Lauric Acid and natural aroma.",
    fullDescription: "Extracted without heat or chemical treatment using traditional cold pressing of fresh coconut meat. Unrefined, unbleached, non-deodorized virgin coconut oil conforming to international food standards.",
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
  },
  {
    id: "food-3",
    name: "Whole Wheat Flour (Atta)",
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
  },
  {
    id: "food-4",
    name: "Refined Sunflower Oil",
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
    availableSizes: ["1L PET Bottle", "5L Jerry Can", "15L Tin", "flexitank"],
    packagingOptions: ["Carton Boxes (12 x 1L)", "Bulk Flexitank 22,000L", "Jerry Cans"],
    countryOfOrigin: "India",
    moq: "20 Metric Tons",
    deliveryTime: "12 - 20 Days",
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1000&q=80",
    featured: false,
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
  },
  {
    id: "const-2",
    name: "TMT Rebars & Structural Steel",
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
  },
  {
    id: "const-3",
    name: "High-Density AAC & Hollow Blocks",
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
  },
  {
    id: "ind-2",
    name: "Rigid & Flexible PVC Extrusions",
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
  },
  {
    id: "ind-3",
    name: "Industrial Polymer Resins (HDPE/LLDPE/PP)",
    slug: "industrial-polymers",
    category: "industrial",
    categoryName: "Industrial Materials",
    shortDescription: "Virgin blow molding, injection grade HDPE, LLDPE film, and Polypropylene granules.",
    fullDescription: "First-tier petrochemical polymer resins sourced from Reliance & IOCL refineries. Uniform melt flow index (MFI) and stress-crack resistance for plastic manufacturing.",
    specifications: [
      "Melt Flow Index (MFI): 0.3 - 20 g/10min",
      "Density: 0.918 - 0.960 g/cm³",
      "Grade: Film, Blow Molding, Injection Molding, Pipe Grade"
    ],
    applications: ["Packaging Films", "Industrial Containers", "Automotive Components", "Irrigation Pipes"],
    availableSizes: ["25kg Pellets Bags"],
    packagingOptions: ["25kg PP Woven Bags on Heat-Treated Pallets (1.5 Tons/Pallet)"],
    countryOfOrigin: "India",
    moq: "20 Metric Tons",
    deliveryTime: "10 - 15 Days",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },

  // TEXTILES
  {
    id: "tex-1",
    name: "Pure Mulberry & Tussar Silk Fabrics",
    slug: "mulberry-tussar-silk",
    category: "textiles",
    categoryName: "Textiles",
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
  },
  {
    id: "tex-2",
    name: "Organic Combed Cotton Yarns (Ne 20s - Ne 80s)",
    slug: "combed-cotton-yarn",
    category: "textiles",
    categoryName: "Textiles",
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
  },
  {
    id: "tex-3",
    name: "Heavyweight Canvas & Greige Textiles",
    slug: "textile-raw-materials-canvas",
    category: "textiles",
    categoryName: "Textiles",
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
  }
];

export const CATEGORIES_INFO = [
  {
    id: "food",
    name: "Food Products",
    description: "Premium agricultural exports including coconuts, extra virgin oils, wheat flour, and refined sunflower oils direct from Indian farms.",
    bannerImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "construction",
    name: "Construction Materials",
    description: "Structural TMT steel, architectural Makrana marble slabs, granite tiles, and AAC hollow building masonry.",
    bannerImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "industrial",
    name: "Industrial Materials",
    description: "High-purity electrolytic copper cathodes, custom PVC extrusions, engineering polymers, and industrial synthetic rubbers.",
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "textiles",
    name: "Textiles",
    description: "Organic combed cotton yarns, pure Mulberry & Tussar silk fabrics, greige cloth, and heavy industrial duck canvas.",
    bannerImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=80",
  },
];
