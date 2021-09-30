import { useEffect, useState } from "react";
import { getFoodFilters } from '../../Services/getFoodFilters';
import { getUserFilters } from '../../Services/getUserFilters';
import Group from './Group/Group';

const ManageFiltersGroups = () => {
    const [groups, setGroups] = useState(null);

    useEffect(()=>{
        const fetchFilters = async () =>{
            const food = await getFoodFilters();
            const job = await getUserFilters();
            const filters = [["محصولات", food.data], ["پرسنل",job.data]];
            setGroups(filters);
        }
        fetchFilters();
    }, [])

  return (
    <main className={`min-h-screen`}>
        <section className={`p-5`}>
          <h1 className={`text-5xl color-gradient Casablanca`}>دسته بندی ها</h1>
          {
              groups ?
              groups.map((gr)=> (
                  <Group key={gr[1].length} groups={gr[1].filter(it => it.value !== "همه")} setGroups={setGroups} title={gr[0]} />
              )) :
               null
          }
        </section>
    </main>
  );
};

export default ManageFiltersGroups;
