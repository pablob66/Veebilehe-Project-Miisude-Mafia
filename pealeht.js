// Array of image paths and corresponding subpage links
const imageLinks = [
    { src: "pildid/Siidor.jpg", href: "Mirelle.html" },
    { src: "pildid/my_po.png", href: "Anne-Liine.html" },
    { src: "pildid/IMG_0443.jpg", href: "Patrick.html" }
  ];
  
  // Get the container for images
  const container = document.getElementById("image-links");
  
  // Loop through the images and create clickable links
  imageLinks.forEach((item) => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = item.href;
  
    // Create an image element
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = "Clickable image";

    // Append the image to the link
    link.appendChild(image);
  
    // Append the link to the container
    container.appendChild(link);
  });
  