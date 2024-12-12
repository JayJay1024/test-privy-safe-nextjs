"use client";

import { useFundWallet, usePrivy } from "@privy-io/react-auth";

export default function Debug() {
  const { ready, authenticated, user, login, logout } = usePrivy();
  const { fundWallet } = useFundWallet();

  return authenticated ? (
    <>
      <button onClick={logout} disabled={!ready}>
        Logout
      </button>
      <button
        onClick={() => fundWallet(user?.smartWallet?.address ?? "0x")}
        disabled={!ready}
      >
        Fund
      </button>
    </>
  ) : (
    <button disabled={!ready} onClick={login}>
      Login
    </button>
  );
}
