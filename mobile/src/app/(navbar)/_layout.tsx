import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

import { Colors } from '@/constants/colors';

type IconName = keyof typeof Ionicons.glyphMap;

type TabItem = {
  /** Debe coincidir con el nombre del archivo en src/app/(navbar) */
  name: string;
  title: string;
  activeIcon: IconName;
  inactiveIcon: IconName;
};

const TABS: TabItem[] = [
  { name: 'index', title: 'Inicio', activeIcon: 'home', inactiveIcon: 'home-outline' },
  { name: 'search', title: 'Buscar', activeIcon: 'search', inactiveIcon: 'search-outline' },
  { name: 'log', title: 'Mi Log', activeIcon: 'book', inactiveIcon: 'book-outline' },
  { name: 'social', title: 'Social', activeIcon: 'people', inactiveIcon: 'people-outline' },
  { name: 'profile', title: 'Perfil', activeIcon: 'person', inactiveIcon: 'person-outline' },
];

const DEFAULT_TAB = TABS[0];

export default function NavbarLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        const tab = TABS.find((item) => item.name === route.name) ?? DEFAULT_TAB;

        return {
          headerShown: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.textMuted,
          tabBarStyle: {
            backgroundColor: Colors.card,
            borderTopColor: Colors.border,
            borderTopWidth: 1,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 2,
          },
          tabBarIcon: ({ size, focused }) => (
            <Ionicons
              name={focused ? tab.activeIcon : tab.inactiveIcon}
              size={size}
              color={focused ? Colors.primary : Colors.textMuted}
            />
          ),
        };
      }}
    >
      {TABS.map((tab) => (
        <Tabs.Screen key={tab.name} name={tab.name} options={{ title: tab.title }} />
      ))}
    </Tabs>
  );
}
