import LayoutPermission from "@/components/layout-permission";

async function Layout({ children }) {
  return <LayoutPermission permission={3}>{children}</LayoutPermission>;
}

export default Layout;
