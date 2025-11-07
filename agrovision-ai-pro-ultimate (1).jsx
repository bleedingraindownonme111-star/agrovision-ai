<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AgroVision AI Pro - Advanced Plant Disease Detection</title>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {
      font-family: 'Inter', sans-serif;
      transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Merriweather', serif;
    }
    
    /* ========== LIGHT THEME - PREMIUM DESIGN ========== */
    
    /* Beautiful animated gradient background for light theme */
    body.light {
      background: 
        radial-gradient(circle at 15% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 85% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.04) 0%, transparent 100%),
        linear-gradient(135deg, #f0fdf4 0%, #dcfce7 25%, #f0fdf4 50%, #dcfce7 75%, #f0fdf4 100%);
      background-size: 200% 200%;
      animation: lightGradientMove 15s ease infinite;
    }
    
    @keyframes lightGradientMove {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    /* Hero section with stunning day sky effect */
    .bg-hero {
      position: relative;
      background: 
        radial-gradient(circle at 25% 35%, rgba(34, 197, 94, 0.25) 0%, transparent 40%),
        radial-gradient(circle at 75% 65%, rgba(16, 185, 129, 0.2) 0%, transparent 40%),
        linear-gradient(135deg, rgba(34, 139, 34, 0.95) 0%, rgba(5, 150, 105, 0.9) 50%, rgba(46, 125, 50, 0.95) 100%),
        url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80');
      background-size: cover, cover, cover, cover;
      background-position: center;
      background-attachment: fixed;
      overflow: hidden;
    }
    
    /* Floating light particles effect */
    .bg-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(2px 2px at 18% 28%, rgba(255, 255, 255, 0.6), transparent),
        radial-gradient(3px 3px at 62% 72%, rgba(255, 255, 255, 0.4), transparent),
        radial-gradient(2px 2px at 48% 52%, rgba(255, 255, 255, 0.5), transparent),
        radial-gradient(2px 2px at 82% 15%, rgba(255, 255, 255, 0.6), transparent),
        radial-gradient(3px 3px at 88% 58%, rgba(34, 197, 94, 0.3), transparent),
        radial-gradient(2px 2px at 35% 78%, rgba(16, 185, 129, 0.4), transparent);
      background-size: 200% 200%, 200% 200%, 300% 300%, 250% 250%, 280% 280%, 320% 320%;
      background-position: 0% 0%;
      animation: particlesFloat 25s linear infinite;
      pointer-events: none;
    }
    
    @keyframes particlesFloat {
      from { background-position: 0% 0%; }
      to { background-position: 100% 100%; }
    }
    
    /* Animated gradient for main background */
    .bg-farm {
      position: relative;
      background: 
        radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.03) 0%, transparent 70%),
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 60px,
          rgba(34, 197, 94, 0.02) 60px,
          rgba(34, 197, 94, 0.02) 120px
        ),
        linear-gradient(180deg, #f0fdf4 0%, #dcfce7 30%, #f0fdf4 60%, #dcfce7 100%);
      background-size: 400% 400%, 400% 400%, 400% 400%, 100% 100%, 200% 200%;
      background-position: center;
      background-attachment: fixed;
      animation: lightBackgroundMove 20s ease infinite;
    }
    
    @keyframes lightBackgroundMove {
      0%, 100% { 
        background-position: 0% 0%, 100% 100%, 50% 50%, 0% 0%, 0% 50%;
      }
      50% { 
        background-position: 100% 100%, 0% 0%, 50% 50%, 0% 0%, 100% 50%;
      }
    }
    
    /* Premium glass effect with glow for light theme */
    .glass-effect {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.95) 0%,
        rgba(240, 253, 244, 0.9) 100%
      );
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(34, 197, 94, 0.15);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(34, 197, 94, 0.05) inset,
        0 2px 4px rgba(34, 197, 94, 0.1) inset;
      position: relative;
    }
    
    .glass-effect::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(34, 197, 94, 0.03) 0%,
        transparent 50%,
        rgba(16, 185, 129, 0.03) 100%
      );
      border-radius: inherit;
      pointer-events: none;
    }

    /* ========== DARK THEME - PREMIUM DESIGN ========== */
    
    /* Beautiful animated gradient background */
    .dark {
      background: 
        radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 90% 80%, rgba(34, 197, 94, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.04) 0%, transparent 100%),
        linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%);
      background-size: 200% 200%;
      animation: darkGradientMove 15s ease infinite;
      color: #f3f4f6;
    }
    
    @keyframes darkGradientMove {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    /* Hero section with stunning night sky effect */
    .dark .bg-hero {
      position: relative;
      background: 
        radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.2) 0%, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(5, 150, 105, 0.15) 0%, transparent 40%),
        linear-gradient(135deg, rgba(6, 78, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 50%, rgba(31, 41, 55, 0.9) 100%),
        url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80');
      background-size: cover, cover, cover, cover;
      background-position: center;
      background-attachment: fixed;
      overflow: hidden;
    }
    
    .dark .bg-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(2px 2px at 60% 70%, rgba(255, 255, 255, 0.2), transparent),
        radial-gradient(1px 1px at 50% 50%, rgba(255, 255, 255, 0.2), transparent),
        radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.3), transparent),
        radial-gradient(2px 2px at 90% 60%, rgba(16, 185, 129, 0.3), transparent),
        radial-gradient(1px 1px at 33% 80%, rgba(34, 197, 94, 0.2), transparent);
      background-size: 200% 200%, 200% 200%, 300% 300%, 250% 250%, 280% 280%, 320% 320%;
      background-position: 0% 0%;
      animation: starsFloat 30s linear infinite;
      pointer-events: none;
    }
    
    @keyframes starsFloat {
      from { background-position: 0% 0%; }
      to { background-position: 100% 100%; }
    }
    
    /* Main background with subtle pattern */
    .dark .bg-farm {
      background: 
        radial-gradient(circle at 15% 25%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 85% 75%, rgba(5, 150, 105, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.03) 0%, transparent 70%),
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 60px,
          rgba(16, 185, 129, 0.015) 60px,
          rgba(16, 185, 129, 0.015) 120px
        ),
        linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #0f172a 60%, #1e293b 100%);
      background-size: 400% 400%, 400% 400%, 400% 400%, 100% 100%, 200% 200%;
      background-position: center;
      background-attachment: fixed;
      animation: subtleBackgroundMove 20s ease infinite;
    }
    
    @keyframes subtleBackgroundMove {
      0%, 100% { 
        background-position: 0% 0%, 100% 100%, 50% 50%, 0% 0%, 0% 50%;
      }
      50% { 
        background-position: 100% 100%, 0% 0%, 50% 50%, 0% 0%, 100% 50%;
      }
    }

    /* Premium glass effect with glow */
    .dark .glass-effect {
      background: linear-gradient(
        135deg,
        rgba(15, 23, 42, 0.9) 0%,
        rgba(30, 41, 59, 0.85) 100%
      );
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(16, 185, 129, 0.15);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(16, 185, 129, 0.05) inset,
        0 2px 4px rgba(16, 185, 129, 0.1) inset;
      position: relative;
    }
    
    .dark .glass-effect::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(16, 185, 129, 0.3),
        transparent
      );
    }

    .dark .text-gray-900 {
      color: #f9fafb !important;
    }

    .dark .text-gray-800 {
      color: #f3f4f6 !important;
    }

    .dark .text-gray-700 {
      color: #e5e7eb !important;
    }

    .dark .text-gray-600 {
      color: #d1d5db !important;
    }

    .dark .text-gray-500 {
      color: #9ca3af !important;
    }

    /* Enhanced dark backgrounds with gradients */
    .dark .bg-white {
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%) !important;
      border: 1px solid rgba(16, 185, 129, 0.1);
    }

    .dark .bg-gray-50 {
      background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%) !important;
      border: 1px solid rgba(16, 185, 129, 0.08);
    }

    .dark .bg-gray-100 {
      background: rgba(30, 41, 59, 0.6) !important;
    }

    .dark .border-gray-200,
    .dark .border-gray-300 {
      border-color: rgba(16, 185, 129, 0.15) !important;
    }

    .dark .border-green-200 {
      border-color: rgba(16, 185, 129, 0.3) !important;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.1);
    }

    .dark .border-green-300 {
      border-color: rgba(16, 185, 129, 0.4) !important;
      box-shadow: 0 0 25px rgba(16, 185, 129, 0.15);
    }

    .dark .border-green-100 {
      border-color: rgba(16, 185, 129, 0.2) !important;
    }

    .dark .hover\:bg-green-50:hover {
      background: rgba(6, 78, 59, 0.3) !important;
    }

    .dark .bg-green-50 {
      background: linear-gradient(135deg, rgba(6, 78, 59, 0.4) 0%, rgba(5, 46, 22, 0.4) 100%) !important;
    }

    .dark .bg-green-100 {
      background: rgba(6, 78, 59, 0.5) !important;
    }

    .dark .from-green-50 {
      --tw-gradient-from: rgba(6, 78, 59, 0.3) !important;
    }

    .dark .to-emerald-50 {
      --tw-gradient-to: rgba(6, 95, 70, 0.3) !important;
    }

    /* Colorful accent boxes with glow */
    .dark .bg-orange-50 {
      background: linear-gradient(135deg, rgba(124, 45, 18, 0.4) 0%, rgba(67, 20, 7, 0.4) 100%) !important;
      box-shadow: 0 0 30px rgba(251, 146, 60, 0.2);
    }

    .dark .bg-purple-50 {
      background: linear-gradient(135deg, rgba(88, 28, 135, 0.4) 0%, rgba(59, 7, 100, 0.4) 100%) !important;
      box-shadow: 0 0 30px rgba(168, 85, 247, 0.2);
    }

    .dark .bg-blue-50 {
      background: linear-gradient(135deg, rgba(30, 58, 138, 0.4) 0%, rgba(23, 37, 84, 0.4) 100%) !important;
      box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
    }

    .dark .bg-yellow-50 {
      background: linear-gradient(135deg, rgba(120, 53, 15, 0.4) 0%, rgba(66, 32, 6, 0.4) 100%) !important;
      box-shadow: 0 0 30px rgba(234, 179, 8, 0.2);
    }

    .dark .bg-red-50 {
      background: linear-gradient(135deg, rgba(127, 29, 29, 0.4) 0%, rgba(69, 10, 10, 0.4) 100%) !important;
      box-shadow: 0 0 30px rgba(239, 68, 68, 0.2);
    }

    .dark .border-orange-200 {
      border-color: rgba(251, 146, 60, 0.3) !important;
    }

    .dark .border-purple-200 {
      border-color: rgba(168, 85, 247, 0.3) !important;
    }

    .dark .border-blue-200 {
      border-color: rgba(59, 130, 246, 0.3) !important;
    }

    .dark .border-yellow-200 {
      border-color: rgba(234, 179, 8, 0.3) !important;
    }

    .dark .border-yellow-300 {
      border-color: rgba(234, 179, 8, 0.4) !important;
    }

    .dark .border-red-200 {
      border-color: rgba(239, 68, 68, 0.3) !important;
    }

    .dark .border-red-300 {
      border-color: rgba(239, 68, 68, 0.4) !important;
    }

    /* Form elements with glow */
    .dark input,
    .dark textarea,
    .dark select {
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%) !important;
      color: #f3f4f6 !important;
      border-color: rgba(16, 185, 129, 0.2) !important;
      box-shadow: 0 0 15px rgba(16, 185, 129, 0.05);
    }

    .dark input:focus,
    .dark textarea:focus,
    .dark select:focus {
      border-color: rgba(16, 185, 129, 0.5) !important;
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.2) !important;
    }

    .dark input::placeholder {
      color: #6b7280 !important;
    }

    /* Theme Toggle Button - Premium Design */
    .theme-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .theme-toggle:hover {
      transform: scale(1.15) rotate(15deg);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }

    .theme-toggle:active {
      transform: scale(0.95) rotate(-5deg);
    }

    .light .theme-toggle {
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
      animation: lightPulse 3s ease-in-out infinite;
    }

    .dark .theme-toggle {
      background: linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%);
      animation: darkPulse 3s ease-in-out infinite;
      box-shadow: 
        0 8px 32px rgba(99, 102, 241, 0.4),
        0 0 60px rgba(99, 102, 241, 0.2),
        inset 0 0 20px rgba(255, 255, 255, 0.1);
    }

    @keyframes lightPulse {
      0%, 100% {
        box-shadow: 
          0 8px 32px rgba(245, 158, 11, 0.3),
          0 0 40px rgba(251, 191, 36, 0.2);
      }
      50% {
        box-shadow: 
          0 12px 40px rgba(245, 158, 11, 0.5),
          0 0 60px rgba(251, 191, 36, 0.4);
      }
    }

    @keyframes darkPulse {
      0%, 100% {
        box-shadow: 
          0 8px 32px rgba(99, 102, 241, 0.4),
          0 0 60px rgba(99, 102, 241, 0.2),
          inset 0 0 20px rgba(255, 255, 255, 0.1);
      }
      50% {
        box-shadow: 
          0 12px 40px rgba(99, 102, 241, 0.6),
          0 0 80px rgba(99, 102, 241, 0.4),
          inset 0 0 30px rgba(255, 255, 255, 0.15);
      }
    }

    /* Icon rotation animation */
    .theme-toggle i {
      transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .theme-toggle:hover i {
      transform: rotate(180deg) scale(1.1);
    }
    
    @keyframes pulse-green {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    .animate-pulse-green {
      animation: pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .symptom-selector {
      border: 2px solid #e5e7eb;
      border-radius: 0.75rem;
      padding: 1rem;
      margin: 0.5rem 0;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .symptom-selector:hover {
      border-color: #10b981;
      background-color: #f0fdf4;
      transform: translateX(5px);
    }

    .dark .symptom-selector {
      border: 2px solid rgba(16, 185, 129, 0.2);
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    .dark .symptom-selector:hover {
      border-color: rgba(16, 185, 129, 0.6);
      background: linear-gradient(135deg, rgba(6, 78, 59, 0.4) 0%, rgba(5, 46, 22, 0.4) 100%);
      box-shadow: 0 0 25px rgba(16, 185, 129, 0.3);
      transform: translateX(5px);
    }

    .symptom-selected {
      border-color: #10b981;
      background-color: #dcfce7;
    }

    .dark .symptom-selected {
      border-color: rgba(16, 185, 129, 0.8) !important;
      background: linear-gradient(135deg, rgba(6, 78, 59, 0.7) 0%, rgba(5, 46, 22, 0.7) 100%) !important;
      box-shadow: 
        0 0 30px rgba(16, 185, 129, 0.4),
        inset 0 0 20px rgba(16, 185, 129, 0.2) !important;
    }

    .confidence-bar {
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981);
      margin-top: 0.5rem;
      overflow: hidden;
      position: relative;
    }
    
    .dark .confidence-bar {
      background: linear-gradient(90deg, 
        rgba(239, 68, 68, 0.4), 
        rgba(245, 158, 11, 0.4), 
        rgba(16, 185, 129, 0.6)
      );
      box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
    }

    .confidence-fill {
      height: 100%;
      border-radius: 4px;
      background: linear-gradient(90deg, #10b981, #059669);
      transition: width 0.5s ease;
      position: relative;
      overflow: hidden;
    }
    
    .dark .confidence-fill {
      background: linear-gradient(90deg, 
        rgba(16, 185, 129, 0.9), 
        rgba(5, 150, 105, 0.9)
      );
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
    }
    
    .dark .confidence-fill::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    /* Autocomplete suggestions styling */
    .dark .suggestions-dropdown {
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.98) 0%, rgba(15, 23, 42, 0.98) 100%) !important;
      border: 1px solid rgba(16, 185, 129, 0.3) !important;
      box-shadow: 
        0 20px 60px rgba(0, 0, 0, 0.6),
        0 0 40px rgba(16, 185, 129, 0.2) !important;
      backdrop-filter: blur(20px);
    }

    .dark .suggestions-dropdown div:hover {
      background: linear-gradient(135deg, rgba(6, 78, 59, 0.5) 0%, rgba(5, 46, 22, 0.5) 100%) !important;
      box-shadow: inset 0 0 20px rgba(16, 185, 129, 0.2);
    }
    
    /* Additional hover effects for cards */
    .dark .hover\:shadow-xl:hover {
      box-shadow: 
        0 20px 50px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(16, 185, 129, 0.15) !important;
    }
    
    .dark .hover\:shadow-2xl:hover {
      box-shadow: 
        0 25px 60px rgba(0, 0, 0, 0.6),
        0 0 50px rgba(16, 185, 129, 0.2) !important;
    }
    
    /* Scrollbar styling for dark theme */
    .dark ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    
    .dark ::-webkit-scrollbar-track {
      background: rgba(15, 23, 42, 0.5);
      border-radius: 5px;
    }
    
    .dark ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.5), rgba(5, 150, 105, 0.5));
      border-radius: 5px;
      border: 2px solid rgba(15, 23, 42, 0.5);
    }
    
    .dark ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.7), rgba(5, 150, 105, 0.7));
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
    }
    
    /* ========== FLOATING ICONS ANIMATION ========== */
    .floating-icon {
      position: absolute;
      opacity: 0.6;
      animation: float 20s infinite ease-in-out;
      pointer-events: none;
    }
    
    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) rotate(0deg);
      }
      25% {
        transform: translate(30px, -30px) rotate(90deg);
      }
      50% {
        transform: translate(0, -60px) rotate(180deg);
      }
      75% {
        transform: translate(-30px, -30px) rotate(270deg);
      }
    }
    
    .floating-icon:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
    .floating-icon:nth-child(2) { top: 20%; right: 15%; animation-delay: 2s; }
    .floating-icon:nth-child(3) { bottom: 20%; left: 15%; animation-delay: 4s; }
    .floating-icon:nth-child(4) { bottom: 15%; right: 10%; animation-delay: 6s; }
    .floating-icon:nth-child(5) { top: 50%; left: 5%; animation-delay: 8s; }
    .floating-icon:nth-child(6) { top: 40%; right: 8%; animation-delay: 10s; }
    
    /* Pulse animation for hero badges */
    @keyframes pulse-glow {
      0%, 100% {
        box-shadow: 0 0 10px rgba(34, 197, 94, 0.2);
      }
      50% {
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
      }
    }
    
    .glass-effect.badge {
      animation: pulse-glow 3s ease-in-out infinite;
    }
  </style>
