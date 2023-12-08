const products=[
  {
    image:'sources/cam1.webp',
    title :'Camiseta 1',
    price:'38500',
    carr:'agregar al carrito',
  },
  // 2
  {
    image:'sources/cam2.webp',
    title :'Camiseta 2',
    price:'39000',
    carr:'agregar al carrito',
  },
  // 3
  {
    image:'sources/cam3.webp',
    title :'Camiseta 3',
    price:'45000',
    carr:'agregar al carrito',
  },

      // 4
  {
    image:'sources/cam4.webp',
    title :'Camiseta 4',
    price:'15000',
    carr:'agregar al carrito',
  },
    // 5
    {
      image:'sources/cam5.webp',
      title :'Camiseta 5',
      price:'50000',
      carr:'agregar al carrito',
    },
      // 6
  {
    image:'sources/cam6.webp',
    title :'Camiseta 6',
    price:'80000',
    carr:'agregar al carrito',
  },
    // 7
    {
      image:'sources/cam7.webp',
      title :'Camiseta 7',
      price:'70000',
      carr:'agregar al carrito',
    },
      // 8
  {
    image:'sources/cam8.webp',
    title :'Camiseta 8',
    price:'45000',
    carr:'agregar al carrito',
  },
    // 9
    {
      image:'sources/cam9.webp',
      title :'Camiseta 9',
      price:'78000',
      carr:'agregar al carrito',
    },
    // 10
    {
      image:'sources/cam10.webp',
      title :'Camiseta 10',
      price:'80000',
      carr:'agregar al carrito',
    },
      // 11
      {
        image:'sources/cam11.webp',
        title :'Camiseta 11',
        price:'67500',
        carr:'agregar al carrito',
      },
      // 12
      {
        image:'sources/cam12.webp',
        title :'Camiseta 12',
        price:'46700',
        carr:'agregar al carrito',
      },
      // 13
      {
        image:'sources/cam13.webp',
        title :'Camiseta 13',
        price:'1000',
        carr:'agregar al carrito',
      },
    
          // 14
      {
        image:'sources/cam14.webp',
        title :'Camiseta 14',
        price:'45000',
        carr:'agregar al carrito',
      },
        // 15
        {
          image:'sources/cam15.webp',
          title :'Camiseta 15',
          price:'68000',
          carr:'agregar al carrito',
        },
          // 16
      {
        image:'sources/cam16.webp',
        title :'Camiseta 16',
        price:'90000',
        carr:'agregar al carrito',
      },
        // 17
        {
          image:'sources/cam17.webp',
          title :'Camiseta 17',
          price:'80900',
          carr:'agregar al carrito',
        },
          // 18
      {
        image:'sources/cam18.webp',
        title :'Camiseta 18',
        price:'78000',
        carr:'agregar al carrito',
      },
        // 19
        {
          image:'sources/cam19.webp',
          title :'Camiseta 19',
          price:'77000',
          carr:'agregar al carrito',
        },
        // 20
        {
          image:'sources/cam20.webp',
          title :'Camiseta 20',
          price:'99000',
          carr:'agregar al carrito',
        },
              // 21
      {
        image:'sources/cam21.webp',
        title :'Camiseta 21',
        price:'58900',
        carr:'agregar al carrito',
      },
      // 22
      {
        image:'sources/cam22.webp',
        title :'Camiseta 22',
        price:'99999',
        carr:'agregar al carrito',
      },
      // 23
      {
        image:'sources/cam23.webp',
        title :'Camiseta 23',
        price:'40000',
        carr:'agregar al carrito',
      },
    
          // 24
      {
        image:'sources/cam24.webp',
        title :'Camiseta 24',
        price:'67000',
        carr:'agregar al carrito',
      },
        // 25
        {
          image:'sources/cam25.webp',
          title :'Camiseta 25',
          price:'89000',
          carr:'agregar al carrito',
        },
          // 26
      {
        image:'sources/cam26.webp',
        title :'Camiseta 26',
        price:'78000',
        carr:'agregar al carrito',
      },
        // 27
        {
          image:'sources/cam27.webp',
          title :'Camiseta 27',
          price:'68900',
          carr:'agregar al carrito',
        },
          // 28
      {
        image:'sources/cam28.webp',
        title :'Camiseta 28',
        price:'56700',
        carr:'agregar al carrito',
      },
        // 29
        {
          image:'sources/cam29.webp',
          title :'Camiseta 29',
          price:'32400',
          carr:'agregar al carrito',
        },
        // 30
        {
          image:'sources/cam30.webp',
          title :'Camiseta 30',
          price:'76800',
          carr:'agregar al carrito',
        }    
];
////-----------------------------------------

const container = document.getElementById('div1')
const selectProducts =document.querySelector('#select-products')
////-----------------------------------------
btnCreate = document.getElementById('btn-create');
let imgSelected = "";
let idProduct = 0;

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const newProduct = document.getElementById('new-product');
const newPrice = document.getElementById('new-price');
const newImage = document.getElementById('new-image');
const btnNewProduct = document.getElementById('btn-new-create');

const filterXPrice = document.getElementById('filterXPrice');

