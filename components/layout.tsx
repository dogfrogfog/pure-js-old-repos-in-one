import type { FC, ReactNode } from 'react'
import Link from 'next/link'

import { ROUTES } from '../routes'

import styles from './layout.module.css'

const SideBar: FC = () => (
  <ul className={styles.sideBar}>
    {Object.values(ROUTES).map((route) => (
      <li key={route}>
        <Link href={route}>
          <a>{route}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export const Layout: FC<{ children: ReactNode}> = ({ children }) => {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.divider} />
      <div className={styles.page}>{children}</div>
    </div>
  )
}