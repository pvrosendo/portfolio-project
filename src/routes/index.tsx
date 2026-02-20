import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div>
      <h2>Welcome to your app!</h2>
    </div>
  )
}
