'use client'
import { NextUIProvider } from '@nextui-org/react'

export default function UIProvider({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>
}
