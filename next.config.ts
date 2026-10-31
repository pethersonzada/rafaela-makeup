import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler: memoização automática, sem useMemo/useCallback manual
  reactCompiler: true,
  // Cache Components: pré-renderização estática + "use cache" com cacheLife
  cacheComponents: true,
};

export default nextConfig;
