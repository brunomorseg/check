import { useState } from "react"

type TodoInput = {
    label:string;
    checked:boolean
}

export const Container = () => {

    const [inputing, setInputing] = useState('')

    const [tarefa, setTarefa] =useState <TodoInput[]> (
        [
            {label:'Estudar para Faculdade', checked:false},
            {label:'Projeto Tarefas',checked:false},
            {label:'OnebitCode', checked:false}
        ]
    )

    const toggleItem = (index:number) => {
        let newList = [...tarefa]
        newList[index].checked = !newList[index].checked
        setTarefa(newList)
    }
   
    const handleAdd = () => {
         if(inputing.trim() ==='') return
        {
            setTarefa([...tarefa,{label:inputing, checked:false}]) 
            setInputing('')
         }
       
    }

    const handleDelete = () => {
        let newList = tarefa.filter(item=>!item.checked)
        setTarefa(newList)
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
       
        if (e.key === 'Enter') {
            handleAdd();
        }
        
    }

    return(
        <div className="h-auto bg-slate-900">
            <div className="mr-auto ml-auto rounded-md bg-slate-900 border-slate-600 border-2 text-2xl max-w-screen-lg w-screen mt-7 flex h-auto ">
                <button 
                className=" ml-2 mr-2"
                onClick={handleAdd}
                >➕</button>
                <input 
                style={{ outline: 0 }} 
                type="text" 
                className="  p-2 bg-slate-900 mt-auto mb-auto border-0 text-white
                 " 
                 placeholder="Adicione uma tarefa"
                 value={inputing}
                 onChange={e=>setInputing(e.target.value)}
                 onKeyUp={handleKeyUp}
                 />
            
            </div>
            <div className="mr-auto ml-auto mt-7 max-w-screen-lg w-screen">
                <ul className="w-full max-w-lg pl-5 list-none">
                {tarefa.map((item,index)=>(
                    
                    <li key={index} className={`
                        text-neutral-400 text-2xl pt-2 flex
                        ${item.checked ===true? 'line-through':'initial'}
                    `}>
                        <div className="flex items-center">
                            <input
                            onChange={()=> toggleItem(index)}
                            
                            type="checkbox"
                            className="w-6 h-6 mr-3"
                            checked= {item.checked}
                            />
                        </div> 
                        {item.label}
                    </li>
                    

                ))}

                </ul>
            </div>

            <div className="mr-auto ml-auto mt-7 max-w-screen-lg w-screen flex justify-center">
                
                <button className="text-neutral-400 text-2xl rounded-md border-2 p-3  hover:opacity-15 hover:bg-slate-900 hover:p-2" onClick={handleDelete}>Delete</button>
                
            </div>
                
            
        </div>
    )
}