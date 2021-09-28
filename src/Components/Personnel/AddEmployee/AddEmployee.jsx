import { useContext, useEffect, useState } from 'react';
import ManageInputForm from '../../Common/ManageInputForm/ManageInputForm';
import { useToasts } from 'react-toast-notifications';
import { postEmployee } from '../../../Services/postEmployee';
import UserJobContext from '../../../Context/UserJobContext';

const AddEmployee = ({ history }) => {
    const [formValue, setFormValue] = useState({
        name: '',
        tel: '',
        job: '',
        id: '',
    })
    const { addToast } = useToasts();
    const userJob = useContext(UserJobContext);

    useEffect(()=>{
      if(userJob !== "مدیریت") {
        history.push('/manage');
        return;
      }
    }, [])

    const changeHandler = (e) =>{
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        try{
            if(formValue.id && formValue.job && formValue.name && formValue.tel){
                await postEmployee(formValue);
                addToast(`${formValue.name} به کادر پرسنل اضافه شد`, { appearance: 'success' })
                history.push('/manage/personnel');
            } else addToast('تمامیه اطلاعات الزامی است', { appearance: 'error' })
        } catch(err) {}
    }

  return (
    <main className={`min-h-screen flex items-center justify-center p-5`}>
      <section className={`w-full md:max-w-lg lg:max-w-xl`}>
        <form className={`p-5 boxShadow flex flex-col Casablanca rounded-md w-full`} onSubmit={submitHandler}>
      <h1 className={`text-blue-400 mb-10 text-3xl md:text-5xl`}>افزودن به کادر</h1>
            <ManageInputForm value={formValue.name} type="text" name="name" lbl="نام" onChange={changeHandler} />
            <ManageInputForm value={formValue.tel} type="text" name="tel" lbl="شماره تماس" onChange={changeHandler} />
            <ManageInputForm value={formValue.job} type="text" name="job" lbl="وظیفه" onChange={changeHandler} />
            <ManageInputForm value={formValue.id} type="text" name="id" lbl="کد ملی" onChange={changeHandler} />

            <button className={`py-2 border border-blue-400 text-blue-400 transition
             hover:bg-blue-400 rounded-md hover:text-white`} type="submit">
                ثبت
            </button>
        </form>
      </section>
    </main>
  );
};

export default AddEmployee;
