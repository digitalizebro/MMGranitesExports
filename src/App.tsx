import { Phone, MessageCircle, Mail, MapPin, Factory, Shield, Truck, Clock, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";

// logo
import logo from './images/logo.png';
import hero from './images/hero.jpeg';

import about from './images/granets/about.jpeg'

import RoughGraniteBlocks from './images/granets/RoughGraniteBlocks.jpeg'
import PolishedGraniteSlabs from './images/granets/PolishedGraniteSlabs.jpeg'
import CobbleStones from './images/granets/CobbleStones.jpeg'
import image1 from './images/granets/img1.jpeg'
import image2 from './images/granets/img2.jpeg'
import image3 from './images/granets/img3.jpeg'
import image4 from './images/granets/img4.jpeg'
import image5 from './images/granets/img5.jpeg'
import image6 from './images/granets/img6.jpeg'
import image7 from './images/granets/img7.jpeg'
import image8 from './images/granets/img8.jpeg'
import image9 from './images/granets/img9.jpeg'
import image10 from './images/granets/img10.jpeg'
import image11 from './images/granets/img11.jpeg'

import video1 from './images/granets/videos/video1.mp4'
import video2 from './images/granets/videos/video2.mp4'
import video3 from './images/granets/videos/video3.mp4'
import video4 from './images/granets/videos/video4.mp4'
import Video5 from './images/granets/videos/video5.mp4'
import video6 from './images/granets/videos/video6.mp4';

function App() {
  const whatsappNumber = '919916397786';
  const phone1 = '+919916397786';
  const phone2 = '+916362721108';
  const email = 'mmgranitesexports@gmail.com';

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello MM Granites & Exports, I’m interested in your granite products. Please share more details."
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };


  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="bg-zinc-950 text-white overflow-x-hidden">
      <Navbar onWhatsApp={handleWhatsApp} />
      <Hero onWhatsApp={handleWhatsApp} onCall={() => handleCall(phone1)} />
      <About />
      <Products />
      <GraniteColors />
      <Industries />
      <Gallery />
      <Contact
        onWhatsApp={handleWhatsApp}
        onCall={handleCall}
        phone1={phone1}
        phone2={phone2}
        email={email}
      />
      <Footer phone1={phone1} email={email} onWhatsApp={handleWhatsApp} />
      <FloatingWhatsApp onClick={handleWhatsApp} />
    </div>
  );
}

function Navbar({ onWhatsApp }: { onWhatsApp: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-amber-500/30">
        {/* Background with same image as hero */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950/90"></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="MM Granites Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>


              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-zinc-300 hover:text-amber-500 transition-colors font-medium relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
                <button
                  onClick={onWhatsApp}
                  className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get in Touch
                </button>
              </div>

              <button
                className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors relative z-20"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {isOpen && (
              <div className="md:hidden border-t border-amber-500/20 mt-4 pt-4 space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-zinc-300 hover:text-amber-500 transition-colors py-2 font-medium"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={onWhatsApp}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get in Touch
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </>
  );
}

function Hero({ onWhatsApp, onCall }: { onWhatsApp: () => void; onCall: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-95"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15
      }}></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-block mb-6">
          <div className="flex items-center gap-2 text-amber-500 text-sm font-semibold tracking-wider">
            <div className="w-12 h-px bg-amber-500"></div>
            PREMIUM QUALITY
            <div className="w-12 h-px bg-amber-500"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">MM Granites</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">& Exports</span>
        </h1>

        <p className="text-xl md:text-2xl text-zinc-300 mb-4 max-w-4xl mx-auto leading-relaxed">
          Premium Granite Quarry Owners & Exporters
        </p>

        <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto">
          Supplying export-quality granite blocks, polished slabs, and cobble stones in all colors — trusted by builders and contractors.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={onCall}
            className="group bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </button>

          <button
            onClick={onWhatsApp}
            className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </section>
  );
}

