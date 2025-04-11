export const Competences = () => {
    return (
      <>
       <section id="Competences" className="pt-5 pb-5">
       <h2 className="flex justify-center p-2 font-bold uppercase lg:pb-5">Mes compétences</h2>
       <section className="lg:flex lg:flex-row lg:justify-evenly">
        <section className="flex flex-col items-center p-5 lg:rounded-2xl lg:shadow-2xl" >
        <h3 className="font-bold pb-2">HTML</h3>
     <img className="w-50 " src="./src/assets/html.png" alt="html"/>
        </section>
        
        <section className="flex flex-col items-center p-5 lg:shadow-2xl lg:rounded-xl">
        <h3 className="font-bold pb-2">CSS</h3>
        <img className="w-50" src="./src/assets/css.png" alt="css"/>
        </section>
        
        <section className="flex flex-col items-center p-5 lg:shadow-2xl lg:rounded-xl">
            <h3 className="font-bold pb-2">JS</h3>
            <img className="w-50" src="./src/assets/js.png" alt="js"/>
        </section>
        
        <section className="flex flex-col items-center p-5 lg:shadow-2xl lg:rounded-xl">
        <h3 className="font-bold pb-2">React JS</h3>
        <img className="w-50" src="./src/assets/react.png" alt="react"/>
        </section>
        
        </section>
       </section>
        
      </>
    )
   
}