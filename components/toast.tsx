import type * as React from "react"
import { X } from "lucide-react"

interface ToastProps {
  title?: string
  description?: string
  action?: React.ReactNode
  onClose: () => void
}

export const Toast: React.FC<ToastProps> = ({ title, description, action, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-1">
            {title && <div className="text-sm font-medium text-gray-900">{title}</div>}
            {description && <div className="mt-1 text-sm text-gray-500">{description}</div>}
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        {action && <div className="mt-4">{action}</div>}
      </div>
    </div>
  )
}

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const ToastViewport = () => <></>

export const ToastTitle = ({ children }: { children: React.ReactNode }) => <>{children}</>

export const ToastDescription = ({ children }: { children: React.ReactNode }) => <>{children}</>

export const ToastClose = ({ children }: { children: React.ReactNode }) => <>{children}</>

export const ToastAction = ({ children }: { children: React.ReactNode }) => <>{children}</>

