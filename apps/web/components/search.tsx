// @flow
import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Filter, SearchFirst } from "wizardry-icon"
type Props = {

};

export function Search(props: Props) {
  return (
    <div className="container-wrapper">
      <div className="container py-6">
        <div className="w-full rounded-2xl flex items-center gap-2 px-4">
          <Select>
            <SelectTrigger className="w-[180px] !h-10 border-none shadow-none bg-input/40">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="py-2" value="all">All</SelectItem>
              <SelectItem className="py-2" value="dark">AI</SelectItem>
              <SelectItem className="py-2" value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <div className="w-full relative">
            <SearchFirst strokeWidth={2} className="absolute size-4 top-1/2 left-2 -translate-y-1/2" />
            <Input type="email" placeholder="Search 1000 Icons" className="pl-8 h-10 border-none bg-input/40 focus-visible:ring-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
