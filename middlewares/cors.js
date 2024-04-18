const allowedCors = [
  "https://prakticum.yandex.ru",
  "https://my-website.com",
  "localhost:3000",
];

function cors(req, res, next) {
  const { origin } = req.headers; // смотрим, кто стучиться к серверу

  if (allowedCors.includes(origin)) {
    res.headers("Access-Control-Allow-Origin", origin);
  }

  next();
}

module.exports = cors;
