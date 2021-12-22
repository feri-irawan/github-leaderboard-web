---
title: 'Topics'
excerpt: 'Panduan permintaan data leaderboard topik.'
date: '2021-12-19'
author:
  name: Feri Irawan
  picture: 'https://avatars.githubusercontent.com/u/57158078?v=4'
---

# Topics

Panduan permintaan data leaderboard pengguna.

---

## Daftar Isi

- [Repositories](#repositories)

---

## Repositories

Daftar topik dengan jumlah repositori terbanyak sedunia.

Parameter:
| Name         | Tipe    | Di   | Deskripsi                                                                                |
| ------------ | ------- | ---- | ---------------------------------------------------------------------------------------- |
| `max_result` | integer | body | Untuk mengatur jumlah respon data yang dikembalikan, maximal hingga `100`. Default: `30` |

Rute:

```plaintext
GET /topics/repos
```

Contoh:

```js
// JavaScript
axios
  .get('https://github-leaderboard.vercel.app/topics/repos')
  .then(({ data }) => console.log(data))
  .catch((err) => console.log(err))
```
