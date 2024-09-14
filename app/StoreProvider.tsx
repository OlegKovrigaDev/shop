"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";

interface StoreProviderProps {
  children: React.ReactNode;
}

export default function StoreProvider({
  children,
}: Readonly<StoreProviderProps>) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
