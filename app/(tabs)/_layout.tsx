import { Link, Slot, Tabs } from "expo-router";
import { Platform } from "react-native";

const WebTopNav = () => (
  <div>
    <header style={{display: 'flex', justifyContent: 'space-around'}}>
      <Link href={"/"}>Home</Link>
      <Link href="/about">About</Link>
      <Link href={"/skills"}>Skills</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
    </header>
    <div style={{display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: 'tomato'}}>
      <Slot />
    </div>
  </div>
)

const MobileBottomTabsNav = () => (
    <Tabs
       screenOptions={{
        tabBarActiveTintColor: '#6de89c',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'tomato',
        tabBarInactiveBackgroundColor: 'white',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
        },
       }}
      sceneContainerStyle={{
        flex: 1,
        backgroundColor: '#6de89c',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          href: "/",
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          title: 'Skills',
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portfolio',
        }}
      />
        <Tabs.Screen
          name="contact"
          options={{
            title: 'Contact',
          }}
        />
      <Tabs.Screen
        name="blog"
        options={{
          title: 'Blog',
        }}
      />
     <Tabs.Screen
        name="[404]"
        options={{
          href: null
        }}
      />
  </Tabs>
  )

  const Layout = () => Platform.OS === 'web' ? <WebTopNav /> : <MobileBottomTabsNav />

  export default Layout