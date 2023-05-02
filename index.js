var content=document.getElementById("circle-content");
// console.log(content.innerHTML);

const names=["laddu","kothi","deyyam","mowa","baa"];
let currentIndex=0;
setInterval(() => {
    content.innerHTML = names[currentIndex];
    currentIndex = (currentIndex + 1) % names.length;
  }, 2000);