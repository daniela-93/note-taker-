const path = require('path')

module.exports = function(app) {


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('/assets/js/index.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/assets/js/index.js'));
});

};