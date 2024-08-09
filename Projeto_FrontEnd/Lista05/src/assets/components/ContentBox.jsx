import React from 'react';

function ContentBox({conteudo}) {
  let tituloElemento = React.createElement("h2", null, conteudo);
  return (
    <div className='contentBox'>
      {tituloElemento}
    </div>
  );
}

export default ContentBox;