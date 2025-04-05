import * as React from 'react';
import iconData from 'wizardry-icon/data.json';

type IconData = {
  componentName: string;
  name: string;
  category: string;
};

type IconContextType = {
  icons: IconData[];
  categories: {label: string, value: string}[];
  filteredIcons: IconData[];
  search: (query: string) => void;
  filterByCategory: (category: string) => void;
};

const IconContext = React.createContext<IconContextType>({
  icons: [],
  filteredIcons: [],
  search: () => {},
  filterByCategory: () => {},
  categories: []
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

  React.useEffect(() => {
    // 初始化时获取所有分类，并格式化为 { label, value }
    const uniqueCategories = Array.from(new Set(iconData.map((icon) => icon.category)));
    const formattedCategories = uniqueCategories.map((category) => ({
      label: category,
      value: category,
    }));
    setCategories(formattedCategories);
  }, []);

  return (
    <IconContext value={{ categories, icons, filteredIcons, search, filterByCategory }}>
      {children}
    </IconContext>
  );
}

export function useIconContext() {
  return React.useContext(IconContext);
}
