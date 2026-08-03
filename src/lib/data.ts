export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: "industrial" | "textiles" | "food" | "construction";
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
  // 1. INDUSTRIAL MATERIALS
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
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
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

  // 2. TEXTILES (PURE SILK ONLY)
  {
    id: "tex-1",
    name: "Pure Mulberry & Tussar Silk Fabrics",
    slug: "mulberry-tussar-silk",
    category: "textiles",
    categoryName: "Textiles & Pure Silk",
    shortDescription: "Hand-spun 100% pure silk fabrics produced by artisan weaving hubs in Mysore and Bhagalpur.",
    fullDescription: "Lustrous Mulberry, Raw Tussar, and Matka silks dyed using eco-friendly OEKO-TEX certified reactive dyes. Unmatched drape, natural shine, and tensile resilience.",
    specifications: [
      "Purity: 100% Grade 6A Pure Mulberry & Tussar Silk",
      "Weave: Plain, Satin, Dupion, Georgette",
      "Momme Weight: 12mm to 40mm",
      "Certification: Silk Mark India Certified"
    ],
    applications: ["Haute Couture Apparel", "Luxury Home Textiles", "Scarves & Stoles", "Bridal Wear"],
    availableSizes: ["Rolls of 50 Meters / 100 Meters (44\" & 54\" Width)"],
    packagingOptions: ["Vacuum-Sealed Poly Bags inside Master Export Cartons"],
    countryOfOrigin: "India (Karnataka & Bihar)",
    moq: "500 Meters",
    deliveryTime: "15 - 25 Days",
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: "tex-2",
    name: "Raw Silk Dupion & Jacquard Brocades",
    slug: "raw-silk-dupion-brocades",
    category: "textiles",
    categoryName: "Textiles & Pure Silk",
    shortDescription: "100% Pure Raw Silk Dupion woven with crisp slub texture and metallic zari jacquard motifs.",
    fullDescription: "Handloom woven raw silk dupion and royal Banarasi silk brocades. Rich handfeel, vibrant iridescent luster, certified pure silk Mark authentic export grade.",
    specifications: [
      "Composition: 100% Pure Handloom Silk",
      "GSM: 80 GSM - 140 GSM",
      "Finish: Natural Slub Crisp Finish",
      "Testing: ISO 105 Color Fastness Passed"
    ],
    applications: ["High-End Evening Wear", "Bespoke Upholstery", "Designer Fashion Collections", "Luxury Drapery"],
    availableSizes: ["Rolls of 30 Meters / 50 Meters"],
    packagingOptions: ["Moisture-Barrier Sealed Rolls in Heavy-Duty Tubes"],
    countryOfOrigin: "India (Varanasi & Karnataka)",
    moq: "300 Meters",
    deliveryTime: "14 - 20 Days",
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: "tex-3",
    name: "Organic Mulberry Silk Yarns & Spun Thread",
    slug: "mulberry-silk-yarns-thread",
    category: "textiles",
    categoryName: "Textiles & Pure Silk",
    shortDescription: "High-tenacity 100% reeled Mulberry silk yarn cones and silk embroidery spools.",
    fullDescription: "Export grade cultivated Mulberry silk yarn produced on automated multi-end reeling machines. Low friction, even denier consistency for high-speed luxury knitting and weaving.",
    specifications: [
      "Denier: 20/22D, 28/30D, 40/44D",
      "Purity: 100% Raw Reeled Silk",
      "Elongation: 18% - 22%",
      "Tenacity: Min 3.8 g/denier"
    ],
    applications: ["Luxury Jacquard Weaving", "Silk Embroidery", "Hosiery & Knitwear", "High-End Thread Stock"],
    availableSizes: ["Cones of 500g / 1kg"],
    packagingOptions: ["Export Cartons of 20 Cones with Silica Gel Desiccants"],
    countryOfOrigin: "India (Karnataka)",
    moq: "100 kg",
    deliveryTime: "10 - 15 Days",
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  },

  // 3. FOOD PRODUCTS
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

  // 4. CONSTRUCTION MATERIALS
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
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    featured: false,
  }
];

export const CATEGORIES_INFO = [
  {
    id: "industrial",
    name: "Industrial Materials",
    description: "High-purity electrolytic copper cathodes, custom PVC extrusions, engineering polymers, and industrial synthetic rubbers.",
    bannerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "textiles",
    name: "Textiles & Pure Silk",
    description: "Exquisite 100% pure Mulberry silk fabrics, raw Tussar silk, luxury Jacquard silk brocades, and organic silk yarns.",
    bannerImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1600&q=80",
  },
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
    bannerImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
  },
];
