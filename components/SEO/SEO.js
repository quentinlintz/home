import Head from 'next/head';

const defaultConfig = {
  defaultTitle: 'Home',
  currentURL: 'https://quentinlintz.com',
  defaultImage: `${process.env.NEXT_PUBLIC_QUENTIN_PICTURE_URL}`,
  author: {
    name: 'Quentin Lintz',
  },
  defaultDescription:
    "I'm a software engineer currently working in fintech. Most of my time is spent working on new tech projects (like this site), reading, discovering new music, and weightlifting. Reach out to me on social media if you wanna chat!",
  twitterHandle: '@quentinlintz',
  twitterId: '3921636976',
};

const SEO = ({ description, title, image, slug = '', article }) => {
  const {
    defaultTitle,
    defaultDescription,
    siteName,
    twitterHandle,
    twitterId,
    currentURL,
    defaultImage,
  } = defaultConfig;
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>{`${
        title ? title + ' - Quentin Lintz' : defaultTitle + ' - Quentin Lintz'
      }`}</title>
      <meta
        name='description'
        content={`${description ? description : defaultDescription}`}
      />
      <meta
        name='image'
        content={`${image ? image : defaultImage}`}
        key='ogtitle'
      />
      {article ? (
        <meta property='og:type' content='article' key='ogtype' />
      ) : (
        <meta property='og:type' content='website' key='ogtype' />
      )}
      <meta
        property='og:title'
        content={`${title ? title : defaultTitle}`}
        key='ogtitle'
      />
      <meta
        property='og:description'
        content={`${description ? description : defaultDescription}`}
        key='ogdesc'
      />
      <meta
        property='twitter:card'
        content='summary_large_image'
        key='twcard'
      />
      <meta name='twitter:creator' content={twitterHandle} key='twhandle' />
      <meta name='twitter:creator:id' content={twitterId} key='twid' />
      <meta
        name='twitter:title'
        content={`${title ? title : defaultTitle}`}
        key='twtitle'
      />
      <meta
        name='twitter:description'
        content={`${description ? description : defaultDescription}`}
        key='twdescription'
      />
      <meta
        name='twitter:image'
        content={`${image ? image : defaultImage}`}
        key='twimage'
      />
      <meta property='og:url' content={`${currentURL}/${slug}`} key='ogurl' />
      <meta
        property='og:image'
        content={`${image ? image : defaultImage}`}
        key='ogimage'
      />
      <meta property='og:site_name' content={siteName} key='ogsitename' />
    </Head>
  );
};

export default SEO;
