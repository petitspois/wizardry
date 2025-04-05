'use client'
import * as React from 'react';
import {useIconContext} from '@/context/icon-context';
import {IconItem} from './icon-item';

export function Collection() {
  const {filteredIcons} = useIconContext();
  // 按分类分组图标
  const groupedIcons = React.useMemo(() => {
    const groups: { [key: string]: typeof filteredIcons } = {};
    filteredIcons.forEach((icon) => {
      if (!groups[icon.category]) {
        groups[icon.category] = [];
      }
      groups[icon.category]?.push(icon);
    });
    return groups;
  }, [filteredIcons]);
  return (
    <div className="container-wrapper grow">
      <div className="container py-6 space-y-4">
        {Object.entries(groupedIcons).map(([category, icons]) => (
          <div key={category}>
            <h3 className="px-4 text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
              {category}
            </h3>
            <div className="px-4 grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-3">
              {icons.map((icon) => (
                <IconItem key={icon.componentName} componentName={icon.componentName} name={icon.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
