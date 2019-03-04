// Welcome Page
const appController = {
  index: (req, res) => {
    res.render('welcome')
  },
  // Dashboard
  dashboard: (req, res) =>
    res.render('dashboard', {
      user: req.user
    })
}

module.exports = appController