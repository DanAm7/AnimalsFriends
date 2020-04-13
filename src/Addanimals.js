import React from 'react';

const Addanimals = ( { addimg, addname, addtype, btn } ) => {
 return (
<div>
     <div className='pa3'>
          <input id='1' type='text' placeholder='Img' className=' ma1' onChange={addimg} />
          <input id='2' type='text' placeholder='Name' className=' ma1' onChange={addname} />
          <input id='3' type='text' placeholder='Type' className=' ma1' onChange={addtype} />
          <br/>
          <button id='btn' className='ma1' onClick={btn} >Add Animal</button>     
     </div>
</div>
 )

}

export default Addanimals;