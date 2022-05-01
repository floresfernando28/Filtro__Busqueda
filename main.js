// Añadimos funcionalidad al buscador de las peliculas 

const buscador = document.getElementById('buscador');

buscador.addEventListener('keyup', (e)=>{

    
    if(e.target.matches('#buscador')){
        let cajas = document.querySelectorAll('.cajas')
        cajas.forEach((movie)=>{
            if(movie.textContent.toLowerCase().includes(e.target.value.toLowerCase())){
                movie.classList.remove('filtro')
            }else{
                movie.classList.add('filtro')
            }
        })
    }

})
