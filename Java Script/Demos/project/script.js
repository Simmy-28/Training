function showhidemenu() {
  let menu = document.querySelector('.nav-bar')
  if (menu.style.display === 'flex') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'flex'
  }
}

function showpassword() {
  let pwd = document.querySelector('#passwd').getAttribute('type')
  if (pwd === 'password') {
    document.querySelector('#passwd').setAttribute('type', 'text')
  } else {
    document.querySelector('#passwd').setAttribute('type', 'password')
  }
}

function validateForm() {
  let fname = document.querySelector('#fname').value
  if (fname === '' || fname.length < 3 || fname.length > 40) {
    document.querySelector('.error').innerHTML += '<br> First name is invalid'
    return false
  }

  let lname = document.querySelector('#lname').value
  if (lname === '' || lname.length < 3 || lname.length > 40) {
    document.querySelector('.error').innerHTML += '<br> Last name is invalid'
    return false
  }

  let phone = document.querySelector('#mobile').value
  let pattern = /^\d{10}$/    //regular expression
  if (!pattern.test(phone)) {
    document.querySelector('.error').innerHTML += '<br>Phone is invalid'
    return false
  }

  let pin = document.querySelector('#pin').value
  console.log(pin)
  pin = parseInt(pin)
  pattern = /^\d{6}$/       //regular expression
  if (!pattern.test(pin)) {
    document.querySelector('.error').innerHTML += '<br>pin is invalid'
    return false
  }

  let email = document.querySelector('#email').value
  pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/   //regular expression
  if (!pattern.test(email)) {
    document.querySelector('.error').innerHTML += '<br>email is invalid'
    return false
  }
}

/*function loadProduct() {
  var xhttp = new XMLHttpRequest();   //useful to call rest api
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {   //200 status code --> ok
      let res = []
      res = JSON.parse(this.responseText)

      var product = ''
      res.forEach(p => {
        product +=
          `
        <div class="product">
          <img src=${p.url} >                    
          <p>${p.title.substring(0, 20)}</p>                          
          <button>Add to Cart</button>
          </div>
      `
      });
      console.log(product)
      document.querySelector('.product-container').innerHTML = product
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
  xhttp.send();
}*/

//////////////////////////////////////////////////////////


