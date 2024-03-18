import React from "react"

type Typograph = 
{
    children: React.ReactNode
    text?: string | number
    size?: "small" | "large"
}

type ParagraphProps = 
{
    color: string
}


const ParagraphDefaultProps = 
{
    text: "Hello World"
}

const user = 
{
    id: 1,
    name: "Joao victor",
    age: 18,
    isAdmin: true,
    birthDate: new Date("2006-03-19")
}

//extrair tipos de um objeto
type UserAttributes = typeof user

const mary : UserAttributes =
{   
    id: 2,
    name: "Mary",
    age: 18,
    isAdmin: false,
    birthDate: new Date("2006-02-19")
}

function sumNumbers(a: number, b: number) : number // esse : number n é necessário pq ele sabe q retorna number
{
    return a + b
}
















export function List2(
    {item, render} :
    {item : []; render : (item : [], index : number) => null}
    
    )
{
    return(
        <ul>
           {item.map((item,index)=>
           {
            return render(item,index)
           })}
        </ul>
    )
}



export function List<T>(
    {items, render}: 
    {items: T[]; 
    render: (item: T, index: number) => React.ReactNode})
{
    return(
        <ul>
            {items.map((item,index) => 
            {
                return render(item,index)
            })}
        </ul>
    )
}


type ListaTypes = {
    itemList: any[]; 
}

export function Lista({itemList}: ListaTypes) {
    console.log(typeof(itemList))
    return (
        <ul>
            {itemList.map((item, index) => (
                <>
                <li key={index}>{item.name}</li>
                <h3>{typeof(itemList)}</h3>
                </>
            ))}
        </ul>
    );
}























export function Paragraph({children, size, text, color} : Typograph & ParagraphProps)
{
   return({children})
}

export default function Title({children, text, size} : Typograph)
{


    return(
        <>
        <h1>{children}</h1>
        </>
    )

}

Paragraph.defaultProps = ParagraphDefaultProps