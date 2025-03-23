import React from 'react'
function Items() {
  return (
    <div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="./images.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Biryani</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./poori.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Poori</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Noodles.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Noodles</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./palov.jpg" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title">Palov</h5>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Items