// Gallery Configuration File
// Update this file when adding new images to the folders
// This allows for dynamic gallery updates without changing HTML

const galleryConfig = {
  dormitory: [
    {
      src: "images/rooms/dormitory/eleven-hostel.jpg",
      alt: "Dormitory Room",
      title: "Dormitory Room",
      description: "Budget-friendly accommodation for travelers",
    },
    {
      src: "images/rooms/dormitory/dorm-2.jpg",
      alt: "Dormitory Room View",
      title: "Dormitory Room View",
      description: "Comfortable dormitory accommodation",
    },
    // Add new dormitory images here
  ],
  deluxe: [
    {
      src: "images/rooms/deluxe/private-room.jpg",
      alt: "Deluxe Room - Main View",
      title: "Deluxe Room - Main View",
      description: "Spacious and comfortable accommodation",
    },
    {
      src: "images/rooms/deluxe/eleven-car-bedroom.jpg",
      alt: "Deluxe Room - Bedroom",
      title: "Deluxe Room - Bedroom",
      description: "Comfortable sleeping area with garden views",
    },
    {
      src: "images/rooms/deluxe/delux-4.jpg",
      alt: "Deluxe Room - Interior",
      title: "Deluxe Room - Interior",
      description: "Elegant interior design",
    },
    {
      src: "images/rooms/deluxe/delux-wall.jpg",
      alt: "Deluxe Room - Wall Detail",
      title: "Deluxe Room - Wall Detail",
      description: "Beautiful wall decoration",
    },
    {
      src: "images/rooms/deluxe/delux-fresh.jpg",
      alt: "Deluxe Room - Fresh View",
      title: "Deluxe Room - Fresh View",
      description: "Clean and fresh room atmosphere",
    },
    {
      src: "images/rooms/deluxe/delux-bed.jpg",
      alt: "Deluxe Room - Bed",
      title: "Deluxe Room - Bed",
      description: "Comfortable bed for restful sleep",
    },
    {
      src: "images/rooms/deluxe/delux-wash.jpg",
      alt: "Deluxe Room - Bathroom",
      title: "Deluxe Room - Bathroom",
      description: "Private bathroom facilities",
    },
    {
      src: "images/rooms/deluxe/delux-close.jpg",
      alt: "Deluxe Room - Close View",
      title: "Deluxe Room - Close View",
      description: "Detailed view of room amenities",
    },
    // Add new deluxe room images here
  ],
  garden: [
    {
      src: "images/rooms/garden/eleven-car-garden.jpg",
      alt: "Garden View",
      title: "Garden View",
      description: "Beautiful outdoor seating area",
    },
    {
      src: "images/rooms/garden/eleven-car-garden1.jpg",
      alt: "Garden Entrance",
      title: "Garden Entrance",
      description: "Welcoming entrance to our property",
    },
    {
      src: "images/rooms/garden/eleven-garden2.jpg",
      alt: "Garden Space",
      title: "Garden Space",
      description: "Peaceful outdoor space for relaxation",
    },
    {
      src: "images/rooms/garden/eleven-garden-night.jpg",
      alt: "Garden at Night",
      title: "Garden at Night",
      description: "Magical evening atmosphere",
    },
    {
      src: "images/rooms/garden/common-green.jpg",
      alt: "Green Garden Area",
      title: "Green Garden Area",
      description: "Lush green garden space",
    },
    {
      src: "images/rooms/garden/garden-hat.jpg",
      alt: "Garden Hat",
      title: "Garden Hat",
      description: "Charming garden decoration",
    },
    // Add new garden images here
  ],
  "common-area": [
    {
      src: "images/rooms/common-area/eleven-car-basement.jpg",
      alt: "Basement Common Area",
      title: "Basement Common Area",
      description: "Additional shared space for guests",
    },
    {
      src: "images/rooms/common-area/eleven-car-lady.jpg",
      alt: "Meet Lady - Our Pet",
      title: "Meet Lady - Our Pet",
      description: "Our friendly resident Shih Tzu",
    },
    {
      src: "images/rooms/common-area/eleven-fire.jpg",
      alt: "Fireplace Common Area",
      title: "Fireplace Common Area",
      description: "Cozy gathering space with fireplace",
    },
    {
      src: "images/rooms/common-area/eleven-dining2.jpg",
      alt: "Dining Common Area",
      title: "Dining Common Area",
      description: "Shared dining space for all guests",
    },
    {
      src: "images/rooms/common-area/eleven-fireplace.jpg",
      alt: "Fireplace Detail",
      title: "Fireplace Detail",
      description: "Cozy fireplace for evening relaxation",
    },
    {
      src: "images/rooms/common-area/eleven-car-sitout.jpg",
      alt: "Sitting Area",
      title: "Sitting Area",
      description: "Comfortable sitting space for guests",
    },
    {
      src: "images/rooms/common-area/common-fireplace.jpg",
      alt: "Common Fireplace",
      title: "Common Fireplace",
      description: "Shared fireplace area",
    },
    {
      src: "images/rooms/common-area/common-chess.jpg",
      alt: "Chess Area",
      title: "Chess Area",
      description: "Game area for guests",
    },
    {
      src: "images/rooms/common-area/common-fire.jpg",
      alt: "Common Fire",
      title: "Common Fire",
      description: "Warm fire in common area",
    },
    {
      src: "images/rooms/common-area/common-stair.jpg",
      alt: "Staircase",
      title: "Staircase",
      description: "Beautiful staircase design",
    },
    {
      src: "images/rooms/common-area/corridor.jpg",
      alt: "Corridor",
      title: "Corridor",
      description: "Elegant corridor design",
    },
    // Add new common area images here
  ],
  kutaisi: [
    {
      src: "images/rooms/kutaisi/kutaisi-bagrati.JPG",
      alt: "Bagrati Cathedral",
      title: "Bagrati Cathedral",
      description: "Historic cathedral overlooking Kutaisi",
    },
    {
      src: "images/rooms/kutaisi/kutaisi-theatre.JPG",
      alt: "Kutaisi Theatre",
      title: "Kutaisi Theatre",
      description: "Beautiful theater in the heart of the city",
    },
    {
      src: "images/rooms/kutaisi/kutaisi-ropeview.JPG",
      alt: "Kutaisi Rope Bridge",
      title: "Kutaisi Rope Bridge",
      description: "Scenic rope bridge with city views",
    },
    {
      src: "images/rooms/kutaisi/kutaisi-board.jpg",
      alt: "Kutaisi Information Board",
      title: "Kutaisi Information Board",
      description: "Local information and attractions guide",
    },
    // Add new Kutaisi attraction images here
  ],
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = galleryConfig;
}

