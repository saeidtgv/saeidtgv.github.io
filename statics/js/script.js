let dataType = document.getElementsByClassName("typed")[0];
let list = dataType.dataset.typedItems.split(",");

const data_Writer = (text) => {
  var index = 0;
  dataType.innerHTML = ''
  const typeWriter = () => {
    if (index < text.length) {
      dataType.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 200);
    }
  };
  return typeWriter();
};

const date_map = () => {
  list.map((item, index) => {
    setTimeout(() => {
      data_Writer(item);
    }, 3500 * index);
  });
};

window.onload = () => {
  date_map()
};
setInterval(() => date_map(), 7000);
