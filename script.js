

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function (e) {
    
    if (e.target.tagName === "SELECT") return;

    boxes.forEach(b => {
      if (b !== box) b.classList.remove('expanded');
    });

    box.classList.toggle('expanded');
  });

  
});
