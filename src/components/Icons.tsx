import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// interface IconProps {
//   name: string;
//   size: number;
//   color: string;
// }

type IconProps = PropsWithChildren<{name: string}>;
export default function Icons({name}: IconProps) {
  switch (name) {
    case 'home':
      return <Icon name="home" size={30} color="#333333" />;
    case 'search':
      return <Icon name="search" size={30} color="#333333" />;
    case 'cart':
      return <Icon name="shopping-cart" size={30} color="#333333" />;
    case 'user':
      return <Icon name="user" size={30} color="#333333" />;
    case 'wallet':
      return <Icon name="wallet" size={30} color="#333333" />;
    default:
      return <Icon name="home" size={30} color="#333333" />;
  }
}
