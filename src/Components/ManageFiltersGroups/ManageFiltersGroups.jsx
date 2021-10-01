import { useEffect, useState } from "react";
import { getFoodFilters } from '../../Services/getFoodFilters';
import { getUserFilters } from '../../Services/getUserFilters';
import Group from './Group/Group';

const ManageFiltersGroups = () => {
    const [foodGroup, setFoodGroup] = useState(null);
    const [jobGroup, setJobGroup] = useState(null);

    useEffect(()=>{
        const fetchFilters = async () =>{
            const food = await getFoodFilters();
            const job = await getUserFilters();
            setFoodGroup(food.data);
            setJobGroup(job.data);
        }
        fetchFilters();
    }, [])


  return (
    <main className={`p-5`}>
          <h1 className={`text-5xl color-gradient Casablanca`}>دسته بندی ها</h1>
        <section className={`min-h-screen boxShadowInner py-1 px-5 mt-14`}>
          {
              foodGroup && jobGroup ?
                  <>
                  <Group key={foodGroup.length} group={foodGroup} setGroup={setFoodGroup} title="محصولات" />
                  <Group key={jobGroup.length} group={jobGroup} setGroup={setJobGroup} title="پرسنل" />
                  </> :
               null
          }
        </section>
    </main>
  );
};

export default ManageFiltersGroups;