btnCreate.addEventListener('click', showModal);
btnNewProduct.addEventListener('click', createNewProduct);
newImage.addEventListener('change', importImg);
closeModal.addEventListener('click',()=>modal.style.display ='none');

filterXPrice.addEventListener('change', filterProducts);
function filterProducts(event) {
  const responseFilter = event.target.value === 'menor a 30 mil'
  ? products.filter(moto => moto.price < 30000)
   : event.target.value === 'Entre 30 y 60 mil'
   ? products.filter(moto => moto.price >= 30000 && moto.price <= 60000)
   : event.target.value === 'mayor a 60 mil'
   ? products.filter(moto => moto.price > 60000)
   : event.target.value === 'Todos los Pruductos'
   ? products.filter(moto => moto.price > 100)
  :null;
  container.innerHTML='';
  responseFilter.map(moto => addCard(moto))
}



function importImg(event) {
  const currentImg = event.target.files[0];
  const objetURL =URL.createObjectURL(currentImg);
  imgSelected = objetURL;
}

function createNewProduct() {
  idProduct++;
  const titleProduct = newProduct.value;
  const priceProduct = newPrice.value;
  // const id = idProduct;

  let newMoto ={ title:titleProduct, price:priceProduct, image:imgSelected, carr:'agregar al carrito',};


  products.push(newMoto);

 modal.style.display ='none';
 addCard(newMoto)
 save();
 console.log(save());
}
function renderCards() {
  moto.map( moto => { moto.product === selectProducts.value ? addCard(fruit) : null } );
}
//-------------------------------------------------------
//   const imgCard = document.createElement('img')
//   imgCard.src = imgSelected.image
//   imgCard.alt = imgSelected.title


//   const div2 = document.createElement('div')
//   div2.classList.add('info-product')

//   const title = document.createElement("h2")
//   title.textContent= newNewMoto.title
//   title.classList.add('title')

//   const price = document.createElement('p')
//   price.textContent= '$'+newNewMoto.price
//   price.classList.add('price')

//   const carr = document.createElement('button')
//   carr.textContent= 'agregar al carrito';
//   carr.classList.add('btn-car')


//   card.appendChild(imgCard)
//   card.appendChild(div2)
//   div2.appendChild(title)
//   div2.appendChild(price)
//   div2.appendChild(carr)

// // card.innerHTML= container.title +" "+ container.price +" "+ container.image+" " + container.carr ;
//   container.appendChild(card)
//  });
// }

 function showModal() {
  modal.style.display ='flex';
 }


////---------------------------------------------



function addCard(product) {
  
  const card = document.createElement('div')
  card.classList.add('item')

  const imgCard = document.createElement('img')
  imgCard.src = product.image
  imgCard.alt = product.title


  const div2 = document.createElement('div')
  div2.classList.add('info-product')

  const title = document.createElement("h2")
  title.textContent= product.title
  title.classList.add('title')

  const price = document.createElement('p')
  price.textContent= '$'+product.price
  price.classList.add('price')

  const carr = document.createElement('button')
  carr.textContent= product.carr
  carr.classList.add('btn-car')


  card.appendChild(imgCard)
  card.appendChild(div2)
  div2.appendChild(title)
  div2.appendChild(price)
  div2.appendChild(carr)


  container.appendChild(card)
}

window.addEventListener('DOMContentLoaded', () => {
  products.forEach( element => addCard(element) )
  save();
  console.log(save());
})

// Funcionalidades carritos
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

const productsList = document.querySelector('.div1');



let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e=> {
if (e.target.classList.contains('btn-car'))  {
    const product = e.target.parentElement;

    const infoProduct = {
        quantity: 1,
        title: product.querySelector('h2').textContent,
        price: product.querySelector('p').textContent,
    }

    const exits = allProducts.some(
     product => product.title === infoProduct.title
    );

    if (exits) {
      const updateProducts = allProducts.map(product =>{
        if (product.title === infoProduct.title) {
          product.quantity++;
          return product;
          
        }else{
          return product;
        }
      });
      allProducts=[...updateProducts]
    } else{
      allProducts = [...allProducts, infoProduct]

    }
    showHTML();
}

});

rowProduct.addEventListener('click', e=>{
  if (e.target.classList.contains('icon-close')){
    const product= e.target.parentElement;
    const title= product.querySelector('p').textContent;

    allProducts=allProducts.filter(
      product => product.title !== title
   );
    console.log(allProducts);
    showHTML();
  }
});

const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
    <div class="info-cart-product">
    <span class="cantidad-producto-carrito">${product.quantity}</span>
    <p class="titulo-producto-carrito">${product.title}</p>
    <span class="precio-producto-carrito">${product.price}</span>
</div>
<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="icon-close"
>
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
    />
</svg>
        `;

		rowProduct.append(containerProduct);

		total = 
     total + parseFloat(product.quantity * parseFloat(product.price.slice(1)));
		totalOfProducts = totalOfProducts + product.quantity;
console.log(total);
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
  console.log( `$${total}`);

};
  

function save() {
  localStorage.setItem("card", JSON.stringify(products))
}
loading();
function loading(){
  products= JSON.parse(localStorage.getItem("card"))
  products.forEach(product => console.log(product));
}