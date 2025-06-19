import { FormPembayaran } from "../Components/Fragments/Form";
import { Form } from "../Components/Layouts/Form";

const Pembayaran = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <Form title={'Pembayaran'} textButton={'tambah'}>
        <FormPembayaran/>
      </Form>
    </div>
  );
};

export default Pembayaran;
