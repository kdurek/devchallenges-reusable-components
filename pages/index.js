import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reusable Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-noto">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <footer>
        <p className="text-gray-400 text-center">
          <a href="https://github.com/durashere">durashere</a> @
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}
