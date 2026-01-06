
import { Leaf, Users, ShieldCheck, FileText, MapPin, Award, CheckCircle } from "lucide-react";

export const producers = [
    {
        id: "producer-1",
        name: "Green Valley Cooperative",
        slug: "green-valley-cooperative",
        type: "Cooperative Society",
        location: "Kandy, Central Province",
        est: "1998",
        members: "450 Members",
        certifications: ["Fairtrade", "EU Organic", "JAS"],
        description: [
            "Rooted in the central highlands of Kandy, Green Valley Cooperative was established in 1998 with a simple yet powerful mission: to empower small-scale spice farmers while sharing Sri Lanka's finest organic spices with the world.",
            "Our farmers practice traditional, regenerative agriculture, intercropping spices with fruit trees to maintain biodiversity. We specialize in Ceylon Cinnamon and Black Pepper."
        ],
        quickFacts: [
            { label: "Producer Type", value: "Cooperative" },
            { label: "Certifications", value: "Fairtrade, Organic" },
            { label: "Primary Crops", value: "Cinnamon, Pepper" },
            { label: "Annual Volume", value: "450 MT" },
        ],
        impact: [
            { title: "Women's Empowerment", text: "40% female board representation." },
            { title: "Community Fund", text: "Built a new library for local school." }
        ],
        images: [
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1621961458348-e5a07214fc63?auto=format&fit=crop&q=80"
        ],
        products_supplied: ["Ceylon Cinnamon Quills", "Black Pepper Whole"]
    },
    {
        id: "producer-2",
        name: "Uva Tea Smallholders",
        slug: "uva-tea-smallholders",
        type: "Association",
        location: "Badulla, Uva Province",
        est: "2005",
        members: "1,200 Members",
        certifications: ["Fairtrade", "Rainforest Alliance"],
        description: [
            "Located in the misty hills of Badulla, Uva Tea Smallholders Association produces some of the finest high-grown Ceylon tea.",
            "Our focus is on sustainable tea cultivation that protects the delicate mountain ecosystem while ensuring a living wage for our pluckers."
        ],
        quickFacts: [
            { label: "Producer Type", value: "Association" },
            { label: "Certifications", value: "Fairtrade, RA" },
            { label: "Primary Crops", value: "Black Tea, Green Tea" },
            { label: "Annual Volume", value: "1200 MT" },
        ],
        impact: [
            { title: "Clean Water", text: "Installed water filters for 200 families." },
            { title: "Healthcare", text: "Monthly mobile clinic for elderly members." }
        ],
        images: [
            "https://images.unsplash.com/photo-1597816760319-a612140bb715?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1546875508-251f93f1ac4e?auto=format&fit=crop&q=80"
        ],
        products_supplied: ["Organic Black Tea", "Green Tea Fannings"]
    },
    {
        id: "producer-3",
        name: "Golden Coconut Union",
        slug: "golden-coconut-union",
        type: "Union",
        location: "Kurunegala, North Western",
        est: "2010",
        members: "300 Members",
        certifications: ["Fairtrade", "ISO 22000"],
        description: [
            "Specializing in coconut-based value added products, from Virgin Coconut Oil to Desiccated Coconut.",
            "We utilize every part of the coconut, ensuring zero waste and maximum profitability for our member farmers."
        ],
        quickFacts: [
            { label: "Producer Type", value: "Union" },
            { label: "Certifications", value: "Fairtrade, ISO" },
            { label: "Primary Crops", value: "Coconut" },
            { label: "Annual Volume", value: "800 MT" },
        ],
        impact: [
            { title: "Education", text: "Scholarships for 50 university students." },
            { title: "Solar Power", text: "Factory runs on 80% renewable energy." }
        ],
        images: [
            "https://images.unsplash.com/photo-1624638760037-1473bd24775d?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80"
        ],
        products_supplied: ["Virgin Coconut Oil", "Coconut Milk"]
    },
    {
        id: "producer-4",
        name: "Ruhuna Fruit Collective",
        slug: "ruhuna-fruit-collective",
        type: "Collective",
        location: "Hambantota, Southern Province",
        est: "2015",
        members: "150 Members",
        certifications: ["Fairtrade", "GlobalGAP"],
        description: [
            "A vibrant collective of fruit farmers growing sweet mangoes, pineapples, and papayas in the Southern plains.",
            "We export premium dried fruits and fresh produce to the European market."
        ],
        quickFacts: [
            { label: "Producer Type", value: "Collective" },
            { label: "Certifications", value: "Fairtrade, GlobalGAP" },
            { label: "Primary Crops", value: "Mango, Pineapple" },
            { label: "Annual Volume", value: "200 MT" },
        ],
        impact: [
            { title: "Drought Resilience", text: "Built rainwater harvesting tanks." }
        ],
        images: [
            "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
        ],
        products_supplied: ["Dried Mango", "Fresh Pineapple"]
    }
];

