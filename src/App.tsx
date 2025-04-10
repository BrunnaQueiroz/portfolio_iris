import React from 'react';
import {
  Menu,
  X,
  Instagram,
  Linkedin,
  Mail,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolioItems = [
    {
      images: ['/capa-valentine.jpg', '/perfil-valentine.jpg'],
      title: 'Vallenttine Modas',
      description:
        'Desenvolvimento do Instagram do zero, incluindo design, criação de conteúdo e estratégias para atrair e engajar clientes no segmento de moda feminina',
    },
    {
      images: ['capa-seleta.jpg', 'perfil-seleta.jpg'],
      title: 'Seleta Delicatessen',
      description:
        'Gestão de tráfego pago, design e estratégias para aumentar a conversão e consolidar a marca no nicho de alimentação saudável.',
    },
    {
      images: ['capa-jack.jpg', 'perfil-jack.jpg'],
      title: 'Jackpoint Pizzaria',
      description:
        'Criação de conteúdo, design e estratégias para fortalecer a presença digital e impulsionar as vendas no delivery.',
    },
    {
      images: ['capa-salao.jpg'],
      title: 'Studio de beleza',
      description: 'Campanha com micro-influenciadores gerando 300% de ROI.',
    },
    {
      images: ['capa-nossoEngenho.jpg'],
      title: 'Nosso engenho',
      description:
        'Edição de entrevistas e vídeos para a página e atuação como repórter em cobertura do bloco Jake carnaval',
    },
  ];

  const testimonials = [
    {
      text: 'A Íris transformou completamente nossa presença nas redes sociais. Nosso engajamento aumentou significativamente!',
      author: 'Maria Silva',
      role: 'CEO, Empresa XYZ',
    },
    {
      text: 'Profissional extremamente talentosa e dedicada. Os vídeos que ela produziu para nossa marca são incríveis!',
      author: 'João Santos',
      role: 'Marketing Director, ABC Corp',
    },
    {
      text: 'A melhor decisão que tomamos foi contratar a Íris para nossa estratégia digital.',
      author: 'Ana Costa',
      role: 'Founder, Startup 123',
    },
    {
      text: 'Resultados impressionantes em tempo recorde. Recomendo fortemente!',
      author: 'Pedro Lima',
      role: 'CMO, Tech Solutions',
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm h-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-auto items-center">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/iris_logo.png" alt="logo" width={100} height={100} />
              <div>
                <h1 style={{ fontFamily: 'MinhaFonte', fontSize: '2rem' }}>
                  Íris Alves
                </h1>
                <span
                  style={{
                    fontWeight: '500',
                    fontSize: '0.9em',
                    color: 'GrayText',
                  }}
                >
                  Social mídia e Videomaker mobile
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-pink-600">
                Sobre
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-pink-600"
              >
                Portfólio
              </a>
              <a href="#services" className="text-gray-700 hover:text-pink-600">
                Serviços
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-pink-600"
              >
                Depoimentos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600">
                Contato
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-violet-700"
              >
                Sobre
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-gray-700 hover:text-violet-700"
              >
                Portfólio
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-violet-700"
              >
                Serviços
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-violet-700"
              >
                Depoimentos
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-violet-700"
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 bg-gradient-to-b from-violet-50 to-white"
        style={{
          backgroundImage: 'url("/bg.jpg")',
          // backgroundImage: 'url("/bg-iris.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          // height: '100vh', // Remova esta linha
        }}
      >
        <section className="pb-5 relative flex items-center justify-center h-[80vh]">
          <div className="max-w-7xl mx-auto text-center">
            <div
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                backgroundImage: 'linear-gradient(to right, #C026D3, #7C3AED)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <span
                style={{
                  backgroundImage: 'linear-gradient(to right,  black, black)',

                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Social Media & Videomaker mobile
              </span>
            </div>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Transformando ideias em conteúdo digital impactante para elevar
              sua marca
            </p>

            <a
              href="#contact"
              className="inline-block text-white px-8 py-3 rounded-full transition-all duration-300 bg-gradient-to-r from-black to-pink-600"
              style={{
                backgroundClip: 'padding-box',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
              }}
              onMouseOver={e => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={e => {
                e.target.style.transform = '';
                e.target.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
              }}
            >
              Vamos Conversar
            </a>
          </div>
        </section>
      </section>

      {/* About Section */}

      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-r from-black to-pink-600"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              style={{
                width: '100%',
                maxWidth: '400px',

                margin: 'auto',
                padding: '10px',
                boxSizing: 'border-box',
              }}
            >
              <img
                src="/iris_foto.jpg"
                alt="Íris Alves"
                className="rounded-lg shadow-lg"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 text-white" style={{}}>
                Sobre Mim
              </h2>
              <p className="text-gray-300 mb-4">
                Olá! Sou Íris Alves, uma Social Media e Video Maker apaixonada
                por criar conteúdo digital que conecta marcas com seus públicos.
                Com mais de 5 anos de experiência no mercado digital, desenvolvo
                estratégias criativas que geram resultados reais.
              </p>
              <p className="text-gray-300 mb-6">
                Minha abordagem combina criatividade com estratégia, sempre
                focando em conteúdo autêntico e de alta qualidade que ressoa com
                seu público-alvo.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  title="Instagram"
                  rel="noopener noreferrer"
                  // className="text-violet-600 hover:text-violet-800"
                  className="text-white hover:text-black"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/5571986101016?text=Ol%C3%A1%2C%20%C3%8Dris!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                  target="_blank"
                  title="WhatsApp"
                  rel="noopener noreferrer"
                  className="text-white hover:text-black"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold mb-6"
            style={{
              textAlign: 'center',
              backgroundImage: 'linear-gradient(to right, black, black)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Portfólio
          </h2>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            // className="pb-12"
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: true,
                    }}
                    pagination={{
                      clickable: true,
                      renderBullet: (index, className) => `
                        <div class="${className}" style="width:40px;height:40px;background-image:url(${item.images[index]});background-size:cover;   background-position: center; border-radius:4px; opacity: 0.5; 
                          "></div>
                        `,
                    }}
                    // className="h-48"
                    style={{
                      height: '460px',

                      objectFit: 'contain',
                      overflow: 'hidden',
                    }}
                  >
                    {item.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={image}
                          style={{
                            objectFit: 'contain',
                            width: '100%',
                            maxHeight: '400px',

                            height: '100%',
                          }}
                          alt={`${item.title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-r to-black from-pink-600"
      >
        <div className="max-w-7xl mx-auto ">
          <h2
            className="text-4xl font-bold mb-6 text-white"
            style={{
              textAlign: 'center',
              // backgroundImage: 'linear-gradient(to right, #C026D3, #7C3AED)',
              // backgroundClip: 'text',
              // WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
            }}
          >
            Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Gestão de Redes Sociais
              </h3>
              <p className="text-gray-600">
                Criação e gerenciamento de conteúdo para suas redes sociais,
                incluindo estratégia, calendário editorial e análise de
                métricas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Produção de Vídeos</h3>
              <p className="text-gray-600">
                Criação de conteúdo em vídeo para redes sociais, incluindo
                edição, motion graphics e finalização.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Consultoria Digital
              </h3>
              <p className="text-gray-600">
                Análise e planejamento estratégico para sua presença digital,
                com foco em resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-violet-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold mb-6 text-black"
            style={{
              textAlign: 'center',
              // backgroundImage: 'linear-gradient(to right, #C026D3, #7C3AED)',
              // backgroundClip: 'text',
              // WebkitBackgroundClip: 'text',
              // WebkitTextFillColor: 'transparent',
            }}
          >
            Depoimentos
          </h2>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        {/* Fundo preto */}
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold mb-6 text-center text-white"
            // style={{
            //   backgroundImage:
            //     'linear-gradient(to right, #F48FB1, #C026D3, #7C1442)',
            //   backgroundClip: 'text',
            //   WebkitBackgroundClip: 'text',
            //   WebkitTextFillColor: 'transparent',
            // }}
          >
            Contato
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mx-auto">
            {/* Adicionado mx-auto para centralizar */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-pink-500 rounded-xl focus:ring-pink-500 focus:border-pink-500 shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-pink-500 rounded-xl focus:ring-pink-500 focus:border-pink-500 shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 text-white border border-pink-500 rounded-xl focus:ring-pink-500 focus:border-pink-500 shadow-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl shadow-md transition-colors bg-gradient-to-r from-pink-500 to-black to-pink-700 text-white hover:from-pink-600 hover:to-gray-900 hover:to-pink-800"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contato@irisalves.com"
                    className="flex items-center text-gray-300 hover:text-pink-500"
                  >
                    <Mail className="mr-2" size={20} />
                    contato@irisalves.com
                  </a>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-pink-500"
                  >
                    <Calendar className="mr-2" size={20} />
                    Agendar Reunião
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-300"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-300"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-8 text-center bg-gradient-to-t from-black to-pink-600">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; 2024 Íris Alves. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
