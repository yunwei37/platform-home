// components/LabelWithCount.tsx
interface LabelWithCountProps {
  label: string
  count: number
  onClick?: () => void
}

export function LabelWithCount({ label, count, onClick }: LabelWithCountProps) {
  return (
    <div
      className="cursor-pointer rounded-md bg-gray-100 p-2 text-gray-900 
                 shadow-md transition-colors 
                 hover:bg-gray-200 dark:bg-gray-800
                 dark:text-gray-100 dark:hover:bg-gray-700"
      onClick={onClick}
      role="button"
    >
      {label}: {count}
    </div>
  )
}
