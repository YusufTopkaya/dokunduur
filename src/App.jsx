import { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaWhatsapp, FaGoogle, FaMoneyBillWave, FaShareAlt } from 'react-icons/fa'
import { urunler } from './data/urunler.js'

function App() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((i) => (i + 1) % urunler.length)
  const prev = () => setCurrent((i) => (i - 1 + urunler.length) % urunler.length)

  useEffect(() => {
    if (urunler.length <= 1) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const hizmetler = [
    {
      icon: <FaGoogle size={24} />,
      title: 'Google Yorumları',
      desc: 'NFC etiketlerle müşterilerinizi tek dokunuşla Google yorum sayfanıza yönlendirin.',
    },
    {
      icon: <FaMoneyBillWave size={24} />,
      title: 'IBAN Paylaşımı',
      desc: 'Kartvizit veya etiket üzerinden IBAN bilginizi hızlı ve pratik şekilde paylaşın.',
    },
    {
      icon: <FaShareAlt size={24} />,
      title: 'Sosyal Medya Linkleri',
      desc: 'Tüm sosyal medya hesaplarınıza tek noktadan ulaşılabilir, akıllı yönlendirmeler oluşturun.',
    },
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-start pt-[14vh] md:pt-[18vh] bg-white text-gray-900 px-6 pb-20 font-sans">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-center mb-3">
        dokunduur <span className="text-gray-500">yakında burada</span>
      </h1>

      <p className="text-center text-gray-500 max-w-lg mb-10 text-base md:text-lg">
        Dijital tanıtımınızı kolaylaştıran, yeni ve sade bir dokunuş.
      </p>

      {urunler.length === 0 ? (
        <p className="text-gray-500">
          Henüz ürün fotoğrafı eklenmemiş.
        </p>
      ) : (
        <>
          <div className="relative w-full max-w-xl md:max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 mb-10">
            {urunler.map((urun, index) => (
              <img
                key={index}
                src={urun.src}
                alt={urun.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            {urunler.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Önceki ürün"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Sonraki ürün"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md transition"
                >
                  <FiChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {urunler.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={`Ürün ${index + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition ${
                        index === current
                          ? 'bg-white'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <a
            href="https://wa.me/905061641991?text=Merhaba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-medium shadow-lg transition mb-16"
          >
            <FaWhatsapp size={22} />
            WhatsApp'tan Yaz
          </a>

          <section className="w-full max-w-5xl">
            <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-900 mb-8">
              Neler sunuyoruz?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {hizmetler.map((hizmet, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="mb-4 text-gray-800">{hizmet.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {hizmet.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {hizmet.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Aklınızda listede olmayan bir fikir mi var? Yeni projeler üretmeyi seviyoruz;{' '}
              <a
                href="https://wa.me/905061641991?text=Merhaba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 underline underline-offset-4 hover:text-[#25D366] transition"
              >
                birlikte konuşalım
              </a>.
            </p>
          </section>
        </>
      )}
    </main>
  )
}

export default App
