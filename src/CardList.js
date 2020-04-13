import React from 'react';
import Card from './Card';

const CardList = ({filteredanimals, delclick}) => {
    return (
        <div>
           {
               filteredanimals.map((user, i) => {
                    return (
                    <Card 
                    key={i}
                    img={filteredanimals[i].img}
                    name={filteredanimals[i].name}
                    type={filteredanimals[i].type}
                    delclick={delclick}
                    />

                    )
               })
                  
           }
        </div>
    )

    

}


export default CardList;