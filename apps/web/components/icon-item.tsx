'use client'
import * as React from 'react';
import * as Icons from 'wizardry-icon';
type IconItemProps = {
  componentName: string;
  name: string;
};

export function IconItem({ componentName, name }: IconItemProps) {
  const IconComponent = Icons[componentName as keyof typeof Icons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  const iconRef = React.useRef<SVGSVGElement>(null);

  const getSVGString = () => {
    if (iconRef.current) {
      return iconRef.current.outerHTML;
    }
    return '';
  };

  const downloadSVG = () => {
    const svgString = getSVGString();
    if (svgString) {
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${name}.svg`;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="group bg-input/40 p-4 rounded-lg flex items-center justify-center flex-col gap-3 aspect-square hover:bg-foreground cursor-pointer">
      <IconComponent ref={iconRef} className="w-6 h-6 group-hover:text-background" />
      <p className="text-xs text-muted-foreground truncate group-hover:text-background">{name}</p>
      <button
        onClick={downloadSVG}
        className="text-xs text-blue-500 hover:text-blue-700"
      >
        下载 SVG
      </button>
    </div>
  );
}
