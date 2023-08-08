"use client"
import {links} from '@/constants/Data'
import { useEffect } from 'react';

const Page = ({params}) => {
    
    const name = params.id
  useEffect(() => {
    const link = links.find(item => item.keywords.includes(name.toLowerCase()));

    if (link) {
      window.location.href = link.url;
    } else {
      window.location.href = '/';
    }
  }, []);

  return null; 
};

export default Page;
