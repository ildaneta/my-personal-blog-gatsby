---
category: HTML
date: 2020-01-13 11:01:10
title: Benefícios de não utilizar o Medium Post com nome grande
description: Descubra os benefícios de ter o seu próprio blog e conseguir alavancar sua carreira e nunca mais utilizá-lo.
background: #569832;
---

# API REST

### Fluxo de uma requisição e resposta:

- A requisição é feita por um cliente
- É retornada uma resposta através de uma estrutura de dados
- O cliente recebe a resposta e processa o resultado

### Métodos utilizados:

- GET - Receber/Exibir uma informação
- POST - Criar uma informação
- PUT - Alterar uma informação
- DELETE - Deletar uma informação

http://minhaapi.com/users/1

**users** - É o recurso/rota

**1** - É o parâmetro que especifica qual recurso será alterado ou deletado

### HTTP Codes

> Toda resposta que o backend retorna para o frontend é acompanhada de um código que é o HTTP codes. Toda resposta que o backend retorna para o frontend é acompanhada de um código que é o HTTP codes. Toda resposta que o backend retorna para o frontend é acompanhada de um código que é o HTTP codes

- Código de 3 dígitos numéricos xxx que indica qual é o status daquela resposta
  - Se inicia com 1xx - Informativo
  - Se inicia com 2xx - Sucesso
    - 200 - SUCESS
    - 201 - CREATED
  - Se inicia com 3xx - Redirecionamento
  - Se inicia com 4xx - Client Error (algo está faltando na requisição, parâmetros por exemplo)
    - 400 - BAD REQUEST
    - 401 - UNAUTHORIZED
    - 404 - NOT FOUND
  - Se inicia com 5xx - Server Error (ocorreu algum erro no servidor, não conseguindo levar a requisição para o frontend)
    - 500 - INTERNAL SERVER ERROR

```jsx
import React from 'react';
import Profile from '../Profile/index';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import { SidebarWrapper } from './style';

const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </SidebarWrapper>
);

export default Sidebar;
```

### Route params x Query params x Request body

- Query params - parâmetros que são passados após o **?** e que o parâmetro é nomeado
  - ?user=1
- Route params - parâmetros para acessar uma rota apenas
  - /users/1 (usuário com id 1)
- Request body - conteúdo que vem dentro das rotas de PUT e POST
