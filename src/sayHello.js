import Tweet1 from "./Tweet";
function Hello() {
  const sayHello = () => {
    console.log("Hello World from Function");
  };
  return (
    <div>
      <h2>Hello React 😎</h2>
      <button onClick={sayHello}>Hello Love Birds ❤</button>
      <Tweet1 />
      <Tweet1 name="Sam" message="I love Apples" />
      <Tweet1 name="Kim" message="I love Oranges" />
      <Tweet1 name="Joe" message="I love Mangoes" />
    </div>
  );
}

export default Hello;
