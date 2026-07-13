import React from 'react';

type BrandProps = {
  light?: boolean;
};

export function Brand({ light = false }: BrandProps) {
  return (
    <div className="flex items-center" aria-label="Cathay Express Transportation">
      <img
        src="/logo-300.png"
        srcSet="/logo-300.png 300w, /logo-768.png 768w, /logo-1024.png 1024w, /logo.png 2150w"
        sizes="(max-width: 640px) 140px, 180px"
        alt="Cathay Express Transportation Logo"
        className={`h-9 w-auto object-contain transition duration-200 ${
          light 
            ? 'brightness-0 invert opacity-90' 
            : ''
        }`}
      />
    </div>
  );
}