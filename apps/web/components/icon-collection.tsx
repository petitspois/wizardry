'use client'

import * as React from 'react';
import { IconProvider } from '@/context/icon-context'
import {Search} from "@/components/search";
import {Collection} from "@/components/collection";

export function IconCollection() {
  return (
    <IconProvider>
      <div className="flex flex-col flex-1">
        <div className="border-grid border-b">
          <Search />
        </div>
        <div className="border-grid flex flex-col grow">
          <Collection />
        </div>
      </div>
    </IconProvider>
  );
};
