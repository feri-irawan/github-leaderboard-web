export function AlertDark({ children }) {
  return (
    <div
      className="p-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
      role="alert"
    >
      {children}
    </div>
  )
}
