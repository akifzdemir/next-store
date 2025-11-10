# Next Store - E-Commerce Platform

[English](#english) | [Türkçe](#türkçe)

---

## English

A modern, fully-featured e-commerce platform built with Next.js 15, featuring internationalization, dark mode, and a complete shopping experience.

### Features

- 🌍 **Multi-language Support** - English and Turkish localization with next-intl
- 🌙 **Dark Mode** - Smooth theme switching with system preference detection
- 🛒 **Shopping Cart** - Full cart functionality with Redux state management
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ♿ **Accessibility** - WCAG compliant with proper ARIA labels and contrast ratios
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- 🔍 **Product Filtering** - Search, sort, and filter products by category and price
- 🖼️ **Optimized Images** - Next.js Image optimization for better performance

### Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Internationalization:** next-intl
- **Icons:** Lucide React
- **Notifications:** Sonner

### Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── store/           # Redux store and slices
├── lib/             # Utility functions
├── models/          # TypeScript types
├── config/          # Configuration files
└── i18n/            # Internationalization setup
```

### Internationalization

The app supports English and Turkish. Language can be switched via the globe icon in the header. URLs are automatically prefixed with the locale (e.g., `/en/products`, `/tr/products`).

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://fakestoreapi.com/products
```

---

## Türkçe

Next.js 15 ile oluşturulmuş, çok dilli destek, karanlık mod ve eksiksiz alışveriş deneyimi sunan modern bir e-ticaret platformu.

### Özellikler

- 🌍 **Çok Dilli Destek** - next-intl ile İngilizce ve Türkçe yerelleştirme
- 🌙 **Karanlık Mod** - Sistem tercihi algılama ile yumuşak tema geçişi
- 🛒 **Alışveriş Sepeti** - Redux state yönetimi ile tam sepet işlevselliği
- 📱 **Responsive Tasarım** - Tailwind CSS ile mobil öncelikli yaklaşım
- ♿ **Erişilebilirlik** - Uygun ARIA etiketleri ve kontrast oranları ile WCAG uyumlu
- 🎨 **Modern Arayüz** - Yumuşak animasyonlarla temiz, profesyonel tasarım
- 🔍 **Ürün Filtreleme** - Kategori ve fiyata göre ürün arama, sıralama ve filtreleme
- 🖼️ **Optimize Edilmiş Görseller** - Daha iyi performans için Next.js Image optimizasyonu

### Teknoloji Yığını

- **Framework:** Next.js 15 (App Router)
- **Dil:** TypeScript
- **Stil:** Tailwind CSS
- **State Yönetimi:** Redux Toolkit
- **Çok Dilli Destek:** next-intl
- **İkonlar:** Lucide React
- **Bildirimler:** Sonner

### Başlangıç

1. **Bağımlılıkları yükleyin:**

```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
```

3. **Tarayıcınızı açın:**

[http://localhost:3000](http://localhost:3000) adresine gidin

### Kullanılabilir Komutlar

- `npm run dev` - Geliştirme sunucusunu başlat
- `npm run build` - Production için derle
- `npm start` - Production sunucusunu başlat
- `npm run lint` - ESLint çalıştır

### Proje Yapısı

```
src/
├── app/              # Next.js app dizini
├── components/       # React bileşenleri
├── store/           # Redux store ve slice'lar
├── lib/             # Yardımcı fonksiyonlar
├── models/          # TypeScript tipleri
├── config/          # Yapılandırma dosyaları
└── i18n/            # Çok dilli destek kurulumu
```

### Çok Dilli Destek

Uygulama İngilizce ve Türkçe dillerini destekler. Dil, header'daki dünya ikonu üzerinden değiştirilebilir. URL'ler otomatik olarak dil kodu ile öneklenir (örn. `/en/products`, `/tr/products`).

### Ortam Değişkenleri

Kök dizinde bir `.env.local` dosyası oluşturun:

```env
NEXT_PUBLIC_API_URL=https://fakestoreapi.com/products
```

---

## License / Lisans

MIT
