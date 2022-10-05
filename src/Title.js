import React from 'react'


export default function Title({mainTitle}) {
  return (
    <div>
        <h1 style={{backgroundColor:'pink' ,borderBottom:'5px solid purple', textAlign:'center', marginTop: 60, padding: 15}}>
            {mainTitle}
        </h1>
    </div>
  )
}