export const products = [
    {
        id: "prod-1",
        name: "Organic Ceylon Cinnamon Quills",
        slug: "organic-ceylon-cinnamon",
        category: "Spices",
        description: "Authentic 'True Cinnamon' (Cinnamomum zeylanicum) harvested from certified organic cooperatives. Renowned for its delicate floral aroma and sweet taste.",
        quickStats: [
            { label: "Origin", value: "Kandy" },
            { label: "MOQ", value: "100 kg" },
            { label: "Harvest", value: "May-Dec" }
        ],
        specs: [
            { label: "Grade", value: "C5 Special" },
            { label: "Form", value: "Quills (42 inch)" },
            { label: "Moisture", value: "Max 12%" },
            { label: "Origin", value: "Kandy/Matale" }
        ],
        certifications: ["Fairtrade", "EU Organic"],
        images: [
            "https://images.unsplash.com/photo-1558994340-3b603314051a?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
        ],
        related_producers: ["producer-1"]
    },
    {
        id: "prod-2",
        name: "Premium Black Tea DOP",
        slug: "premium-black-tea",
        category: "Tea",
        description: "High-grown Broken Orange Pekoe (BOP) from the Uva region. A full-bodied tea with a distinct aromatic flavor profile.",
        quickStats: [
            { label: "Origin", value: "Uva" },
            { label: "MOQ", value: "500 kg" },
            { label: "Harvest", value: "Year-round" }
        ],
        specs: [
            { label: "Grade", value: "BOP" },
            { label: "Form", value: "Loose Leaf" },
            { label: "Origin", value: "Uva Province" }
        ],
        certifications: ["Fairtrade", "Rainforest Alliance"],
        images: [
            "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1563911892437-1feda920436d?auto=format&fit=crop&q=80"
        ],
        related_producers: ["producer-2"]
    },
    {
        id: "prod-3",
        name: "Virgin Coconut Oil",
        slug: "virgin-coconut-oil",
        category: "Coconut",
        description: "Cold-pressed virgin coconut oil, extracted from fresh coconut milk. Rich in MCTs and perfect for cooking or cosmetic use.",
        quickStats: [
            { label: "Origin", value: "Kurunegala" },
            { label: "MOQ", value: "1000 L" },
            { label: "Harvest", value: "Year-round" }
        ],
        specs: [
            { label: "Process", value: "Cold Pressed" },
            { label: "Acidity", value: "< 0.1%" },
            { label: "Packaging", value: "Glass Jar / Bulk" }
        ],
        certifications: ["Fairtrade", "ISO 22000", "Organic"],
        images: [
            "https://images.unsplash.com/photo-1624638760037-1473bd24775d?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
        ],
        related_producers: ["producer-3"]
    },
    {
        id: "prod-4",
        name: "Dried Mango Slices",
        slug: "dried-mango-slices",
        category: "Fruits",
        description: "Naturally dried mango slices with no added sugar. A healthy, sweet snack rich in vitamins.",
        quickStats: [
            { label: "Origin", value: "Hambantota" },
            { label: "MOQ", value: "100 kg" },
            { label: "Harvest", value: "May-Jul" }
        ],
        specs: [
            { label: "Variety", value: "Karthacolomban" },
            { label: "Sugar", value: "0% Added" },
            { label: "Shelf Life", value: "12 Months" }
        ],
        certifications: ["Fairtrade", "GlobalGAP"],
        images: [
            "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80" // placeholder reuse
        ],
        related_producers: ["producer-4"]
    },
    {
        id: "prod-5",
        name: "Whole Black Peppercorns",
        slug: "whole-black-pepper",
        category: "Spices",
        description: "Sun-dried black peppercorns with a high piperine content. Pungent, spicy, and perfect for grinding.",
        quickStats: [
            { label: "Origin", value: "Kandy" },
            { label: "MOQ", value: "300 kg" },
            { label: "Harvest", value: "Jan-Mar" }
        ],
        specs: [
            { label: "Grade", value: "550 GL" },
            { label: "Moisture", value: "< 12%" },
            { label: "Origin", value: "Kandy" }
        ],
        certifications: ["Fairtrade", "Organic"],
        images: [
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1558994340-3b603314051a?auto=format&fit=crop&q=80"
        ],
        related_producers: ["producer-1"]
    },
    {
        id: "prod-6",
        name: "Coconut Milk High Fat",
        slug: "coconut-milk-high-fat",
        category: "Coconut",
        description: "Creamy coconut milk with 18% fat content. Ideal for curries and desserts.",
        quickStats: [
            { label: "Origin", value: "Kurunegala" },
            { label: "MOQ", value: "500 L" },
            { label: "Harvest", value: "Year-round" }
        ],
        specs: [
            { label: "Fat Content", value: "17-19%" },
            { label: "Packaging", value: "Can / Tetra" }
        ],
        certifications: ["Fairtrade", "ISO 22000"],
        images: [
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1624638760037-1473bd24775d?auto=format&fit=crop&q=80"
        ],
        related_producers: ["producer-3"]
    }
];