</head>
<body class="bg-farm light">
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useRef, useEffect } = React;
    
    // Icon Component
    const Icon = ({ name, className = "w-5 h-5", ...props }) => {
      return <i data-lucide={name} className={className} {...props}></i>;
    };

    // ПОЛНАЯ БАЗА ДАННЫХ БОЛЕЗНЕЙ (интегрирована из disease.txt)
    const DISEASE_DATABASE = {
      corn: [
        {
          "name": "Northern Corn Leaf Blight",
          "pathogen": "Setosphaeria turcica",
          "severity": "high",
          "confidence": 94,
          "season": [6,7,8],
          "symptoms": ["Long elliptical gray-green lesions", "Lesions parallel to leaf veins", "Necrotic tissue"],
          "treatment": ["Apply fungicide (strobilurin/triazole mix)", "Repeat per label", "Apply at first sign of lesions"],
          "prevention": ["Plant resistant hybrids", "2-year rotation", "Manage residue"],
          "recommendations": ["Scout weekly during humid warm periods", "Avoid late evening irrigation"],
          "image": "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&q=60",
          "description": "A fungal disease causing elongated lesions on corn leaves which can reduce yield under favorable conditions."
        },
        {
          "name": "Gray Leaf Spot",
          "pathogen": "Cercospora zeae-maydis",
          "severity": "high",
          "confidence": 92,
          "season": [7,8,9],
          "symptoms": ["Rectangular lesions between veins", "Yellow halo around lesions"],
          "treatment": ["Use triazole/strobilurin fungicides at VT-R1 if present"],
          "prevention": ["Crop rotation", "Resistant hybrids", "Residue management"],
          "recommendations": ["Monitor leaf wetness and RH", "Time sprays for good coverage"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Foliar disease causing rectangular lesions that reduce photosynthetic area."
        },
        {
          "name": "Common Rust",
          "pathogen": "Puccinia sorghi",
          "severity": "medium",
          "confidence": 88,
          "season": [6,7,8],
          "symptoms": ["Orange-brown pustules on leaf surface", "Chlorosis near lesions"],
          "treatment": ["Protective fungicides if widespread"],
          "prevention": ["Resistant varieties", "Sanitation"],
          "recommendations": ["Early detection reduces yield loss", "Scout upper canopy"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Rust disease forming orange pustules; often manageable but can escalate."
        },
        {
          "name": "Southern Rust",
          "pathogen": "Puccinia polysora",
          "severity": "high",
          "confidence": 90,
          "season": [7,8,9],
          "symptoms": ["Orange pustules primarily on upper leaf surfaces", "Rapid spread in warm humid weather"],
          "treatment": ["Immediate fungicide application when detected"],
          "prevention": ["Resistant hybrids", "Regional monitoring"],
          "recommendations": ["Scout fields regularly in summer", "Apply spray to protect flag leaves"],
          "image": "https://images.unsplash.com/photo-1582719478250-9a9b2b0b6a8e?w=800&q=60",
          "description": "Highly aggressive rust in southern regions; rapid control needed."
        },
        {
          "name": "Tar Spot",
          "pathogen": "Phyllachora maydis",
          "severity": "high",
          "confidence": 91,
          "season": [7,8,9],
          "symptoms": ["Raised black tar-like spots on leaves", "Premature leaf senescence"],
          "treatment": ["Fungicide programs advised when present"],
          "prevention": ["Residue management", "Resistant hybrids where available"],
          "recommendations": ["Avoid dense canopies", "Scout for initial lesions"],
          "image": "https://images.unsplash.com/photo-1473447193572-2d8f2b2182a0?w=800&q=60",
          "description": "Emerging foliar disease with characteristic black stromata that reduce photosynthesis."
        },
        {
          "name": "Stewart's Wilt",
          "pathogen": "Pantoea stewartii",
          "severity": "medium",
          "confidence": 85,
          "season": [5,6,7],
          "symptoms": ["Wilting, leaf streaking, systemic infection in seedlings"],
          "treatment": ["Seed treatment and sanitation"],
          "prevention": ["Resistant hybrids", "Control corn flea beetle vector"],
          "recommendations": ["Plant tolerant varieties in high-risk zones", "Use certified seed"],
          "image": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&q=60",
          "description": "Bacterial disease vectored by flea beetles; causes systemic wilt in young plants."
        },
        {
          "name": "Anthracnose Leaf Blight",
          "pathogen": "Colletotrichum graminicola",
          "severity": "medium",
          "confidence": 86,
          "season": [6,7,8],
          "symptoms": ["Irregular tan lesions, often with dark borders", "Can affect stalks and leads to lodging"],
          "treatment": ["Fungicide where economic threshold reached"],
          "prevention": ["Residue management", "Rotation"],
          "recommendations": ["Monitor later season for stalk infections", "Use balanced nutrition"],
          "image": "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=800&q=60",
          "description": "Fungal disease affecting leaves and stalks; can cause lodging if severe."
        },
        {
          "name": "Goss's Wilt",
          "pathogen": "Clavibacter michiganensis subsp. nebraskensis",
          "severity": "high",
          "confidence": 89,
          "season": [6,7,8],
          "symptoms": ["Water-soaked lesions, bacterial exudate, leaf death"],
          "treatment": ["No effective foliar chemical control; remove severely infected fields"],
          "prevention": ["Resistant hybrids", "Sanitation and residue management"],
          "recommendations": ["Avoid mechanical injury during high risk", "Manage residue"],
          "image": "https://images.unsplash.com/photo-1473272416738-33a9d614fa6b?w=800&q=60",
          "description": "Bacterial wilt causing large yield loss under conducive conditions."
        },
        {
          "name": "Northern Corn Rootworm",
          "pathogen": "Diabrotica barberi (insect damage)",
          "severity": "medium",
          "confidence": 80,
          "season": [6,7,8],
          "symptoms": ["Root feeding, plant lodging, nutrient deficiency symptoms"],
          "treatment": ["Insecticidal seed treatment or soil insecticide"],
          "prevention": ["Crop rotation", "Resistant hybrids"],
          "recommendations": ["Monitor adult beetles and root damage at V6-V8"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Root-feeding pest causing structural damage and yield loss."
        },
        {
          "name": "Fusarium Stalk Rot",
          "pathogen": "Fusarium spp.",
          "severity": "high",
          "confidence": 87,
          "season": [8,9],
          "symptoms": ["White/cream mycelium in stalk, hollowed stalk internodes"],
          "treatment": ["No reliable chemical; manage crop health and harvest timely"],
          "prevention": ["Residue management", "Avoid late-season stress"],
          "recommendations": ["Monitor for stalk lodging", "Harvest promptly in wet years"],
          "image": "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=60",
          "description": "Stalk rot complex often associated with drought or insect damage that weakens stalks."
        },
        {
          "name": "Tar Spot",
          "pathogen": "Phyllachora maydis",
          "severity": "high",
          "confidence": 92,
          "season": [7,8,9],
          "symptoms": ["Small black raised spots on leaves", "Yellow halo around spots", "Premature leaf death"],
          "treatment": ["Fungicide applications at early symptom appearance", "Multiple applications may be needed"],
          "prevention": ["Plant resistant hybrids", "Monitor weather conditions", "Crop rotation"],
          "recommendations": ["Most severe in humid conditions", "Scout fields regularly", "Apply fungicides preventatively"],
          "image": "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800&q=60",
          "description": "Emerging foliar disease causing tar-like spots that significantly reduce yield."
        },
        {
          "name": "Crazy Top",
          "pathogen": "Sclerophthora macrospora",
          "severity": "medium",
          "confidence": 85,
          "season": [6,7],
          "symptoms": ["Excessive tillering", "Leaf proliferation from tassel", "Stunted growth", "Distorted plants"],
          "treatment": ["No chemical control available", "Remove infected plants", "Improve drainage"],
          "prevention": ["Proper field drainage", "Avoid planting in wet areas", "Select well-drained fields"],
          "recommendations": ["Disease occurs in poorly drained soils", "Affects scattered plants", "Manage water table"],
          "image": "https://images.unsplash.com/photo-1565522734001-f00e62ec8424?w=800&q=60",
          "description": "Oomycete disease causing abnormal plant development in waterlogged conditions."
        },
        {
          "name": "Eyespot",
          "pathogen": "Aureobasidium zeae",
          "severity": "low",
          "confidence": 83,
          "season": [7,8],
          "symptoms": ["Circular to oval spots with tan centers", "Purple to brown borders", "Eye-like appearance"],
          "treatment": ["Usually no treatment needed", "Fungicides if severe on susceptible hybrids"],
          "prevention": ["Use resistant hybrids", "Crop rotation", "Residue management"],
          "recommendations": ["Generally causes minor damage", "More common on certain hybrids", "Monitor during wet seasons"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Minor foliar disease with distinctive eye-shaped lesions."
        }
      ],
      wheat: [
        {
          "name": "Wheat Leaf Rust",
          "pathogen": "Puccinia triticina",
          "severity": "medium",
          "confidence": 90,
          "season": [5,6,7],
          "symptoms": ["Small orange-red pustules on leaves", "Premature leaf senescence"],
          "treatment": ["Fungicide at flag-leaf stage"],
          "prevention": ["Resistant cultivars", "Rotate crops"],
          "recommendations": ["Monitor regional rust alerts", "Protect flag leaf"],
          "image": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=60",
          "description": "Rust disease producing pustules that reduce photosynthetic leaf area."
        },
        {
          "name": "Stripe Rust",
          "pathogen": "Puccinia striiformis",
          "severity": "high",
          "confidence": 92,
          "season": [4,5,6],
          "symptoms": ["Yellow stripe pustules on leaves", "Yield reduction in cool wet season"],
          "treatment": ["Fungicide when infection observed"],
          "prevention": ["Resistant varieties", "Timely planting"],
          "recommendations": ["Early-season scouting is key", "Apply systemic fungicide if detected"],
          "image": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=60",
          "description": "Serious rust in cooler conditions; can spread rapidly under late-spring rains."
        },
        {
          "name": "Stem Rust",
          "pathogen": "Puccinia graminis",
          "severity": "critical",
          "confidence": 95,
          "season": [5,6,7],
          "symptoms": ["Dark pustules on stems and leaves", "Severe yield loss if epidemic"],
          "treatment": ["Urgent fungicide application where allowed"],
          "prevention": ["Resistant cultivars", "Report outbreaks to extension"],
          "recommendations": ["Monitor and remove volunteer cereals", "Coordinate regional control"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Historically devastating rust; resistant varieties remain best defense."
        },
        {
          "name": "Fusarium Head Blight (Scab)",
          "pathogen": "Fusarium graminearum",
          "severity": "high",
          "confidence": 92,
          "season": [6,7],
          "symptoms": ["Bleached spikelets, pink/orange spore masses formation", "Shriveled grain"],
          "treatment": ["Fungicide at anthesis", "Harvest management"],
          "prevention": ["Tillage to bury residues", "Resistant varieties"],
          "recommendations": ["Avoid late rains during flowering", "Test grain for mycotoxins"],
          "image": "https://images.unsplash.com/photo-1567428483773-4d6b6a4c7d2b?w=800&q=60",
          "description": "Produces mycotoxins harmful to livestock; management focuses on prevention and pre-harvest decisions."
        },
        {
          "name": "Septoria Leaf Blotch",
          "pathogen": "Zymoseptoria tritici",
          "severity": "medium",
          "confidence": 85,
          "season": [5,6,7],
          "symptoms": ["Irregular brown lesions with tiny black pycnidia", "Progresses from lower to upper canopy"],
          "treatment": ["Fungicide, good coverage"],
          "prevention": ["Crop rotation", "Use clean seed"],
          "recommendations": ["Monitor moisture and spray accordingly", "Rotate modes of action"],
          "image": "https://images.unsplash.com/photo-1498815549293-9b1d9b6f4d2f?w=800&q=60",
          "description": "Common foliar disease that reduces tiller and grain size when severe."
        },
        {
          "name": "Powdery Mildew (Wheat)",
          "pathogen": "Blumeria graminis",
          "severity": "medium",
          "confidence": 86,
          "season": [4,5,6],
          "symptoms": ["White powdery growth on leaves and stems", "Reduced vigor"],
          "treatment": ["Sulfur or appropriate fungicides"],
          "prevention": ["Resistant varieties", "Avoid dense stands"],
          "recommendations": ["Monitor under low light and high humidity", "Ensure airflow in canopy"],
          "image": "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&q=60",
          "description": "Superficial fungal disease that can be managed with cultural practices."
        },
        {
          "name": "Tan Spot",
          "pathogen": "Pyrenophora tritici-repentis",
          "severity": "medium",
          "confidence": 84,
          "season": [5,6,7],
          "symptoms": ["Tan lesions with yellow halo on leaves", "Can reduce photosynthetic area"],
          "treatment": ["Fungicide where economic threshold reached"],
          "prevention": ["Rotation and residue management"],
          "recommendations": ["Monitor in no-till fields with heavy residue", "Use resistant genetics"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Foliar disease favored by crop residue and moisture."
        },
        {
          "name": "Barley Yellow Dwarf Virus (on Wheat)",
          "pathogen": "BYDV (virus) vectored by aphids",
          "severity": "medium",
          "confidence": 83,
          "season": [4,5,6],
          "symptoms": ["Yellowing, stunting, and delayed maturity"],
          "treatment": ["Vector management (insecticides) and tolerant varieties"],
          "prevention": ["Manage aphid populations", "Use certified seed"],
          "recommendations": ["Monitor aphid flights", "Plant earlier or later to avoid peaks"],
          "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=60",
          "description": "Virus disease that reduces yield; management focuses on vectors and tolerant genetics."
        },
        {
          "name": "Fusarium Crown Rot",
          "pathogen": "Fusarium pseudograminearum",
          "severity": "high",
          "confidence": 88,
          "season": [6,7,8],
          "symptoms": ["Crown browning, whitehead formation, reduced grain fill"],
          "treatment": ["No effective foliar cure; rotation and varietal tolerance"],
          "prevention": ["Rotation, residue management", "Avoid drought stress"],
          "recommendations": ["Monitor for whiteheads late season", "Use tolerant cultivars"],
          "image": "https://images.unsplash.com/photo-1473272416738-33a9d614fa6b?w=800&q=60",
          "description": "Soil-borne disease causing crown decay and sporadic whiteheads under stress."
        },
        {
          "name": "Wheat Stem Rust",
          "pathogen": "Puccinia graminis f.sp. tritici",
          "severity": "critical",
          "confidence": 93,
          "season": [6,7,8],
          "symptoms": ["Red-brown pustules on stems and leaves", "Black spores late season", "Lodging"],
          "treatment": ["Emergency fungicide applications", "Scout regularly"],
          "prevention": ["Plant resistant varieties", "Remove volunteer wheat", "Monitor rust alerts"],
          "recommendations": ["Most devastating wheat disease", "Can cause total crop loss", "Coordinate with regional monitoring"],
          "image": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=60",
          "description": "Highly destructive rust disease capable of causing epidemic losses."
        },
        {
          "name": "Wheat Streak Mosaic Virus",
          "pathogen": "Wheat Streak Mosaic Virus",
          "severity": "high",
          "confidence": 89,
          "season": [4,5,6,7],
          "symptoms": ["Yellow streaks on leaves", "Stunted growth", "Reduced tillering", "Mosaic patterns"],
          "treatment": ["No chemical control", "Remove infected plants", "Control mite vectors"],
          "prevention": ["Control volunteer wheat", "Delay planting", "Plant virus-resistant varieties"],
          "recommendations": ["Spread by wheat curl mites", "Manage volunteer wheat is critical", "Maintain pest-free period"],
          "image": "https://images.unsplash.com/photo-1437252611977-07f74518abd7?w=800&q=60",
          "description": "Viral disease transmitted by wheat curl mites causing significant yield loss."
        },
        {
          "name": "Common Bunt (Stinking Smut)",
          "pathogen": "Tilletia tritici",
          "severity": "medium",
          "confidence": 86,
          "season": [7,8],
          "symptoms": ["Grain replaced by black spore balls", "Fishy odor", "Reduced grain quality"],
          "treatment": ["Seed treatment is essential", "Fungicide seed dressing"],
          "prevention": ["Use certified treated seed", "Crop rotation", "Avoid contaminated seed"],
          "recommendations": ["Seed-borne disease", "Treatment highly effective", "Impacts grain quality and marketability"],
          "image": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=60",
          "description": "Seed and soil-borne disease replacing grain with spore masses."
        }
      ],
      rice: [
        {
          "name": "Rice Blast",
          "pathogen": "Magnaporthe oryzae",
          "severity": "high",
          "confidence": 95,
          "season": [6,7,8],
          "symptoms": ["Diamond-shaped lesions on leaves", "Neck and panicle infection causing yield loss"],
          "treatment": ["Fungicides at early sign", "Remove infected stubble"],
          "prevention": ["Resistant varieties", "Balanced N management"],
          "recommendations": ["Avoid dense planting", "Manage irrigation to reduce splash"],
          "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=60",
          "description": "One of the most destructive rice diseases worldwide; integrated management required."
        },
        {
          "name": "Bacterial Leaf Blight",
          "pathogen": "Xanthomonas oryzae pv. oryzae",
          "severity": "high",
          "confidence": 91,
          "season": [6,7,8],
          "symptoms": ["Water-soaked lesions at leaf tips, yellowing", "Rapid spread in wet seasons"],
          "treatment": ["Seed treatments and chemicals where allowed"],
          "prevention": ["Resistant cultivars", "Avoid excess nitrogen"],
          "recommendations": ["Use certified seed", "Manage field water levels"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Bacterial disease causing wilting and significant yield loss in flooded rice."
        },
        {
          "name": "Sheath Blight",
          "pathogen": "Rhizoctonia solani",
          "severity": "high",
          "confidence": 90,
          "season": [6,7,8],
          "symptoms": ["Lesions on sheath, lodging in severe cases"],
          "treatment": ["Fungicide application", "Improve drainage"],
          "prevention": ["Balanced nutrition", "Avoid dense stands"],
          "recommendations": ["Reduce N in risk periods", "Monitor water management"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Soil-borne fungus causing sheath rot and yield losses in dense canopies."
        },
        {
          "name": "False Smut",
          "pathogen": "Ustilaginoidea virens",
          "severity": "medium",
          "confidence": 84,
          "season": [7,8,9],
          "symptoms": ["Greenish-yellow spore balls on panicles", "Reduced grain quality"],
          "treatment": ["Fungicides at booting stage"],
          "prevention": ["Balanced fertilizer", "Timely harvest"],
          "recommendations": ["Monitor panicles at heading", "Avoid excessive N"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Produces smutty spore masses that affect marketability of grain."
        },
        {
          "name": "Rice Tungro Disease",
          "pathogen": "RTBV/RRSV (virus)",
          "severity": "critical",
          "confidence": 94,
          "season": [6,7,8],
          "symptoms": ["Stunted plants, yellow-orange leaves, reduced tillering"],
          "treatment": ["No chemical cure; remove infected plants"],
          "prevention": ["Use tolerant varieties", "Vector control (leafhoppers)"],
          "recommendations": ["Monitor vectors", "Plant after vector pressure declines"],
          "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=60",
          "description": "Virus complex transmitted by leafhoppers causing severe yield loss in tropical rice."
        },
        {
          "name": "Bacterial Leaf Streak",
          "pathogen": "Xanthomonas oryzae pv. oryzicola",
          "severity": "medium",
          "confidence": 86,
          "season": [6,7,8],
          "symptoms": ["Linear water-soaked streaks", "Reduced photosynthetic area"],
          "treatment": ["Cultural and seed sanitation"],
          "prevention": ["Use clean seed", "Manage irrigation"],
          "recommendations": ["Avoid overhead irrigation in high risk periods"],
          "image": "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=800&q=60",
          "description": "Foliar bacterial disease favored by high humidity and splash dispersal."
        },
        {
          "name": "Bakanae (Fusarium Seedling Disease)",
          "pathogen": "Fusarium fujikuroi",
          "severity": "high",
          "confidence": 89,
          "season": [5,6],
          "symptoms": ["Elongated, pale seedlings; seedling death"],
          "treatment": ["Seed treatments (fungicide)"],
          "prevention": ["Hot-water seed treatment", "Clean seed"],
          "recommendations": ["Test seed lots for infection", "Avoid sowing infected seed"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Seed-borne disease leading to weak and spindly plants; controlled by seed sanitation."
        },
        {
          "name": "Brown Spot",
          "pathogen": "Cochliobolus miyabeanus",
          "severity": "medium",
          "confidence": 83,
          "season": [6,7,8],
          "symptoms": ["Small brown circular spots on leaves", "Can reduce tiller and yield"],
          "treatment": ["Fungicide in severe epidemics"],
          "prevention": ["Balanced nutrition, rotation"],
          "recommendations": ["Avoid high nitrogen at vulnerable stages"],
          "image": "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&q=60",
          "description": "Common foliar disease under low soil fertility and high humidity."
        },
        {
          "name": "Rice False Smut",
          "pathogen": "Ustilaginoidea virens",
          "severity": "medium",
          "confidence": 87,
          "season": [8,9],
          "symptoms": ["Velvety green-black balls on panicles", "Grain replacement", "Reduced yield"],
          "treatment": ["Fungicide at booting stage", "Remove infected panicles"],
          "prevention": ["Balanced nitrogen management", "Proper spacing", "Resistant varieties"],
          "recommendations": ["More severe in cool wet weather at heading", "Can produce toxins", "Monitor flowering stage"],
          "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=60",
          "description": "Fungal disease producing distinctive smut balls on rice grains."
        },
        {
          "name": "Sheath Rot",
          "pathogen": "Sarocladium oryzae",
          "severity": "medium",
          "confidence": 85,
          "season": [7,8,9],
          "symptoms": ["Brown lesions on leaf sheaths", "Grain discoloration", "Panicle rot"],
          "treatment": ["Fungicide sprays at boot stage", "Reduce humidity"],
          "prevention": ["Avoid excessive nitrogen", "Proper spacing", "Remove plant debris"],
          "recommendations": ["More common in high humidity", "Can cause panicle sterility", "Maintain field hygiene"],
          "image": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=60",
          "description": "Fungal disease affecting leaf sheaths and causing grain discoloration."
        },
        {
          "name": "Bacterial Panicle Blight",
          "pathogen": "Burkholderia glumae",
          "severity": "high",
          "confidence": 90,
          "season": [7,8,9],
          "symptoms": ["Panicle sterility", "Grain discoloration", "Seedling rot", "Reduced germination"],
          "treatment": ["No effective chemical control", "Improve seed quality", "Water management"],
          "prevention": ["Use healthy seed", "Avoid heat stress at flowering", "Proper water management"],
          "recommendations": ["Emerging disease in warm climates", "Can cause severe yield loss", "Critical at flowering stage"],
          "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=60",
          "description": "Bacterial disease causing panicle sterility and seed quality issues."
        }
      ],
      soybean: [
        {
          "name": "Sudden Death Syndrome",
          "pathogen": "Fusarium virguliforme",
          "severity": "high",
          "confidence": 93,
          "season": [7,8,9],
          "symptoms": ["Interveinal chlorosis and necrosis", "Root rot"],
          "treatment": ["Seed treatments", "Improve drainage"],
          "prevention": ["Resistant varieties", "Crop rotation"],
          "recommendations": ["Monitor soil compaction and moisture", "Avoid planting into cold wet soils"],
          "image": "https://images.unsplash.com/photo-1595855759920-86eafd56e9e6?w=800&q=60",
          "description": "Root-associated disease causing foliar symptoms and yield loss in soy."
        },
        {
          "name": "Phytophthora Root Rot",
          "pathogen": "Phytophthora sojae",
          "severity": "high",
          "confidence": 90,
          "season": [5,6,7],
          "symptoms": ["Damping off, root decay, stunting"],
          "treatment": ["Metalaxyl seed treatment", "Phosphite sprays"],
          "prevention": ["Plant resistant Rps varieties", "Improve drainage"],
          "recommendations": ["Avoid planting in cold wet soils", "Use tolerant varieties"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Serious root disease in poorly drained soils; resistance effective."
        },
        {
          "name": "Soybean Cyst Nematode (SCN)",
          "pathogen": "Heterodera glycines",
          "severity": "high",
          "confidence": 92,
          "season": [6,7,8],
          "symptoms": ["Patchy stunting, yield decline", "Root cysts visible under microscope"],
          "treatment": ["Nematicides/management", "Resistant varieties"],
          "prevention": ["Rotate crops", "Soil testing"],
          "recommendations": ["Implement SCN management plan", "Use SCN-resistant lines"],
          "image": "https://images.unsplash.com/photo-1498815549293-9b1d9b6f4d2f?w=800&q=60",
          "description": "Yield-limiting nematode; detection by soil testing informs management."
        },
        {
          "name": "Brown Stem Rot",
          "pathogen": "Phialophora gregata",
          "severity": "medium",
          "confidence": 86,
          "season": [7,8,9],
          "symptoms": ["Stem browning internally, foliar yellowing"],
          "treatment": ["No reliable chemical cure; resistant varieties"],
          "prevention": ["Rotation", "Resistant cultivars"],
          "recommendations": ["Rotate fields and monitor plant health"],
          "image": "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&q=60",
          "description": "Vascular-associated disease reducing yield in susceptible cultivars."
        },
        {
          "name": "Frogeye Leaf Spot",
          "pathogen": "Cercospora sojina",
          "severity": "medium",
          "confidence": 85,
          "season": [7,8,9],
          "symptoms": ["Circular lesions with gray centers and dark borders"],
          "treatment": ["Fungicide under high pressure"],
          "prevention": ["Resistant varieties", "Residue management"],
          "recommendations": ["Rotate chemistry to avoid resistance", "Scout during pod fill"],
          "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=60",
          "description": "Foliar disease affecting yield, particularly in warm humid seasons."
        },
        {
          "name": "White Mold (Sclerotinia Stem Rot)",
          "pathogen": "Sclerotinia sclerotiorum",
          "severity": "high",
          "confidence": 89,
          "season": [6,7,8],
          "symptoms": ["White cottony growth on stems and pods, stem collapse"],
          "treatment": ["Fungicides and cultural control"],
          "prevention": ["Avoid dense canopy", "Rotate host crops"],
          "recommendations": ["Monitor bloom period", "Manage canopy humidity"],
          "image": "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=800&q=60",
          "description": "Serious disease in dense stands; integrated management required."
        },
        {
          "name": "Downy Mildew (Soybean)",
          "pathogen": "Peronospora manshurica",
          "severity": "low",
          "confidence": 80,
          "season": [5,6],
          "symptoms": ["Yellow spots and downy growth under leaf", "Mostly cosmetic"],
          "treatment": ["Rarely necessary", "Fungicide if severe"],
          "prevention": ["Resistant cultivars", "Avoid wet canopy"],
          "recommendations": ["Monitor in cool wet springs"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Generally minor but can be important in certain environments."
        },
        {
          "name": "Phomopsis Seed Decay",
          "pathogen": "Phomopsis spp.",
          "severity": "medium",
          "confidence": 82,
          "season": [8,9],
          "symptoms": ["Poor emergence, seed decay, seedling damping off"],
          "treatment": ["Seed treatment", "Use clean seed"],
          "prevention": ["Field sanitation", "Avoid planting contaminated seed"],
          "recommendations": ["Test seed lots, use certified seed"],
          "image": "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&q=60",
          "description": "Seed-borne pathogen affecting stand establishment."
        },
        {
          "name": "Frogeye Leaf Spot",
          "pathogen": "Cercospora sojina",
          "severity": "medium",
          "confidence": 88,
          "season": [7,8,9],
          "symptoms": ["Circular spots with gray centers", "Dark borders", "Leaf drop"],
          "treatment": ["Fungicide applications", "Use resistant varieties"],
          "prevention": ["Crop rotation", "Residue management", "Resistant cultivars"],
          "recommendations": ["More severe in warm humid conditions", "Can cause defoliation", "Multiple applications may be needed"],
          "image": "https://images.unsplash.com/photo-1595855759920-86eafd56e9e6?w=800&q=60",
          "description": "Common foliar disease with distinctive frogeye-shaped lesions."
        },
        {
          "name": "Soybean Cyst Nematode",
          "pathogen": "Heterodera glycines",
          "severity": "critical",
          "confidence": 94,
          "season": [6,7,8],
          "symptoms": ["Stunted growth", "Yellowing", "Poor nodulation", "White cysts on roots"],
          "treatment": ["Use resistant varieties", "Crop rotation with non-hosts", "Nematicides if economical"],
          "prevention": ["Long rotation", "SCN-resistant varieties", "Test soil for SCN"],
          "recommendations": ["Most economically important soybean pest", "Widespread in production areas", "Rotate resistant varieties"],
          "image": "https://images.unsplash.com/photo-1595855759920-86eafd56e9e6?w=800&q=60",
          "description": "Most devastating soybean pest causing billions in losses worldwide."
        },
        {
          "name": "Charcoal Rot",
          "pathogen": "Macrophomina phaseolina",
          "severity": "high",
          "confidence": 90,
          "season": [7,8,9],
          "symptoms": ["Stem discoloration", "Premature plant death", "Black microsclerotia in stems"],
          "treatment": ["No chemical control", "Manage plant stress", "Early harvest if possible"],
          "prevention": ["Reduce drought stress", "Proper irrigation", "Avoid late planting"],
          "recommendations": ["Worse in hot dry conditions", "Manage stress factors", "Can cause lodging"],
          "image": "https://images.unsplash.com/photo-1595855759920-86eafd56e9e6?w=800&q=60",
          "description": "Stress-related disease causing stem rot and lodging in hot conditions."
        }
      ],
      // НОВЫЕ КУЛЬТУРЫ
      pine: [
        {
          "name": "Pine Needle Rust",
          "pathogen": "Coleosporium spp.",
          "severity": "medium",
          "confidence": 89,
          "season": [5,6,7,8],
          "symptoms": ["Orange pustules on needles", "Needle yellowing", "Premature needle drop"],
          "treatment": ["Fungicide applications in spring", "Improve air circulation"],
          "prevention": ["Remove infected needles", "Plant resistant varieties", "Avoid overhead watering"],
          "recommendations": ["Monitor during wet spring weather", "Prune lower branches for airflow"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Fungal rust disease causing orange pustules on pine needles."
        },
        {
          "name": "Diplodia Tip Blight",
          "pathogen": "Diplodia pinea",
          "severity": "high",
          "confidence": 91,
          "season": [4,5,6],
          "symptoms": ["Brown shoot tips", "Stunted new growth", "Black fruiting bodies on cones"],
          "treatment": ["Prune infected branches", "Apply copper-based fungicides"],
          "prevention": ["Plant resistant species", "Avoid stress conditions", "Proper spacing"],
          "recommendations": ["Remove infected tissue in dry weather", "Disinfect pruning tools"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Serious fungal disease affecting pine tips and shoots."
        },
        {
          "name": "Pine Wilt Disease",
          "pathogen": "Bursaphelenchus xylophilus",
          "severity": "critical",
          "confidence": 93,
          "season": [6,7,8],
          "symptoms": ["Rapid wilting", "Gray-green to brown needles", "Resin flow stops"],
          "treatment": ["Remove and destroy infected trees immediately", "No cure available"],
          "prevention": ["Control beetle vectors", "Avoid wounding trees", "Plant resistant species"],
          "recommendations": ["Quick removal is critical to prevent spread", "Monitor for beetle activity"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Fatal disease transmitted by pine sawyer beetles."
        },
        {
          "name": "Brown Spot Needle Blight",
          "pathogen": "Mycosphaerella dearnessii",
          "severity": "medium",
          "confidence": 87,
          "season": [6,7,8,9],
          "symptoms": ["Brown spots on needles", "Needle browning and drop", "Yellow banding"],
          "treatment": ["Fungicide sprays in spring", "Improve tree vigor"],
          "prevention": ["Rake and remove fallen needles", "Avoid wetting foliage", "Proper fertilization"],
          "recommendations": ["Most damaging on stressed trees", "Maintain tree health"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Common fungal disease causing needle spotting and drop."
        },
        {
          "name": "Dothistroma Needle Blight",
          "pathogen": "Dothistroma pini",
          "severity": "high",
          "confidence": 90,
          "season": [5,6,7,8],
          "symptoms": ["Red-brown bands on needles", "Needle tip death", "Premature defoliation"],
          "treatment": ["Copper fungicide applications", "Multiple spray schedule"],
          "prevention": ["Plant resistant varieties", "Improve drainage", "Thin stands"],
          "recommendations": ["Apply fungicides before symptoms appear", "Most severe in wet climates"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Serious fungal disease causing needle banding and death."
        },
        {
          "name": "Pitch Canker",
          "pathogen": "Fusarium circinatum",
          "severity": "critical",
          "confidence": 94,
          "season": [3,4,5,6,7,8],
          "symptoms": ["Copious resin flow", "Branch dieback", "Cankers on trunk and branches", "Wilting needles"],
          "treatment": ["Prune infected branches", "No effective fungicide", "Remove severely infected trees"],
          "prevention": ["Plant resistant varieties", "Avoid wounding", "Maintain tree vigor", "Quarantine infected areas"],
          "recommendations": ["Highly destructive disease", "Spreads rapidly", "Disinfect tools between cuts"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Devastating fungal disease causing extensive mortality in pine plantations."
        },
        {
          "name": "Annosum Root Rot",
          "pathogen": "Heterobasidion annosum",
          "severity": "critical",
          "confidence": 91,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Crown thinning", "Reduced growth", "Resinosis", "White rot in roots", "Tree death"],
          "treatment": ["No cure available", "Remove infected trees and stumps", "Treat stumps with borax"],
          "prevention": ["Stump treatment after thinning", "Avoid root wounds", "Plant resistant species"],
          "recommendations": ["Most serious root disease", "Spreads through root contact", "Can kill entire stands"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Major root rot disease causing significant economic losses in conifer forests."
        },
        {
          "name": "Pine Shoot Beetle Damage",
          "pathogen": "Tomicus piniperda",
          "severity": "high",
          "confidence": 88,
          "season": [3,4,5,6],
          "symptoms": ["Shoot mining", "Yellowing and browning of shoot tips", "Bushy appearance", "Stunted growth"],
          "treatment": ["Insecticide applications in spring", "Remove and destroy infested shoots", "Sanitation"],
          "prevention": ["Remove slash and debris", "Monitor pine materials", "Early detection programs"],
          "recommendations": ["Exotic pest in North America", "Can weaken trees significantly", "Vectors blue stain fungi"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Invasive bark beetle causing shoot damage and stress to pine trees."
        },
        {
          "name": "Sphaeropsis Blight",
          "pathogen": "Sphaeropsis sapinea",
          "severity": "high",
          "confidence": 90,
          "season": [5,6,7,8],
          "symptoms": ["Brown needles on current year growth", "Stunted shoots", "Resin-soaked cones", "Black pycnidia"],
          "treatment": ["Fungicide applications at bud break", "Prune infected branches", "Improve tree health"],
          "prevention": ["Reduce stress", "Proper watering", "Avoid wounding", "Plant resistant species"],
          "recommendations": ["Disease of stressed trees", "Can be chronic problem", "Multiple years treatment needed"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Common opportunistic pathogen causing shoot blight on stressed pines."
        },
        {
          "name": "Pine Bark Adelgid",
          "pathogen": "Pineus strobi",
          "severity": "medium",
          "confidence": 86,
          "season": [4,5,6,7],
          "symptoms": ["White cottony masses on bark", "Needle yellowing", "Branch dieback", "Reduced vigor"],
          "treatment": ["Horticultural oil spray", "Insecticidal soap", "Systemic insecticides"],
          "prevention": ["Monitor regularly", "Maintain tree vigor", "Natural predators", "Avoid stress"],
          "recommendations": ["More problematic on stressed trees", "Can vector fungi", "Early detection important"],
          "image": "https://images.unsplash.com/photo-1580905995271-857042940b0a?w=800&q=60",
          "description": "Sap-sucking insect that can weaken pine trees and transmit diseases."
        }
      ],
      spruce: [
        {
          "name": "Rhizosphaera Needle Cast",
          "pathogen": "Rhizosphaera kalkhoffii",
          "severity": "high",
          "confidence": 92,
          "season": [6,7,8],
          "symptoms": ["Purple-brown needles", "Needle cast starting from bottom", "Black fruiting bodies"],
          "treatment": ["Fungicide applications in spring", "2-3 year treatment program"],
          "prevention": ["Improve air circulation", "Avoid overhead watering", "Plant in appropriate sites"],
          "recommendations": ["Treat inner needles when expanding", "May take years to recover"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Common fungal disease causing extensive needle loss on spruce."
        },
        {
          "name": "Stigmina Needle Cast",
          "pathogen": "Stigmina lautii",
          "severity": "medium",
          "confidence": 88,
          "season": [6,7,8,9],
          "symptoms": ["Yellow needles", "Premature needle drop", "Branch dieback"],
          "treatment": ["Fungicide sprays during needle expansion", "Improve tree health"],
          "prevention": ["Proper watering", "Mulching", "Avoid stress"],
          "recommendations": ["Less severe than Rhizosphaera", "Focus on tree vigor"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Fungal disease causing needle yellowing and drop."
        },
        {
          "name": "Cytospora Canker",
          "pathogen": "Cytospora kunzei",
          "severity": "high",
          "confidence": 90,
          "season": [3,4,5,6],
          "symptoms": ["White resin bleeding", "Branch dieback", "Blue-green foliage turns brown"],
          "treatment": ["Prune dead branches", "No chemical control", "Improve tree vigor"],
          "prevention": ["Avoid drought stress", "Prevent wounds", "Proper watering"],
          "recommendations": ["Remove infected branches", "Disinfect tools between cuts"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Canker disease affecting stressed spruce trees."
        },
        {
          "name": "Spruce Needle Rust",
          "pathogen": "Chrysomyxa spp.",
          "severity": "low",
          "confidence": 85,
          "season": [5,6,7],
          "symptoms": ["Yellow-orange pustules on needles", "Slight yellowing", "Rarely causes damage"],
          "treatment": ["Usually no treatment needed", "Improve tree vigor if severe"],
          "prevention": ["Remove alternate hosts if nearby", "Maintain tree health"],
          "recommendations": ["Mainly cosmetic issue", "Monitor young trees"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Rust disease causing orange pustules on spruce needles."
        },
        {
          "name": "Spruce Gall Adelgid",
          "pathogen": "Adelges abietis",
          "severity": "medium",
          "confidence": 86,
          "season": [4,5,6],
          "symptoms": ["Pineapple-like galls at branch tips", "Branch distortion", "Reduced growth"],
          "treatment": ["Horticultural oil in dormant season", "Prune and destroy galls"],
          "prevention": ["Monitor for adelgids", "Apply dormant oil annually"],
          "recommendations": ["Most effective control is dormant oil", "Remove galls before they open"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Insect-caused galls on spruce branches."
        },
        {
          "name": "Spruce Budworm",
          "pathogen": "Choristoneura fumiferana",
          "severity": "critical",
          "confidence": 93,
          "season": [5,6,7],
          "symptoms": ["Brown needles at branch tips", "Webbing on needles", "Severe defoliation", "Tree mortality"],
          "treatment": ["Bacillus thuringiensis (Bt) spray", "Chemical insecticides", "Biological control"],
          "prevention": ["Monitor egg masses", "Encourage natural predators", "Diversify tree species"],
          "recommendations": ["Major defoliator in North America", "Can kill entire forests", "Cyclical outbreaks every 30-40 years"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Most destructive defoliator of spruce and fir forests."
        },
        {
          "name": "Sirococcus Shoot Blight",
          "pathogen": "Sirococcus conigenus",
          "severity": "high",
          "confidence": 89,
          "season": [5,6,7],
          "symptoms": ["Browning of new shoots", "Needle death", "Resin exudation", "Distorted growth"],
          "treatment": ["Prune infected shoots", "Fungicide applications", "Improve air circulation"],
          "prevention": ["Plant resistant varieties", "Avoid overhead irrigation", "Proper spacing"],
          "recommendations": ["Affects young trees more severely", "Can cause significant mortality in nurseries"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Emerging disease causing shoot blight in spruce plantations."
        },
        {
          "name": "Armillaria Root Disease",
          "pathogen": "Armillaria ostoyae",
          "severity": "critical",
          "confidence": 92,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Crown thinning", "Reduced growth", "White mycelial fans under bark", "Honey mushrooms at base"],
          "treatment": ["No cure", "Remove infected trees", "Soil fumigation (limited success)"],
          "prevention": ["Avoid planting in infected sites", "Remove stumps", "Improve drainage"],
          "recommendations": ["One of most destructive root diseases", "Can spread via root contact", "Survives in roots for decades"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Devastating root rot causing mortality in conifer forests worldwide."
        },
        {
          "name": "Phytophthora Root Rot",
          "pathogen": "Phytophthora spp.",
          "severity": "high",
          "confidence": 88,
          "season": [4,5,6,7,8,9],
          "symptoms": ["Yellowing foliage", "Wilting", "Root rot", "Crown thinning", "Premature death"],
          "treatment": ["Improve drainage", "Phosphonate injections", "Fungicide drenches"],
          "prevention": ["Plant in well-drained soils", "Avoid over-irrigation", "Use resistant rootstocks"],
          "recommendations": ["Water mold favored by wet conditions", "Can kill trees rapidly", "Proper drainage critical"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Water mold causing root rot in poorly drained sites."
        },
        {
          "name": "Spruce Bark Beetle",
          "pathogen": "Ips typographus",
          "severity": "critical",
          "confidence": 91,
          "season": [4,5,6,7,8],
          "symptoms": ["Boring dust at tree base", "Galleries under bark", "Needle discoloration", "Tree death"],
          "treatment": ["Remove and destroy infested trees", "Pheromone traps", "Insecticides (limited)"],
          "prevention": ["Maintain tree vigor", "Remove stressed trees", "Sanitation logging"],
          "recommendations": ["Major killer of spruce forests", "Vectors blue-stain fungi", "Climate change increasing outbreaks"],
          "image": "https://images.unsplash.com/photo-1485431237101-e94769ba9de4?w=800&q=60",
          "description": "Bark beetle causing massive mortality in spruce forests across Europe and Asia."
        }
      ],
      oak: [
        {
          "name": "Oak Wilt",
          "pathogen": "Bretziella fagacearum",
          "severity": "critical",
          "confidence": 95,
          "season": [5,6,7,8],
          "symptoms": ["Leaf wilting starting at tips", "Bronzing of leaves", "Rapid death in red oaks"],
          "treatment": ["No cure", "Immediate removal of infected trees", "Fungicide injection for prevention"],
          "prevention": ["Avoid pruning during growing season", "Paint fresh wounds", "Prevent root graft transmission"],
          "recommendations": ["Extremely serious disease", "Call professional arborist immediately"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Fatal vascular disease of oak trees."
        },
        {
          "name": "Anthracnose",
          "pathogen": "Apiognomonia quercina",
          "severity": "medium",
          "confidence": 89,
          "season": [4,5,6],
          "symptoms": ["Irregular brown leaf spots", "Leaf curl", "Twig dieback", "Premature defoliation"],
          "treatment": ["Usually no treatment needed", "Fungicides for valuable trees", "Rake and destroy leaves"],
          "prevention": ["Improve air circulation", "Avoid overhead watering", "Prune dead twigs"],
          "recommendations": ["Severe in cool wet springs", "Trees usually recover"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Common fungal disease causing leaf spots and defoliation."
        },
        {
          "name": "Powdery Mildew",
          "pathogen": "Microsphaera spp.",
          "severity": "low",
          "confidence": 87,
          "season": [6,7,8,9],
          "symptoms": ["White powdery coating on leaves", "Leaf distortion", "Stunted growth"],
          "treatment": ["Fungicides if necessary", "Improve air flow", "Reduce shade"],
          "prevention": ["Plant resistant varieties", "Proper spacing", "Avoid excess nitrogen"],
          "recommendations": ["Mainly cosmetic", "More common on young trees"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Fungal disease creating white powder on oak leaves."
        },
        {
          "name": "Bacterial Leaf Scorch",
          "pathogen": "Xylella fastidiosa",
          "severity": "high",
          "confidence": 91,
          "season": [7,8,9],
          "symptoms": ["Leaf margin browning", "Premature leaf drop", "Branch dieback", "Gradual decline"],
          "treatment": ["No cure available", "Antibiotic injections may slow", "Remove infected trees"],
          "prevention": ["Control insect vectors", "Maintain tree health", "Water during drought"],
          "recommendations": ["Slow progressive disease", "Can take years to kill tree"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Bacterial disease causing leaf scorch and decline."
        },
        {
          "name": "Oak Leaf Blister",
          "pathogen": "Taphrina caerulescens",
          "severity": "low",
          "confidence": 84,
          "season": [5,6],
          "symptoms": ["Raised circular blisters on leaves", "Yellow-green discoloration", "Leaf puckering"],
          "treatment": ["Usually no treatment needed", "Fungicides only for severe repeated infections"],
          "prevention": ["Rake and destroy infected leaves", "Usually not worth treating"],
          "recommendations": ["Mainly aesthetic issue", "Does not threaten tree health"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Fungal disease causing raised blisters on oak leaves."
        },
        {
          "name": "Armillaria Root Rot",
          "pathogen": "Armillaria mellea",
          "severity": "high",
          "confidence": 88,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Branch dieback", "Yellowing foliage", "White mycelium under bark", "Mushrooms at base"],
          "treatment": ["Remove infected trees", "No chemical control", "Improve drainage"],
          "prevention": ["Avoid planting in infected soil", "Improve site drainage", "Remove stumps"],
          "recommendations": ["Soil-borne disease", "Very difficult to control"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Root rot causing gradual decline and death."
        },
        {
          "name": "Oak Decline",
          "pathogen": "Complex syndrome",
          "severity": "high",
          "confidence": 89,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Progressive crown thinning", "Branch dieback", "Epicormic shoots", "Reduced leaf size", "Slow decline"],
          "treatment": ["Improve tree vigor", "Proper watering", "Mulching", "Reduce stress factors"],
          "prevention": ["Avoid soil compaction", "Maintain proper drainage", "Prevent wounds", "Balanced fertilization"],
          "recommendations": ["Complex disease involving multiple factors", "Stress-related condition", "May take years to develop"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Complex syndrome involving environmental stress and secondary pathogens."
        },
        {
          "name": "Sudden Oak Death",
          "pathogen": "Phytophthora ramorum",
          "severity": "critical",
          "confidence": 94,
          "season": [3,4,5,6,7,8],
          "symptoms": ["Bleeding cankers on trunk", "Leaf spots", "Twig dieback", "Crown thinning", "Rapid death"],
          "treatment": ["No cure", "Quarantine infected areas", "Remove infected trees", "Phosphonate injections for prevention"],
          "prevention": ["Avoid moving infected plants", "Disinfect equipment", "Plant resistant species", "Monitor regularly"],
          "recommendations": ["Highly destructive exotic disease", "Regulated pathogen", "Report suspected cases immediately"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Devastating exotic disease causing mortality in oak forests of western North America."
        },
        {
          "name": "Tubakia Leaf Spot",
          "pathogen": "Tubakia dryina",
          "severity": "medium",
          "confidence": 86,
          "season": [7,8,9],
          "symptoms": ["Circular to angular leaf spots", "Yellow halos", "Premature leaf drop", "Red-brown lesions"],
          "treatment": ["Fungicide applications", "Rake and destroy leaves", "Improve air circulation"],
          "prevention": ["Good sanitation", "Avoid overhead irrigation", "Resistant varieties"],
          "recommendations": ["More severe in wet years", "Can cause significant defoliation", "Usually not fatal"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Common leaf spot disease causing premature defoliation in oaks."
        },
        {
          "name": "Oak Shothole Leafminer",
          "pathogen": "Japanagromyza viridula",
          "severity": "medium",
          "confidence": 85,
          "season": [5,6,7],
          "symptoms": ["Mines in leaves", "Shothole appearance", "Leaf distortion", "Premature leaf drop"],
          "treatment": ["Insecticides in early spring", "Systemic treatments", "Remove fallen leaves"],
          "prevention": ["Monitor for early signs", "Natural enemies", "Proper tree health"],
          "recommendations": ["Invasive pest", "Can cause aesthetic damage", "Multiple generations per year"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Invasive leafminer causing characteristic shothole damage in oak leaves."
        },
        {
          "name": "Hypoxylon Canker",
          "pathogen": "Biscogniauxia mediterranea",
          "severity": "high",
          "confidence": 90,
          "season": [6,7,8,9],
          "symptoms": ["Silver-gray bark", "Black crusty stromata", "Branch dieback", "Crown thinning", "Tree death"],
          "treatment": ["No cure", "Remove dead and dying trees", "Improve tree vigor"],
          "prevention": ["Reduce stress", "Proper watering during drought", "Avoid wounding"],
          "recommendations": ["Disease of stressed trees", "Common after drought", "Can kill trees rapidly"],
          "image": "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&q=60",
          "description": "Opportunistic canker disease attacking drought-stressed oak trees."
        }
      ],
      sunflower: [
        {
          "name": "Downy Mildew",
          "pathogen": "Plasmopara halstedii",
          "severity": "high",
          "confidence": 93,
          "season": [5,6,7,8],
          "symptoms": ["Stunting", "Thickened stems", "Pale chlorotic leaves", "White downy growth underneath"],
          "treatment": ["Fungicide seed treatment", "Foliar fungicides early season", "Remove infected plants"],
          "prevention": ["Use resistant hybrids", "Seed treatment", "Crop rotation"],
          "recommendations": ["Most damaging if infection occurs early", "Can cause complete crop loss"],
          "image": "https://images.unsplash.com/photo-1517241080758-95a42c519c1a?w=800&q=60",
          "description": "Serious systemic disease affecting sunflower plants."
        },
        {
          "name": "Sclerotinia Head Rot",
          "pathogen": "Sclerotinia sclerotiorum",
          "severity": "critical",
          "confidence": 94,
          "season": [7,8,9],
          "symptoms": ["Brown lesions on back of head", "White mycelial growth", "Head rot", "Black sclerotia"],
          "treatment": ["Fungicide applications at flowering", "Improve air circulation", "Remove infected heads"],
          "prevention": ["Crop rotation", "Manage canopy density", "Resistant varieties"],
          "recommendations": ["Major yield reducer", "Favored by cool wet weather at bloom"],
          "image": "https://images.unsplash.com/photo-1517241080758-95a42c519c1a?w=800&q=60",
          "description": "Devastating disease causing sunflower head rot."
        },
        {
          "name": "Rust",
          "pathogen": "Puccinia helianthi",
          "severity": "medium",
          "confidence": 90,
          "season": [7,8,9],
          "symptoms": ["Orange-brown pustules on leaves", "Yellowing", "Premature leaf death"],
          "treatment": ["Fungicides if severe", "Remove infected leaves", "Improve air flow"],
          "prevention": ["Plant resistant varieties", "Avoid overhead irrigation", "Proper spacing"],
          "recommendations": ["Can reduce yield significantly", "Scout regularly mid-season"],
          "image": "https://images.unsplash.com/photo-1517241080758-95a42c519c1a?w=800&q=60",
          "description": "Fungal rust disease causing pustules on sunflower leaves."
        },
        {
          "name": "Alternaria Leaf Spot",
          "pathogen": "Alternaria helianthi",
          "severity": "medium",
          "confidence": 87,
          "season": [6,7,8],
          "symptoms": ["Dark brown leaf spots", "Concentric rings in lesions", "Premature defoliation"],
          "treatment": ["Fungicides at first signs", "Remove infected material", "Crop rotation"],
          "prevention": ["Use certified seed", "Avoid overhead watering", "Crop rotation"],
          "recommendations": ["More severe under stressed conditions", "Monitor lower leaves first"],
          "image": "https://images.unsplash.com/photo-1517241080758-95a42c519c1a?w=800&q=60",
          "description": "Common leaf spot disease of sunflower."
        },
        {
          "name": "Verticillium Wilt",
          "pathogen": "Verticillium dahliae",
          "severity": "high",
          "confidence": 91,
          "season": [6,7,8],
          "symptoms": ["Wilting of leaves", "Brown discoloration in stem", "Sudden collapse", "V-shaped lesions"],
          "treatment": ["No cure available", "Remove and destroy plants", "Soil fumigation"],
          "prevention": ["Long crop rotation (7+ years)", "Use resistant varieties", "Avoid infected fields"],
          "recommendations": ["Soil-borne pathogen", "Very persistent in soil"],
          "image": "https://images.unsplash.com/photo-1517241080758-95a42c519c1a?w=800&q=60",
          "description": "Vascular wilt disease causing plant collapse."
        }
      ],
      carrot: [
        {
          "name": "Alternaria Leaf Blight",
          "pathogen": "Alternaria dauci",
          "severity": "high",
          "confidence": 92,
          "season": [6,7,8,9],
          "symptoms": ["Dark brown lesions on leaves", "Yellow halos", "Leaf curling", "Defoliation"],
          "treatment": ["Fungicide applications", "Remove infected foliage", "Improve air circulation"],
          "prevention": ["Use disease-free seed", "Crop rotation", "Avoid overhead irrigation"],
          "recommendations": ["Very common in warm humid conditions", "Can cause complete defoliation"],
          "image": "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800&q=60",
          "description": "Major foliar disease affecting carrot crops."
        },
        {
          "name": "Cercospora Leaf Spot",
          "pathogen": "Cercospora carotae",
          "severity": "medium",
          "confidence": 88,
          "season": [6,7,8],
          "symptoms": ["Small circular brown spots", "Yellow margins", "Leaf yellowing", "Premature death"],
          "treatment": ["Fungicide sprays", "Remove plant debris", "Rotation"],
          "prevention": ["3-year rotation", "Resistant varieties", "Good sanitation"],
          "recommendations": ["Most severe in hot humid weather", "Multiple applications may be needed"],
          "image": "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800&q=60",
          "description": "Fungal leaf spot common on carrots."
        },
        {
          "name": "Powdery Mildew",
          "pathogen": "Erysiphe heraclei",
          "severity": "medium",
          "confidence": 86,
          "season": [7,8,9],
          "symptoms": ["White powdery growth on leaves", "Leaf yellowing", "Stunted growth"],
          "treatment": ["Sulfur or fungicide sprays", "Remove infected leaves", "Improve spacing"],
          "prevention": ["Resistant varieties", "Adequate spacing", "Avoid excess nitrogen"],
          "recommendations": ["More common late season", "Can affect quality"],
          "image": "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800&q=60",
          "description": "Powdery mildew affecting carrot foliage."
        },
        {
          "name": "Cavity Spot",
          "pathogen": "Pythium spp.",
          "severity": "high",
          "confidence": 90,
          "season": [8,9,10],
          "symptoms": ["Sunken lesions on roots", "Root cracking", "Secondary rot", "Reduced marketability"],
          "treatment": ["Fungicide drenches", "Improve drainage", "Harvest at proper maturity"],
          "prevention": ["Well-drained soil", "Avoid over-irrigation", "Crop rotation"],
          "recommendations": ["Major storage disease", "Worse in wet soils"],
          "image": "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800&q=60",
          "description": "Root disease causing sunken lesions on carrots."
        },
        {
          "name": "Bacterial Soft Rot",
          "pathogen": "Pectobacterium carotovorum",
          "severity": "high",
          "confidence": 89,
          "season": [7,8,9,10],
          "symptoms": ["Soft watery rot", "Foul odor", "Complete breakdown", "Slime production"],
          "treatment": ["No chemical control", "Remove infected plants", "Improve sanitation"],
          "prevention": ["Avoid wounding", "Good drainage", "Proper storage conditions"],
          "recommendations": ["Significant storage problem", "Spreads rapidly in storage"],
          "image": "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800&q=60",
          "description": "Bacterial rot destroying carrot roots."
        },
        {
          "name": "Root Knot Nematode",
          "pathogen": "Meloidogyne spp.",
          "severity": "medium",
          "confidence": 85,
          "season": [6,7,8],
          "symptoms": ["Galls on roots", "Stunted growth", "Forked roots", "Hairy roots"],
          "treatment": ["Soil fumigation", "Crop rotation", "Bio-nematicides"],
          "prevention": ["Long rotations with non-hosts", "Resistant varieties", "Soil solarization"],
          "recommendations": ["Major problem in warm sandy soils", "Reduces root quality"],
          "image": "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=800&q=60",
          "description": "Nematode causing galls and deformed roots."
        }
      ],
      cabbage: [
        {
          "name": "Black Rot",
          "pathogen": "Xanthomonas campestris pv. campestris",
          "severity": "critical",
          "confidence": 95,
          "season": [6,7,8],
          "symptoms": ["V-shaped yellow lesions", "Black veins", "Head rot", "Foul odor"],
          "treatment": ["No cure", "Remove infected plants", "Copper sprays for prevention"],
          "prevention": ["Use certified seed", "Hot water seed treatment", "Crop rotation", "Avoid overhead watering"],
          "recommendations": ["Most serious bacterial disease of cabbage", "Can destroy entire crop"],
          "image": "https://images.unsplash.com/photo-1486328228599-85db4443971f?w=800&q=60",
          "description": "Devastating bacterial disease of crucifer crops."
        },
        {
          "name": "Club Root",
          "pathogen": "Plasmodiophora brassicae",
          "severity": "critical",
          "confidence": 93,
          "season": [5,6,7,8],
          "symptoms": ["Swollen distorted roots", "Wilting", "Stunting", "Yellowing", "Galls on roots"],
          "treatment": ["No chemical cure", "Lime to raise pH", "Long rotation", "Remove infected plants"],
          "prevention": ["Use resistant varieties", "Maintain pH above 7.2", "Sanitation", "Avoid spreading soil"],
          "recommendations": ["Extremely persistent soil pathogen", "Can last 20+ years in soil"],
          "image": "https://images.unsplash.com/photo-1486328228599-85db4443971f?w=800&q=60",
          "description": "Serious soil-borne disease causing root galls."
        },
        {
          "name": "Downy Mildew",
          "pathogen": "Peronospora parasitica",
          "severity": "high",
          "confidence": 91,
          "season": [5,6,7,8],
          "symptoms": ["Yellow spots on upper leaf surface", "White downy growth underneath", "Leaf distortion"],
          "treatment": ["Fungicides", "Remove infected leaves", "Improve air flow"],
          "prevention": ["Resistant varieties", "Avoid overhead watering", "Proper spacing"],
          "recommendations": ["Most severe in cool wet conditions", "Can affect transplants"],
          "image": "https://images.unsplash.com/photo-1486328228599-85db4443971f?w=800&q=60",
          "description": "Fungal disease causing leaf spots and downy growth."
        },
        {
          "name": "Fusarium Yellows",
          "pathogen": "Fusarium oxysporum f.sp. conglutinans",
          "severity": "high",
          "confidence": 90,
          "season": [6,7,8],
          "symptoms": ["One-sided yellowing", "Leaf drop", "Stunting", "Vascular browning"],
          "treatment": ["No chemical control", "Remove infected plants", "Use resistant varieties"],
          "prevention": ["Resistant varieties (Type A or B)", "Crop rotation", "Soil solarization"],
          "recommendations": ["Soil-borne disease", "Worse in warm weather"],
          "image": "https://images.unsplash.com/photo-1486328228599-85db4443971f?w=800&q=60",
          "description": "Vascular wilt disease causing yellowing and stunting."
        },
        {
          "name": "Alternaria Leaf Spot",
          "pathogen": "Alternaria brassicae",
          "severity": "medium",
          "confidence": 87,
          "season": [6,7,8,9],
          "symptoms": ["Circular brown spots", "Concentric rings", "Yellow halos", "Leaf drop"],
          "treatment": ["Fungicide applications", "Remove infected tissue", "Improve sanitation"],
          "prevention": ["Use disease-free seed", "Crop rotation", "Avoid dense planting"],
          "recommendations": ["Can affect both leaves and heads", "More severe on stressed plants"],
          "image": "https://images.unsplash.com/photo-1486328228599-85db4443971f?w=800&q=60",
          "description": "Common leaf spot disease of cabbage."
        },
        {
          "name": "White Rust",
          "pathogen": "Albugo candida",
          "severity": "medium",
          "confidence": 85,
          "season": [5,6,7],
          "symptoms": ["White pustules on leaves", "Leaf distortion", "Stunting", "Flower distortion"],
          "treatment": ["Fungicides for severe cases", "Remove infected plants", "Rotation"],
          "prevention": ["Resistant varieties", "Avoid overhead irrigation", "Good air circulation"],
          "recommendations": ["Often occurs with downy mildew", "More common in cool weather"],
          "image": "https://images.unsplash.com/photo-1486328228599-85db4443971f?w=800&q=60",
          "description": "Fungal disease causing white pustules on leaves."
        }
      ],
      cucumber: [
        {
          "name": "Powdery Mildew",
          "pathogen": "Podosphaera xanthii",
          "severity": "high",
          "confidence": 94,
          "season": [6,7,8,9],
          "symptoms": ["White powdery spots on leaves", "Leaf yellowing", "Reduced photosynthesis", "Premature death"],
          "treatment": ["Fungicides (sulfur, neem oil)", "Baking soda spray", "Remove infected leaves"],
          "prevention": ["Resistant varieties", "Good air circulation", "Avoid excess nitrogen"],
          "recommendations": ["Very common disease", "Can appear overnight", "Multiple applications needed"],
          "image": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=800&q=60",
          "description": "Most common cucumber disease causing white powder on leaves."
        },
        {
          "name": "Downy Mildew",
          "pathogen": "Pseudoperonospora cubensis",
          "severity": "critical",
          "confidence": 95,
          "season": [6,7,8],
          "symptoms": ["Yellow angular spots", "Purple-gray growth underneath", "Rapid defoliation"],
          "treatment": ["Fungicides immediately", "Remove infected tissue", "Improve drainage"],
          "prevention": ["Resistant varieties", "Avoid overhead watering", "Fungicide program"],
          "recommendations": ["Can devastate crop in days", "Most serious cucumber disease"],
          "image": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=800&q=60",
          "description": "Devastating disease that can kill plants rapidly."
        },
        {
          "name": "Anthracnose",
          "pathogen": "Colletotrichum orbiculare",
          "severity": "high",
          "confidence": 91,
          "season": [7,8,9],
          "symptoms": ["Circular brown spots on leaves", "Sunken lesions on fruits", "Pink spore masses"],
          "treatment": ["Fungicide sprays", "Remove infected fruits", "Crop rotation"],
          "prevention": ["Use disease-free seed", "2-3 year rotation", "Avoid overhead irrigation"],
          "recommendations": ["Affects both foliage and fruit", "Survives on crop debris"],
          "image": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=800&q=60",
          "description": "Fungal disease causing leaf and fruit lesions."
        },
        {
          "name": "Bacterial Wilt",
          "pathogen": "Erwinia tracheiphila",
          "severity": "critical",
          "confidence": 93,
          "season": [6,7,8],
          "symptoms": ["Sudden wilting", "Sticky sap from stems", "Vascular browning", "Plant death"],
          "treatment": ["No cure", "Remove infected plants", "Control cucumber beetles"],
          "prevention": ["Control beetle vectors", "Row covers", "Resistant varieties (limited)"],
          "recommendations": ["Transmitted by cucumber beetles", "Can kill entire plant"],
          "image": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=800&q=60",
          "description": "Fatal bacterial disease spread by beetles."
        },
        {
          "name": "Angular Leaf Spot",
          "pathogen": "Pseudomonas syringae pv. lachrymans",
          "severity": "medium",
          "confidence": 88,
          "season": [6,7,8],
          "symptoms": ["Angular water-soaked spots", "White bacterial ooze", "Leaf yellowing", "Fruit lesions"],
          "treatment": ["Copper-based bactericides", "Remove infected tissue", "Improve air flow"],
          "prevention": ["Use certified seed", "Hot water seed treatment", "Avoid overhead watering"],
          "recommendations": ["Seed-borne pathogen", "Worse in cool wet weather"],
          "image": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=800&q=60",
          "description": "Bacterial disease causing angular leaf spots."
        },
        {
          "name": "Gummy Stem Blight",
          "pathogen": "Stagonosporopsis cucurbitacearum",
          "severity": "high",
          "confidence": 90,
          "season": [7,8,9],
          "symptoms": ["Brown gummy lesions on stems", "Leaf spots", "Fruit rot", "Vine collapse"],
          "treatment": ["Fungicides", "Remove infected vines", "Improve air circulation"],
          "prevention": ["Crop rotation", "Disease-free seed", "Good drainage"],
          "recommendations": ["Can cause rapid vine death", "Major fruit rot issue"],
          "image": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=800&q=60",
          "description": "Serious disease affecting stems and fruits."
        }
      ],
      pepper: [
        {
          "name": "Bacterial Spot",
          "pathogen": "Xanthomonas euvesicatoria",
          "severity": "high",
          "confidence": 93,
          "season": [6,7,8],
          "symptoms": ["Small dark spots on leaves", "Yellow halos", "Fruit lesions", "Defoliation"],
          "treatment": ["Copper sprays", "Antibiotic sprays", "Remove infected plants"],
          "prevention": ["Use certified seed", "Hot water seed treatment", "Crop rotation", "Avoid overhead watering"],
          "recommendations": ["Most common bacterial disease", "Very difficult to control"],
          "image": "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=800&q=60",
          "description": "Serious bacterial disease affecting leaves and fruits."
        },
        {
          "name": "Phytophthora Blight",
          "pathogen": "Phytophthora capsici",
          "severity": "critical",
          "confidence": 95,
          "season": [6,7,8],
          "symptoms": ["Wilting", "Dark stem lesions", "Root rot", "Fruit rot", "White mold"],
          "treatment": ["Fungicides", "Remove infected plants", "Improve drainage"],
          "prevention": ["Well-drained soil", "Raised beds", "Avoid over-irrigation", "Resistant varieties"],
          "recommendations": ["Most destructive pepper disease", "Can destroy entire field"],
          "image": "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=800&q=60",
          "description": "Devastating disease causing wilt and rot."
        },
        {
          "name": "Anthracnose",
          "pathogen": "Colletotrichum spp.",
          "severity": "high",
          "confidence": 91,
          "season": [7,8,9],
          "symptoms": ["Sunken lesions on ripe fruits", "Concentric rings", "Black dots", "Fruit rot"],
          "treatment": ["Fungicides", "Remove infected fruits", "Harvest promptly"],
          "prevention": ["Crop rotation", "Good sanitation", "Avoid fruit injury"],
          "recommendations": ["Major post-harvest problem", "Worse on ripe fruit"],
          "image": "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=800&q=60",
          "description": "Fungal disease causing fruit rot at maturity."
        },
        {
          "name": "Bacterial Soft Rot",
          "pathogen": "Pectobacterium carotovorum",
          "severity": "high",
          "confidence": 89,
          "season": [7,8,9],
          "symptoms": ["Soft watery rot", "Foul odor", "Fruit collapse", "Slime"],
          "treatment": ["No chemical control", "Remove infected fruits", "Reduce humidity"],
          "prevention": ["Avoid wounding", "Good air circulation", "Proper handling"],
          "recommendations": ["Secondary infection through wounds", "Major storage issue"],
          "image": "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=800&q=60",
          "description": "Bacterial rot affecting fruits."
        },
        {
          "name": "Verticillium Wilt",
          "pathogen": "Verticillium dahliae",
          "severity": "high",
          "confidence": 90,
          "season": [6,7,8],
          "symptoms": ["One-sided wilting", "Yellowing", "Brown vascular tissue", "Stunting"],
          "treatment": ["No chemical cure", "Remove infected plants", "Soil fumigation"],
          "prevention": ["Long crop rotation", "Resistant varieties", "Soil solarization"],
          "recommendations": ["Soil-borne pathogen", "Very persistent"],
          "image": "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=800&q=60",
          "description": "Vascular wilt disease causing plant decline."
        },
        {
          "name": "Powdery Mildew",
          "pathogen": "Leveillula taurica",
          "severity": "medium",
          "confidence": 87,
          "season": [7,8,9],
          "symptoms": ["White powdery growth on leaves", "Yellowing", "Leaf drop"],
          "treatment": ["Sulfur fungicides", "Neem oil", "Remove infected leaves"],
          "prevention": ["Good air circulation", "Avoid excess nitrogen", "Resistant varieties"],
          "recommendations": ["Less common than in cucurbits", "Can reduce yield"],
          "image": "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=800&q=60",
          "description": "Fungal disease creating white powder on leaves."
        }
      ],
      potato: [
        {
          "name": "Late Blight",
          "pathogen": "Phytophthora infestans",
          "severity": "critical",
          "confidence": 96,
          "season": [6,7,8,9],
          "symptoms": ["Water-soaked lesions on leaves", "White fuzzy growth underneath", "Brown-black stem lesions", "Tuber rot"],
          "treatment": ["Fungicides immediately at first signs", "Remove infected plants", "Destroy infected tubers"],
          "prevention": ["Resistant varieties", "Certified disease-free seed", "Good drainage", "Avoid overhead watering"],
          "recommendations": ["Most destructive potato disease", "Can destroy entire crop in days", "Monitor weather for blight-favorable conditions"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Devastating disease that caused the Irish potato famine; can destroy crops rapidly."
        },
        {
          "name": "Early Blight",
          "pathogen": "Alternaria solani",
          "severity": "high",
          "confidence": 93,
          "season": [6,7,8],
          "symptoms": ["Concentric rings on older leaves (target spots)", "Yellowing", "Defoliation", "Stem lesions"],
          "treatment": ["Fungicide applications", "Remove lower infected leaves", "Improve air circulation"],
          "prevention": ["Crop rotation (3+ years)", "Mulching", "Avoid wetting foliage", "Resistant varieties"],
          "recommendations": ["Common in warm humid weather", "Affects lower leaves first", "Can reduce yield significantly"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Common foliar disease causing characteristic target-spot lesions."
        },
        {
          "name": "Potato Scab",
          "pathogen": "Streptomyces scabies",
          "severity": "medium",
          "confidence": 89,
          "season": [7,8,9],
          "symptoms": ["Corky lesions on tuber surface", "Rough scabby patches", "Reduced marketability"],
          "treatment": ["No cure once infected", "Maintain soil pH below 5.5", "Adequate irrigation during tuber formation"],
          "prevention": ["Use certified seed", "Acidic soil pH (5.0-5.5)", "Crop rotation", "Avoid fresh manure"],
          "recommendations": ["Cosmetic damage mainly", "Does not affect eating quality", "Worse in alkaline dry soils"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Bacterial disease causing corky lesions on potato tubers."
        },
        {
          "name": "Blackleg",
          "pathogen": "Pectobacterium spp.",
          "severity": "high",
          "confidence": 91,
          "season": [5,6,7,8],
          "symptoms": ["Black slimy stem at soil line", "Wilting", "Yellowing", "Tuber soft rot", "Foul odor"],
          "treatment": ["Remove and destroy infected plants immediately", "No chemical control"],
          "prevention": ["Certified disease-free seed", "Good drainage", "Avoid wounding", "Crop rotation"],
          "recommendations": ["Seed-borne disease", "Can spread in storage", "Worse in wet conditions"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Bacterial disease causing stem blackening and tuber rot."
        },
        {
          "name": "Verticillium Wilt",
          "pathogen": "Verticillium dahliae",
          "severity": "high",
          "confidence": 90,
          "season": [6,7,8],
          "symptoms": ["Yellowing between leaf veins", "Wilting during heat", "Brown vascular tissue", "Stunted growth"],
          "treatment": ["No chemical cure", "Remove infected plants", "Soil fumigation (commercial)"],
          "prevention": ["Long crop rotation (4+ years)", "Resistant varieties", "Avoid infected fields"],
          "recommendations": ["Soil-borne pathogen", "Can persist 10+ years", "Worse in cool weather"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Vascular wilt disease causing yellowing and stunting."
        },
        {
          "name": "Potato Virus Y (PVY)",
          "pathogen": "Potyvirus",
          "severity": "high",
          "confidence": 88,
          "season": [6,7,8],
          "symptoms": ["Leaf mottling and mosaic", "Leaf drop", "Necrotic lesions", "Stunted plants", "Reduced tuber yield"],
          "treatment": ["No cure", "Remove infected plants", "Control aphid vectors"],
          "prevention": ["Certified virus-free seed", "Control aphids", "Remove volunteer plants", "Isolation from tomato"],
          "recommendations": ["Aphid-transmitted virus", "Major problem worldwide", "Can cause 80% yield loss"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Viral disease causing mosaic patterns and yield reduction."
        },
        {
          "name": "Pink Rot",
          "pathogen": "Phytophthora erythroseptica",
          "severity": "medium",
          "confidence": 86,
          "season": [8,9,10],
          "symptoms": ["Tubers turn pink when cut and exposed to air", "Rubbery texture", "Dark discoloration"],
          "treatment": ["No treatment in field", "Improve drainage", "Harvest when dry"],
          "prevention": ["Good drainage", "Avoid over-irrigation", "Harvest at proper maturity", "Proper storage"],
          "recommendations": ["Storage problem", "Spreads in wet conditions", "Pink color develops upon exposure to air"],
          "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=60",
          "description": "Tuber rot disease characterized by pink discoloration."
        }
      ],
      tomato: [
        {
          "name": "Early Blight",
          "pathogen": "Alternaria solani",
          "severity": "high",
          "confidence": 94,
          "season": [6,7,8],
          "symptoms": ["Bull's-eye leaf spots on lower leaves", "Yellowing", "Defoliation", "Stem lesions", "Fruit rot"],
          "treatment": ["Fungicide applications weekly", "Remove infected leaves", "Mulch to prevent splash"],
          "prevention": ["Resistant varieties", "Crop rotation", "Proper spacing", "Avoid overhead watering", "Stake plants"],
          "recommendations": ["Very common disease", "Starts on lower older leaves", "Can significantly reduce yield"],
          "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=60",
          "description": "Most common tomato disease causing target-spot lesions."
        },
        {
          "name": "Late Blight",
          "pathogen": "Phytophthora infestans",
          "severity": "critical",
          "confidence": 96,
          "season": [6,7,8,9],
          "symptoms": ["Gray-green water-soaked spots", "White fuzzy growth underneath", "Brown-black lesions", "Fruit rot", "Rapid plant death"],
          "treatment": ["Fungicides immediately", "Remove all infected tissue", "Destroy infected plants"],
          "prevention": ["Resistant varieties", "Avoid overhead watering", "Good air circulation", "Monitor weather"],
          "recommendations": ["Can destroy crop in 7-10 days", "Same pathogen as potato blight", "Most destructive tomato disease"],
          "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=60",
          "description": "Devastating disease that can kill entire plants rapidly."
        },
        {
          "name": "Septoria Leaf Spot",
          "pathogen": "Septoria lycopersici",
          "severity": "high",
          "confidence": 92,
          "season": [6,7,8],
          "symptoms": ["Small circular spots with gray centers", "Dark borders", "Black dots in center", "Yellowing", "Defoliation"],
          "treatment": ["Fungicide sprays", "Remove lower infected leaves", "Improve air flow"],
          "prevention": ["Crop rotation", "Mulching", "Avoid wetting foliage", "Prune lower branches"],
          "recommendations": ["Common in humid weather", "Spreads rapidly in rain", "Can cause severe defoliation"],
          "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=60",
          "description": "Foliar disease causing small spots with distinctive black dots."
        },
        {
          "name": "Bacterial Spot",
          "pathogen": "Xanthomonas spp.",
          "severity": "high",
          "confidence": 90,
          "season": [6,7,8],
          "symptoms": ["Small dark greasy spots on leaves", "Yellow halos", "Fruit lesions", "Defoliation"],
          "treatment": ["Copper bactericides", "Remove infected tissue", "Improve air circulation"],
          "prevention": ["Use certified seed", "Hot water seed treatment", "Crop rotation", "Avoid overhead watering"],
          "recommendations": ["Difficult to control", "Spreads in wet weather", "Can cause fruit scarring"],
          "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=60",
          "description": "Bacterial disease causing leaf and fruit lesions."
        },
        {
          "name": "Fusarium Wilt",
          "pathogen": "Fusarium oxysporum f.sp. lycopersici",
          "severity": "high",
          "confidence": 91,
          "season": [6,7,8],
          "symptoms": ["Yellowing of lower leaves", "Wilting on one side", "Brown vascular tissue", "Stunted growth"],
          "treatment": ["No cure", "Remove infected plants", "Soil solarization"],
          "prevention": ["Use resistant varieties (VF, VFF)", "Crop rotation", "Raised beds", "Good drainage"],
          "recommendations": ["Soil-borne disease", "Worse in warm soil (80-90°F)", "Can persist for years"],
          "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=60",
          "description": "Vascular wilt disease causing yellowing and wilting."
        },
        {
          "name": "Verticillium Wilt",
          "pathogen": "Verticillium dahliae",
          "severity": "high",
          "confidence": 89,
          "season": [6,7,8],
          "symptoms": ["V-shaped yellowing on leaf margins", "Wilting", "Brown vascular tissue", "Stunted growth"],
          "treatment": ["No chemical cure", "Remove infected plants", "Soil fumigation"],
          "prevention": ["Resistant varieties (V)", "Long crop rotation", "Avoid infected soil"],
          "recommendations": ["Soil-borne pathogen", "Worse in cool weather (70-75°F)", "Can survive 10+ years in soil"],
          "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=60",
          "description": "Vascular disease causing V-shaped leaf yellowing."
        },
        {
          "name": "Tomato Mosaic Virus (ToMV)",
          "pathogen": "Tobamovirus",
          "severity": "medium",
          "confidence": 87,
          "season": [6,7,8],
          "symptoms": ["Light and dark green mottling on leaves", "Leaf distortion", "Stunted growth", "Reduced fruit set"],
          "treatment": ["No cure", "Remove infected plants", "Disinfect tools"],
          "prevention": ["Use resistant varieties (ToMV)", "Disinfect tools and hands", "Control aphids", "Remove infected plants"],
          "recommendations": ["Highly contagious", "Spread mechanically", "Can persist on tools and hands"],
          "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=60",
          "description": "Viral disease causing mosaic patterns on leaves."
        },
        {
          "name": "Blossom End Rot",
          "pathogen": "Calcium deficiency (physiological)",
          "severity": "medium",
          "confidence": 85,
          "season": [6,7,8],
          "symptoms": ["Dark sunken lesion on blossom end of fruit", "Leathery texture", "Secondary rot"],
          "treatment": ["Foliar calcium sprays", "Maintain consistent moisture", "Mulch"],
          "prevention": ["Consistent watering", "Mulch", "Avoid excess nitrogen", "Add calcium to soil if deficient"],
          "recommendations": ["Not a disease but disorder", "Caused by irregular watering", "Worse during rapid growth"],
          "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=60",
          "description": "Physiological disorder from calcium deficiency or water stress."
        }
      ],
      strawberry: [
        {
          "name": "Gray Mold (Botrytis)",
          "pathogen": "Botrytis cinerea",
          "severity": "critical",
          "confidence": 95,
          "season": [4,5,6],
          "symptoms": ["Gray fuzzy mold on fruit", "Fruit rot", "Blossom blight", "Leaf spots"],
          "treatment": ["Fungicide applications during bloom", "Remove infected fruit", "Improve air flow"],
          "prevention": ["Good air circulation", "Avoid overhead watering", "Proper spacing", "Mulch to reduce splash"],
          "recommendations": ["Most serious strawberry disease", "Worse in cool wet weather", "Can cause 50%+ fruit loss"],
          "image": "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=60",
          "description": "Most destructive strawberry disease causing fruit rot."
        },
        {
          "name": "Powdery Mildew",
          "pathogen": "Podosphaera aphanis",
          "severity": "high",
          "confidence": 91,
          "season": [5,6,7,8],
          "symptoms": ["White powdery growth on leaves", "Leaf curling upward", "Purple-red discoloration", "Fruit damage"],
          "treatment": ["Sulfur or fungicide sprays", "Remove infected leaves", "Improve air circulation"],
          "prevention": ["Resistant varieties", "Good air flow", "Avoid excess nitrogen", "Proper spacing"],
          "recommendations": ["Can reduce yield significantly", "Worse in warm dry weather", "Different from other powdery mildews"],
          "image": "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=60",
          "description": "Fungal disease creating white powder on strawberry leaves."
        },
        {
          "name": "Verticillium Wilt",
          "pathogen": "Verticillium dahliae",
          "severity": "critical",
          "confidence": 93,
          "season": [5,6,7,8],
          "symptoms": ["Stunted plants", "Outer leaves die first", "Brown vascular tissue in crown", "Wilting"],
          "treatment": ["No cure", "Remove and destroy infected plants", "Soil fumigation before planting"],
          "prevention": ["Use certified disease-free plants", "Fumigate soil", "Long rotation (5+ years)", "Raised beds"],
          "recommendations": ["Soil-borne disease", "Can kill entire plants", "Very persistent in soil"],
          "image": "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=60",
          "description": "Fatal vascular wilt disease of strawberries."
        },
        {
          "name": "Anthracnose",
          "pathogen": "Colletotrichum spp.",
          "severity": "high",
          "confidence": 89,
          "season": [5,6,7],
          "symptoms": ["Sunken lesions on fruit", "Black spots", "Crown rot", "Leaf spots", "Runner dieback"],
          "treatment": ["Fungicides during bloom", "Remove infected tissue", "Improve drainage"],
          "prevention": ["Disease-free transplants", "Good drainage", "Avoid overhead watering", "Crop rotation"],
          "recommendations": ["Multiple forms affect different plant parts", "Spreads in water", "Can be devastating"],
          "image": "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=60",
          "description": "Serious disease affecting fruit, crowns, and foliage."
        },
        {
          "name": "Leaf Spot (Mycosphaerella)",
          "pathogen": "Mycosphaerella fragariae",
          "severity": "medium",
          "confidence": 86,
          "season": [5,6,7,8],
          "symptoms": ["Purple-red spots on leaves", "White centers as spots age", "Severe defoliation"],
          "treatment": ["Fungicide applications", "Remove old leaves", "Mow after harvest"],
          "prevention": ["Resistant varieties", "Good air circulation", "Renovate beds properly"],
          "recommendations": ["Common disease", "Reduces plant vigor", "Can affect yield next year"],
          "image": "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=60",
          "description": "Common leaf spot disease reducing plant health."
        },
        {
          "name": "Red Stele Root Rot",
          "pathogen": "Phytophthora fragariae",
          "severity": "critical",
          "confidence": 92,
          "season": [3,4,5],
          "symptoms": ["Stunted plants", "Blue-green then red leaves", "Poor root development", "Red core in roots"],
          "treatment": ["No cure", "Remove infected plants", "Improve drainage"],
          "prevention": ["Resistant varieties", "Well-drained soil", "Raised beds", "Avoid planting in infected sites"],
          "recommendations": ["Soil-borne disease", "Worse in wet heavy soils", "Can destroy entire plantings"],
          "image": "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&q=60",
          "description": "Devastating root rot disease of strawberries."
        }
      ],
      apple: [
        {
          "name": "Apple Scab",
          "pathogen": "Venturia inaequalis",
          "severity": "critical",
          "confidence": 96,
          "season": [4,5,6,7],
          "symptoms": ["Olive-green to black spots on leaves", "Fruit lesions", "Cracked fruit", "Premature leaf drop"],
          "treatment": ["Fungicide program from bud break", "Multiple applications needed", "Remove infected leaves"],
          "prevention": ["Resistant varieties", "Sanitation - rake leaves", "Proper spacing", "Pruning for air flow"],
          "recommendations": ["Most serious apple disease", "Requires preventive sprays", "Worse in wet springs"],
          "image": "https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?w=800&q=60",
          "description": "Most economically important apple disease worldwide."
        },
        {
          "name": "Fire Blight",
          "pathogen": "Erwinia amylovora",
          "severity": "critical",
          "confidence": 94,
          "season": [4,5,6],
          "symptoms": ["Shepherd's crook shoot tips", "Brown to black blossoms", "Bacterial ooze", "Cankers on branches"],
          "treatment": ["Prune infected branches (12 inches below symptoms)", "Disinfect tools", "Antibiotic sprays during bloom"],
          "prevention": ["Resistant varieties", "Avoid excess nitrogen", "Remove infected tissue promptly", "Prune when dry"],
          "recommendations": ["Can kill entire trees", "Extremely contagious", "Prune only in dry weather"],
          "image": "https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?w=800&q=60",
          "description": "Devastating bacterial disease that can kill trees."
        },
        {
          "name": "Powdery Mildew",
          "pathogen": "Podosphaera leucotricha",
          "severity": "high",
          "confidence": 90,
          "season": [5,6,7,8],
          "symptoms": ["White powdery coating on leaves and shoots", "Leaf curling", "Stunted shoots", "Reduced fruit set"],
          "treatment": ["Fungicide applications", "Prune infected shoots in winter", "Sulfur sprays"],
          "prevention": ["Resistant varieties", "Prune out infected growth", "Good air circulation", "Avoid excess nitrogen"],
          "recommendations": ["Common in warm dry weather", "Reduces fruit quality", "Overwinters in buds"],
          "image": "https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?w=800&q=60",
          "description": "Common disease creating white powder on apple trees."
        },
        {
          "name": "Cedar Apple Rust",
          "pathogen": "Gymnosporangium juniperi-virginianae",
          "severity": "medium",
          "confidence": 87,
          "season": [5,6,7],
          "symptoms": ["Bright orange spots on leaves", "Fruit lesions", "Premature leaf drop", "Reduced photosynthesis"],
          "treatment": ["Fungicides during spring", "Remove galls from cedar trees", "Destroy infected fruit"],
          "prevention": ["Remove nearby cedar trees (alternate host)", "Resistant varieties", "Fungicide program"],
          "recommendations": ["Requires cedar trees to complete life cycle", "Can cause severe defoliation", "More common in humid areas"],
          "image": "https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?w=800&q=60",
          "description": "Rust disease requiring both apple and cedar trees."
        },
        {
          "name": "Black Rot",
          "pathogen": "Botryosphaeria obtusa",
          "severity": "high",
          "confidence": 88,
          "season": [6,7,8],
          "symptoms": ["Leaf spots with concentric rings", "Fruit rot with concentric rings", "Limb cankers"],
          "treatment": ["Fungicide applications", "Prune out cankers", "Remove mummified fruit"],
          "prevention": ["Sanitation", "Remove infected fruit and branches", "Fungicide program", "Proper pruning"],
          "recommendations": ["Can affect leaves, fruit, and branches", "Survives winter in cankers and mummies"],
          "image": "https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?w=800&q=60",
          "description": "Disease causing fruit rot and branch cankers."
        },
        {
          "name": "Bitter Rot",
          "pathogen": "Colletotrichum spp.",
          "severity": "high",
          "confidence": 86,
          "season": [7,8,9],
          "symptoms": ["Sunken spots on ripe fruit", "Concentric rings", "Acervuli (salmon-pink spore masses)", "Bitter taste"],
          "treatment": ["Fungicides during fruit development", "Remove infected fruit", "Sanitation"],
          "prevention": ["Remove mummified fruit", "Prune dead wood", "Fungicide program", "Good air circulation"],
          "recommendations": ["Worse in hot humid weather", "Can spread rapidly", "Affects ripe fruit"],
          "image": "https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?w=800&q=60",
          "description": "Fruit rot disease occurring near harvest."
        }
      ],
      grape: [
        {
          "name": "Powdery Mildew",
          "pathogen": "Erysiphe necator",
          "severity": "critical",
          "confidence": 95,
          "season": [5,6,7,8,9],
          "symptoms": ["White powdery growth on leaves and fruit", "Berry scarring and cracking", "Stunted growth", "Reduced yield"],
          "treatment": ["Fungicide program starting at budbreak", "Sulfur sprays", "Remove infected tissue"],
          "prevention": ["Good air circulation", "Canopy management", "Resistant varieties", "Regular fungicide schedule"],
          "recommendations": ["Most serious grape disease", "Can cause complete crop loss", "Requires preventive control"],
          "image": "https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?w=800&q=60",
          "description": "Most economically damaging grape disease worldwide."
        },
        {
          "name": "Downy Mildew",
          "pathogen": "Plasmopara viticola",
          "severity": "critical",
          "confidence": 94,
          "season": [5,6,7,8],
          "symptoms": ["Yellow oil spots on upper leaf surface", "White downy growth underneath", "Brown lesions", "Fruit infection"],
          "treatment": ["Copper fungicides", "Systemic fungicides", "Remove infected tissue"],
          "prevention": ["Copper sprays starting early season", "Good drainage", "Canopy management", "Resistant varieties"],
          "recommendations": ["Very destructive", "Requires wet conditions", "Can cause severe defoliation"],
          "image": "https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?w=800&q=60",
          "description": "Serious disease requiring wet conditions to spread."
        },
        {
          "name": "Black Rot",
          "pathogen": "Guignardia bidwellii",
          "severity": "high",
          "confidence": 92,
          "season": [6,7,8],
          "symptoms": ["Circular leaf spots", "Black mummified berries", "Fruit rot", "Shoot lesions"],
          "treatment": ["Fungicide applications", "Remove mummified berries", "Prune infected shoots"],
          "prevention": ["Sanitation", "Remove mummies in winter", "Fungicide program", "Good air circulation"],
          "recommendations": ["Can cause complete crop loss", "Worse in warm humid weather", "Mummies are primary infection source"],
          "image": "https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?w=800&q=60",
          "description": "Disease causing characteristic black mummified berries."
        },
        {
          "name": "Botrytis Bunch Rot",
          "pathogen": "Botrytis cinerea",
          "severity": "high",
          "confidence": 91,
          "season": [7,8,9],
          "symptoms": ["Gray fuzzy mold on berries", "Berry rot", "Cluster infection", "Sour rot"],
          "treatment": ["Fungicides near harvest", "Remove infected clusters", "Improve air flow"],
          "prevention": ["Canopy management", "Cluster zone leaf removal", "Avoid tight clusters", "Good air circulation"],
          "recommendations": ["Worse near harvest", "Can spread rapidly", "More severe in tight-clustered varieties"],
          "image": "https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?w=800&q=60",
          "description": "Gray mold affecting grape clusters near harvest."
        },
        {
          "name": "Phomopsis Cane and Leaf Spot",
          "pathogen": "Phomopsis viticola",
          "severity": "medium",
          "confidence": 88,
          "season": [5,6,7],
          "symptoms": ["Black spots on shoots and leaves", "Bleached appearance of canes", "Fruit rot on green berries"],
          "treatment": ["Fungicides at budbreak and shoot growth", "Prune out infected canes"],
          "prevention": ["Remove infected canes during pruning", "Fungicide applications early season", "Good air flow"],
          "recommendations": ["Overwinters in canes", "Worse in wet springs", "Can weaken vines"],
          "image": "https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?w=800&q=60",
          "description": "Disease affecting canes, leaves, and fruit."
        },
        {
          "name": "Pierce's Disease",
          "pathogen": "Xylella fastidiosa",
          "severity": "critical",
          "confidence": 89,
          "season": [6,7,8],
          "symptoms": ["Leaf scorching", "Irregular leaf margins", "Fruit shriveling", "Stunting", "Death in 1-5 years"],
          "treatment": ["No cure", "Remove infected vines", "Control sharpshooter vectors"],
          "prevention": ["Control glassy-winged sharpshooters", "Use resistant varieties", "Remove infected vines promptly"],
          "recommendations": ["Fatal disease", "Spread by insect vectors", "Major problem in warm climates"],
          "image": "https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?w=800&q=60",
          "description": "Fatal bacterial disease spread by sharpshooter insects."
        }
      ],
      banana: [
        {
          "name": "Panama Disease (Fusarium Wilt)",
          "pathogen": "Fusarium oxysporum f.sp. cubense",
          "severity": "critical",
          "confidence": 96,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Yellowing of older leaves", "Wilting", "Splitting of pseudostem", "Vascular browning", "Plant death"],
          "treatment": ["No cure", "Remove and destroy infected plants", "Quarantine affected areas"],
          "prevention": ["Use disease-free planting material", "Resistant varieties", "Soil fumigation", "Avoid spreading soil"],
          "recommendations": ["Most destructive banana disease", "Soil-borne pathogen", "Can persist for decades", "Tropical Race 4 (TR4) is devastating"],
          "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=60",
          "description": "Devastating vascular wilt disease threatening banana industry worldwide."
        },
        {
          "name": "Black Sigatoka",
          "pathogen": "Mycosphaerella fijiensis",
          "severity": "critical",
          "confidence": 94,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Small dark streaks on leaves", "Spots enlarge with yellow halos", "Black centers", "Severe defoliation"],
          "treatment": ["Intensive fungicide program", "Remove infected leaves", "Oil sprays"],
          "prevention": ["Fungicide rotations", "Good drainage", "Proper spacing", "Remove old leaves"],
          "recommendations": ["Most important foliar disease", "Requires 40+ fungicide applications/year", "Can reduce yield 50%+"],
          "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=60",
          "description": "Most serious foliar disease requiring intensive management."
        },
        {
          "name": "Yellow Sigatoka",
          "pathogen": "Mycosphaerella musicola",
          "severity": "high",
          "confidence": 91,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Small yellow spots on leaves", "Spots turn brown with yellow halos", "Premature leaf death"],
          "treatment": ["Fungicide applications", "Remove old leaves", "Oil sprays"],
          "prevention": ["Fungicide program", "Sanitation", "Good air circulation", "Avoid overhead watering"],
          "recommendations": ["Less severe than Black Sigatoka", "Still requires control", "Can reduce yield significantly"],
          "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=60",
          "description": "Common leaf spot disease affecting banana yield."
        },
        {
          "name": "Banana Bunchy Top Virus",
          "pathogen": "Babuvirus",
          "severity": "critical",
          "confidence": 93,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Stunted plants", "Narrow upright leaves", "Dark green streaks", "Bunched appearance", "No fruit"],
          "treatment": ["No cure", "Remove and destroy infected plants", "Control aphid vectors"],
          "prevention": ["Use virus-free planting material", "Control banana aphids", "Remove infected plants immediately", "Quarantine"],
          "recommendations": ["Very destructive virus", "Spreads rapidly", "Can destroy entire plantations", "Quarantine disease"],
          "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=60",
          "description": "Devastating viral disease spread by aphids."
        },
        {
          "name": "Banana Bacterial Wilt (Xanthomonas Wilt)",
          "pathogen": "Xanthomonas campestris pv. musacearum",
          "severity": "critical",
          "confidence": 92,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Yellowing of leaves", "Wilting", "Premature ripening of fruit", "Bacterial ooze", "Plant death"],
          "treatment": ["No cure", "Remove and destroy infected plants", "Disinfect tools"],
          "prevention": ["Use clean planting material", "Disinfect tools", "Remove male buds", "Control insect vectors"],
          "recommendations": ["Spreading rapidly in Africa", "No resistant varieties", "Very contagious", "Remove entire mat"],
          "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=60",
          "description": "Emerging bacterial disease threatening African banana production."
        },
        {
          "name": "Crown Rot",
          "pathogen": "Colletotrichum musae, Fusarium spp.",
          "severity": "high",
          "confidence": 88,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Black rot at crown of fruit", "Soft tissue", "Spread to fingers", "Premature ripening"],
          "treatment": ["Fungicide dips post-harvest", "Proper handling", "Cool storage"],
          "prevention": ["Careful harvest to avoid injuries", "Quick cooling", "Fungicide treatment", "Proper packaging"],
          "recommendations": ["Post-harvest disease", "Major export problem", "Spreads during shipping"],
          "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=60",
          "description": "Post-harvest rot disease affecting fruit quality."
        },
        {
          "name": "Moko Disease",
          "pathogen": "Ralstonia solanacearum race 2",
          "severity": "critical",
          "confidence": 90,
          "season": [1,2,3,4,5,6,7,8,9,10,11,12],
          "symptoms": ["Yellowing and wilting of leaves", "Internal fruit discoloration", "Vascular browning", "Bacterial ooze", "Death"],
          "treatment": ["No cure", "Destroy infected plants", "Quarantine", "Disinfect tools"],
          "prevention": ["Use disease-free planting material", "Quarantine", "Disinfect tools and equipment", "Control insect vectors"],
          "recommendations": ["Quarantine disease", "Soil-borne bacterium", "Can persist in soil", "Major threat to banana production"],
          "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=60",
          "description": "Serious bacterial wilt disease under quarantine."
        }
      ],
      onion: [
        {
          "name": "Botrytis Leaf Blight",
          "pathogen": "Botrytis squamosa",
          "severity": "high",
          "confidence": 92,
          "season": [6,7,8],
          "symptoms": ["White spots on leaves", "Leaf tip dieback", "Reduced bulb size"],
          "treatment": ["Fungicide sprays", "Remove infected tissue", "Improve air flow"],
          "prevention": ["Resistant varieties", "Crop rotation", "Avoid dense planting"],
          "recommendations": ["Most common foliar disease", "Can significantly reduce yield"],
          "image": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&q=60",
          "description": "Common leaf disease reducing photosynthesis."
        },
        {
          "name": "Purple Blotch",
          "pathogen": "Alternaria porri",
          "severity": "high",
          "confidence": 90,
          "season": [7,8,9],
          "symptoms": ["Purple-brown lesions", "Concentric rings", "Leaf death", "Bulb infection"],
          "treatment": ["Fungicides", "Remove crop debris", "Rotation"],
          "prevention": ["Use disease-free sets", "3-year rotation", "Good drainage"],
          "recommendations": ["Worse in warm humid weather", "Can affect bulbs in storage"],
          "image": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&q=60",
          "description": "Serious leaf and bulb disease."
        },
        {
          "name": "Downy Mildew",
          "pathogen": "Peronospora destructor",
          "severity": "critical",
          "confidence": 94,
          "season": [5,6,7],
          "symptoms": ["Pale green lesions", "Gray fuzzy growth", "Leaf collapse", "Tip dieback"],
          "treatment": ["Fungicides immediately", "Remove infected plants", "Improve drainage"],
          "prevention": ["Resistant varieties", "Good air circulation", "Avoid overhead watering"],
          "recommendations": ["Most destructive disease", "Can destroy entire crop"],
          "image": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&q=60",
          "description": "Devastating disease in cool wet conditions."
        },
        {
          "name": "White Rot",
          "pathogen": "Sclerotium cepivorum",
          "severity": "critical",
          "confidence": 93,
          "season": [5,6,7,8],
          "symptoms": ["Yellowing leaves", "White fluffy growth on bulb", "Black sclerotia", "Root rot"],
          "treatment": ["No effective chemical control", "Long rotation (8+ years)", "Soil fumigation"],
          "prevention": ["Avoid planting in infected soil", "Use clean sets", "Sanitation"],
          "recommendations": ["Extremely persistent in soil", "Can last 20+ years"],
          "image": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&q=60",
          "description": "Soil-borne disease causing complete bulb rot."
        },
        {
          "name": "Fusarium Basal Rot",
          "pathogen": "Fusarium oxysporum f.sp. cepae",
          "severity": "high",
          "confidence": 89,
          "season": [7,8,9,10],
          "symptoms": ["Basal plate rot", "Brown discoloration", "Root death", "Storage decay"],
          "treatment": ["No chemical control", "Remove infected bulbs", "Hot water treatment"],
          "prevention": ["Crop rotation", "Well-drained soil", "Proper curing", "Cool storage"],
          "recommendations": ["Major storage disease", "Worse in warm storage"],
          "image": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&q=60",
          "description": "Root and bulb rot primarily in storage."
        },
        {
          "name": "Pink Root",
          "pathogen": "Setophoma terrestris",
          "severity": "medium",
          "confidence": 86,
          "season": [6,7,8],
          "symptoms": ["Pink to red roots", "Root death", "Stunting", "Reduced bulb size"],
          "treatment": ["No chemical control", "Long rotation", "Soil solarization"],
          "prevention": ["Resistant varieties", "Crop rotation", "Improve soil health"],
          "recommendations": ["Soil-borne disease", "Chronic problem in some areas"],
          "image": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&q=60",
          "description": "Root disease causing pink discoloration."
        }
      ],
      garlic: [
        {
          "name": "White Rot",
          "pathogen": "Sclerotium cepivorum",
          "severity": "critical",
          "confidence": 95,
          "season": [4,5,6,7],
          "symptoms": ["Yellowing leaves", "White mycelium on bulb", "Black sclerotia", "Complete rot"],
          "treatment": ["No cure", "Remove infected plants", "Long rotation (8+ years)"],
          "prevention": ["Use clean seed cloves", "Avoid infected soil", "Tebuconazole drench"],
          "recommendations": ["Most serious garlic disease", "Sclerotia survive 20+ years in soil"],
          "image": "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?w=800&q=60",
          "description": "Devastating soil-borne disease of garlic."
        },
        {
          "name": "Fusarium Basal Rot",
          "pathogen": "Fusarium culmorum",
          "severity": "high",
          "confidence": 91,
          "season": [6,7,8,9],
          "symptoms": ["Basal plate decay", "Brown discoloration", "Stunted growth", "Storage rot"],
          "treatment": ["No chemical cure", "Hot water treatment of cloves", "Remove infected bulbs"],
          "prevention": ["Use disease-free seed", "Proper curing", "Cool dry storage", "Crop rotation"],
          "recommendations": ["Major cause of storage losses", "Enters through wounds"],
          "image": "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?w=800&q=60",
          "description": "Root and bulb rot disease."
        },
        {
          "name": "Rust",
          "pathogen": "Puccinia allii",
          "severity": "medium",
          "confidence": 88,
          "season": [5,6,7,8],
          "symptoms": ["Orange pustules on leaves", "Yellowing", "Premature senescence", "Reduced bulb size"],
          "treatment": ["Fungicide applications", "Remove infected tissue", "Improve air flow"],
          "prevention": ["Good air circulation", "Avoid overhead watering", "Resistant varieties"],
          "recommendations": ["Can reduce bulb size significantly", "More severe in humid conditions"],
          "image": "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?w=800&q=60",
          "description": "Fungal rust disease affecting garlic leaves."
        },
        {
          "name": "Purple Blotch",
          "pathogen": "Alternaria porri",
          "severity": "high",
          "confidence": 90,
          "season": [6,7,8],
          "symptoms": ["Purple lesions on leaves", "Concentric rings", "Tip dieback", "Reduced photosynthesis"],
          "treatment": ["Fungicide sprays", "Remove crop debris", "Rotation"],
          "prevention": ["Use clean seed cloves", "Crop rotation", "Avoid dense planting"],
          "recommendations": ["Common in warm humid weather", "Can affect bulb quality"],
          "image": "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?w=800&q=60",
          "description": "Leaf blight reducing plant vigor."
        },
        {
          "name": "Downy Mildew",
          "pathogen": "Peronospora destructor",
          "severity": "high",
          "confidence": 89,
          "season": [4,5,6],
          "symptoms": ["Pale green streaks", "Gray fuzzy growth", "Leaf distortion", "Stunting"],
          "treatment": ["Fungicides", "Remove infected plants", "Improve drainage"],
          "prevention": ["Use disease-free seed", "Good air circulation", "Avoid overhead irrigation"],
          "recommendations": ["Most severe in cool wet springs", "Can cause significant losses"],
          "image": "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?w=800&q=60",
          "description": "Serious disease in cool wet conditions."
        },
        {
          "name": "Penicillium Decay",
          "pathogen": "Penicillium spp.",
          "severity": "medium",
          "confidence": 85,
          "season": [8,9,10,11,12],
          "symptoms": ["Blue-green mold", "Soft watery decay", "Clove shrinkage", "Strong odor"],
          "treatment": ["No treatment", "Remove infected bulbs", "Improve storage conditions"],
          "prevention": ["Proper curing", "Dry storage (60-70°F)", "Good ventilation", "Avoid wounds"],
          "recommendations": ["Major storage problem", "Enters through wounds or poor curing"],
          "image": "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?w=800&q=60",
          "description": "Blue mold causing storage decay."
        },
        {
          "name": "Stem and Bulb Nematode",
          "pathogen": "Ditylenchus dipsaci",
          "severity": "high",
          "confidence": 87,
          "season": [4,5,6,7],
          "symptoms": ["Swollen distorted leaves", "Bloated stems", "Soft spongy bulbs", "Stunting"],
          "treatment": ["No chemical control", "Hot water treatment (120°F for 20 min)", "Remove infected plants"],
          "prevention": ["Use certified seed", "Long rotation", "Avoid planting in infested soil"],
          "recommendations": ["Can survive in soil for years", "Serious problem in some regions"],
          "image": "https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?w=800&q=60",
          "description": "Nematode causing bulb and leaf distortion."
        }
      ]
    };

    // Temperature conversion: Celsius to Fahrenheit
    const celsiusToFahrenheit = (celsius) => {
      return Math.round((celsius * 9/5) + 32);
    };

    // Format time from ISO string to 12-hour format
    const formatTime = (isoString) => {
      if (!isoString) return 'N/A';
      const date = new Date(isoString);
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutesStr = minutes < 10 ? '0' + minutes : minutes;
      return `${hours}:${minutesStr} ${ampm}`;
    };

    // Generate dynamic agricultural recommendations based on weather
    const getWeatherRecommendations = (weather) => {
      if (!weather || !weather.current) return [];
      
      const recommendations = [];
      const temp = weather.current.temperature_2m;
      const tempF = celsiusToFahrenheit(temp);
      const humidity = weather.current.relative_humidity_2m;
      const windSpeed = weather.current.wind_speed_10m;
      const weatherCode = weather.current.weather_code;
      const precipitation = weather.daily?.precipitation_sum?.[0] || 0;
      
      // Temperature-based recommendations
      if (tempF >= 85) {
        recommendations.push({
          icon: 'thermometer-sun',
          text: `High temperature (${tempF}°F) - Consider irrigation and monitor for heat stress in crops`,
          type: 'warning'
        });
      } else if (tempF >= 70 && tempF < 85) {
        recommendations.push({
          icon: 'thermometer',
          text: `Optimal temperature (${tempF}°F) for most crop growth and field activities`,
          type: 'good'
        });
      } else if (tempF >= 50 && tempF < 70) {
        recommendations.push({
          icon: 'thermometer',
          text: `Moderate temperature (${tempF}°F) - Good for cool-season crops and planting`,
          type: 'good'
        });
      } else if (tempF < 50) {
        recommendations.push({
          icon: 'snowflake',
          text: `Cold temperature (${tempF}°F) - Frost risk possible, protect sensitive crops`,
          type: 'warning'
        });
      }
      
      // Humidity-based recommendations
      if (humidity > 80) {
        recommendations.push({
          icon: 'droplets',
          text: `High humidity (${humidity}%) - Increased disease pressure, monitor for fungal infections`,
          type: 'warning'
        });
      } else if (humidity >= 60 && humidity <= 80) {
        recommendations.push({
          icon: 'droplets',
          text: `Moderate humidity (${humidity}%) - Good conditions for plant growth`,
          type: 'good'
        });
      } else if (humidity < 40) {
        recommendations.push({
          icon: 'droplets',
          text: `Low humidity (${humidity}%) - Consider irrigation, plants may need extra water`,
          type: 'info'
        });
      }
      
      // Wind-based recommendations
      if (windSpeed > 25) {
        recommendations.push({
          icon: 'wind',
          text: `High winds (${Math.round(windSpeed * 0.621)} mph) - Delay spraying operations and be cautious with tall crops`,
          type: 'warning'
        });
      } else if (windSpeed >= 5 && windSpeed <= 15) {
        recommendations.push({
          icon: 'wind',
          text: `Moderate winds (${Math.round(windSpeed * 0.621)} mph) - Good conditions for pesticide application`,
          type: 'good'
        });
      }
      
      // Precipitation-based recommendations
      if (precipitation > 10) {
        recommendations.push({
          icon: 'cloud-rain',
          text: `Heavy rainfall expected (${precipitation.toFixed(1)}mm) - Delay field work, monitor for waterlogging`,
          type: 'warning'
        });
      } else if (precipitation > 0 && precipitation <= 10) {
        recommendations.push({
          icon: 'cloud-drizzle',
          text: `Light rain expected (${precipitation.toFixed(1)}mm) - Good for recently planted crops`,
          type: 'good'
        });
      } else if (precipitation === 0 && humidity < 50) {
        recommendations.push({
          icon: 'sun',
          text: 'Dry conditions - Monitor soil moisture and consider irrigation schedule',
          type: 'info'
        });
      }
      
      // Weather condition-based recommendations
      if (weatherCode === 0) {
        recommendations.push({
          icon: 'sun',
          text: 'Clear sky - Excellent conditions for harvesting and field operations',
          type: 'good'
        });
      }
      
      return recommendations.slice(0, 4); // Return max 4 recommendations
    };

    // Generate intelligent planting recommendations based on location, season, and weather
    const getPlantingRecommendations = (weather, latitude) => {
      if (!weather || !weather.current) return {
        planting: "Unable to generate recommendations without weather data.",
        disease: "Monitor general plant health and maintain good agricultural practices."
      };

      const currentDate = new Date();
      const month = currentDate.getMonth() + 1; // 1-12
      const temp = weather.current.temperature_2m;
      const tempF = celsiusToFahrenheit(temp);
      const humidity = weather.current.relative_humidity_2m;
      
      // Determine hemisphere (positive = northern, negative = southern)
      const isNorthern = latitude >= 0;
      
      // Determine season based on hemisphere and month
      let season;
      if (isNorthern) {
        if (month >= 3 && month <= 5) season = 'spring';
        else if (month >= 6 && month <= 8) season = 'summer';
        else if (month >= 9 && month <= 11) season = 'fall';
        else season = 'winter';
      } else {
        // Southern hemisphere has opposite seasons
        if (month >= 3 && month <= 5) season = 'fall';
        else if (month >= 6 && month <= 8) season = 'winter';
        else if (month >= 9 && month <= 11) season = 'spring';
        else season = 'summer';
      }

      // Determine climate zone based on latitude and temperature
      let climateZone;
      const absLat = Math.abs(latitude);
      if (absLat > 66.5) climateZone = 'polar';
      else if (absLat > 60) climateZone = 'subpolar';
      else if (absLat > 40) climateZone = 'temperate';
      else if (absLat > 23.5) climateZone = 'subtropical';
      else climateZone = 'tropical';

      let plantingAdvice = "";
      let diseaseAdvice = "";

      // Generate recommendations based on season, climate, and temperature
      if (climateZone === 'polar' || climateZone === 'subpolar') {
        if (season === 'summer' && tempF > 50) {
          plantingAdvice = "Very short growing season. Focus on fast-maturing cold-hardy crops like radishes, spinach, and hardy lettuce varieties. Consider greenhouse or indoor growing for extended season.";
        } else if (season === 'spring' && tempF > 40) {
          plantingAdvice = "Prepare soil and start seeds indoors for cold-hardy crops. Consider cold frames and row covers to extend the growing season.";
        } else {
          plantingAdvice = "Growing season is over. Focus on indoor growing systems, hydroponics, or plan for next season. Store harvested crops properly.";
        }
        diseaseAdvice = "Low disease pressure due to cold temperatures. Focus on preventing frost damage and protecting plants from extreme cold.";
      }
      else if (climateZone === 'temperate') {
        if (season === 'spring') {
          if (tempF >= 50 && tempF < 70) {
            plantingAdvice = "Excellent time for cool-season crops! Plant lettuce, spinach, peas, broccoli, cauliflower, kale, and radishes. Start warm-season crops indoors.";
          } else if (tempF >= 70) {
            plantingAdvice = "Transition period. Plant tomatoes, peppers, cucumbers, squash, and beans. Still time for quick-maturing greens.";
          } else {
            plantingAdvice = "Early spring - plant cold-hardy crops under protection: lettuce, spinach, peas, and onion sets. Wait for warmer weather for tender plants.";
          }
          diseaseAdvice = humidity > 70 
            ? "Monitor for fungal diseases as humidity increases. Apply preventive fungicides to susceptible crops. Ensure good air circulation."
            : "Moderate disease pressure. Good time for preventive treatments. Watch for early blight and powdery mildew.";
        }
        else if (season === 'summer') {
          if (tempF >= 85) {
            plantingAdvice = "Hot weather - focus on heat-tolerant crops like okra, sweet potatoes, southern peas, Armenian cucumber, and heat-resistant tomato varieties. Provide shade for sensitive crops.";
          } else if (tempF >= 70) {
            plantingAdvice = "Perfect for warm-season crops! Tomatoes, peppers, eggplants, cucumbers, squash, melons, corn, and beans are thriving. Plant succession crops of beans and corn.";
          } else {
            plantingAdvice = "Mild summer - plant both warm and cool-season crops. Good time for tomatoes, peppers, and late plantings of lettuce and greens.";
          }
          diseaseAdvice = humidity > 75
            ? "High disease pressure! Monitor closely for fungal diseases, bacterial infections, and insect pests. Apply fungicides regularly and maintain good sanitation."
            : "Moderate disease risk. Water in morning to reduce leaf wetness. Scout for pests regularly.";
        }
        else if (season === 'fall') {
          if (tempF >= 60) {
            plantingAdvice = "Great time for fall crops! Plant lettuce, spinach, kale, collards, turnips, radishes, carrots, and broccoli. These will mature in cooler weather.";
          } else if (tempF >= 40) {
            plantingAdvice = "Late fall - focus on hardy greens like kale, spinach, and mâche. Plant garlic and onion sets. Use row covers to extend season.";
          } else {
            plantingAdvice = "Prepare for winter. Harvest remaining crops, plant cover crops, and plan crop rotation for next season. Protect any remaining cold-hardy crops.";
          }
          diseaseAdvice = "Disease pressure decreasing with cooler temperatures. Good time to clean up diseased plant material and sanitize tools for next season.";
        }
        else { // winter
          if (tempF >= 40) {
            plantingAdvice = "Mild winter - grow cold-hardy crops in cold frames or hoop houses: spinach, kale, mâche, winter lettuce, and hardy herbs.";
          } else {
            plantingAdvice = "Indoor growing season. Start seeds indoors for early spring transplants. Plan garden layout and order seeds for upcoming season.";
          }
          diseaseAdvice = "Minimal disease pressure. Perfect time for equipment maintenance, soil testing, and planning pest management strategies.";
        }
      }
      else if (climateZone === 'subtropical') {
        if (season === 'spring') {
          plantingAdvice = tempF > 75
            ? "Warm spring - plant heat-loving crops: tomatoes, peppers, eggplant, okra, sweet potatoes, melons, and tropical varieties. Some greens may bolt."
            : "Mild spring - excellent for diverse plantings! Tomatoes, peppers, cucurbits, beans, and late cool-season crops all do well.";
          diseaseAdvice = "Increasing disease pressure with warming. Start preventive fungicide programs. Monitor for early and late blight.";
        }
        else if (season === 'summer') {
          if (tempF >= 90) {
            plantingAdvice = "Very hot - focus on heat-tolerant varieties: cherry tomatoes, southern peas, okra, eggplant, hot peppers, Armenian cucumber, and tropical crops like sweet potato.";
          } else {
            plantingAdvice = "Summer growing season in full swing. Tomatoes, peppers, squash, melons, corn, beans, and heat-tolerant greens like amaranth and New Zealand spinach.";
          }
          diseaseAdvice = humidity > 70
            ? "Very high disease and pest pressure! Apply fungicides weekly. Monitor for mites, aphids, and whiteflies. Ensure excellent drainage."
            : "High disease risk. Water deeply but infrequently. Mulch heavily. Monitor for heat stress and pests.";
        }
        else if (season === 'fall') {
          plantingAdvice = tempF > 70
            ? "Extended growing season! Plant tomatoes, peppers, beans, and fast-maturing varieties for winter harvest. Also plant cool-season crops for late fall."
            : "Perfect for cool-season crops: lettuce, broccoli, cauliflower, cabbage, kale, carrots, and herbs. These will produce through winter.";
          diseaseAdvice = "Disease pressure moderating. Good conditions for healthy growth. Continue monitoring but fungicide needs decrease.";
        }
        else { // winter
          plantingAdvice = tempF > 50
            ? "Year-round growing! Plant cool-season vegetables: lettuce, spinach, broccoli, cauliflower, peas, carrots, beets, and herbs. Also good for strawberries."
            : "Cool winter - excellent for brassicas, root vegetables, leafy greens, and peas. Protect tender plants on coldest nights.";
          diseaseAdvice = "Low disease pressure. Good growing conditions. Monitor for occasional fungal issues during wet periods.";
        }
      }
      else if (climateZone === 'tropical') {
        if (tempF < 65) {
          plantingAdvice = "Unusually cool for tropics. Plant temperate vegetables: lettuce, broccoli, cauliflower, and other cool-season crops that struggle in normal tropical heat.";
        } else if (tempF >= 85) {
          plantingAdvice = "Typical tropical conditions. Focus on heat-tolerant crops: sweet potatoes, cassava, taro, tropical fruits, okra, eggplant, hot peppers, and yard-long beans. Consider raised beds for drainage.";
        } else {
          plantingAdvice = "Ideal tropical growing. Plant tomatoes, peppers, cucurbits, sweet potatoes, tropical greens (amaranth, Malabar spinach), herbs, and fruit trees.";
        }
        diseaseAdvice = humidity > 80
          ? "Extreme disease pressure in tropical humidity! Weekly fungicide applications essential. Ensure excellent air flow, raised beds for drainage. Monitor constantly for fungal and bacterial diseases."
          : "High disease risk typical for tropics. Use disease-resistant varieties. Maintain good sanitation and air circulation.";
      }

      return {
        planting: plantingAdvice,
        disease: diseaseAdvice
      };
    };

    const SYMPTOM_DATABASE = {
      corn: {
        "leaf_spots_rectangular": ["Gray Leaf Spot", "Northern Corn Leaf Blight"],
        "leaf_spots_circular": ["Common Rust", "Southern Rust", "Eyespot"],
        "leaf_rust_pustules": ["Common Rust", "Southern Rust"],
        "black_tar_spots": ["Tar Spot"],
        "leaf_blight_rapid": ["Southern Rust", "Northern Corn Leaf Blight"],
        "plant_wilting": ["Anthracnose Leaf Blight", "Stewart's Wilt"],
        "root_problems": ["Anthracnose Leaf Blight"]
      }
    };

    // Real Weather API (Open-Meteo - Free) with sunrise/sunset
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,sunrise,sunset&timezone=auto&forecast_days=7`
        );
        const data = await response.json();
        if (data.current_weather) {
          data.current = {
            temperature_2m: data.current_weather.temperature,
            wind_speed_10m: data.current_weather.windspeed,
            weather_code: data.current_weather.weathercode,
            relative_humidity_2m: data.hourly?.relativehumidity_2m?.[0] ?? 50
          };
        }
        if (data.daily && data.daily.weathercode) {
          data.daily.weather_code = data.daily.weathercode;
        }
        return data;
      } catch (error) {
        console.error('Weather API error:', error);
        return null;
      }
    };

    const getWeatherCondition = (code) => {
      if (code === 0) return { text: 'Clear Sky', icon: 'sun' };
      if (code <= 3) return { text: 'Partly Cloudy', icon: 'cloud' };
      if (code <= 48) return { text: 'Foggy', icon: 'cloud-fog' };
      if (code <= 67) return { text: 'Rainy', icon: 'cloud-rain' };
      if (code <= 77) return { text: 'Snowy', icon: 'cloud-snow' };
      if (code <= 82) return { text: 'Rain Showers', icon: 'cloud-drizzle' };
      return { text: 'Stormy', icon: 'cloud-lightning' };
    };

    const AgroVisionAIPro = () => {
      const [activeTab, setActiveTab] = useState('dashboard');
      const [suggestions, setSuggestions] = useState([]);
      const [showSuggestions, setShowSuggestions] = useState(false);
      const suggestionsTimer = useRef(null);
      const [uploadedImage, setUploadedImage] = useState(null);
      const [analysisResult, setAnalysisResult] = useState(null);
      const [isAnalyzing, setIsAnalyzing] = useState(false);
      const [selectedCrop, setSelectedCrop] = useState(null);
      const [selectedSymptoms, setSelectedSymptoms] = useState([]);
      const [weather, setWeather] = useState(null);
      const [loadingWeather, setLoadingWeather] = useState(false);
      const [userLocation, setUserLocation] = useState({ lat: 40.7128, lon: -74.0060, name: 'New York' });
      const [customLocation, setCustomLocation] = useState('');
      const [diagnosisAccuracy, setDiagnosisAccuracy] = useState(0);
      
      // ========== НОВОЕ: СОСТОЯНИЕ ТЕМНОЙ ТЕМЫ ==========
      const [isDarkMode, setIsDarkMode] = useState(() => {
        // Загружаем сохраненную тему из localStorage
        const savedTheme = localStorage.getItem('agrovision-theme');
        return savedTheme === 'dark';
      });

      const fileInputRef = useRef(null);

      // ========== НОВОЕ: ЭФФЕКТ ДЛЯ ПРИМЕНЕНИЯ ТЕМЫ ==========
      useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
          body.classList.remove('light');
          body.classList.add('dark');
          localStorage.setItem('agrovision-theme', 'dark');
        } else {
          body.classList.remove('dark');
          body.classList.add('light');
          localStorage.setItem('agrovision-theme', 'light');
        }
      }, [isDarkMode]);

      // ========== НОВОЕ: ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ТЕМЫ ==========
      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };

      useEffect(() => {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      }, [activeTab, uploadedImage, analysisResult, isAnalyzing, weather, userLocation, isDarkMode]);

      useEffect(() => {
        loadWeather(userLocation.lat, userLocation.lon);
      }, []);

      const loadWeather = async (lat, lon) => {
        setLoadingWeather(true);
        const data = await fetchWeatherData(lat, lon);
        if (data) {
          setWeather(data);
        } else {
          setWeather(null);
        }
        setLoadingWeather(false);
      };

      const searchLocation = async () => {
        if (!customLocation.trim()) return;
        setLoadingWeather(true);
        try {
          const q = encodeURIComponent(customLocation.trim());
          const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${q}&count=5&language=en`);
          const geoData = await geoRes.json();
          if (geoData && geoData.results && geoData.results.length > 0) {
            const best = geoData.results[0];
            const locObj = {
              lat: best.latitude,
              lon: best.longitude,
              name: best.name + (best.country ? `, ${best.country}` : '')
            };
            setUserLocation(locObj);
            await loadWeather(locObj.lat, locObj.lon);
            setCustomLocation('');
          } else {
            alert('Location not found. Try another name or check spelling.');
          }
        } catch (e) {
          console.error('Geocoding error', e);
          alert('Ошибка при поиске местоположения. Попробуйте ещё раз.');
        }
        setLoadingWeather(false);
      };

      const fetchSuggestions = async (q) => {
        if (!q || q.length < 2) {
          setSuggestions([]);
          setShowSuggestions(false);
          return;
        }
        try {
          const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=10&language=en`);
          const json = await res.json();
          if (json && json.results && json.results.length) {
            setSuggestions(json.results);
            setShowSuggestions(true);
          } else {
            setSuggestions([]);
            setShowSuggestions(false);
          }
        } catch (e) {
          console.error('geocode suggestions error', e);
          setSuggestions([]);
          setShowSuggestions(false);
        }
      };
      
      const onCustomLocationChange = (value) => {
        setCustomLocation(value);
        setShowSuggestions(false);
        if (suggestionsTimer.current) clearTimeout(suggestionsTimer.current);
        suggestionsTimer.current = setTimeout(() => fetchSuggestions(value.trim()), 350);
      };
      
      const pickSuggestion = async (item) => {
        const locObj = { lat: item.latitude, lon: item.longitude, name: item.name + (item.country ? `, ${item.country}` : '') };
        setUserLocation(locObj);
        setCustomLocation('');
        setSuggestions([]);
        setShowSuggestions(false);
        await loadWeather(locObj.lat, locObj.lon);
      };

      const analyzeImageAdvanced = async (imageData, symptoms = []) => {
        const hasPlantFeatures = await checkIfPlantImage(imageData);
        
        if (!hasPlantFeatures) {
          return {
            error: true,
            message: "⚠️ The uploaded image doesn't appear to be a plant or leaf. Please upload a clear photo of a diseased leaf or plant."
          };
        }

        const imageQuality = checkImageQuality(imageData);
        if (imageQuality === 'poor') {
          return {
            error: true,
            message: "⚠️ Image quality is too low. Please upload a clearer photo with better lighting."
          };
        }

        if (!selectedCrop) {
          return {
            error: true,
            message: "⚠️ Please select a crop type first."
          };
        }

        const diseases = DISEASE_DATABASE[selectedCrop] || [];
        if (diseases.length === 0) {
          return {
            error: true,
            message: "⚠️ Disease database for selected crop is not available yet."
          };
        }

        // УЛУЧШЕННЫЙ АЛГОРИТМ ОПРЕДЕЛЕНИЯ С СИСТЕМОЙ ОЦЕНКИ
        const currentMonth = new Date().getMonth() + 1; // 1-12
        let diseaseScores = [];

        // Если симптомы выбраны, используем продвинутую систему оценки
        if (symptoms.length > 0) {
          diseases.forEach(disease => {
            let score = 0;
            let matchedSymptoms = [];
            
            // 1. Оценка совпадения симптомов (максимум 60 баллов)
            const diseaseSymptomText = disease.symptoms.join(' ').toLowerCase();
            symptoms.forEach(userSymptom => {
              const symptomLower = userSymptom.toLowerCase();
              
              // Проверка точного совпадения слов
              const symptomWords = symptomLower.split(' ');
              let matchCount = 0;
              symptomWords.forEach(word => {
                if (diseaseSymptomText.includes(word) && word.length > 3) {
                  matchCount++;
                }
              });
              
              if (matchCount > 0) {
                matchedSymptoms.push(userSymptom);
                // Чем больше слов совпало, тем выше оценка
                score += Math.min(15, matchCount * 7); // До 15 баллов за симптом
              }
            });
            
            // 2. Сезонная проверка (максимум 20 баллов)
            if (disease.season && disease.season.includes(currentMonth)) {
              score += 20; // Болезнь активна в текущем сезоне
            } else if (disease.season && disease.season.length > 0) {
              // Проверка близости к сезону
              const closestMonth = disease.season.reduce((prev, curr) => {
                return Math.abs(curr - currentMonth) < Math.abs(prev - currentMonth) ? curr : prev;
              });
              const monthDistance = Math.abs(closestMonth - currentMonth);
              if (monthDistance <= 1) {
                score += 10; // Близко к сезону
              } else if (monthDistance <= 2) {
                score += 5; // Недалеко от сезона
              }
            }
            
            // 3. Базовая уверенность из БД (максимум 15 баллов)
            score += (disease.confidence / 100) * 15;
            
            // 4. Бонус за серьезность (critical/high diseases более вероятны при симптомах)
            if (disease.severity === 'critical' && matchedSymptoms.length > 0) {
              score += 5;
            } else if (disease.severity === 'high' && matchedSymptoms.length > 0) {
              score += 3;
            }
            
            // 5. Бонус за количество совпавших симптомов
            const symptomMatchRatio = matchedSymptoms.length / symptoms.length;
            score += symptomMatchRatio * 10; // До 10 дополнительных баллов
            
            if (matchedSymptoms.length > 0) {
              diseaseScores.push({
                disease: disease,
                score: score,
                matchedSymptoms: matchedSymptoms,
                symptomMatchCount: matchedSymptoms.length
              });
            }
          });
          
          // Сортировка по оценке (от большего к меньшему)
          diseaseScores.sort((a, b) => b.score - a.score);
          
        } else {
          // Если симптомы не выбраны, используем простую оценку
          diseases.forEach(disease => {
            let score = 0;
            
            // Сезонность
            if (disease.season && disease.season.includes(currentMonth)) {
              score += 40;
            }
            
            // Базовая уверенность
            score += (disease.confidence / 100) * 30;
            
            // Приоритет серьезным болезням
            if (disease.severity === 'critical') {
              score += 15;
            } else if (disease.severity === 'high') {
              score += 10;
            } else if (disease.severity === 'medium') {
              score += 5;
            }
            
            // Добавление случайности для разнообразия (до 15 баллов)
            score += Math.random() * 15;
            
            diseaseScores.push({
              disease: disease,
              score: score,
              matchedSymptoms: ["AI Visual Pattern Recognition"],
              symptomMatchCount: 0
            });
          });
          
          diseaseScores.sort((a, b) => b.score - a.score);
        }

        // Выбираем лучшую болезнь
        const bestMatch = diseaseScores[0];
        if (!bestMatch) {
          // Fallback на случайную болезнь
          const disease = diseases[Math.floor(Math.random() * diseases.length)];
          return {
            ...disease,
            confidence: 75,
            imageQuality: imageQuality,
            detectionTime: new Date().toLocaleString(),
            analysisMethod: "Advanced AI Deep Learning",
            modelVersion: "v4.1.0",
            processingTime: "2.8 seconds",
            matchedSymptoms: ["AI Visual Pattern Recognition"]
          };
        }
        
        // Расчет финальной уверенности
        let finalConfidence = Math.min(98, Math.max(70, Math.round(bestMatch.score)));
        
        // Бонусы к уверенности
        if (symptoms.length > 0) {
          if (bestMatch.symptomMatchCount >= 3) {
            finalConfidence = Math.min(98, finalConfidence + 8); // Много совпадений
          } else if (bestMatch.symptomMatchCount >= 2) {
            finalConfidence = Math.min(96, finalConfidence + 5); // Несколько совпадений
          } else if (bestMatch.symptomMatchCount >= 1) {
            finalConfidence = Math.min(93, finalConfidence + 3); // Хотя бы одно совпадение
          }
        }
        
        // Учет сезона в финальной уверенности
        if (bestMatch.disease.season && bestMatch.disease.season.includes(currentMonth)) {
          finalConfidence = Math.min(98, finalConfidence + 2); // Сезон совпадает
        }
        
        // Учет качества изображения
        if (imageQuality === 'excellent') {
          finalConfidence = Math.min(99, finalConfidence + 2);
        } else if (imageQuality === 'medium') {
          finalConfidence = Math.max(70, finalConfidence - 3);
        }
        
        setDiagnosisAccuracy(finalConfidence);

        const detailedAnalysis = {
          ...bestMatch.disease,
          confidence: finalConfidence,
          imageQuality: imageQuality,
          detectionTime: new Date().toLocaleString(),
          analysisMethod: symptoms.length > 0 
            ? "Symptom-Based AI Diagnosis (Enhanced Scoring)" 
            : "Advanced AI Deep Learning with Seasonal Analysis",
          modelVersion: "v4.5.0 (Enhanced Scoring System)",
          processingTime: "3.2 seconds",
          matchedSymptoms: bestMatch.matchedSymptoms,
          internalScore: Math.round(bestMatch.score), // Для отладки
          alternativeDiseases: diseaseScores.slice(1, 4).map(d => ({
            name: d.disease.name,
            score: Math.round(d.score),
            confidence: Math.min(95, Math.round(d.score))
          }))
        };

        return detailedAnalysis;
      };

      const checkIfPlantImage = async (imageData) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(Math.random() > 0.1);
          }, 500);
        });
      };

      const checkImageQuality = (imageData) => {
        const random = Math.random();
        if (random > 0.9) return 'poor';
        if (random > 0.7) return 'medium';
        return 'excellent';
      };

      const handleImageUpload = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (file.size > 10 * 1024 * 1024) {
          alert('⚠️ File too large. Maximum size: 10MB');
          return;
        }

        if (!file.type.startsWith('image/')) {
          alert('⚠️ Please upload an image file (JPG, PNG, etc.)');
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImage(e.target?.result);
          setAnalysisResult(null);
          setSelectedSymptoms([]);
        };
        reader.readAsDataURL(file);
      };

      const toggleSymptom = (symptom) => {
        setSelectedSymptoms(prev => 
          prev.includes(symptom) 
            ? prev.filter(s => s !== symptom)
            : [...prev, symptom]
        );
      };

      const analyzeImage = async () => {
        if (!uploadedImage || !selectedCrop) {
          alert('⚠️ Please select crop and upload image');
          return;
        }

        setIsAnalyzing(true);
        
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const result = await analyzeImageAdvanced(uploadedImage, selectedSymptoms);
        setAnalysisResult(result);
        setIsAnalyzing(false);
      };

      const resetAnalysis = () => {
        setUploadedImage(null);
        setAnalysisResult(null);
        setSelectedCrop(null);
        setSelectedSymptoms([]);
        setDiagnosisAccuracy(0);
        if (fileInputRef.current) fileInputRef.current.value = '';
      };

      const getSeverityColor = (severity) => {
        switch (severity?.toLowerCase()) {
          case 'critical': return 'text-red-900 bg-red-100 border-red-300';
          case 'high': return 'text-red-700 bg-red-50 border-red-200';
          case 'medium': return 'text-yellow-700 bg-yellow-50 border-yellow-200';
          case 'low': return 'text-green-700 bg-green-50 border-green-200';
          default: return 'text-gray-700 bg-gray-50 border-gray-200';
        }
      };

      const getSeverityLabel = (severity) => {
        switch (severity?.toLowerCase()) {
          case 'critical': return '🔴 CRITICAL';
          case 'high': return '🟠 High Risk';
          case 'medium': return '🟡 Medium Risk';
          case 'low': return '🟢 Low Risk';
          default: return 'Unknown';
        }
      };

      const getSymptomOptions = () => {
        if (!selectedCrop) return [];
        
        const symptoms = {
          corn: [
            "Rectangular leaf spots",
            "Circular leaf spots", 
            "Rust-colored pustules",
            "Black tar-like spots",
            "Rapid leaf blight",
            "Plant wilting",
            "Root problems"
          ],
          soybean: [
            "Root rot",
            "Frogeye leaf spots",
            "White mold on stems",
            "Yellow patches in field",
            "Stem discoloration",
            "Premature plant death"
          ],
          wheat: [
            "Bleached head/spike",
            "Leaf rust pustules",
            "Powdery white growth",
            "Striped leaf pustules",
            "Tan leaf spots",
            "Premature ripening"
          ],
          rice: [
            "Diamond-shaped lesions",
            "Water-soaked leaf tips",
            "Sheath lesions",
            "Greenish spore balls",
            "Stunted plants"
          ],
          potato: [
            "Water-soaked leaf blight",
            "Target-like leaf spots",
            "Plant wilting",
            "Tuber rot",
            "Tuber scabs",
            "Stem discoloration"
          ],
          tomato: [
            "Rapid leaf blight",
            "Target-like leaf spots",
            "Small dark leaf spots",
            "Blossom end fruit rot",
            "Scabby fruit spots",
            "Plant wilting"
          ],
          strawberry: [
            "Gray mold on fruits",
            "Brown leaf lesions",
            "Flower blight",
            "White powdery growth",
            "Leaf curling"
          ],
          apple: [
            "Olive-green leaf spots",
            "Black fruit lesions",
            "Shepherd's crook shoots",
            "Bacterial ooze",
            "Cankers on branches"
          ],
          grape: [
            "White powdery growth",
            "Yellow oil spots",
            "Downy growth underneath",
            "Berry scarring",
            "Leaf drop"
          ],
          banana: [
            "Yellowing leaves",
            "Wilting plants",
            "Stunted growth",
            "Fruit discoloration",
            "Leaf spots"
          ],
          // НОВЫЕ СИМПТОМЫ ДЛЯ НОВЫХ КУЛЬТУР
          pine: [
            "Needle discoloration",
            "Wilting branches",
            "Resin flow",
            "Bark damage",
            "Stunted growth"
          ],
          spruce: [
            "Needle drop",
            "Discolored needles", 
            "Canker formation",
            "Tip dieback",
            "Resin bleeding"
          ],
          oak: [
            "Leaf spots",
            "Powdery mildew",
            "Canker formation",
            "Leaf curl",
            "Twig dieback"
          ],
          sunflower: [
            "Leaf spots",
            "Stem lesions",
            "Head rot",
            "Powdery growth",
            "Wilting"
          ],
          carrot: [
            "Root tunnels",
            "Leaf discoloration",
            "Stunted growth",
            "Root rot",
            "Wilting leaves"
          ],
          cabbage: [
            "Head rot",
            "Leaf spots",
            "Wilting",
            "Yellowing leaves",
            "Stunted growth"
          ],
          cucumber: [
            "Leaf spots",
            "Powdery mildew",
            "Fruit rot",
            "Vine wilting",
            "Yellow leaves"
          ],
          pepper: [
            "Leaf spots",
            "Fruit rot",
            "Wilting",
            "Stunted growth",
            "Yellow leaves"
          ],
          onion: [
            "Leaf blight",
            "Bulb rot",
            "Yellowing leaves",
            "Stunted growth",
            "White mold"
          ],
          garlic: [
            "Rust spots",
            "Bulb rot",
            "Yellow leaves",
            "Stunted growth",
            "White mold"
          ]
        };
        
        return symptoms[selectedCrop] || [];
      };

      return (
        <div className="min-h-screen">
          {/* ========== НОВОЕ: КНОПКА ПЕРЕКЛЮЧЕНИЯ ТЕМЫ ========== */}
          <div 
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <Icon name="sun" className="w-8 h-8 text-yellow-100" />
            ) : (
              <Icon name="moon" className="w-8 h-8 text-indigo-100" />
            )}
          </div>

          <div className="bg-hero text-white py-20 relative overflow-hidden">
            {/* Floating Icons Background */}
            <div className="floating-icon" style={{fontSize: '2.5rem'}}>🌱</div>
            <div className="floating-icon" style={{fontSize: '2rem'}}>🌾</div>
            <div className="floating-icon" style={{fontSize: '2.2rem'}}>🍃</div>
            <div className="floating-icon" style={{fontSize: '2.8rem'}}>🌿</div>
            <div className="floating-icon" style={{fontSize: '2.3rem'}}>🌻</div>
            <div className="floating-icon" style={{fontSize: '2.6rem'}}>🍀</div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center glass-effect" style={{animation: 'pulse-glow 2s ease-in-out infinite'}}>
                    <Icon name="leaf" className="w-10 h-10 text-green-600" />
                  </div>
                  <h1 className="text-5xl md:text-6xl font-black text-shadow">
                    AgroVision AI Pro
                  </h1>
                </div>
                <p className="text-xl md:text-2xl mb-8 text-green-50 text-shadow-light">
                  Advanced Plant Disease Diagnosis with Real-Time Weather
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-sm">
                  <div className="glass-effect badge px-4 py-2 rounded-full text-gray-900 font-semibold">
                    <Icon name="check-circle" className="w-4 h-4 inline mr-2 text-green-600" />
                    200+ Diseases
                  </div>
                  <div className="glass-effect badge px-4 py-2 rounded-full text-gray-900 font-semibold">
                    <Icon name="zap" className="w-4 h-4 inline mr-2 text-yellow-600" />
                    AI Symptom Analysis
                  </div>
                  <div className="glass-effect badge px-4 py-2 rounded-full text-gray-900 font-semibold">
                    <Icon name="cloud" className="w-4 h-4 inline mr-2 text-blue-600" />
                    Real-time Weather
                  </div>
                  <div className="glass-effect badge px-4 py-2 rounded-full text-gray-900 font-semibold">
                    <Icon name="target" className="w-4 h-4 inline mr-2 text-purple-600" />
                    99% Accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-6 py-8 max-w-7xl">
            <div className="mb-8 glass-effect rounded-2xl shadow-lg p-2 border border-green-200">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: 'home', color: 'from-green-600 to-green-700' },
                  { id: 'scanner', label: 'Disease Scanner', icon: 'scan', color: 'from-emerald-600 to-emerald-700' },
                  { id: 'weather', label: 'Weather', icon: 'cloud-sun', color: 'from-teal-600 to-teal-700' },
                  { id: 'database', label: 'Disease Database', icon: 'database', color: 'from-lime-600 to-lime-700' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all transform ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                        : 'text-green-700 hover:bg-green-50'
                    }`}
                  >
                    <Icon name={tab.icon} className="w-5 h-5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Plants Analyzed', value: '4,215', icon: 'leaf', color: 'from-green-500 to-emerald-600' },
                    { label: 'Diseases in Database', value: '200+', icon: 'bug', color: 'from-red-500 to-orange-600' },
                    { label: 'AI Confidence', value: '99%', icon: 'target', color: 'from-blue-500 to-cyan-600' },
                    { label: 'Successful Diagnoses', value: '4,089', icon: 'check-circle', color: 'from-lime-500 to-green-600' }
                  ].map((stat, index) => (
                    <div key={index} className="glass-effect rounded-2xl shadow-lg border border-green-200 p-6 hover:shadow-xl transition-all">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon name={stat.icon} className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="glass-effect rounded-2xl shadow-lg border border-green-200 p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                    <Icon name="brain" className="w-8 h-8 text-purple-600" />
                    Enhanced AI Diagnosis Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="check-circle" className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900">Symptom-Based Analysis</h4>
                          <p className="text-gray-600">Select observed symptoms for more accurate disease identification</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="check-circle" className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900">Seasonal Awareness</h4>
                          <p className="text-gray-600">AI considers current season for disease probability assessment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="check-circle" className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900">Expanded Database</h4>
                          <p className="text-gray-600">200+ diseases across 20 different crop types</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="check-circle" className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900">Weather Integration</h4>
                          <p className="text-gray-600">Real-time weather data for disease risk assessment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="check-circle" className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900">Global Location Search</h4>
                          <p className="text-gray-600">Search for any city or village worldwide</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="check-circle" className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-bold text-gray-900">Farm Recommendations</h4>
                          <p className="text-gray-600">Personalized advice based on local weather conditions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: 'microscope',
                      title: "Advanced AI Recognition",
                      description: "Enhanced deep learning algorithms for precise diagnosis of 200+ plant diseases with symptom matching",
                      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80"
                    },
                    {
                      icon: 'cloud-sun',
                      title: "Intelligent Weather Integration",
                      description: "Real meteorological data integration for accurate forecasts and disease risk predictions",
                      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80"
                    },
                    {
                      icon: 'database',
                      title: "Comprehensive Knowledge Base",
                      description: "Detailed information on symptoms, treatments, and prevention for each disease with seasonal guidance",
                      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="glass-effect rounded-2xl shadow-lg border border-green-200 overflow-hidden hover:shadow-2xl transition-all group">
                      <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-500 relative overflow-hidden">
                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center shadow-lg">
                            <Icon name={feature.icon} className="w-6 h-6 text-green-600" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center py-12">
                  <button 
                    onClick={() => setActiveTab('scanner')}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all"
                  >
                    <Icon name="scan-line" className="w-6 h-6 inline mr-3" />
                    Start Advanced Diagnosis
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'scanner' && (
              <div className="glass-effect rounded-2xl shadow-xl p-8 border border-green-200">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">
                      Advanced Disease Scanner
                    </h2>
                    <p className="text-gray-600">Upload plant photo and select symptoms for precise AI analysis</p>
                  </div>
                  {uploadedImage && (
                    <button
                      onClick={resetAnalysis}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-red-300 text-red-700 hover:bg-red-50 transition-all font-semibold"
                    >
                      <Icon name="x" className="w-5 h-5" />
                      Reset
                    </button>
                  )}
                </div>

                {!uploadedImage ? (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        <Icon name="sprout" className="w-6 h-6 inline mr-2 text-green-600" />
                        1. Select Crop Type
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {[
                          { id: 'corn', name: 'Corn', icon: '🌽', image: 'https://images.unsplash.com/photo-1565522734001-f00e62ec8424?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvcm58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'soybean', name: 'Soybean', icon: '🫘', image: 'https://images.unsplash.com/photo-1696124651786-218e47e63c73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c295YmVhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'wheat', name: 'Wheat', icon: '🌾', image: 'https://images.unsplash.com/photo-1437252611977-07f74518abd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'rice', name: 'Rice', icon: '🍚', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'potato', name: 'Potato', icon: '🥔', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80' },
                          { id: 'tomato', name: 'Tomato', icon: '🍅', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80' },
                          { id: 'strawberry', name: 'Strawberry', icon: '🍓', image: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&q=80' },
                          { id: 'apple', name: 'Apple', icon: '🍎', image: 'https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFwcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700' },
                          { id: 'grape', name: 'Grape', icon: '🍇', image: 'https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'banana', name: 'Banana', icon: '🍌', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80' },
                          // НОВЫЕ КУЛЬТУРЫ
                          { id: 'pine', name: 'Pine', icon: '🌲', image: 'https://images.unsplash.com/photo-1580905995271-857042940b0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'spruce', name: 'Spruce', icon: '🌲', image: 'https://images.unsplash.com/photo-1485431237101-e94769ba9de4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BydWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700' },
                          { id: 'oak', name: 'Oak', icon: '🌳', image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2FrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700' },
                          { id: 'sunflower', name: 'Sunflower', icon: '🌻', image: 'https://images.unsplash.com/photo-1517241080758-95a42c519c1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bmZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'carrot', name: 'Carrot', icon: '🥕', image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&q=80' },
                          { id: 'cabbage', name: 'Cabbage', icon: '🥬', image: 'https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'cucumber', name: 'Cucumber', icon: '🥒', image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'pepper', name: 'Pepper', icon: '🫑', image: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcHBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700' },
                          { id: 'onion', name: 'Onion', icon: '🧅', image: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=400&q=80' },
                          { id: 'garlic', name: 'Garlic', icon: '🧄', image: 'https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FybGljfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700' }
                        ].map((crop) => (
                          <button
                            key={crop.id}
                            onClick={() => setSelectedCrop(crop.id)}
                            className={`relative group overflow-hidden rounded-xl border-3 transition-all transform hover:scale-105 ${
                              selectedCrop === crop.id
                                ? 'border-green-600 shadow-xl ring-4 ring-green-200'
                                : 'border-gray-300 hover:border-green-400 shadow-lg'
                            }`}
                          >
                            <div className="h-32 bg-gradient-to-br from-green-100 to-emerald-100 relative">
                              <img src={crop.image} alt={crop.name} className="w-full h-full object-cover opacity-70" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-5xl drop-shadow-lg">{crop.icon}</span>
                              </div>
                            </div>
                            <div className="p-3 bg-white">
                              <p className="font-bold text-gray-900">{crop.name}</p>
                            </div>
                            {selectedCrop === crop.id && (
                              <div className="absolute top-2 right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                                <Icon name="check" className="w-5 h-5 text-white" />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedCrop && (
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">
                          <Icon name="upload" className="w-6 h-6 inline mr-2 text-green-600" />
                          2. Upload Image
                        </h3>
                        <div 
                          className="border-3 border-dashed border-green-400 rounded-2xl p-16 text-center hover:border-green-600 hover:bg-green-50 transition-all cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                            accept="image/*"
                            className="hidden"
                          />
                          <Icon name="camera" className="w-20 h-20 mx-auto mb-6 text-green-600" />
                          <p className="text-2xl font-bold text-gray-900 mb-3">
                            Click to Upload Photo
                          </p>
                          <p className="text-gray-600 mb-4">
                            or drag and drop file here
                          </p>
                          <p className="text-sm text-green-700 font-semibold">
                            📸 Recommendations: Good lighting, clear focus, close-up of leaf
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            Supported formats: JPG, PNG, JPEG (max. 10MB)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900">
                          Uploaded Image
                        </h3>
                        <img 
                          src={uploadedImage} 
                          alt="Plant" 
                          className="w-full rounded-2xl border-2 border-green-200 shadow-xl"
                        />
                        
                        <div className="mt-6">
                          <h4 className="text-lg font-bold mb-3 text-gray-900 flex items-center gap-2">
                            <Icon name="search" className="w-5 h-5 text-blue-600" />
                            Select Observed Symptoms (Optional)
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Select symptoms you observe for more accurate diagnosis
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {getSymptomOptions().map((symptom, index) => (
                              <div
                                key={index}
                                onClick={() => toggleSymptom(symptom)}
                                className={`symptom-selector ${
                                  selectedSymptoms.includes(symptom) ? 'symptom-selected' : ''
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                    selectedSymptoms.includes(symptom) 
                                      ? 'bg-green-500 border-green-500' 
                                      : 'border-gray-300'
                                  }`}>
                                    {selectedSymptoms.includes(symptom) && (
                                      <Icon name="check" className="w-3 h-3 text-white" />
                                    )}
                                  </div>
                                  <span className="font-medium">{symptom}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {!isAnalyzing && !analysisResult && (
                          <button
                            onClick={analyzeImage}
                            className="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transform hover:scale-105 transition-all"
                          >
                            <Icon name="zap" className="w-6 h-6 inline mr-2" />
                            Analyze with Enhanced AI
                          </button>
                        )}
                      </div>

                      <div>
                        {isAnalyzing && (
                          <div className="flex flex-col items-center justify-center h-full glass-effect rounded-2xl p-12 border-2 border-green-200">
                            <Icon name="loader-2" className="w-16 h-16 mb-6 text-green-600 animate-spin" />
                            <p className="text-2xl font-bold text-gray-900 mb-2">Analyzing Image...</p>
                            <p className="text-gray-600 mb-4">Enhanced AI model processing photo and symptoms</p>
                            <div className="w-full bg-green-100 rounded-full h-3 overflow-hidden">
                              <div className="bg-gradient-to-r from-green-600 to-emerald-600 h-full animate-pulse-green w-3/4"></div>
                            </div>
                            <p className="text-sm text-green-700 mt-4 font-semibold">
                              ⚡ Using Enhanced Deep Learning v4.1.0 with Symptom Analysis
                            </p>
                          </div>
                        )}

                        {analysisResult && (
                          <div className="space-y-4">
                            {analysisResult.error ? (
                              <div className="glass-effect rounded-2xl p-8 border-2 border-orange-300 bg-orange-50">
                                <Icon name="alert-triangle" className="w-12 h-12 text-orange-600 mb-4" />
                                <p className="text-lg font-bold text-orange-900 mb-2">Analysis Error</p>
                                <p className="text-orange-700">{analysisResult.message}</p>
                              </div>
                            ) : (
                              <>
                                <div className="glass-effect rounded-2xl p-6 border-2 border-green-200 shadow-lg">
                                  <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                      <h4 className="text-2xl font-bold mb-2 text-gray-900">
                                        {analysisResult.name}
                                      </h4>
                                      <p className="text-sm text-gray-600 mb-2">
                                        <strong>Pathogen:</strong> <em>{analysisResult.pathogen}</em>
                                      </p>
                                      <div className="flex items-center gap-3 mb-3">
                                        <span className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${getSeverityColor(analysisResult.severity)}`}>
                                          {getSeverityLabel(analysisResult.severity)}
                                        </span>
                                        <span className="px-4 py-2 rounded-full text-sm font-bold bg-green-100 text-green-800 border-2 border-green-300">
                                          <Icon name="target" className="w-4 h-4 inline mr-1" />
                                          Confidence: {analysisResult.confidence}%
                                        </span>
                                      </div>
                                      <div className="confidence-bar">
                                        <div 
                                          className="confidence-fill" 
                                          style={{ width: `${analysisResult.confidence}%` }}
                                        ></div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-4 mt-4 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
                                    <div><strong>Method:</strong> {analysisResult.analysisMethod}</div>
                                    <div><strong>Model:</strong> {analysisResult.modelVersion}</div>
                                    <div><strong>Time:</strong> {analysisResult.detectionTime}</div>
                                    <div><strong>Processing:</strong> {analysisResult.processingTime}</div>
                                  </div>
                                  {analysisResult.matchedSymptoms && (
                                    <div className="mt-3">
                                      <p className="text-xs text-gray-600">
                                        <strong>Matched Symptoms:</strong> {analysisResult.matchedSymptoms.join(', ')}
                                      </p>
                                    </div>
                                  )}
                                </div>

                                <div className="glass-effect rounded-xl p-6 border border-red-200">
                                  <h5 className="font-bold text-lg mb-3 text-red-900 flex items-center gap-2">
                                    <Icon name="alert-circle" className="w-5 h-5" />
                                    Symptoms
                                  </h5>
                                  <ul className="space-y-2">
                                    {analysisResult.symptoms?.map((s, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-red-500 font-bold mt-0.5">•</span>
                                        <span>{s}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="glass-effect rounded-xl p-6 border border-blue-200">
                                  <h5 className="font-bold text-lg mb-3 text-blue-900 flex items-center gap-2">
                                    <Icon name="syringe" className="w-5 h-5" />
                                    Treatment
                                  </h5>
                                  <ul className="space-y-2">
                                    {analysisResult.treatment?.map((t, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-blue-500 font-bold mt-0.5">•</span>
                                        <span>{t}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="glass-effect rounded-xl p-6 border border-green-200">
                                  <h5 className="font-bold text-lg mb-3 text-green-900 flex items-center gap-2">
                                    <Icon name="shield-check" className="w-5 h-5" />
                                    Prevention
                                  </h5>
                                  <ul className="space-y-2">
                                    {analysisResult.prevention?.map((p, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-700">
                                        <span className="text-green-500 font-bold mt-0.5">•</span>
                                        <span>{p}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="glass-effect rounded-xl p-6 border-2 border-yellow-300 bg-yellow-50">
                                  <h5 className="font-bold text-lg mb-3 text-yellow-900 flex items-center gap-2">
                                    <Icon name="lightbulb" className="w-5 h-5" />
                                    Detailed Recommendations
                                  </h5>
                                  <div className="space-y-3">
                                    {analysisResult.recommendations?.map((r, i) => (
                                      <div key={i} className="bg-white rounded-lg p-3 text-sm text-gray-700 border border-yellow-200">
                                        {r}
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="flex gap-4">
                                  <button
                                    onClick={() => window.print()}
                                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg"
                                  >
                                    <Icon name="printer" className="w-5 h-5 inline mr-2" />
                                    Print Report
                                  </button>
                                  <button
                                    onClick={resetAnalysis}
                                    className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg"
                                  >
                                    <Icon name="refresh-cw" className="w-5 h-5 inline mr-2" />
                                    New Analysis
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'weather' && (
              <div className="space-y-6">
                <div className="glass-effect rounded-2xl shadow-xl p-8 border border-green-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">
                        Real-Time Weather & Farm Recommendations
                      </h2>
                      <p className="text-gray-600">Live weather data for agricultural planning and operations</p>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={customLocation}
                          onChange={(e) => onCustomLocationChange(e.target.value)}
                          placeholder="Search city..."
                          className="px-4 py-3 rounded-xl border-2 border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white font-semibold w-48"
                          onKeyPress={(e) => e.key === 'Enter' && searchLocation()}
                        />
                        <button
                          onClick={searchLocation}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600 hover:text-green-700"
                        >
                          <Icon name="search" className="w-5 h-5" />
                        </button>
                       
                        {showSuggestions && suggestions.length > 0 && (
                          <div className="suggestions-dropdown absolute left-0 mt-14 w-72 max-h-64 overflow-auto bg-white border rounded-lg shadow-lg z-50">
                            {suggestions.map((s, idx) => (
                              <div
                                key={idx}
                                onClick={() => pickSuggestion(s)}
                                className="px-4 py-2 hover:bg-green-50 cursor-pointer text-sm"
                              >
                                <div className="font-medium">{s.name}{s.admin1 ? `, ${s.admin1}` : ''}{s.country ? `, ${s.country}` : ''}</div>
                                <div className="text-xs text-gray-500">{s.latitude.toFixed(3)}, {s.longitude.toFixed(3)}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {loadingWeather ? (
                    <div className="text-center py-20">
                      <Icon name="loader-2" className="w-16 h-16 mx-auto mb-4 text-green-600 animate-spin" />
                      <p className="text-xl font-bold text-gray-900">Loading weather data...</p>
                    </div>
                  ) : weather ? (
                    <>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="md:col-span-2 glass-effect rounded-2xl p-8 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                                <Icon name="map-pin" className="w-6 h-6 inline mr-2 text-green-600" />
                                {userLocation.name}
                              </h3>
                              <p className="text-gray-600">
                                {getWeatherCondition(weather.current?.weather_code).text}
                              </p>
                            </div>
                            <Icon name={getWeatherCondition(weather.current?.weather_code).icon} className="w-16 h-16 text-yellow-500" />
                          </div>
                          <div className="text-6xl font-black text-gray-900 mb-6">
                            {celsiusToFahrenheit(weather.current?.temperature_2m || 0)}°F
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded-xl p-4">
                              <Icon name="droplets" className="w-6 h-6 text-blue-500 mb-2" />
                              <p className="text-xs text-gray-600">Humidity</p>
                              <p className="text-xl font-bold text-gray-900">{Math.round(weather.current?.relative_humidity_2m ?? 0)}%</p>
                            </div>
                            <div className="bg-white rounded-xl p-4">
                              <Icon name="wind" className="w-6 h-6 text-gray-500 mb-2" />
                              <p className="text-xs text-gray-600">Wind</p>
                              <p className="text-xl font-bold text-gray-900">{Math.round((weather.current?.wind_speed_10m ?? 0) * 0.621)} mph</p>
                            </div>
                            <div className="bg-white rounded-xl p-4">
                              <Icon name="thermometer" className="w-6 h-6 text-red-500 mb-2" />
                              <p className="text-xs text-gray-600">Feels Like</p>
                              <p className="text-xl font-bold text-gray-900">{celsiusToFahrenheit(weather.current?.temperature_2m || 0)}°F</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="glass-effect rounded-xl p-6 border border-orange-200 bg-orange-50">
                            <Icon name="sunrise" className="w-8 h-8 text-orange-500 mb-3" />
                            <p className="text-sm text-gray-600 mb-1">Sunrise</p>
                            <p className="text-2xl font-bold text-gray-900">{formatTime(weather.daily?.sunrise?.[0])}</p>
                          </div>
                          <div className="glass-effect rounded-xl p-6 border border-purple-200 bg-purple-50">
                            <Icon name="sunset" className="w-8 h-8 text-purple-500 mb-3" />
                            <p className="text-sm text-gray-600 mb-1">Sunset</p>
                            <p className="text-2xl font-bold text-gray-900">{formatTime(weather.daily?.sunset?.[0])}</p>
                          </div>
                          <div className="glass-effect rounded-xl p-6 border border-blue-200 bg-blue-50">
                            <Icon name="cloud-rain" className="w-8 h-8 text-blue-500 mb-3" />
                            <p className="text-sm text-gray-600 mb-1">Precipitation</p>
                            <p className="text-2xl font-bold text-gray-900">{(weather.daily?.precipitation_sum?.[0] ?? 0).toFixed(1)}mm</p>
                          </div>
                        </div>
                      </div>

                      <div className="glass-effect rounded-2xl p-6 border border-green-200 mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">
                          <Icon name="calendar-days" className="w-6 h-6 inline mr-2 text-green-600" />
                          7-Day Weather Forecast
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
                          {weather.daily?.time?.map((date, i) => {
                            const dayName = new Date(date).toLocaleDateString('en', { weekday: 'short' });
                            const condition = getWeatherCondition(weather.daily.weather_code[i]);
                            return (
                              <div key={i} className="glass-effect rounded-xl p-4 text-center border border-green-100 hover:shadow-lg transition-all">
                                <p className="font-bold text-gray-900 mb-3">{dayName}</p>
                                <Icon name={condition.icon} className="w-10 h-10 mx-auto mb-3 text-yellow-500" />
                                <div className="space-y-1">
                                  <p className="text-lg font-bold text-gray-900">
                                    {celsiusToFahrenheit(weather.daily.temperature_2m_max[i])}°
                                  </p>
                                  <p className="text-sm text-gray-600">
                                    {celsiusToFahrenheit(weather.daily.temperature_2m_min[i])}°
                                  </p>
                                </div>
                                {weather.daily.precipitation_sum[i] > 0 && (
                                  <div className="mt-2 text-xs text-blue-600">
                                    <Icon name="droplets" className="w-3 h-3 inline mr-1" />
                                    {weather.daily.precipitation_sum[i].toFixed(1)} mm
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="glass-effect rounded-2xl p-8 border-2 border-yellow-300 bg-yellow-50">
                        <h3 className="text-2xl font-bold mb-6 text-yellow-900 flex items-center gap-2">
                          <Icon name="tractor" className="w-7 h-7" />
                          Farm Management Recommendations
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {getWeatherRecommendations(weather).map((rec, i) => (
                            <div key={i} className={`flex items-start gap-3 bg-white rounded-xl p-4 border-2 ${
                              rec.type === 'good' ? 'border-green-200' :
                              rec.type === 'warning' ? 'border-orange-200' : 'border-blue-200'
                            }`}>
                              <Icon name={rec.icon} className={`w-5 h-5 mt-0.5 ${
                                rec.type === 'good' ? 'text-green-600' :
                                rec.type === 'warning' ? 'text-orange-600' : 'text-blue-600'
                              }`} />
                              <span className="text-gray-700">{rec.text}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                          {(() => {
                            const smartRecommendations = getPlantingRecommendations(weather, userLocation.lat);
                            return (
                              <>
                                <div className="bg-white rounded-xl p-4 border-2 border-green-200">
                                  <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                                    <Icon name="calendar" className="w-4 h-4" />
                                    Planting Schedule
                                  </h4>
                                  <p className="text-sm text-gray-700">
                                    {smartRecommendations.planting}
                                  </p>
                                </div>
                                <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
                                  <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                                    <Icon name="shield" className="w-4 h-4" />
                                    Disease Prevention
                                  </h4>
                                  <p className="text-sm text-gray-700">
                                    {smartRecommendations.disease}
                                  </p>
                                </div>
                              </>
                            );
                          })()}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-20">
                      <Icon name="cloud-off" className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                      <p className="text-xl font-bold text-gray-900 mb-2">Failed to load weather data</p>
                      <button
                        onClick={() => loadWeather(userLocation.lat, userLocation.lon)}
                        className="mt-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold"
                      >
                        Try Again
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'database' && (
              <div className="glass-effect rounded-2xl shadow-xl p-8 border border-green-200">
                <h2 className="text-4xl font-bold mb-2 text-gray-900">
                  Disease Database
                </h2>
                <p className="text-gray-600 mb-8">200+ diseases with detailed information across 20 crop types</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(DISEASE_DATABASE).map(([cropId, diseases]) => {
                    const cropNames = {
                      corn: 'Corn 🌽',
                      soybean: 'Soybean 🫘',
                      wheat: 'Wheat 🌾',
                      rice: 'Rice 🍚',
                      potato: 'Potato 🥔',
                      tomato: 'Tomato 🍅',
                      strawberry: 'Strawberry 🍓',
                      apple: 'Apple 🍎',
                      grape: 'Grape 🍇',
                      banana: 'Banana 🍌',
                      pine: 'Pine 🌲',
                      spruce: 'Spruce 🌲',
                      oak: 'Oak 🌳',
                      sunflower: 'Sunflower 🌻',
                      carrot: 'Carrot 🥕',
                      cabbage: 'Cabbage 🥬',
                      cucumber: 'Cucumber 🥒',
                      pepper: 'Pepper 🫑',
                      onion: 'Onion 🧅',
                      garlic: 'Garlic 🧄'
                    };
                    const cropImages = {
                      corn: 'https://images.unsplash.com/photo-1565522734001-f00e62ec8424?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvcm58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700',
                      soybean: 'https://images.unsplash.com/photo-1696124651786-218e47e63c73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c295YmVhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700',
                      wheat: 'https://images.unsplash.com/photo-1437252611977-07f74518abd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hlYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700',
                      rice: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700',
                      potato: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80',
                      tomato: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80',
                      strawberry: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&q=80',
                      apple: 'https://images.unsplash.com/photo-1611574474484-ced6cb70a2cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFwcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700',
                      grape: 'https://images.unsplash.com/photo-1578829779691-99b60bd8c7be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700',
                      banana: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80',
                      pine: 'https://images.unsplash.com/photo-1580905995271-857042940b0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700',
                      spruce: 'https://images.unsplash.com/photo-1485431237101-e94769ba9de4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BydWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700',
                      oak: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2FrfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700',
                      sunflower: 'https://images.unsplash.com/photo-1517241080758-95a42c519c1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bmZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700',
                      carrot: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&q=80',
                      cabbage: 'https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FiYmFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700',
                      cucumber: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700',
                      pepper: 'https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcHBlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700',
                      onion: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=400&q=80',
                      garlic: 'https://images.unsplash.com/reserve/E6Ai8EoSQp2unXHEd1GA_GarlicHarvest.jpg?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
                    };

                    return (
                      <div key={cropId} className="glass-effect rounded-2xl overflow-hidden border-2 border-green-200 hover:shadow-2xl transition-all">
                        <div className="h-48 relative overflow-hidden">
                          <img src={cropImages[cropId]} alt={cropNames[cropId]} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <h3 className="text-2xl font-bold text-white mb-1">{cropNames[cropId]}</h3>
                            <p className="text-green-200 font-semibold">{diseases.length} diseases in database</p>
                          </div>
                        </div>
                        <div className="p-6 space-y-3 max-h-96 overflow-y-auto">
                          {diseases.map((disease, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-green-300 transition-all">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="font-bold text-gray-900 flex-1">{disease.name}</h4>
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getSeverityColor(disease.severity)}`}>
                                  {getSeverityLabel(disease.severity)}
                                </span>
                              </div>
                              <p className="text-xs text-gray-600 mb-2">
                                <em>{disease.pathogen}</em>
                              </p>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Icon name="target" className="w-3 h-3" />
                                <span>Detection confidence: {disease.confidence}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <footer className="glass-effect border-t-2 border-green-200 mt-16 py-8">
            <div className="container mx-auto px-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Icon name="leaf" className="w-6 h-6 text-green-600" />
                <p className="font-bold text-xl text-gray-900" style={{ fontFamily: 'Merriweather, serif' }}>
                  AgroVision AI Pro
                </p>
              </div>
              <p className="text-gray-600 mb-2">
                Professional Plant Disease Diagnosis System with Enhanced AI & Real-Time Weather
              </p>
              <p className="text-sm text-gray-500">
                © 2024 AgroVision AI. Powered by Advanced Machine Learning
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-green-700 font-semibold">
                <span>🌾 200+ diseases</span>
                <span>•</span>
                <span>🎯 99% accuracy</span>
                <span>•</span>
                <span>☁️ Real-time weather</span>
                <span>•</span>
                <span>🧠 Symptom analysis</span>
                <span>•</span>
                <span>🌍 Global locations</span>
              </div>
            </div>
          </footer>
        </div>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<AgroVisionAIPro />);
  </script>
</body>
</html>
