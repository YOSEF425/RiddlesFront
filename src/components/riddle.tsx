type riddle = {
    catagory:string,
    level:string,
    question:string,
    answer:string
}

export default function Riddle({catagory,level,question,answer} : riddle){
    return(
        <>
          <div>Catagory: {catagory}</div>
          <div>Level: {level}</div>
          <div>Question: {question}</div>
          


        </>
    )
}