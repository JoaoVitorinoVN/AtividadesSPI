import React from 'react';

function SectionTitle({titulo, descricao}) {
  let tituloElemento = React.createElement("h1", null, titulo);
  let descElemento = React.createElement("p", null, descricao);
  return (
    <div className='componenteTitulo'>
      {tituloElemento}
      {descElemento}    
    </div>
  );
}

export default SectionTitle;