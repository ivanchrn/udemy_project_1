

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          promoGenre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkBox = addForm.querySelector('[type = "checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkBox.checked;

        if(newFilm){

            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 21)}...`;
            }

            if(favorite){
                console.log('Added');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });
       
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
   };


    const makeChanges = () => {
        promoGenre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
   };    
   
    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';
         sortArr(movieDB.movies);

        
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });
        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);
            });
        });
    }
//-----------------------------------------Call func--------------------------------------

    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);

});


var x, y = 42;
console.log(x);