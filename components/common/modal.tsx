'use client'
import { ReactNode, useCallback, useState } from 'react'
import { Drawer } from 'vaul'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    setIsOpen(false)
    router.back()
  }, [router])

  return (
    <Drawer.Root
      shouldScaleBackground
      open={isOpen}
      onOpenChange={() => {
        onDismiss()
      }}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">{children}</div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
