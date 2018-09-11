const express = require('express')
const routerCervezas = require('./cervezas')

// para establecer las distintas rutas, necesitamos instanciar el express router
const router = express.Router()

// establecemos nuestra primera ruta, mediante get.
router.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

router.use('/cervezas', routerCervezas)

module.exports = router
