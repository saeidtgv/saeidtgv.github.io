let dataType = document.getElementsByClassName("typed")[0];
let list = dataType.dataset.typedItems.split(",");

const data_Writer = (testtxt) => {
  var irrr = 0;
  dataType.innerHTML = ''
  const typeWriter = () => {
    if (irrr < testtxt.length) {
      dataType.innerHTML += testtxt.charAt(irrr);
      irrr++;
      setTimeout(typeWriter, 200);
    }
  };
  return typeWriter();
};

const date_map = () => {
  list.map((item, index) => {
    setTimeout(() => {
      data_Writer(item);
    }, 3000 * index);
  });
};
date_map();
setInterval(() => date_map(), 6000);
