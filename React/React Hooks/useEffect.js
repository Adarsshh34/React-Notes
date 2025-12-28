useEffect is a React Hook used to handle side effects in functional components.
* Unmount = component is removed from the DOM
* Mount = the moment a component is added to the DOM for the first time.
useEffect(() => {
  // side effect logic

  return () => {
    // cleanup (optional)
  };
}, [dependencies]);

Dependency Array
1. No dependency array
    useEffect(() => {
      console.log("Runs after every render");
    });

2. Empty dependency array []
    useEffect(() => {
      console.log("Runs once on mount");  // Mount = the moment a component is added to the DOM for the first time.
    }, []);

3. With dependencies
    useEffect(() => {
      console.log("Runs when count changes");
    }, [count]);
    Runs:
    On first render
    Whenever count changes
