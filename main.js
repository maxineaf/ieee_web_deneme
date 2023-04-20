
/**
 * Bir mağaza sitesindeki ürünleri listelemek için bir kod yazmanızı istiyorum.
 * HTML dosyası içinde bir listede SADECE ürün isimlerinin yazılı olmasını istiyorum
 * 
 * @link API documents: https://fakestoreapi.com/docs
 * @link Ürünlerin çekileceği sırada kullanılacak link: https://fakestoreapi.com/products
 * @link veri çekme linki: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API,
 * @link programatik olarak HTML elementi oluşturma https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 */
function getProducts(){

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const myul = document.createElement('ul');
          
            //myimg.setAttribute('id', 'my_img'); //not important rn

            data.forEach(item => {
                const myli = document.createElement('li');
                const myimg = document.createElement('img');

                myimg.src = item.image;

                const myspan = document.createElement('span');
                myspan.setAttribute('id', 'my_span');
                myspan.textContent = item.title;

                myli.appendChild(myimg);
                myli.appendChild(myspan);
                myul.appendChild(myli);

            });

            const div = document.getElementById('app');
            div.appendChild(myul);
        })

        .catch(error => console.error(error));

}

getProducts()