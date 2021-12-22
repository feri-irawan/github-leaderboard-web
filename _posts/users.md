---
title: 'Users'
excerpt: 'Panduan permintaan data leaderboard pengguna.'
date: '2021-12-19'
author:
  name: Feri Irawan
  picture: 'https://avatars.githubusercontent.com/u/57158078?v=4'
---

# Users

Panduan permintaan data leaderboard pengguna.

---

## Daftar Isi

- [Followers](#followers)
- [Followers by Location](#followers-by-location)
- [Repositories](#repositories)
- [Repositories by Location](#repositories-by-location)
- [Commits](#commits)
- [Commits by Location](#commits-by-location)
- [Contributions](#contributions)
- [Contributions by Location](#contributions-by-location)

---

Github Leaderboard API juga mengumpulkan data tentang pengguna-pengguna yang ada di Github dan mengurutkannya berdasarkan hal tertentu. Misalnya jumlah followers, repositori, commits, kontribusi.

Silakan ikutin panduan berikut untuk tau cara melakukan permintaan data.

## Followers

Daftar pengguna global Github dengan jumlah pengikut terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                |
| ------------ | ------- | ---- | ---------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /users/followers
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/users/followers')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```

## Followers by Location

Daftar pengguna Github berdasarkan lokasi dengan jumlah pengikut terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                     |
| ------------ | ------- | ---- | --------------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data user yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /users/followers/{location}
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/users/followers/indonesia')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```

## Repositories

Daftar pengguna global Github dengan jumlah repositori terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                     |
| ------------ | ------- | ---- | --------------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data user yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /users/repos
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/users/repos')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```

## Repositories by Location

Daftar pengguna Github berdasarkan lokasi dengan jumlah repositori terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                     |
| ------------ | ------- | ---- | --------------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data user yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /users/repos/{location}
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/users/repos/indonesia')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```

## Commits

Daftar pengguna global Github dengan jumlah commit terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                     |
| ------------ | ------- | ---- | --------------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data user yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /users/commits
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/users/commits')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```

## Commits by Location

Daftar pengguna Github berdasarkan lokasi dengan jumlah commit terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                     |
| ------------ | ------- | ---- | --------------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data user yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /users/repos/commits/{location}
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/users/repos/commits/indonesia')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```

## Contributions

Daftar pengguna global Github dengan jumlah kontribusi terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                     |
| ------------ | ------- | ---- | --------------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data user yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /users/contribs
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/users/contribs')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```

## Contributions by Location

Daftar pengguna Github berdasarkan lokasi dengan jumlah kontribusi terbanyak.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                     |
| ------------ | ------- | ---- | --------------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data user yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /users/repos/contribs/{location}
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/users/repos/contribs/indonesia')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```
