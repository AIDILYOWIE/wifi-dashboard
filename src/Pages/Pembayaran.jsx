import { FormPembayaran } from "../Components/Fragments/Form";
import { Form } from "../Components/Layouts/Form";

const Pembayaran = () => {
  return (
    <div className="w-full h-full  flex justify-center items-center max-[576px]:items-start ">
      <Form title={'PEMBAYARAN'} textButton={'tambah'}>
        <FormPembayaran/>
      </Form>
    </div>
  );
};

export default Pembayaran;
