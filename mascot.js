const mascotWrapper = document.getElementById("mascotWrapper");

if (mascotWrapper) {
  mascotWrapper.addEventListener("mousemove", (event) => {
    const rect = mascotWrapper.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    mascotWrapper.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  mascotWrapper.addEventListener("mouseleave", () => {
    mascotWrapper.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  });
}