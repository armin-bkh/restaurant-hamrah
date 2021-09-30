import { useState } from "react";
import { deleteProductFilter } from "../../../Services/deleteProductFilter";
import { deleteUserFilter } from "../../../Services/deleteUserFilter";
import { getFoodFilters } from "../../../Services/getFoodFilters";
import { getUserFilters } from "../../../Services/getUserFilters";
import GroupItem from "./GroupItem/GroupItem";

const Group = ({ title, groups, setGroups }) => {
    const [error, setError] = useState(false);

    const deleteFilterItemHandler = async (id) => {
        try{
          if(title === "محصولات"){
              await deleteProductFilter(id);
              const food = await getFoodFilters();
              const job = await getUserFilters();
              const filters = [["محصولات", food.data], ["پرسنل",job.data]];
              setGroups(filters)
          } else {
              await deleteUserFilter(id);
              const food = await getFoodFilters();
              const job = await getUserFilters();
              const filters = [["محصولات", food.data], ["پرسنل",job.data]];
              setGroups(filters)
          }
        } catch(err){
            setError(true)
        }
    };
    return ( 
        <article className={`boxShadow rounded-md p-5 mt-5`}>
            <h1 className={`text-gray-9000 font-bold text-2xl mb-5 Dirooz`}>دسته بندی {title}</h1>
            <ul>
                {
                groups.map(((it, index) => <GroupItem key={it.id} index={index + 1} label={it.value} onDelete={() => deleteFilterItemHandler(it.id)} />))
                }
            </ul>
        </article>
     );
}
 
export default Group;