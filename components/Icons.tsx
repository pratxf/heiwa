type IconProps = { className?: string };

export function Play({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.7 4.8a1 1 0 0 1 1.54-.84l10.1 7.2a1 1 0 0 1 0 1.68l-10.1 7.2a1 1 0 0 1-1.54-.84V4.8Z" />
    </svg>
  );
}

export function Pause({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" rx="2" />
      <rect x="14" y="4" width="4" height="16" rx="2" />
    </svg>
  );
}

export function Arrow({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Plus({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Check({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function Star({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 2.5 2.9 5.87 6.48.94-4.69 4.57 1.1 6.46L12 17.3l-5.79 3.04 1.1-6.46-4.69-4.57 6.48-.94L12 2.5Z" />
    </svg>
  );
}
