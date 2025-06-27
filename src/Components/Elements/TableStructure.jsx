import React from "react";

export const TableHead = React.memo(({ width = "w-fill", value = "Header" }) => {
  return (
    <div
      className={`${width}  text-left bg-white px-[20px] py-[15px] border-b-1 border-border`}
    >
      <p className="text-text text-[16px] font-semibold">{value}</p>
    </div>
  );
})

export const TableBody = React.memo(({
  width = "w-full",
  value = "Body",
  type = "default",
  children,
}) => {
  return (
    <div
      className={`${width} h-[54px]  text-left bg-white ${ type != 'action' && type != 'status' ? 'px-[20px] py-[15px]' : 'py-[10px] px-[10px]'} border-b-1 border-border flex items-center gap-[10px]`}
    >
      {type == "default" ? (
        <p className="text-text text-[16px] font-light">{value}</p>
      ) : (
        children
      )}
    </div>
  );
})
