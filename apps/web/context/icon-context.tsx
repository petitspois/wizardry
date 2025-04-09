import * as React from 'react';
import iconData from '../data.json';
import {CATEGORIES} from '@/categories'


type IconData = {
  name: string;
  categories: string[];
  tags: string[]
};

type Category = {label: string, value: string}

type IconContextType = {
  icons: IconData[];
  categories: Category[];
  filteredIcons: IconData[];
  search: (query: string) => void;
  filterByCategory: (category: string) => void;
};

const IconContext = React.createContext<IconContextType>({
  icons: [],
  filteredIcons: [],
  search: () => {},
  filterByCategory: () => {},
  categories: CATEGORIES as unknown as Category[]
});

export function IconProvider({ children }: { children: React.ReactNode }) {
  const [icons, setIcons] = React.useState<IconData[]>(iconData);
  const [filteredIcons, setFilteredIcons] = React.useState<IconData[]>(iconData);
  const [categories, setCategories] = React.useState<{ label: string; value: string }[]>([]);
  const search = React.useCallback((query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredIcons(
      icons.filter((icon) => icon.name.toLowerCase().includes(lowerCaseQuery))
    );
  }, [icons]);

  const filterByCategory = React.useCallback((category: string) => {
    if (category === 'all') {
      setFilteredIcons(icons);
    } else {
      setFilteredIcons(icons.filter((icon) => icon.category === category));
    }
  }, [icons]);

  return (
    <IconContext value={{ categories, icons, filteredIcons, search, filterByCategory }}>
      {children}
    </IconContext>
  );
}

export function useIconContext() {
  return React.useContext(IconContext);
}
