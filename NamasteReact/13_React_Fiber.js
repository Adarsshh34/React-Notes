YT Short - https://www.youtube.com/shorts/XSM4O87pIp0

React Fiber:
Suppose we have 3 components
- header
- text box
- list

before react fiber rendering occuring in synchronous fashion like
first header -> text box -> list
so in case listing is rendering we are not able write anything in textbox because main thread gets blocked
- Recursive rendering

After React Fiber
It divide rendering in into multiple small unites and decide which components need priotization at which time is decided by react fiber
- pause, resume and priotize rendering 

Website to try - https://heysaurabh.com/rfa/


CHATGPT
### React Fiber

**Before React Fiber:**

* React rendering/reconciliation was **synchronous and non-interruptible**.
* React processed the component tree sequentially, e.g.:
  `Header → TextBox → List`
* If a large component/list required heavy rendering, it could **block the main thread**, making the UI feel slow or unresponsive.
* This was based on a more **recursive rendering approach**.

**After React Fiber:**

* Fiber introduced a new architecture where rendering work is divided into **small units of work**.
* React can **schedule and prioritize** these units.
* React can **pause/yield, resume, and prioritize** rendering work when needed.
* This helps keep the UI **responsive**, especially when there is expensive rendering work.

**Key idea:**

> **React Fiber allows React to break rendering work into smaller units and schedule that work efficiently instead of doing everything in one uninterrupted task.**


  