function About() {
  const highlights = [
    { icon: Factory, text: 'Direct Quarry Ownership' },
    { icon: Shield, text: 'Export-Quality Granite' },
    { icon: Truck, text: 'Wide Range of Natural Colors' },
    { icon: Clock, text: 'Reliable Supply & Timely Delivery' }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-amber-500">MM Granites & Exports</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl"></div>
            <img
              src={about}
              alt="Granite Quarry"
              className="rounded-2xl shadow-2xl relative z-10 w-full h-96 object-cover"
            />
          </div>

          <div>
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              MM Granites & Exports is a Bangalore-based granite quarry owner and exporter, delivering premium natural stone solutions for construction and export markets. With direct quarry ownership and years of industry expertise, we ensure consistent quality, reliable supply, and international-grade granite products.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-lg border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 group">
                  <div className="bg-amber-500/10 p-3 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="text-zinc-200 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      title: 'Rough Granite Blocks',
      description: 'High-strength natural granite sourced directly from our quarries.',
      image: RoughGraniteBlocks
    },
    {
      title: 'Polished Granite Slabs',
      description: 'Precision-finished slabs with premium polish for all applications.',
      image: PolishedGraniteSlabs
    },
    {
      title: 'Cobble Stones',
      description: 'Durable granite stones for landscaping and outdoor projects.',
      image: CobbleStones
    }
  ];

  return (
    <section id="products" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-amber-500">Granite Products</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-amber-500">{product.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GraniteColors() {
  const colors = [
    { name: 'Black Granite', color: 'from-zinc-900 to-zinc-950' },
    { name: 'Brown Granite', color: 'from-amber-900 to-amber-950' },
    { name: 'Red Granite', color: 'from-red-900 to-red-950' },
    { name: 'Grey Granite', color: 'from-zinc-600 to-zinc-800' },
    { name: 'Natural Multi-Shade', color: 'from-stone-700 via-amber-800 to-zinc-800' }
  ];

  return (
    <section className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Granite <span className="text-amber-500">Colors & Textures</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {colors.map((item, index) => (
            <div key={index} className="group relative aspect-square rounded-xl overflow-hidden border-2 border-amber-500/30 hover:border-amber-500 transition-all duration-300 cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform duration-500`}></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white font-bold text-sm md:text-base">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const industries = [
    'Builders & Developers',
    'Construction Companies',
    'Exporters & Traders',
    'Landscaping Projects',
    'Residential & Commercial Projects'
  ];

  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries <span className="text-amber-500">We Serve</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-zinc-900/50 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500 hover:bg-zinc-900 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-lg font-semibold text-zinc-200">{industry}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');

  const images = [
    image1,
    image2,
    image3,
    image9,
    image6,
    image4,
    image8,
    image7,
    image5,
    image10,
    image11,
  ];

  const videos = [
    video4,
    video1,
    video2,
    video3,
    video6,
    Video5,
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-500">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>

          {/* Tabs */}
          <div className="inline-flex bg-zinc-950 border border-amber-500/30 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 py-2 font-semibold transition-all ${
                activeTab === 'images'
                  ? 'bg-amber-500 text-black'
                  : 'text-zinc-300 hover:text-amber-500'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2 font-semibold transition-all ${
                activeTab === 'videos'
                  ? 'bg-amber-500 text-black'
                  : 'text-zinc-300 hover:text-amber-500'
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {/* Images */}
        {activeTab === 'images' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl border-2 border-zinc-800 hover:border-amber-500 transition-all duration-300 group"
              >
                <img
                  src={img}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        )}

        {/* Videos */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((vid, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border-2 border-zinc-800 hover:border-amber-500 transition-all duration-300 bg-black"
              >
                <video
                  src={vid}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Contact({ onWhatsApp, onCall, phone1, phone2, email }: {
  onWhatsApp: () => void;
  onCall: (phone: string) => void;
  phone1: string;
  phone2: string;
  email: string;
}) {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-amber-500">Us</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Get in touch with MM Granites & Exports for bulk supply, export orders, or product inquiries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <button
                    onClick={() => onCall(phone1)}
                    className="text-amber-500 hover:text-amber-400 block mb-1"
                  >
                    +91 99163 97786
                  </button>
                  <button
                    onClick={() => onCall(phone2)}
                    className="text-amber-500 hover:text-amber-400 block"
                  >
                    +91 63627 21108
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <FaWhatsapp className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                  <button
                    onClick={onWhatsApp}
                    className="text-amber-500 hover:text-amber-400"
                  >
                    Chat with us directly
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a
                    href={`mailto:${email}`}
                    className="text-amber-500 hover:text-amber-400 break-all"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    #329, Avalahalli, Tippu Circle<br />
                    Opp Tippu Mosque, Anjanapura Post<br />
                    JP Nagar 9th Phase<br />
                    Bangalore – 560062
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => onCall(phone1)}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-black px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <button
                onClick={onWhatsApp}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border-2 border-amber-500/30 shadow-2xl h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2977846748494!2d77.58891117507621!3d12.85097178739394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b3c3c3c3c3c%3A0x3c3c3c3c3c3c3c3c!2sJP%20Nagar%209th%20Phase%2C%20Bengaluru%2C%20Karnataka%20560062!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MM Granites & Exports Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ phone1, email, onWhatsApp }: { phone1: string; email: string; onWhatsApp: () => void }) {
  return (
    <footer className="bg-zinc-950 border-t border-amber-500/30 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-amber-500 mb-2">MM Granites & Exports</h3>
            <p className="text-zinc-400">© 2026 MM Granites & Exports. All Rights Reserved.</p>
          </div>

          <div className="flex gap-6">
            <a
              href={`tel:${phone1}`}
              className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-full transition-all duration-300 border border-amber-500/30 hover:border-amber-500"
            >
              <Phone className="w-6 h-6 text-amber-500" />
            </a>
            <button
              onClick={onWhatsApp}
              className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-full transition-all duration-300 border border-amber-500/30 hover:border-amber-500"
            >
              <FaWhatsapp className="w-6 h-6 text-amber-500" />
            </button>
            <a
              href={`mailto:${email}`}
              className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-full transition-all duration-300 border border-amber-500/30 hover:border-amber-500"
            >
              <Mail className="w-6 h-6 text-amber-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ onClick }: { onClick: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only after scrolling 80vh (Hero height)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </button>
  );
}


export default App;