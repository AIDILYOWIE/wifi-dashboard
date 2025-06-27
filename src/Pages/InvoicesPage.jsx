import Invoice from "../Components/Fragments/invoice";
import { NormalButton } from "../Components/Elements/Button";

const InvoicesPage = () => {
  return (
    <div className="flex w-full h-full justify-center items-center p-[20px]">
      <div className="w-max h-full flex justify-center items-center flex-col min-[500px]:gap-[18px] max-[500px]:gap-[28px]">
        <div className="overflow-x-auto w-[362px] scroll-hide"

        >
          <div
            className="flex w-max gap-6"
          >
            <Invoice/>
            <Invoice/>
            <Invoice/>
            <Invoice/>
          </div>
        </div>

        <NormalButton text={"create"} width='w-[300px]' />
      </div>
    </div>
  );
};

export default InvoicesPage;
