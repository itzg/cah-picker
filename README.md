Uses [spglancy's Cards Against Humanity API](https://spglancy.github.io/CAH-API/#/) to provide a simple API that picks random cards for you. It's already deployed on [Vercel](https://vercel.com/), so try it out [here](https://cah-picker.vercel.app/) or click the following to deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fitzg%2Fcah-picker).

## An example using node-fetch

```javascript
  fetch('https://cah-picker.vercel.app/api/pick-for-me')
  .then(resp => resp.json())
  .then(picked => {
    console.log(picked);
  });
```

where `picked` will look like:
```json
{
  "blackCard": "Coming to Broadway this season, ___: The Musical.",
  "whiteCards": [
    "The Kool-Aid Man."
  ]
}
```
