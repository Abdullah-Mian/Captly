import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Combines multiple class names and resolves Tailwind conflicts
export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}
