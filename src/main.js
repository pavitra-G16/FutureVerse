 import './style.css'

import { navbar } from './sections/navbar'
import { hero } from './sections/hero'
import { features } from './sections/features'
import { about } from './sections/about'
import { services } from './sections/services'
import { stats } from './sections/stats'
import { contact } from './sections/contact'
import { footer } from './sections/footer'

document.querySelector('#app').innerHTML = `
<div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-cyan-950 text-white">

  <div class="absolute top-40 left-40 w-72 h-72 bg-cyan-500 rounded-full blur-[180px] opacity-20"></div>

  <div class="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-[180px] opacity-20"></div>

  ${navbar}

  ${hero}

  ${features}

  ${about}

  ${services}

  ${stats}

  ${contact}

  ${footer}

</div>
`