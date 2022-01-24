import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";
function ErrorApp() {  
    return (  
      <div>  
        <p><b>Example of Error Boundaries</b></p>  
        <hr />  
        <ErrorBoundary>  
          <p>These two counters are inside the same error boundary.</p>  
            <BuggyCounter />  
            <BuggyCounter />  
        </ErrorBoundary>  
        <hr />  
        <p>These two counters are inside of their individual error boundary.</p>  
          <ErrorBoundary><BuggyCounter /></ErrorBoundary>  
          <ErrorBoundary><BuggyCounter /></ErrorBoundary>  
      </div>  
    );  
  }  
  export default ErrorApp  