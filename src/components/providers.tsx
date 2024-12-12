"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { SmartWalletsProvider } from "@privy-io/react-auth/smart-wallets";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider appId="cm4c8vv3y0846119zl29qwi9t">
      <SmartWalletsProvider>{children}</SmartWalletsProvider>
    </PrivyProvider>
  );
}
