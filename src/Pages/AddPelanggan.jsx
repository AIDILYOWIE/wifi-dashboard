import { FormAddPelanggan } from "../Components/Fragments/Form"
import { Form } from "../Components/Layouts/Form"

const AddPelanggan = () => {
    return (
        <div className="w-full h-full flex justify-center items-start">
            <Form title={'TAMBAH PELANGGAN'} textButton={'tambah'}>
                <FormAddPelanggan/>
            </Form>
        </div>
    )
}

export default AddPelanggan