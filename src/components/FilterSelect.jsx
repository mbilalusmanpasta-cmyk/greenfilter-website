import React, { useState, useRef, useEffect } from "react";

const ChevronDown = ({ className, open }) => (
  <svg
    className={`w-5 h-5 text-white transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

/**
 * Skeleton placeholder for dropdown while loading.
 */
const SelectSkeleton = () => (
  <div
    className="h-12 w-full rounded-xl bg-white/10 animate-skeleton"
    role="presentation"
    aria-hidden
  />
);

/**
 * Minimal dropdown with custom arrow, skeleton loading, and progressive disclosure.
 */
const FilterSelect = ({
  label,
  placeholder = "Select...",
  value,
  options = [],
  onChange,
  disabled = false,
  loading = false,
  "aria-label": ariaLabel,
  id,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayValue = value
    ? (options.find((o) => o.value === value)?.label ?? value)
    : placeholder;

  if (loading) {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-white/80 mb-1.5">{label}</label>
        )}
        <SelectSkeleton />
      </div>
    );
  }

  return (
    <div ref={ref} className="w-full relative">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-white/80 mb-1.5">
          {label}
        </label>
      )}
      <button
        id={id}
        type="button"
        aria-label={ariaLabel || label || placeholder}
        aria-expanded={open}
        aria-haspopup="listbox"
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        className={`
          w-full h-12 flex items-center justify-between gap-2 rounded-xl
          bg-white/10 border border-white/20 text-left px-4 text-white
          transition-all duration-200
          hover:bg-white/15 hover:border-brand/50
          focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent
          active:scale-[0.99]
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/10
        `}
      >
        <span className="truncate">{displayValue}</span>
        <ChevronDown open={open} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={ariaLabel || label}
          className="absolute z-20 w-full mt-1 py-1 rounded-xl bg-brand-card border border-brand/40 shadow-xl max-h-56 overflow-auto"
        >
          <li
            role="option"
            aria-selected={!value}
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className="px-4 py-3 text-white/70 hover:bg-white/10 cursor-pointer transition-colors"
          >
            {placeholder}
          </li>
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`px-4 py-3 cursor-pointer transition-colors ${
                value === opt.value ? "bg-brand/20 text-white" : "text-white hover:bg-white/10"
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSelect;
export { SelectSkeleton };
