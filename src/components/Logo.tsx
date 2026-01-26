import baatcheetLogo from '@/assets/baatcheet-logo.jpeg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ size = 'md', showText = true }: LogoProps) {
  const imageSizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-2">
      <img 
        src={baatcheetLogo} 
        alt="BaatCheet Logo" 
        className={`${imageSizes[size]} w-auto object-contain`}
      />
      {showText && (
        <span className={`font-bold ${textSizes[size]} bg-gradient-to-r from-[hsl(199,89%,60%)] to-[hsl(350,80%,70%)] bg-clip-text text-transparent`}>
          Baatcheett
        </span>
      )}
    </div>
  );
}
