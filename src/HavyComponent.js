import { memo } from "react";

const Component = ({keyword})=>{
   const init = performance.now();
   while(init > performance.now() - 200){

   }
    return(
      <>
         <h3>Heavy Cmponent </h3>
           {keyword}
      </>
    )
}
export const HavyComponent = memo(Component);