// Function to load images from configuration into the gallery
function loadImagesFromConfig() {
  const galleryGrid = document.getElementById("galleryGrid");

  if (!galleryGrid) {
    console.error("Gallery grid element not found");
    return;
  }

  // Clear existing items
  galleryGrid.innerHTML = "";

  // Add images from config
  Object.keys(galleryConfig).forEach((category) => {
    galleryConfig[category].forEach((image) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.setAttribute("data-category", category);

      galleryItem.innerHTML = `
        <img src="${image.src}" alt="${image.alt}" loading="lazy" />
        <div class="gallery-overlay">
          <h4>${image.title}</h4>
          <p>${image.description}</p>
        </div>
      `;

      galleryGrid.appendChild(galleryItem);
    });
  });

  console.log(
    "Gallery loaded with",
    Object.keys(galleryConfig).reduce(
      (total, category) => total + galleryConfig[category].length,
      0
    ),
    "images"
  );

  // Apply default filter to show only deluxe rooms
  setTimeout(() => {
    const deluxeItems = document.querySelectorAll(
      '.gallery-item[data-category="deluxe"]'
    );
    const allItems = document.querySelectorAll(".gallery-item");

    allItems.forEach((item) => {
      item.style.display = "none";
    });

    deluxeItems.forEach((item) => {
      item.style.display = "block";
    });
  }, 50);
}
