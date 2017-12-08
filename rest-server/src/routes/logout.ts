export default (req, res) => {
  req.session.destroy((err) => {
    res.send();
  })
}
