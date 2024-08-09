import React from 'react';
import './assets/css/styles.css';

import SectionTitle from './assets/components/SectionTitle.jsx';
import ContentBox from './assets/components/ContentBox.jsx';

function App() {
  return (
    <section>
      <SectionTitle titulo="Acesso à informação" descricao="Veja dados de tranparência e governança" />
      <div>
        <ContentBox conteudo="PLANO DE DESENVOLVIMENTO INSTITUCIONAL" />
        <ContentBox conteudo="PESQUISA PÚBLICA PROCESSOS IFTM" />
        <ContentBox conteudo="LICITAÇÕES E CONTRATOS" />
        <ContentBox conteudo="RECEITAS E DESPESAS" />
      </div>
    </section>
  );
}

export default App;