import React from 'react'
import Img1 from './images/animal_1.jpg'
import Img2 from './images/animals_2.jpg'
import Img3 from './images/animals_3.jpg'
export default function Animals() {
  return (
    <div>
         <section class="animal" id="animal">

<h2 class="heading">Animales Novedosos</h2>

<div class="container mx-auto flex space-x-15 justify-center">

    <div className="box-border h-120 w-48 p-4 border-4 ">
        <img src={Img1} className="object-cover h-120 w-48 hover:object-scale-down" alt=""/>
        <div class="box-content h-32 w-32 p-4 border-4">
            <h3>Camaleon</h3>
            <br/>
            <a href="#h" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Detalles</a>
        </div>
    </div>

    <div className="box-border h-120 w-48 p-4 border-4">

        <img src={Img2} className="object-cover h-120 w-48 hover:object-scale-down" alt=""/>
        <div class="box-content h-32 w-32 p-4 border-4">
            <h3>Zebra</h3>
            <br/>
            <a href="#h" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Detalles</a>
        </div>
    </div>

    <div className="box-border h-200 w-48 p-4 border-4">
        <img src={Img3} className="object-cover h-120 w-48 hover:object-scale-down" alt=""/>
        <div class="box-content h-32 w-32 p-4 border-4">
            <h3>Jirafa</h3>
            <br/>
            <a href="#h" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Detalles</a>
        </div>
    </div>

</div>

</section>
    </div>
  )
}
