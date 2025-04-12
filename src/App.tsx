import ReactPlayer from 'react-player';
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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      images: ['/capa-seleta.jpg', '/perfil-seleta.jpg'],
      title: 'Seleta Delicatessen',
      description:
        'Gestão de tráfego pago, design e estratégias para aumentar a conversão e consolidar a marca no nicho de alimentação saudável.',
    },
    {
      images: ['/capa-jack.jpg', '/perfil-jack.jpg'],
      title: 'Jackpoint Pizzaria',
      description:
        'Criação de conteúdo, design e estratégias para fortalecer a presença digital e impulsionar as vendas no delivery.',
    },
    {
      images: ['/capa-salao.jpg'],
      title: 'Studio de beleza',
      description: 'Campanha com micro-influenciadores gerando 300% de ROI.',
      videos: [
        'https://drive.google.com/file/d/17j75CeFWQCv3ZkG2u592TVuEBlSTTll4/preview',
        'https://drive.google.com/file/d/16JeYxvJOd8CtlZpu-pzAY7ljKtTY3XXh/preview',
        'https://drive.google.com/file/d/16NW2ND9vX8BlLUa-ox9lAR38Kco1GYei/preview',
      ],
      videoThumbs: [
        '/thumb-noiva.jpg',
        '/thumb-massagem.jpg',
        '/thumb-cilios.jpg',
      ],
    },
    {
      title: 'Nosso engenho',
      description:
        'Edição de entrevistas e vídeos para a página e atuação como repórter em cobertura do bloco Jake carnaval',
      videos: [
        'https://drive.google.com/file/d/16V94Ce4wbnTWkl_kdtCMnQ2JYuklAnFI/preview',
        'https://drive.google.com/file/d/16RCo9JP0hHqMnQEkKEBAne-eKvYh76z8/view?usp=drivesdk ',
        'https://drive.google.com/file/d/17lPUwPxzSUXzbutGAT7mUI5xvb-vtRhf/preview',
      ],
      videoThumbs: [
        '/thumb-entrevista.jpg',
        '/thumb-jake.jpg',
        '/thumb-restaurante.jpg',
      ],
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

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    fetch('https://formsubmit.co/ajax/irisalvesba12@hotmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    })
      .then(res => {
        if (res.ok) {
          setEnviado(true);
          form.reset();
        }
      })
      .catch(err => console.log(err));
  };

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
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
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
            className="text-4xl font-bold mb-6 text-center"
            style={{
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
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {portfolioItems.map((item, index) => {
              const [activeVideoIndex, setActiveVideoIndex] = useState<
                number | null
              >(null);

              const imageSlides =
                item.images?.map((img: string) => ({
                  type: 'image',
                  src: img,
                })) || [];

              const videoSlides =
                item.videos?.map((vid: string, i: number) => ({
                  type: 'video',
                  src: vid,
                  thumb:
                    item.videoThumbs?.[i] || '/thumb-video-placeholder.jpg',
                })) || [];

              const galleryItems = [...imageSlides, ...videoSlides];

              return (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      // autoplay={{
                      //   delay: 3000,
                      //   disableOnInteraction: true,
                      // }}
                      pagination={{
                        clickable: true,
                        renderBullet: (i, className) => {
                          const item = galleryItems[i];
                          const thumb =
                            item.type === 'image' ? item.src : item.thumb;
                          return `<div class="${className}" style="
                          width: 40px;
                          height: 40px;
                          background-image: url('${thumb}');
                          background-size: cover;
                          background-position: center;
                          border-radius: 4px;
                          opacity: 0.5;"></div>`;
                        },
                      }}
                      style={{
                        height: '460px',
                        overflow: 'hidden',
                      }}
                    >
                      {galleryItems.map((media, idx) => (
                        <SwiperSlide key={idx}>
                          {media.type === 'image' ? (
                            <img
                              src={media.src}
                              alt={`Imagem ${idx + 1}`}
                              className="w-full h-full object-contain  max-h-[400px]"
                            />
                          ) : activeVideoIndex === idx ? (
                            <iframe
                              src={media.src.replace('/view', '/preview')}
                              allow="autoplay"
                              allowFullScreen
                              title={`Vídeo ${idx + 1}`}
                              className="w-full h-[400px] rounded-xl"
                            ></iframe>
                          ) : (
                            <div
                              className="relative w-full h-[400px] cursor-pointer"
                              onClick={() => setActiveVideoIndex(idx)}
                            >
                              <img
                                src={media.thumb}
                                alt={`Thumb vídeo ${idx + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-16 w-16 text-white opacity-90"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M14.752 11.168l-4.197-2.4A1 1 0 009 9.6v4.8a1 1 0 001.555.832l4.197-2.4a1 1 0 000-1.664z"
                                  />
                                </svg>
                              </div>
                            </div>
                          )}
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold mb-6 text-center"
            style={{
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
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {portfolioItems.map((item, index) => {
              const [activeVideoIndex, setActiveVideoIndex] = useState<
                number | null
              >(null);

              const imageSlides =
                item.images?.map((img: string) => ({
                  type: 'image',
                  src: img,
                })) || [];

              const videoSlides =
                item.videos?.map((vid: string, i: number) => ({
                  type: 'video',
                  src: vid,
                  thumb:
                    item.videoThumbs?.[i] || '/thumb-video-placeholder.jpg',
                })) || [];

              const galleryItems = [...imageSlides, ...videoSlides];

              return (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{
                        clickable: true,
                        renderBullet: (i, className) => {
                          const item = galleryItems[i];
                          const thumb =
                            item.type === 'image' ? item.src : item.thumb;
                          return `<div class="${className}" style="
                          width: 40px;
                          height: 40px;
                          background-image: url('${thumb}');
                          background-size: cover;
                          background-position: center;
                          border-radius: 4px;
                          opacity: 0.5;"></div>`;
                        },
                      }}
                      style={{ height: '460px', overflow: 'hidden' }}
                    >
                      {galleryItems.map((media, idx) => (
                        <SwiperSlide key={idx}>
                          {media.type === 'image' ? (
                            <img
                              src={media.src}
                              alt={`Imagem ${idx + 1}`}
                              className="w-full h-full object-contain max-h-[400px]"
                            />
                          ) : activeVideoIndex === idx ? (
                            // <iframe
                            //   src={media.src.replace('/view', '/preview')}
                            //   allow="autoplay"
                            //   allowFullScreen
                            //   title={`Vídeo ${idx + 1}`}
                            //   className="w-full h-[400px] rounded-xl"
                            // ></iframe>
                            <iframe
                              src={`${media.src.replace(
                                '/view',
                                '/preview'
                              )}?autoplay=1`}
                              allow="autoplay"
                              allowFullScreen
                              title={`Vídeo ${idx + 1}`}
                              className="w-full h-[400px] rounded-xl"
                            />
                          ) : (
                            <div
                              className="relative w-full h-[400px] cursor-pointer"
                              onClick={() => setActiveVideoIndex(idx)}
                            >
                              <img
                                src={media.thumb}
                                alt={`Thumb vídeo ${idx + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-16 w-16 text-white opacity-90"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M14.752 11.168l-4.197-2.4A1 1 0 009 9.6v4.8a1 1 0 001.555.832l4.197-2.4a1 1 0 000-1.664z"
                                  />
                                </svg>
                              </div>
                            </div>
                          )}
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section> */}

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-r from-pink-600 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold mb-6 text-center text-white"
            style={{}}
          >
            Serviços
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Social Media</h3>
              <p className="text-gray-700">
                Planejamento, estratégia e gestão de redes sociais voltadas para
                marcas que desejam se destacar no digital. Criação de conteúdo
                personalizado, legendas estratégicas, identidade visual alinhada
                ao posicionamento da marca e análise de métricas para tomada de
                decisões.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Edição de Vídeo</h3>
              <p className="text-gray-700">
                Edição criativa e dinâmica de vídeos para reels, stories,
                YouTube ou outros formatos. Cortes precisos, ajustes de cor,
                inserção de trilha sonora, transições suaves, legendas, efeitos
                visuais e montagem com foco em impacto visual e engajamento.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">
                Produção de Vídeo (Mobile)
              </h3>
              <p className="text-gray-700">
                Captação de vídeo com celular de forma profissional, usando
                enquadramento, iluminação e direção adequadas para criar
                conteúdo autêntico e de qualidade. Gravações para bastidores,
                apresentação de produtos, depoimentos, vídeos institucionais
                ou promocionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold mb-6 text-center"
            style={{
              backgroundImage: 'linear-gradient(to right, black, black)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Depoimentos
          </h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            // autoplay={{ delay: 5000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-gray-700 italic mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="text-gray-900 font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="pt-8 bg-gradient-to-r from-black to-pink-600"
      >
        {/* <div className="grid md:grid-cols-2 gap-8 items-start">
          
          <div className="text-gray-200 space-y-6">
            <p className="text-lg leading-relaxed">
              Se você está pronto para elevar sua marca e criar conteúdo digital
              impactante, entre em contato comigo. Estou ansiosa para ouvir
              sobre seu projeto e como posso ajudar!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-pink-500" size={22} />
                <a
                  href="mailto:contato@irisalves.com"
                  className="hover:text-white transition-colors"
                >
                  contato@irisalves.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-pink-500" size={22} />
                <a
                  href="https://wa.me/5571986101016?text=Ol%C3%A1%2C%20%C3%8Dris!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="hover:text-white transition-colors"
                >
                  (71) 98610-1016
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="text-pink-500" size={22} />
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="hover:text-white transition-colors"
                >
                  @irisalves
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-pink-500" size={22} />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="hover:text-white transition-colors"
                >
                  Íris Alves
                </a>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">
              Envie uma Mensagem
            </h3>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu Nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Seu Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Sua Mensagem"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                Enviar
              </button>
            </form>
          </div>
        </div> */}
        <h2 className="text-5xl font-bold text-center text-white mb-12">
          Contato
        </h2>
        <div className="w-full flex justify-center px-4">
          <div className="max-w-[1280px] w-full grid md:grid-cols-2 gap-8 items-start py-16">
            {/* Formulário */}

            <div className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full">
              <h3 className="text-3xl font-semibold mb-6 text-gray-800">
                Envie uma Mensagem
              </h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Seu Nome"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Seu Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Sua Mensagem"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                >
                  Enviar
                </button>
                {enviado && (
                  <p className="text-green-600 text-sm font-medium mt-2">
                    E-mail enviado com sucesso!
                  </p>
                )}
              </form>
            </div>
            {/* Lado esquerdo */}
            <div className="text-gray-200">
              <p className="text-xl leading-relaxed text-justify max-w-[600px] mb-8">
                Se você está pronto para elevar sua marca e criar conteúdo
                digital impactante, entre em contato comigo. Estou ansiosa para
                ouvir sobre seu projeto e como posso ajudar!
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Mail className="text-white" size={22} />
                  <a
                    href="mailto:contato@irisalves.com"
                    className="text-gray-200 hover:text-white transition"
                  >
                    contato@irisalves.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-white" size={22} />
                  <a
                    href="https://wa.me/5571986101016?text=Ol%C3%A1%2C%20%C3%8Dris!%20Gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition"
                  >
                    (71) 98610-1016
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="text-white" size={22} />
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition"
                  >
                    @irisalves
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-white" size={22} />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-white transition"
                  >
                    Íris Alves
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-white text-black flex flex-col items-center gap-4">
        <img
          src="/iris_logo.png"
          alt="Logo Íris Alves"
          className="w-32 sm:w-40 object-contain"
        />
        <p className="text-sm text-center text-gray-600">
          &copy; 2024 <span className="font-medium">Íris Alves</span>. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
