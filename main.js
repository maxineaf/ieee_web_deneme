
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
            myul.setAttribute('id', 'my_ul');

            data.forEach(item => {
                const myli = document.createElement('li');
                myli.textContent = item.title;
                myul.appendChild(myli);

            });

            const div = document.getElementById('app');
            div.appendChild(myul);
        })

        .catch(error => console.error(error));

}

getProducts()