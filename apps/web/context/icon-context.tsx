import * as React from 'react';
import iconData from '../data.json';
import { CATEGORIES } from '@/categories'




export type Category = { label: string, value: string }
export type IconData = {
  name: string;
  categories: string[];
  tags: string[];
  version: string;
  created: string;

};
type IconContextType = {
  icons: IconData[];
  categories: Category[];
  selectedCategory: string;
  filteredIcons: IconData[];
  search: (query: string) => void;
  filterByCategory: (category: string) => void;
  setSelectedCategory: (category: string) => void;
  activeCategory: string;
  activeIcon: IconData | undefined;
  setActiveIcon: (category: string, icon: IconData) => void;
  resetActiveIcon: () => void;
};

const IconContext = React.createContext<IconContextType>({
  icons: [],
  filteredIcons: [],
  search: () => { },
  filterByCategory: () => { },
  selectedCategory: 'all',
  setSelectedCategory: () => { },
  categories: CATEGORIES as unknown as Category[],
  activeCategory: '',
  activeIcon: undefined,
  setActiveIcon: () => { },
  resetActiveIcon: () => { }
});

export function IconProvider({ children }: { children: React.ReactNode }) {
  const [icons, setIcons] = React.useState<IconData[]>(iconData as IconData[]);
  const [filteredIcons, setFilteredIcons] = React.useState<IconData[]>(iconData as IconData[]);
  const [categories, setCategories] = React.useState<Category[]>(CATEGORIES as unknown as Category[]);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [activeCategory, setActiveCategory] = React.useState<string>('');
  const [activeIcon, setActiveIcon] = React.useState<IconData>();

  // 设置激活图标和分类的方法
  const handleSetActiveIcon = (category: string, icon: IconData) => {
    setActiveCategory(category);
    setActiveIcon(icon);
  };

  const resetActiveIcon = React.useCallback(() => {
    setActiveCategory('');
    setActiveIcon(undefined);
  }, []);


  const search = React.useCallback((query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredIcons(
      icons.filter((icon) =>
        icon.name.toLowerCase().includes(lowerCaseQuery) ||
        icon.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
      )
    );
  }, [icons]);

  const filterByCategory = React.useCallback((category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredIcons(icons);
    } else {
      setFilteredIcons(icons.filter((icon) =>
        icon.categories.some((cat) => cat === category)
      ));
    }
  }, [icons]);

  return (
    <IconContext value={{
      activeCategory,
      activeIcon,
      setActiveIcon: handleSetActiveIcon,
      resetActiveIcon,
      categories,
      icons,
      filteredIcons,
      search,
      filterByCategory,
      selectedCategory,
      setSelectedCategory
    }}>
      {children}
    </IconContext>
  );
}

export function useIconContext() {
  return React.useContext(IconContext);
}
