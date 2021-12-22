---
title: 'Repositories'
excerpt: 'Panduan penggunaan repositories leaderboard API'
date: '2021-12-19'
author:
  name: Feri Irawan
  picture: 'https://avatars.githubusercontent.com/u/57158078?v=4'
---

# Respositories

Panduan permintaan data leaderboard repositori.

---

## Daftar Isi

- [Stars](#stars)
- [Forks](#forks)
- [Size](#size)

---

Github Leaderboard API juga mengumpulkan data tentang repositori dan mengurutkannya berdasarkan hal tertentu. Misalnya jumlah stars, forks, size.

Silakan ikutin panduan berikut untuk tau cara melakukan permintaan data.

## Stars

Daftar global repositori Github dengan jumlah bintang terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                |
| ------------ | ------- | ---- | ---------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /repos/stars
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/repos/stars')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```

## Forks

Daftar global repositori Github dengan jumlah forks terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                           |
| ------------ | ------- | ---- | --------------------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data repositori yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /repos/forks
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/repos/forks')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```

## Size

Daftar global repositori Github dengan jumlah ukuran terbesar.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                           |
| ------------ | ------- | ---- | --------------------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data repositori yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /repos/size
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/repos/size')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```
