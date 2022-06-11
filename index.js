// -------- root property from CSS ---------
const root = document.querySelector(':root')



// ========================================================
// ------------------- SIDEBAR SECTION---------------------


const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(item => {
   item.addEventListener('click', () => {
      changeActiveItem();
      item.classList.add('active');

      if (item.id != 'notifications') {
         document.querySelector('.notifications-popup').style.display = 'none';
      } else {
         document.querySelector('.notifications-popup').style.display = 'block';
         document.querySelector('#notifications .notification-count').style.display = 'none'
      }
   })
})

const changeActiveItem = () => {
   menuItems.forEach(item => {

      item.classList.remove('active')
   })
}

// ---------------END OF SIDEBAR SECTION ------------------
// ========================================================




// ========================================================
// ------------------ MESSAGES SECTION---------------------

const messagesNotification = document.querySelector('#messages-notifications')
const messages = document.querySelector('.messages')
const message = document.querySelectorAll('.message')


messagesNotification.addEventListener('click', () => {
   messages.style.boxShadow = '0 0 1rem var(--color-primary)';
   messagesNotification.querySelector('.notification-count').style.display = 'none';
   setTimeout(() => {
      messages.style.boxShadow = 'none'
   }, 2000);
})

// --------------- END OF MESSAGES SECTION ----------------
// ========================================================




// ========================================================
// ----------------SEARCH MESSAGES SECTION-----------------

const messageSearch = document.querySelector('#message-search')


const searchMessage = () => {
   const val = messageSearch.value.toLowerCase();
   console.log(val);
   message.forEach(chat => {
      let names = chat.querySelector('h5').textContent.toLowerCase()
      console.log(names);
      if (names.indexOf(val) != -1) {
         chat.style.display = 'flex'
      } else {
         chat.style.display = 'none'
      }

   })
}
messageSearch.addEventListener('keyup', searchMessage)

// ------------ END OF SEARCH MESSAGES SECTION ------------
// ========================================================





// ========================================================
// --------------- THEME BUTTONS SECTION ------------------


const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')


const openThemeModal = () => {
   themeModal.style.display = 'grid'

}

const closeThemeModal = (e) => {
   if (e.target.classList.contains('customize-theme')) {
      themeModal.style.display = 'none'
   }
}

themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal)



// ----------- END OF THEME BUTTONS SECTION ---------------
// ========================================================





// ========================================================
// ----------------- FONT SIZE SECTION --------------------


const fontSizes = document.querySelectorAll('.choose-size span')


const removeSizeSelector = () => {
   fontSizes.forEach(size => {
      size.classList.remove('active')
   })
}

fontSizes.forEach(size => {
   size.addEventListener('click', () => {
      removeSizeSelector()
      let fontSize
      size.classList.toggle('active')


      if (size.classList.contains('font-size-1')) {
         fontSize = '10px'
         root.style.setProperty('--sticky-top-left', '5.4rem')
         root.style.setProperty('--sticky-top-right', '5.4rem')
      }
      if (size.classList.contains('font-size-2')) {
         fontSize = '13px'
         root.style.setProperty('--sticky-top-left', '5.4rem')
         root.style.setProperty('--sticky-top-right', '-7rem')
      }
      if (size.classList.contains('font-size-3')) {
         fontSize = '16px'
         root.style.setProperty('--sticky-top-left', '-2rem')
         root.style.setProperty('--sticky-top-right', '-17rem')
      }
      if (size.classList.contains('font-size-4')) {
         fontSize = '19px'
         root.style.setProperty('--sticky-top-left', '-5rem')
         root.style.setProperty('--sticky-top-right', '-25rem')
      }
      if (size.classList.contains('font-size-5')) {
         fontSize = '22px'
         root.style.setProperty('--sticky-top-left', '-10rem')
         root.style.setProperty('--sticky-top-right', '-33rem')
      }
      document.querySelector('html').style.fontSize = fontSize
   })
})

// ------------- END OF FONT SIZE SECTION -----------------
// ========================================================





// ========================================================
// ---------------- CHANGE COLOR SECTION-------------------

const colorPalette = document.querySelectorAll('.choose-color span')


const changeActiveColorClass = () => {
   colorPalette.forEach(colorPicket => {
      colorPicket.classList.remove('active')
   })
}

colorPalette.forEach(color => {
   color.addEventListener('click', () => {
      changeActiveColorClass()
      color.classList.toggle('active')
      if (color.classList.contains('color-1')) {
         primaryHue = 252
      }
      if (color.classList.contains('color-2')) {
         primaryHue = 52
      }
      if (color.classList.contains('color-3')) {
         primaryHue = 352
      }
      if (color.classList.contains('color-4')) {
         primaryHue = 152
      }
      if (color.classList.contains('color-5')) {
         primaryHue = 202
      }


      root.style.setProperty('--primary-color-hue', primaryHue)
   })
})


// ------------ END OF CHANGE COLOR SECTION ---------------
// ========================================================




// ========================================================
// -----------------BACKGROUND SECTION---------------------

const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')

let lightColorLightness
let whiteColorLightness
let darkColorLightness

const changeBG = () => {
   root.style.setProperty('--light-color-lightness', lightColorLightness)
   root.style.setProperty('--white-color-lightness', whiteColorLightness)
   root.style.setProperty('--dark-color-lightness', darkColorLightness)

}

bg1.addEventListener('click', () => {
   bg1.classList.add('active')
   bg2.classList.remove('active')
   bg3.classList.remove('active')

   window.location.reload()

})

bg2.addEventListener('click', () => {
   darkColorLightness = '95%'
   whiteColorLightness = '20%'
   lightColorLightness = '15%'

   bg2.classList.add('active')
   bg1.classList.remove('active')
   bg3.classList.remove('active')
   changeBG()
})
bg3.addEventListener('click', () => {
   darkColorLightness = '95%'
   whiteColorLightness = '10%'
   lightColorLightness = '0%'

   bg3.classList.add('active')
   bg1.classList.remove('active')
   bg2.classList.remove('active')


   changeBG()
})

// ------------- END OF BACKGROUND SECTION ----------------
// ========================================================