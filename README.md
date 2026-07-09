# dokunduur — Yakında Sayfası

Tek sayfalık, backend gerektirmeyen microbrand tanıtım sayfası.

## Özellikler

- Ekran ortasında "dokunduur yakında burada" karşılama metni
- Orta boy carousel ile ürün fotoğrafları
- Otomatik geçiş ve ok/dot kontrolleri
- React + Vite + Tailwind CSS

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## Ürün Fotoğraflarını Değiştirme

1. Fotoğrafları `public/urunler/` klasörüne ekleyin.
2. `src/data/urunler.js` dosyasındaki listeyi kendi görsellerinizle güncelleyin.

Örnek:

```js
export const urunler = [
  { src: '/urunler/urun-1.jpg', alt: 'Ürün 1' },
  { src: '/urunler/urun-2.jpg', alt: 'Ürün 2' },
]
```

## Derleme

```bash
npm run build
```

Çıktı `dist/` klasöründe oluşur.
