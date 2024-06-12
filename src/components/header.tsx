import { headers } from "next/headers"


export const Header = () => {
    return(
        <div className="flex flex-col text-center  justify-center items-center">
          
                <div className="text-3xl font-bold text-white my-6">Lista de tarefas</div>
                <div className="h-0.5 bg-slate-600 max-w-screen-lg w-screen"></div>
           
        </div>
    )
}