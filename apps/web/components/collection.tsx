'use client'
import * as React from 'react';
import {useIconContext} from '@/context/icon-context';
import {IconItem} from './icon-item';

export function Collection() {
  const {filteredIcons, categories, selectedCategory} = useIconContext();
  // 判断分类是否在图标的分组中
  const isCategoryInIcon = (iconCategories: string[], category: string) => {
    return iconCategories.includes(category);
  };

  // 按分类分组图标
  const groupedIcons = React.useMemo(() => {
    const groups: { [key: string]: typeof filteredIcons } = {};

    // 先按 categories 顺序初始化分组
    categories.forEach(category => {
      if (selectedCategory === 'all' || category.value === selectedCategory) {
        groups[category.value] = [];
      }
    });


    // 填充图标到对应分组
    filteredIcons.forEach((icon) => {
      icon.categories.forEach((category) => {
        if (groups[category] && isCategoryInIcon(icon.categories, category)) {
          groups[category].push(icon);
        }
      });
    });

    // 删除为空的分组
    Object.keys(groups).forEach((key: string) => {
      const group = groups[key];
      if (group && group.length === 0) {
        delete groups[key];
      }
    });

    return groups;
  }, [filteredIcons, categories]);

  const isEmpty = Object.values(groupedIcons).every(icons => icons.length === 0);

  console.log(groupedIcons, 'groupedIcons')
  return (
    <div className="container-wrapper grow">
      <div className="container py-6 space-y-4">
        {
          isEmpty ? (
              <div className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">未找到相关图标</p>
              </div>
            ) :
            Object.entries(groupedIcons).map(([category, icons]) => (
              <div key={category}>
                <h3 className="px-4 text-lg font-medium text-gray-900 dark:text-gray-50 mb-4">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="px-4 grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-3">
                  {icons.map((icon) => (
                    <IconItem key={icon.name} name={icon.name}/>
                  ))}
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};
