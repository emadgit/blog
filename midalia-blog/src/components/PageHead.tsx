import Head from "next/head";

export const PageHead: React.FC<{}> = () => {
   
    return (
        <Head>
        <title>Emad Dehnavi - Blog Dashboard</title>
        <meta
          name="description"
          content="Emad Dehnavi - Senior Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}

export default PageHead;
