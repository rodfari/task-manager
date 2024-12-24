const Button = ({ children, click }) => {
    console.log("[Button component] - rendered");
    const handleClick = () => {
        click();
    };

  if(!click) {
    return <button>{children}</button>;
  }
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
