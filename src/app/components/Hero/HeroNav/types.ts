// components/types.ts
import { ReactNode } from 'react';

export interface Service {
  name: string;
  href: string;
  icon: ReactNode;
  desc: string;
  price: string;
}

export interface NavLink {
  name: string;
  href: string;
  dropdown?: Service[];
}