export const news = [
    {
        id: "news-1",
        title: "Annual Fairtrade Producer Convention 2024",
        slug: "annual-fairtrade-producer-convention",
        type: "Events",
        date: "Oct 24, 2024",
        excerpt: "Over 500 delegates gathered in Colombo to discuss the future of sustainable agriculture and fair pricing strategies.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiJRSGctrz8RPkygL51dsNxhmjwgxW2AomZ9NRpJ5u-zqJxDlH2-F43lV-eKLkgOQIDGWypZ357VsIsupe3LpL-g6Q3pk-IFqEb1bDUIY1JK42rDIOv1S8DwReHRowv4pqoZheM5RzMxOS-5Qgfff-VMEzoZurgMNXo7OsPUOKfyj840iJh5nOVK7mN3S8OaWEqH6jTOBBr-Jm1f_LnqXZ_aK_83eXld9qV5EE_tdSLZOX7tj3eDdIFeRspMPuftbE8gBEemvBjoU"
    },
    {
        id: "news-2",
        title: "New Grant Announced for Organic Certification",
        slug: "organic-certification-grant",
        type: "News",
        date: "Sep 15, 2024",
        excerpt: "FNSL secures funding to help 50 new smallholder groups achieve organic certification status.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx5wFKcjIVxtrW__vCFJYxYE9lLY3ITLVgr2EqQ9SDpztKd9qkQjBuWSV7HqERcZFnvhZAJg7wl8_NuyIwq7OZSH372pXN4NbjQK5m97IMLsIvxseoyghwwJAx1UdWCamalQN-Rscx2xDHvH0qyg2-U_eNI-JPbqi9TlXouwBld506dw9quWlL1OCOnm-28X_9fh9BoUYf0jPHtNB9wUK4TgGd6X_ddx7EOXDUEKAwYFQd53nGdQTS3Qhu8qSp5Mhw_Z8NxD1H5rE"
    },
    {
        id: "news-3",
        title: "Partnership with European Retail Giants",
        slug: "european-retail-partnership",
        type: "Press Release",
        date: "Aug 02, 2024",
        excerpt: "Expanding the reach of Sri Lankan spices into new supermarkets across Germany and France.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLovcQkuzklh40Zeu1d_MljPs9DJaURKZjOxOuRluFlUEVrADnYQqe7BVXLGtpP2ZYnKGXqVlhuXgYgNzpy38pv0pOgrd15aji7mQdxzx3GqhTWqczXoou16C9Vc0_Grdj2aQhEhU8h6iuI2VxaNKds4kT1z3MaFC4XA5v24nm--K7wPi4Uw4VYKEj6xqgEDg-w7C2cCzIIfptu_eHk58rhWsB6UZLZtkJrg5JXxuow5WTN2WYkmtFuCjRVHvF4Mlllq8bOWRpYaI"
    }
]
