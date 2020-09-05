
module.exports = (req, res) => {
  const { text = 'Please provide "text" parameter' } = req.query;

  const fontSize = text.length > 50 ? 12 : 16;

  res.setHeader('Content-Type', 'text/html');
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
      font-size: ${fontSize}pt;
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
