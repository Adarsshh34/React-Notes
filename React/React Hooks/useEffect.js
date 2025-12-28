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

useEffect timeline
    useEffect(() => {
        console.log("Effect runs");
        console.log(count);
    
        return () => {
          console.log("Cleanup runs");
          console.log(count);
        };
      }, [count]);
    output when state changes from 0 to 1
    Cleanup runs
    0
    Effect runs
    1

what we usually do in clean up block of useeffect
  cleaning up whatever effect is started
  in case of setInterval/setTimeout we need to destroy it else it create multiple timers or memory leak.
  in case of add/removing listerner in effect we need to do opposite in clean up code

