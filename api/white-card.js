
module.exports = (req, res) => {
  const { text = 'Please provide "text" parameter' } = req.query;

  res.setHeader('Content-Type', 'text/html')
  res.status(200)
    .send(`
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>White Card</title>
  <style>
    body {
      background-color: lightgray;
    }
    .card {
      width: 31mm;
      height: 44mm;
      border: black solid 1px;
      border-radius: 5mm;
      padding: 5mm;
      font-family: sans-serif;
      font-size: 14pt;
      color: black;
      background-color: white;
      line-height: 150%;
    }
  </style>
</head>
<body>

<div class="card">
  ${text}
</div>

</body>
</html>
`)
}
