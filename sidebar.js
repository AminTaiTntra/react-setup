[1mdiff --git a/src/components/common/sidebar.js b/src/components/common/sidebar.js[m
[1mindex 2d78c98..d221605 100644[m
[1m--- a/src/components/common/sidebar.js[m
[1m+++ b/src/components/common/sidebar.js[m
[36m@@ -16,7 +16,12 @@[m [mimport { constants } from '../../constants';[m
 import 'react-pro-sidebar/dist/css/styles.css';[m
 import '../../styles/sidebar.scss';[m
 [m
[31m-const Sidebar = ({ isCollapsed, profile, isVisible, setSidebarVisibility }) => {[m
[32m+[m[32mconst Sidebar = ({[m[41m [m
[32m+[m[32m  isCollapsed,[m[41m [m
[32m+[m[32m  profile,[m[41m [m
[32m+[m[32m  isVisible,[m[41m [m
[32m+[m[32m  setSidebarVisibility[m[41m [m
[32m+[m[32m}) => {[m
   const location = useLocation();[m
   const sidebarMenuClasses = getSidebarMenuClasses(location);[m
   const closeSidebar = () => setSidebarVisibility(false);[m
