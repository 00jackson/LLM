const undeployWorkflow = () => {
    const confirmation = window.confirm('Are you sure you want to undeploy the app?');
    if (confirmation) {
      // Logic for undeployment
      alert('Workflow undeployed');
    }
  };