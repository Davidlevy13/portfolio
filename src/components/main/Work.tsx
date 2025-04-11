export const Work = () => {


   return(
    <div>
      <section id="Work" className="pt-5 pb-5 bg-amber-50">
       <h2 className="flex justify-center pt-5 p-2 font-bold uppercase lg:pb-5">Mes projets</h2>
       <section className="lg:flex lg:flex-row lg:justify-evenly">
        <section className="m-6 flex flex-col p-5 rounded-2xl border-2 border-[#050420] border-solid" >
        <img className="w-80 pb-2 " src="./src/assets/onglet.png" alt="onglet"/>
     <img className="w-80 border-solid border-1 border-black rounded-sm" src="./src/assets/hitman.png" alt="hitman"/>
     <h3 className="font-bold pt-2 pb-2">Hitman</h3>
     <a href="https://github.com/Davidlevy13/project1-Wild-Eats.git"><img className="w-10 pb-2" src="./src/assets/github.png" alt="onglet"/></a> 
        </section>
        <section className="m-6 flex flex-col p-5 rounded-2xl border-2 border-[#050420] border-solid" >
        <img className="w-80 pb-2 " src="./src/assets/onglet.png" alt="onglet"/>
     <img className="w-80 border-solid border-1 border-black rounded-sm" src="./src/assets/wildeat.png" alt="wildeats"/>
     <h3 className="font-bold pt-2 pb-2">Wild Eats</h3>
     <a href="https://github.com/Davidlevy13/project1-Wild-Eats.git"><img className="w-10 pb-2" src="./src/assets/github.png" alt="onglet"/></a> 
        </section>
        <section className="m-6 flex flex-col p-5 rounded-2xl border-2 border-[#050420] border-solid" >
        <img className="w-80 pb-2 " src="./src/assets/onglet.png" alt="onglet"/>
     <img className="w-80 border-solid border-1 border-black rounded-sm" src="./src/assets/cityguide.png" alt="cityguide"/>
     <h3 className="font-bold pt-2 pb-2">City guide</h3>
     <a href="https://github.com/Davidlevy13/project1-Wild-Eats.git"><img className="w-10 pb-2" src="./src/assets/github.png" alt="onglet"/></a> 
        </section>
        
        </section>
       </section>
    </div>
   )
  };