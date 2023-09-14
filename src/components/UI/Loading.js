import React from "react";
import { Loader } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

function LoadingComponent() {
  return (
    <React.Fragment>
      <Loader variation="linear" />
    </React.Fragment>
  );
}

export default LoadingComponent;
