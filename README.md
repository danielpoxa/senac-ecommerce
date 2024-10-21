

# Simulação de E-commerce - Projeto Next.js

## Fase 2: Desenvolvimento do Back-end e Integração de Dados

LINK MONGODB DOWNLOAD: https://www.mongodb.com/try/download/community

## Objetivos:

- Desenvolver as APIs necessárias para o e-commerce.
- Conectar a interface desenvolvida na Fase 1 com o back-end.
- Criar e configurar a base de dados usando MongoDB Atlas para armazenar informações sobre produtos, usuários, pedidos e carrinho de compras.
- Implementar autenticação e autorização de usuários usando NextAuth.js.
- Garantir que a aplicação seja funcional e escalável.

# Stack Tecnológico 

- Next.js (Framework React)
- MUI (Material-UI) (Biblioteca de componentes de interface)
- Node.js com Express para o desenvolvimento do back-end.
- MongoDB Atlas para armazenamento de dados.
- NextAuth.js para autenticação e autorização.
- Axios ou Fetch API para consumo das APIs no front-end.

## Tarefas por Grupos:

1. Yan & Vitor Hugo - Autenticação Básica com NextAuth.js
- Descrição: Implementar a autenticação de usuários de forma simples com NextAuth.js.

Tarefas:
- Configurar NextAuth.js para login usando provedores como Google ou credenciais simples (nome e senha).
- Criar uma página de login conectada ao NextAuth.js.
- Testar a autenticação com MongoDB, armazenando apenas nome de usuário e senha (sem necessidade de dados complexos).

2. Welker & Tais - API Simples de Produtos
- Descrição: Criar uma API básica para manipular produtos.

Tarefas:
- Listar Produtos: Utilize a rota de GET /api/product para buscar e exibir os produtos.

Exemplo de chamada para exibir os produtos usando Axios:
```
import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('/api/product');
  return response.data;
};

```

3. Vitor & Richard - Exibição e Filtros Simples de Produtos
- Descrição: Implementar a exibição e filtros básicos para os produtos.

Tarefas:
- Consumir a API de Produtos: Utilize a rota de GET /api/product para listar os produtos.
- Filtros: Adicione filtros no front-end para permitir a filtragem dos produtos por nome ou preço. A filtragem pode ser feita após a obtenção dos dados com Axios.

  Exemplo de exibição e filtro:

  ```
  import axios from 'axios';

  const fetchFilteredProducts = async (filter) => {
    const response = await axios.get(`/api/product?category=${filter.category}&price=${filter.price}`);
    return response.data;
  };

  ```

4. Lorran & Davi Vale - Navegação Simples e Páginas Protegidas
- Descrição: Implementar a navegação e proteger páginas com base na autenticação.

Tarefas:
- Usar NextAuth.js para proteger páginas, como o Carrinho e Checkout, permitindo apenas o acesso de usuários autenticados.
- Testar a navegação entre a página de login e as áreas protegidas.

  ```
  import { useSession } from 'next-auth/react';

  function ProtectedPage() {
    const { data: session, status } = useSession();
  
    if (status === "loading") return <div>Loading...</div>;
    if (!session) return <div>Você precisa estar autenticado</div>;
  
    return <div>Conteúdo protegido</div>;
  }

  ```

5. Daniel & Erica - API Simples de Checkout e Pedidos
- Utilizar a API do Cart para trazer os itens para o checkout

Tarefas:
- Utilize a rota /api/cart para buscar os dados do carrinho que foi fechado e listar os itens na pagina de checkout
- Consumir a API de Carrinho para realizar o checkout.
- Não é necessário implementar uma ordem, apenas processar os itens do carrinho.

```
import axios from 'axios';

const checkout = async () => {
  try {
    const response = await axios.get('/api/cart');
    console.log('Itens no carrinho:', response.data);
    // Processar os itens do carrinho para checkout
  } catch (error) {
    console.error('Erro ao buscar itens do carrinho:', error);
  }
};

```

6. Raphael & Davi - Página de Detalhes do Produto e Avaliações Básicas
- Descrição: Criar o footer do projeto

Tarefas:
Criar o componente footer para ser usado na página.

7. Augusto, Arthur & Pedro - API Simples do Carrinho de Compras
- Descrição: Desenvolver a API e funcionalidade simples do carrinho de compras.

Tarefas:
- Consumir a API de Carrinho utilizando Axios.
- Listar e gerenciar os itens do carrinho na interface.

  ```
  import axios from 'axios';

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('/api/cart');
      console.log('Itens do carrinho:', response.data);
    } catch (error) {
      console.error('Erro ao buscar itens do carrinho:', error);
    }
  };

  ```

# Como utilizar MONGODB NO SEU COMPUTADOR
- Instale mongodb no projeto
```
npm install mongodb
```



## Branches e Pull Requests

Cada grupo trabalhará em sua funcionalidade em uma branch separada. Os nomes das branches devem corresponder à funcionalidade que estão desenvolvendo. Por exemplo:

- Yan & Vitor Hugo trabalharão na página de login na branch /login.
- Welker & Tais trabalharão no card de produto na branch /product-card.

# Fluxo de Trabalho:

1. Fork do Repositório: Cada aluno deve fazer o fork do repositório principal para sua própria conta no GitHub..

2. Criar uma Branch para Sua Funcionalidade: Após o fork, crie uma branch que corresponda à funcionalidade que está desenvolvendo (por exemplo, /login, /product-card).

3. Atualize Seu Fork: Antes de começar qualquer desenvolvimento, sempre garanta que seu fork esteja atualizado com as últimas mudanças da branch master:

```
git fetch origin
git pull origin master
```

4. Desenvolva e Teste:

- Enquanto desenvolve um componente, crie uma página de teste para garantir que tudo funcione como esperado. Esta página é apenas para testes internos e não deve ser incluída na PR final.
- Por exemplo, se você está trabalhando no card de produto, crie uma página onde você possa ver o componente renderizado na tela e testar seu comportamento.

5. Submeta Apenas o Componente: Uma vez que sua funcionalidade esteja pronta, não envie a página de teste. Envie apenas a pasta e o(s) arquivo(s) respectivo(s) à sua funcionalidade (por exemplo, components/Card.js).

6. Abra uma Pull Request: Quando estiver pronto, submeta sua funcionalidade por meio de uma pull request para a branch correspondente:

- Yan & Vitor Hugo enviarão uma PR para /login.
- Welker & Tais enviarão uma PR para /product-card.
- E assim por diante.

## Boas Práticas

- Sempre Atualize Seu Repositório: Antes de iniciar qualquer novo trabalho, sempre atualize seu repositório para a versão mais recente:

```
git fetch origin
git pull origin master

```

- Commits Pequenos: Faça commits incrementais e frequentes. Isso ajuda a evitar commits grandes e difíceis de gerenciar.

- Rebase com Master: Após o merge de uma pull request de outro grupo, garanta que você faça o rebase da sua branch com a versão mais recente da master:

```
git fetch origin
git rebase origin/master

```

- Isso evita conflitos antes de enviar sua pull request.

- Commits Claros e Objetivos: Use mensagens de commit descritivas, como "Adicionada validação do formulário de login" ou "Criado componente reutilizável de card de produto".


## Conclusão

Este projeto simula um cenário de desenvolvimento real, onde cada grupo contribui independentemente para construir uma aplicação coesa. Certifique-se de colaborar, seguir sua funcionalidade atribuída e respeitar o fluxo de trabalho para garantir uma integração suave entre todas as funcionalidades.

Boa sorte e vamos construir algo incrível juntos!
