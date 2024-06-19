import {
  RiBardLine,
  RiCalendarLine,
  RiFocus3Line,
  RiGalleryLine,
  RiGroupLine,
  RiHomeLine,
  RiLineChartLine,
  RiMailLine,
  RiPaletteLine,
  RiQuestionLine,
  RiStoreLine,
  RiTrophyLine,
} from '@remixicon/react';

export const mainLinks = [
  {
    path: '/dashboard',
    label: 'Home',
    Icon: <RiHomeLine className="size-4" />,
  },
  {
    path: '/goals',
    label: 'Goals',
    Icon: <RiTrophyLine className="size-4" />,
  },
  {
    path: '/analytics',
    label: 'Analytics',
    Icon: <RiLineChartLine className="size-4" />,
  },
  {
    path: '/calendar',
    label: 'Calendar',
    Icon: <RiCalendarLine className="size-4" />,
  },
];

export const toolsLinks = [
  {
    path: '/',
    label: 'Social Tracker',
    Icon: <RiFocus3Line className="size-4" />,
  },
  {
    path: '/',
    label: 'Email Builder',
    Icon: <RiMailLine className="size-4" />,
  },
  {
    path: '/',
    label: 'Ads Library',
    Icon: <RiGalleryLine className="size-4" />,
  },
  {
    path: '/',
    label: 'AI Writer',
    Icon: <RiBardLine className="size-4" />,
  },
];

export const shopifyLinks = [
  {
    path: '/stores',
    label: 'Stores',
    Icon: <RiStoreLine className="size-4" />,
  },
  {
    path: '/',
    label: 'Theme',
    Icon: <RiPaletteLine className="size-4" />,
  },
];

export const miscLinks = [
  {
    path: '/',
    label: 'Users',
    Icon: <RiGroupLine className="size-4" />,
  },
  {
    path: '/',
    label: 'Help',
    Icon: <RiQuestionLine className="size-4" />,
  },
];
