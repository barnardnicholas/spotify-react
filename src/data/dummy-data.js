import scLogo from '../assets/img/sc.png';
export const dummyItems = [null, null, null, null, null, null, null, null].map((item, i) => {
  return {
    href: '#',
    icons: [
      {
        height: 275,
        url: scLogo,
        width: 275,
      },
    ],
    id: `LOADING-${i}`,
    name: 'LOADING',
  };
});
