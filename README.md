# Fitness App 🏋️

A modern fitness subscription app built with React + Vite with integrated EFT payment system for South Africa.

## Features

- ✅ User authentication
- ✅ Tiered subscription plans (Basic R200/month, Premium R2000/month)
- ✅ QR code payment system
- ✅ Responsive design
- ✅ EFT payment integration

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: CSS3
- **Payments**: EFT (Electronic Funds Transfer) via Capitec Bank
- **QR Codes**: qrcode.react

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
git clone https://github.com/salimaanlegend-gif/fitness-app.git
cd fitness-app
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment

### Deploy on Vercel (Recommended)

1. Push code to GitHub (already done ✅)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New → Project"
4. Select `fitness-app` repository
5. Click Deploy

Your app will be live at `https://fitness-app-USERNAME.vercel.app`

### Deploy on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub account
3. Select the `fitness-app` repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

## Payment Information

All payments are processed via **EFT (Electronic Funds Transfer)**:

- **Bank**: Capitec Bank
- **Account Name**: Salman
- **Account Number**: 2590943039
- **Branch Code**: 470010

Users scan the QR code or enter details manually to subscribe.

## Project Structure

```
fitness-app/
├── src/
│   ├── components/
│   │   └── FitnessSubscription.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## License

MIT

## Support

For issues or questions, contact: support@fitnessapp.com
