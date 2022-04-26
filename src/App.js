import { React, Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import MiddleSection from './components/Sections/MiddleSection';
import RightSection from './components/Sections/RightSection';
import LeftSection from './components/Sections/LeftSection';
import DownloadSection from './components/Sections/DownloadSection';

import './index.css';

const App = () => (
    <div>
        <Header />
        <Hero />
        <MiddleSection />
        <RightSection />
        <LeftSection />
        <DownloadSection />
        <Footer />
    </div>
)

export default App