import {Option, } from '../types/search'

export const navLinks=[
    {name:'Services',href:'services'},
    {name:'Featured',href:'/featured'},
    {name:'Testimonials',href:'/testimonials'}
]

  export const locationOptions: Option[] = [
    { value: 'downtown', label: 'Downtown' },
    { value: 'uptown', label: 'Uptown' },
    { value: 'suburbs', label: 'Suburbs' },
    { value: 'mall', label: 'Shopping Mall' },
    { value: 'beachside', label: 'Beachside' }
  ];

  export const priceOptions: Option[] = [
    { value: 'low', label: '$ - Budget' },
    { value: 'medium', label: '$$ - Mid-range' },
    { value: 'high', label: '$$$ - Premium' },
    { value: 'luxury', label: '$$$$ - Luxury' }
  ];