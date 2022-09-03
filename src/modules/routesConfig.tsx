import {CgFeed} from 'react-icons/cg';
import {ReactNode} from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

export interface RouterConfigData {
  id: string;
  title: string;
  messageId: string;
  icon?: string | ReactNode;
  type: 'item' | 'group' | 'collapse' | 'divider';
  children?: RouterConfigData[];
  permittedRole?: RoutePermittedRole;
  color?: string;
  url?: string;
  exact?: boolean;
  count?: number;
  as?: string;
}

const routesConfig: RouterConfigData[] = [
  {
		id: 'dashboard',
		title: 'Dashboard',
		messageId: 'home',
		type: 'item',
		icon: <CgFeed />,				
		url: '/dashboard',		
  },	
];

export default routesConfig;
