import LayoutPermission from "@/components/layout-permission";

async function Layout({ children }) {
  return <LayoutPermission permission={5}>{children}</LayoutPermission>;
}

export default Layout;
