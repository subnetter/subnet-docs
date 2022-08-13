import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Private and Secure',
    imageUrl: 'logo_basic_var1_white.png',
    description: (
      <>
        Strong end-to-end encryption. No one company with access to users data and to change privacy terms.
        No censorship. No mobile phone number or email required. Self moderated channels.
        Users are in full control. Swappable service providers. Be as personal or anonymous as you want to be.
      </>
    ),
  },
  {
    title: 'Powerful Features',
    imageUrl: 'logo_basic_var2_white.png',
    description: (
      <>Use on mobile or on your desktop. Instant message with anyone. Publish status updates to followers. Create or join groups. Publish a paid newsletter. Buy and sell digital media. Create feeds to easily experience content from multiple  sources and more...
      </>
    ),
  },
  {
    title: 'Instant Global Payments',
    imageUrl: 'logo_basic_var3_white.png',
    description: (
      <>
         A built-in stable and global digital-currency and a global payments network enable instant payments between any two users and between users and service providers. Buy and sell digital content items, charge a subscription fee for your premium digital content and more...
      </>
    ),
  },
  {
    title: '100% Ads Free',
    imageUrl: 'logo_basic_var5_white.png',
    description: (
      <>
        A new business model for digital communications. No ads on the platform. There is no company that provides the service to users that may change this in the future. Users pay service providers for communication services based on usage with a stable digital currency.
      </>
    ),
  },
  {
    title: 'Highly Opinionated',
    imageUrl: 'logo_basic_var6_white.png',
    description: (
      <>
        Clear and strong project values about identity, censorship, moderation, users privacy and users rights drive all the platform's design desicions so users interestes and considirations are always first. By design, no company can put its interest above the user's.
      </>
    ),
  },
  {
    title: 'Open Source',
    imageUrl: 'logo_basic_var7_white.png',
    description: (
      <>
        All Subnet software and network protocols are 100% open source and are fully auditale by any security expert to ensure that the apps you install behave what they promise you they behave, are not spying on you, and are not using you as a feature in a product they sell to other companies.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={styles.bannerLogo} src={'logo_icon_black_trans.svg'}/>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
