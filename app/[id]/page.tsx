"use client"
import {links} from '@/constants/Data'
import { useEffect } from 'react';

const Page = ({params}:{params:{id:string}}) => {
    const name = params.id
  useEffect(() => {
    const link = links.find(item => item.keywords.includes(name.toLowerCase()));

    if (link) {
      window.location.href = link.url;
    } else {
      window.location.href = '/';
    }
  }, [name]);

  return null; 
};

export default Page;
