import { NormalButton } from "../Components/Elements/Button";
import { NormalInput } from "../Components/Elements/Input";

const Login = () => {
  return (
    <div className="w-full h-full min-[576px]:h-screen flex justify-center items-center">
      <div className="min-[576px]:w-[394px] w-full flex flex-col min-[576px]:justify-center min-[576px]:gap-[54px] min-[576px]:p-[30px] min-[576px]:rounded-[20px] min-[576px]:shadow-default min-[576px]:border-[1px] min-[576px]:border-[#DDDDDD] min-[576px]:bg-text-second max-[576px]:bg-primary">
        <div className="w-full flex flex-col max-[576px]:px-[30px] max-[576px]:py-[50px] jutify-center items-start gap-[4px]">
          <p className="min-[576px]:text-[32px] text-[48px] font-semibold min-[576px]:text-primary text-background">
            Login
          </p>
          <p className="min-[576px]:text-[12px] text-[14px] font-regular min-[576px]:text-text text-background">
            Welcomeback admin, Please enter your username and password
          </p>
        </div>

        <div className="w-full flex flex-col max-[576px]:gap-[58px] gap-[38px] max-[576px]:bg-text-second max-[576px]:rounded-tr-[30px] max-[576px]:rounded-tl-[30px] max-[576px]:p-[30px] max-[576px]:border-[#DDDDDD]">
          <div className="w-full flex flex-col gap-[14px] max-[576px]:gap-[28px]">
            <NormalInput
              label="Username"
              placeholder="Masukan username"
              labelStyle="font-medium text-[16px]"
              placeholderSize="text-[14px]"
            />
            <NormalInput
              label="Password"
              placeholder="Masukan password"
              labelStyle="font-medium text-[16px]"
              placeholderSize="text-[14px]"
            />
          </div>
          <div className="w-full">
            <NormalButton text="Login" textSize="14px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
