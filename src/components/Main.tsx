import { About } from "./main/About"
import { Competences } from "./main/Competences"
import { Work } from "./main/Work"
import { Api } from "./main/Joke"

export const Main = () => {
     return (
       
         <div>
          <section className="pb-5 pt-5">
           <About/>
           </section>
           <section className="pb-5 pt-5">
           <Competences/>
           </section>
           <section className="pb-5 pt-5">
           <Work/>
           </section>
           <section className="pb-5 pt-5">
           <Api/>
           </section>
         </div>
         
       
     )
    
}