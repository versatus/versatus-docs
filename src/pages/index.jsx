import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

import '../css/accordion.css';
import '../css/callout.css';
import '../css/codeWrapper.css';
import '../css/custom.css';
import '../css/homepage.css';
import '../css/iconCards.css';
import '../css/images.css';
import '../css/linkCards.css';
import '../css/media.css';
import '../css/navbar.css';
import '../css/pagination.css';
import '../css/sidebar.css';
import '../css/steps.css';
import '../css/table.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    const docusaurusElement = document.getElementById('__docusaurus');
    docusaurusElement.classList.add('home-background');

    const footerElement = document.querySelector('footer');
    footerElement.classList.add('hide-footer');
    return () => {
      docusaurusElement.classList.remove('home-background');
      if (footerElement) {
        footerElement.classList.remove('hide-footer');
      }
    };
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <main className="home-container">
        <header className="header">
          <img src="../../static/img/main-page-logo-darkmode" alt="Versatus Logo" className="logo" />
          <p className="subtitle">Versatus is the Universal Decentralized Application (dApp) Engine that allows all developers to truly build without barriers.</p>
        </header>
        <div className="cards-container">
          <a href="/lasr/overview" className="card">
            <div alt="lasr-img" className="lasr-img img"/>
            <div className="card-content">
              <h2>LARS</h2>
              <p>Explore LASR, the Language Agnostic Stateless Rollup, enabling secure and efficient dApp development and deployment.</p>
            </div>
          </a>
          <a href="/allegra/overview" className="card">
            <div alt="allegra-img" className="allegra-img img"/>
            <div className="card-content">
              <h2>Allegra</h2>
              <p>Discover Allegra, the Web3 cloud platform that simplifies deploying, managing, and scaling decentralized applications with robust infrastructure.</p>
            </div>
          </a>
        </div>
      </main>
    </Layout>
  );
}
