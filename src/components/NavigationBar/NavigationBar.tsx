import { Link } from 'react-router-dom';
import './NavigationBar.css';

interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

interface NavigationBarProps {
  items?: NavigationItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ items }) => {
  const defaultItems: NavigationItem[] = [
    { id: 'aws-vs-amazon', label: 'AWS VS Amazon', path: '/aws-vs-amazon' },
    { id: 'what-is-aws', label: 'What is AWS', path: '/what-is-aws' }
  ];

  const navItems = items || defaultItems;

  return (
    <nav className="navigation-bar">
      {navItems.map(item => (
        <Link key={item.id} to={item.path} className="nav-item">
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationBar;
