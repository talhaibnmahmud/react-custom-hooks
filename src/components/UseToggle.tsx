import useToggle from "../hooks/useToggle";

const UseToggle = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div className="my-8 max-w-md mx-auto p-4 bg-gray-200 rounded-md">
      <h2 className="text-gray-600 text-2xl text-center">UseToggle</h2>

      <div className="mx-auto flex flex-col items-center">
        <code>{isToggled.toString()}</code>
        <div className="w-full flex justify-around text-center">
          <Button onClick={() => toggle()}>Toggle</Button>
          <Button onClick={() => toggle(true)}>Toggle True</Button>
          <Button onClick={() => toggle(false)}>Toggle False</Button>
        </div>
      </div>
    </div>
  );
};

const Button = ({
  onClick,
  children,
}: {
  onClick: (value?: boolean) => void;
  children: any;
}) => (
  <button
    onClick={() => onClick()}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {children}
  </button>
);

export default UseToggle;
