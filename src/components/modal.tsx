import { ReactNode } from 'react'

export const Modal = ({ children }: { children: ReactNode }) => {
  return <section className="fixed inset-0 bg-modal-background z-50">{children}</section>
}
