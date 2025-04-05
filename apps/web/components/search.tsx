import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Input} from "@/components/ui/input"
import {FilterLine, SearchOneLine} from "wizardry-icon"
import {useIconContext} from '@/context/icon-context'
import { useDebounceFn } from 'ahooks'

export function Search() {
  const {filteredIcons, search, categories, filterByCategory} = useIconContext();

  const {run: handleInputChange} = useDebounceFn((e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  }, {wait: 300});

  const handleCategoryChange = (value: string) => {
    console.log(value)
    filterByCategory(value);
  };

  return (
    <div className="container-wrapper">
      <div className="container py-6">
        <div className="w-full rounded-2xl flex items-center gap-2 px-4">
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-[180px] !h-10 border-none shadow-none bg-input/40">
              <div className="inline-flex gap-2 items-center">
                <FilterLine/>
                <SelectValue placeholder="All"/>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="py-2" value="all">All</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.value} className="py-2" value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="w-full relative">
            <SearchOneLine className="absolute size-4 top-1/2 left-2 -translate-y-1/2"/>
            <Input
              onChange={handleInputChange}
              type="email" placeholder="Search 1000 Icons" className="pl-8 h-10 border-none bg-input/40 focus-visible:ring-[1px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};
