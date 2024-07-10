import LayoutPermission from "@/components/layout-permission";

async function Layout({ children }) {
  return <LayoutPermission permission={4}>{children}</LayoutPermission>;
}

export default Layout;
