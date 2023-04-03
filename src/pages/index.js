import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ info }) {
  console.log(info)
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          {
            info.map(({id, title, body}) => (
              <article key={id} className={styles.card}>
                <Link href={`/post/${id}`}>
                  <h2 className={styles.title}>{title}</h2>
                </Link>
                <p className={styles.paragraph}>{body}</p>
                <Link href={`/post/${id}`}><p className={styles.readMore}>Read more...</p></Link>
              </article>
            ))
          }
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const info = await res.json()

  return {
    props: {
      info
    }
  }
}
