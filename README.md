# Animated Balls
Two-dimensional animation featuring bouncing balls with varying colors and speeds 
# Tech Stack :🖥️
- `HTML`<br/>
- `CSS`<br/>
- `JS`<br/>
# How It Works :🖱️
When you hover your mouse over the burger icon or click on it, the burger's parts, like the bun, lettuce, and tomato, get separated and move around.
# New Topic Leanrt
<details>
<summary>getContext('2d')</summary>
• **Purpose**: This line of JavaScript code retrieves a 2D drawing context for a canvas element, allowing you to create 2D graphics on that canvas.<br/>
![image](https://github.com/anushkaDev9/2D-Animation-/assets/83566191/830e0d82-c741-4b48-a16f-af33f3569cb9).<br/>
- • getContext() is a method that returns a drawing context object, which provides the tools for drawing on the canvas.<br/>
- '2d': This argument specifies that you want a 2D drawing context. Other possible contexts include 'webgl' for 3D graphics and 'webgl2' for advanced 3D graphics.<br/>
</details>
<details>
  <summary>context.clearRect(0, 0, 1900, 760)</summary>
  clearRect() is a method of the 2D canvas context that clears (erases) a rectangular region on the canvas. <br/>
  <pre>
    context.clearRect(x, y, width, height);
  </pre>
</details>
<details>
  <summary> beginPath()</summary>
 beginPath() starts a new path or resets an existing path on a 2D canvas context.<br/>
</details>
<details>
  <summary>context.arc(x, y, 10, 0, Math.PI * 2, true);</summary>
 x: The x-coordinate of the circle's center.<br/>
y: The y-coordinate of the circle's center.<br/>
10: The radius of the circle (in pixels).<br/>
0: The starting angle of the arc, measured in radians (0 radians is at the 3 o'clock position on the circle).<br/>
Math.PI * 2: The ending angle of the arc, equal to 2π radians, which completes a full circle.<br/>
true: Specifies that the arc should be drawn counterclockwise.<br/>
</details>
