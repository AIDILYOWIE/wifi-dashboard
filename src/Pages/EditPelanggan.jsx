import { useParams } from "react-router-dom";
import { FormAddPelanggan, FormEditPelanggan } from "../Components/Fragments/Form";
import { Form } from "../Components/Layouts/Form";
import { useEffect, useState } from "react";
import { dataPelanggan } from "../data";

const EditPelanggan = () => {
  const [namaPelanggan, setNamaPelanggan] = useState('')
  const {id} = useParams()

  useEffect(() => {
    const findPelanggan = dataPelanggan.find((data) => data.index === Number(id))

    if(findPelanggan) setNamaPelanggan(findPelanggan.namaPelanggan)
  }, [dataPelanggan, id])

  console.log(namaPelanggan)
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form title={namaPelanggan} textButton={"tambah"}>
        <FormEditPelanggan />
      </Form>
    </div>
  );
};

export default EditPelanggan

