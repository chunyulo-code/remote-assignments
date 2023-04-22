const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

function ajax(url) {
  return fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      return `HTTP error! ${res.status}`;
    })
    .catch((err) => console.error(err));
}

function render(data) {
  const root = document.querySelector("#root");
  let html = "";
  data.forEach((d) => {
    html += `<div class="product">
        <p>Name: ${d.name}</p>
        <p>Price: ${d.price}</p>
        <p>Description: ${d.description}</p>
        <button>Add to cart</button>
      </div><br>`;
  });
  root.innerHTML = html;
}

ajax(url).then((data) => render(data));
