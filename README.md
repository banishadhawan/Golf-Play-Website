# Golf Play Website

A modern, interactive website for **Sidcup Family Golf** - a multipurpose golf facility located in Sidcup, South East London. This website features smooth animations, custom cursor effects, and a beautiful user interface built with HTML, CSS, and JavaScript.

## 🎯 Features

- **Custom Cursor Effects**: Interactive cursor with blur effect that follows mouse movement
- **Video Background**: Full-screen video background with overlay
- **Scroll Animations**: Smooth GSAP-powered scroll-triggered animations
- **Responsive Design**: Modern, clean layout with gradient effects
- **Interactive Cards**: Hover effects on service cards with 3D transformations
- **Scrolling Text**: Infinite scrolling text animation for services
- **Multi-page Sections**: 
  - Hero section with video background
  - About Us section
  - Service cards (TopRacer Range, Adventure Golf, Golf Lessons)
  - Testimonials section
  - Call-to-action section
  - Footer with contact information

## 📁 Project Structure

```
Golf-Play-Website/
│
├── Index.html          # Main HTML file
├── style.css           # Stylesheet with all CSS
├── script.js            # JavaScript for interactions and animations
├── video.mp4           # Background video file
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (Vanilla)**: Interactive features and event handling
- **GSAP (GreenSock Animation Platform)**: Advanced scroll-triggered animations
  - GSAP Core Library (v3.13.0)
  - ScrollTrigger Plugin (v3.13.0)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best experience)

### Installation

1. Clone or download this repository
2. Ensure all files are in the same directory:
   - `Index.html`
   - `style.css`
   - `script.js`
   - `video.mp4`

### Running the Project

**Option 1: Direct File Opening**
- Simply open `Index.html` in your web browser

**Option 2: Local Server (Recommended)**
- Use a local development server like:
  - Python: `python -m http.server 8000`
  - Node.js: `npx http-server`
  - VS Code Live Server extension
- Navigate to `http://localhost:8000` (or your server's port)

## 📋 File Descriptions

### `Index.html`
The main HTML structure containing:
- Navigation bar with logo and menu items
- Custom cursor elements
- Video background
- Multiple page sections:
  - **Page 1**: Hero section with main heading and description
  - **Page 2**: Scrolling services, About Us, and service cards
  - **Page 3**: Testimonials section
  - **Page 4**: Call-to-action with service previews
  - **Footer**: Contact information and links

### `style.css`
Comprehensive styling including:
- Custom cursor styles with blur effect
- Navigation bar styling
- Video background overlay
- Page layouts and sections
- Card hover effects with 3D transformations
- Scrolling text animations
- Gradient backgrounds
- Responsive typography
- Custom scrollbar styling

### `script.js`
JavaScript functionality:
- **Custom Cursor**: Mouse tracking and hover effects on navigation items
- **GSAP Animations**:
  - Navigation bar background change on scroll
  - Main background color transition
  - About Us section fade-in
  - Card scale animations with stagger effect
  - Quote marks animation
  - Page 4 heading animation

## 🎨 Key Features Explained

### Custom Cursor
- Two cursor elements: a small dot (`#cursor`) and a large blur effect (`#cursor-blur`)
- Follows mouse movement in real-time
- Expands and changes style when hovering over navigation items

### Scroll Animations
- Uses GSAP ScrollTrigger for smooth, scroll-based animations
- Animations trigger at specific scroll positions
- Includes fade-ins, scale effects, and color transitions

### Service Cards
- Three interactive cards showcasing:
  - TopRacer Range
  - Adventure Golf
  - Golf Lessons
- Hover effects reveal overlay with information
- 3D rotation effect on hover

### Scrolling Text
- Infinite horizontal scrolling animation
- Displays services: TOPTRACER RANGE, GOLF LESSONS, ADVENTURE GOLF, COFFEE SHOP, LEAGUES

## 🎯 Color Scheme

- **Primary Green**: `#95C11E` (lime green)
- **Gradient Green**: `#119F3A` to `#a3d421`
- **Background**: Black (`#000`) with transparency overlays
- **Text**: White (`#fff`) with black accents

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🔧 Customization

### Changing Colors
Edit the color values in `style.css`:
- Primary green: Search for `#95C11E`
- Gradient colors: Search for `#119F3A` and `#a3d421`

### Modifying Content
- Update text in `Index.html`
- Replace images by changing `src` attributes
- Replace `video.mp4` with your own video file

### Adjusting Animations
- Modify GSAP animation parameters in `script.js`
- Change scroll trigger points (`start` and `end` values)
- Adjust animation duration and easing

## 📝 Notes

- The website uses external CDN links for GSAP libraries
- Some images are loaded from external URLs
- The video file (`video.mp4`) should be in the same directory as `Index.html`
- Font family used: 'Montserrat' (ensure it's available or add a fallback)

## 🐛 Known Issues

- Some external image URLs may become unavailable over time
- Video file size may affect loading performance
- GSAP markers are commented out but can be enabled for debugging

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

Golf Play Website - Sidcup Family Golf

## 🔗 External Resources

- **GSAP**: https://greensock.com/gsap/
- **Remix Icon**: Used for arrow icon (via CDN)

---

**Note**: This website is designed for Sidcup Family Golf facility. Make sure to replace placeholder content and external image URLs with your own assets for production use.

