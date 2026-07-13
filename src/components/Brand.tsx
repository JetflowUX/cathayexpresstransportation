import React from 'react';
import { CompassIcon } from 'lucide-react';
type BrandProps = {
  light?: boolean;
};
export function Brand({ light = false }: BrandProps) {
  return (
    <div className="flex items-center gap-2.5" aria-label="Northstar Mobility">
      <span
        className={`grid h-9 w-9 place-items-center rounded-xl ${light ? 'bg-white/15 text-white' : 'bg-teal-50 text-teal-700'}`}>
        
        <CompassIcon size={20} strokeWidth={2.5} aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span
          className={`block text-base font-extrabold tracking-[-0.04em] ${light ? 'text-white' : 'text-slate-950'}`}>
          
          Northstar
        </span>
        <span
          className={`mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] ${light ? 'text-teal-200' : 'text-teal-700'}`}>
          
          Mobility
        </span>
      </span>
    </div>);

}