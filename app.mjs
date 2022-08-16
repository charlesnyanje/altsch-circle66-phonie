function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  const phoneNumber = document.querySelector('#tel');
  const images = document.querySelectorAll('.image');

  const humburger = document.querySelector('.humburger');

  const navMenu = document.querySelector('.nav-menu');

  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    humburger.classList.remove('active');
    navMenu.classList.remove('active');
  });

  humburger.addEventListener('click', () => {
    humburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  phoneNumber.addEventListener('input', () => {

    if (phoneNumber.value[1] === '9') {
      images[0].classList.add('active');

    } else {
      images[0].classList.remove('active');
    }

    if (phoneNumber.value[1] === '8') {
      images[1].classList.add('active');
    } else {
      images[1].classList.remove('active');
    }

    if (phoneNumber.value[2] === '3') {
      images[2].classList.add('active');
    } else {
      images[2].classList.remove('active');
    }

    if (phoneNumber.value[2] === '2') {
      images[3].classList.add('active');
    } else {
      images[3].classList.remove('active');
    }


  })

}


// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //