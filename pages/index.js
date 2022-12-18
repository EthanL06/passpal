import Head from "next/head"
import { Header, Password } from "../components"

export default function Home() {
  return (
    <>
    <Head>
      <title>PassPal | Password Generator</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content="Generate Strong Passwords with PassPal" />
      <meta name="description" content="PassPal is a simple and secure password generator that helps you create strong and unique passwords. Our intuitive tool allows you to customize your passwords to meet your specific needs, ensuring that your accounts remain safe and secure." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://passpal.vercel.app/" />
      <meta property="og:title" content="Generate Strong Passwords with PassPal" />
      <meta property="og:description" content="PassPal is a simple and secure password generator that helps you create strong and unique passwords. Our intuitive tool allows you to customize your passwords to meet your specific needs, ensuring that your accounts remain safe and secure." />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://passpal.vercel.app/" />
      <meta property="twitter:title" content="Generate Strong Passwords with PassPal" />
      <meta property="twitter:description" content="PassPal is a simple and secure password generator that helps you create strong and unique passwords. Our intuitive tool allows you to customize your passwords to meet your specific needs, ensuring that your accounts remain safe and secure." />

    </Head>
    <div className="flex flex-col items-center gap-y-5 min-h-[100vh]  px-3 pt-12 pb-4 lg:pt-20 lg:pb-8 lg:px-12">
      <Header />
      <Password />
      <div className="mt-auto italic font-light text-neutral-800 dark:text-white text-sm">
        By Ethan • <a href="https://github.com/EthanL06/passpal" target="_blank" rel="noreferrer" className="hover:text-purple-600 duration-300 ease-in-out">Github</a>
      </div>
    </div>
    </>
  )
}