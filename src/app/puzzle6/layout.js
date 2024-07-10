import LayoutPermission from "@/components/layout-permission";

async function Layout({ children }) {
  return <LayoutPermission permission={6}>{children}</LayoutPermission>;
}

export default Layout;
