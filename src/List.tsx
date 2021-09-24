import React from 'react'

interface perState {
  person:{
    name:string,
    age:number,
    img:string,
    note?:string
  }[],
  }

const List: React.FC<perState> = ({person}) => {
  const renderList = (): JSX.Element[] => {
     return person.map(per => {
      return (
        <li className="List" key={per.img}>
          <div className="List-header">
            <img className="List-img" src={per.img} />
            <h2>{per.name}</h2>
          </div>
          <p>{per.age} years old</p>
          <p className="List-node">{per.note}</p>
        </li>
      )
    })
  }
    return (
        <ul>
           {renderList()}
        </ul>
    )
}

export default List
