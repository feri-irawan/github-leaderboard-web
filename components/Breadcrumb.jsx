// import { useState } from 'react'
import { useRouter } from 'next/router'
import { toCapitalize } from '../utils/string'

export default function Breadcrumb() {
  const router = useRouter()
  const routes = ['Home', ...router.asPath.split('/').slice(1)].filter(
    (v) => v !== ''
  )

  return (
    <nav className="pb-3" aria-label="Breadcrumb">
      {routes.map((route, i) => {
        let weight
        switch (i) {
          case 0:
            weight = 'bold'
            break

          case 1:
            weight = 'semibold'
            break

          default:
            weight = 'normal'
            break
        }

        return (
          <span key={i} className={`font-${weight}`}>
            {toCapitalize(route, '-', ' ')}{' '}
            {i !== routes.length - 1 ? '> ' : ''}
          </span>
        )
      })}
    </nav>
  )
}
