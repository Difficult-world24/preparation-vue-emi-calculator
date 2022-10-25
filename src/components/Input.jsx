import React from "react";

const Input = (props) => {
  const { className, name, labelText } = props;

  // Creating 'modified copy' of props because certain props are for certain elements only.
  // For instance: Component is reciving "labelText" prop which is used as label element text only.
  // Otherwise our component will raise Exception saying "You Added unnecessary attribute to your element"

  const modifiedProps = { ...props };
  delete modifiedProps.labelText;

  return (
    <div className="flex flex-col gap-1 w-full items-start ">
      <label htmlFor={name} className="text-gray-600 pl-[1px] text-md">
        {labelText}
      </label>

      <input
        {...modifiedProps}
        className={
          "h-[3.5rem] w-full text-gray-600 border font-thin p-2 font-mono tracking-wide rounded-md shadow-sm" +
          className
        }
      />
    </div>
  );
};

export default Input;
