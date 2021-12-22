import {
  GoOrganization,
  GoRepo,
  GoGitCommit,
  GoGitPullRequest,
  GoRepoForked,
  GoStar,
  GoFile
} from 'react-icons/go'

module.exports = [
  {
    title: 'User Leaderboards',
    excerpt: 'Daftar leaderboard pengguna-pengguna Github',
    slug: '/users',
    leaderboards: [
      {
        title: 'Followers',
        excerpt: 'Daftar pengguna dengan jumlah followers terbanyak di Github.',
        slug: '/followers',
        icon: <GoOrganization size={30} />
      },
      {
        title: 'Repositories',
        excerpt:
          'Daftar pengguna dengan jumlah repositori terbanyak di Github.',
        slug: '/repositories',
        icon: <GoRepo size={30} />
      },
      {
        title: 'Commits',
        excerpt: 'Daftar pengguna dengan jumlah commits terbanyak di Github.',
        slug: '/commits',
        icon: <GoGitCommit size={30} />
      },
      {
        title: 'Contributions',
        excerpt:
          'Daftar pengguna dengan jumlah kontribusi terbanyak di Github.',
        slug: '/contributions',
        icon: <GoGitPullRequest size={30} />
      }
    ]
  },
  {
    title: 'Repository Leaderboards',
    excerpt: 'Daftar leaderboard repositori-repositori Github',
    slug: '/repositories',
    leaderboards: [
      {
        title: 'Stars',
        excerpt: 'Daftar repositori dengan jumlah bintang terbanyak di Github.',
        slug: '/stars',
        icon: <GoStar size={30} />
      },
      {
        title: 'Forks',
        excerpt: 'Daftar repositori dengan jumlah garpu terbanyak di Github.',
        slug: '/forks',
        icon: <GoRepoForked size={30} />
      },
      {
        title: 'Size',
        excerpt: 'Daftar repositori dengan jumlah ukuran terbesar di Github.',
        slug: '/size',
        icon: <GoFile size={30} />
      }
    ]
  },
  {
    title: 'Topic Leaderboards',
    excerpt: 'Daftar leaderboard topik-topik Github',
    slug: '/topics',
    leaderboards: [
      {
        title: 'Repositories',
        excerpt: 'Daftar topik dengan jumlah repositori terbanyak di Github.',
        slug: '/repositories',
        icon: <GoRepo size={30} />
      }
    ]
  }
]
