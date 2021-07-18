import * as React from 'react'

function ErrorFallback({error}) {
   return (
     <div role="alert">
        <h1>Something went wrong</h1>
        <h1>{error}</h1>
     </div>
   )
}

export default ErrorFallback;