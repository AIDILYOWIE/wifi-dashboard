export const TableHead = ({ width = "w-fill", value = "Header" }) => {
  return (
    <div
      className={`${width}  text-left bg-white px-[20px] py-[15px] border-b-1 border-border`}
    >
      <p className="text-text text-[16px] font-semibold">{value}</p>
    </div>
  );
};

export const TableBody = ({
  width = "w-full",
  value = "Body",
  type = "default",
  children,
}) => {
  return (
    <div
      className={`${width} h-[54px]  text-left bg-white ${ type != 'action' ? 'px-[20px] py-[15px]' : 'py-[5px] px-[10px]'} border-b-1 border-border flex  gap-[10px]`}
    >
      {type == "default" ? (
        <p className="text-text text-[16px] font-light">{value}</p>
      ) : (
        children
      )}
    </div>
  );
};
