// Pildid mis viivad kasutaja teisele lingitud lehele
const imageLinks = [
    { src: "pildid/Siidor.jpg", href: "Mirelle.html" },
    { src: "pildid/my_po.png", href: "Anne-Liine.html" },
    { src: "pildid/IMG_0443.jpg", href: "Patrick.html" }
  ];
  
  // Piltide konteiner
  const container = document.getElementById("image-links");
  
  
  imageLinks.forEach((item) => {
    // Uus element
    const link = document.createElement("a");
    link.href = item.href;
  
    // Pildi Element
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = "Clickable image";

    // Link piltide jaoks
    link.appendChild(image);
  
    // Lingid konteinerisse
    container.appendChild(link);
  });
  