import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { withTranslation } from "react-i18next";
import { PageError } from "widgets/PageError";
import { PageLoader } from "widgets/PageLoader";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary
  extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props : ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error : Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error : Error, errorInfo : ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    const {hasError} = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback={<PageLoader/>}>
          <PageError/>
        </Suspense>)
    }

    return this.props.children; 
  }
}

export default ErrorBoundary