# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Move Images to Public Folder**
   - Copy all images from the `Images/` folder to `public/Images/` folder
   - This is required for Next.js to serve the images correctly

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Navigate to http://localhost:3000

## Image Setup

For Next.js to serve your images, they need to be in the `public` folder. The current code references images at `/Images/...` which means they should be located at `public/Images/...`.

**Steps:**
1. Copy all files from `Images/` folder to `public/Images/` folder
2. The images will be accessible at `/Images/filename.ext`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Any Node.js hosting platform that supports Next.js
- Ensure Node.js 18+ is available

