# :construction: README em construção ! :construction:

# :computer: Trybe-10-Project-TrybeTunes :computer:

Nesse projeto foi desenvolvida uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.

# Acesse o projeto clicando [aqui]()! :green_heart:

<br />

<details>
<summary>
  
## 1- Requisitos
  
</summary>
 
### 1. Crie as rotas necessárias para a aplicação

Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico. Crie cada componente dentro da pasta `src/pages`, conforme o indicado abaixo:

<details><summary> Rota <code>/</code></summary>

- A rota `/` deve renderizar um componente chamado `Login`. Este componente deve ter uma `div` com o atributo `data-testid="page-login"` que envolva todo seu conteúdo;
</details>

<details><summary> Rota <code>/search</code></summary>

- A rota `/search` deve renderizar um componente chamado `Search`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-search"`;
</details>

<details><summary> Rota <code>/album/:id</code></summary>

- A rota `/album/:id` deve renderizar um componente chamado `Album`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-album"`;
</details>

<details><summary> Rota <code>/favorites</code></summary>

- A rota `/favorites` deve renderizar um componente chamado `Favorites`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-favorites"`;
</details>
<details><summary> Rota <code>/profile</code></summary>

- A rota `/profile` deve renderizar um componente chamado `Profile`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile"`;
</details>

<details><summary> Rota <code>/profile/edit</code></summary>

- A rota `/profile/edit` deve renderizar um componente chamado `ProfileEdit`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile-edit"`;
</details>

<details><summary> Para qualquer outra rota não mapeada</summary>

Para qualquer outra rota não mapeada, deve ser renderizado um componente chamado `NotFound`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-not-found"`;
</details>

---

### 2. Crie um formulário para identificação
<details><summary>Dentro do componente <code>Login</code>, que é renderizado na rota <code>/</code>, crie um formulário para que a pessoa usuária se identifique com um nome:</summary>

- Você deve criar um campo para que a pessoa usuária insira seu nome. Este campo deverá ter o atributo `data-testid="login-name-input"`.

- Crie um botão com o texto `Entrar`. Este botão deverá ter o atributo `data-testid="login-submit-button"`.

- O botão para entrar só deve estar habilitado caso o nome digitado tenha 3 ou mais caracteres.

- Ao clicar no botão `Entrar`, utilize a função `createUser` da `userAPI` para salvar o nome digitado. A função `createUser` espera receber como argumento um objeto com as informações da pessoa: 
  
```javascript
createUser({ name: "Nome digitado" });
```

- Enquanto a informação da pessoa usuária é salva, uma mensagem com o texto `Carregando...` deve aparecer na tela. **:bulb: Dica:** Você precisará dessa mensagem várias vezes no futuro, então é uma boa ideia criar um componente para ela :wink:

- Após a informação ter sido salva, faça um redirect para a rota `/search`.

</details>

---

### 3. Crie um componente de cabeçalho

<details><summary>Crie um componente chamado <code>Header</code>, dentro da pasta <code>src/components</code>:</summary>

- Crie esse componente com a tag `header` envolvendo todo seu conteúdo e com o atributo `data-testid="header-component"`;

- Renderize o componente de cabeçalho nas páginas das rotas `/search`, `/album/:id`, `/favorites`, `/profile` e `/profile/edit`;

- Utilize a função `getUser` da `userAPI` para recuperar o nome da pessoa logada e exiba essa informação na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="header-user-name"`.

- Enquanto estiver aguardando a resposta da `getUser`, exiba apenas a mensagem de `Carregando...`.
</details>

---

### 4. Crie os links de navegação no cabeçalho

<details><summary> Crie o link que redireciona para a página de pesquisa:</summary>

  * O link que redireciona para a página de pesquisa deve estar dentro do componente `Header` e precisa possuir o atributo `data-testid="link-to-search"`.
</details>

<details><summary> Crie o link que redireciona para a página de músicas favoritas:</summary> 
  
  * O link que redireciona para a página de músicas favoritas deve estar dentro do componente `Header` e possuir o atributo `data-testid="link-to-favorites"`.
</details>

<details><summary> Crie o link que redireciona para a página de exibição de perfil:</summary> 

  * O link que redireciona para a página de exibição de perfil deve estar dentro do componente `Header` e precisa possuir o atributo `data-testid="link-to-profile"`.
</details>

---

### 5. Crie o formulário para pesquisar artistas

Este formulário deve conter um input e um botão para que seja possível pesquisar os álbums de uma banda ou artista. 

<details><summary> Crie o formulário dentro do componente <code>Search</code>, que é renderizado na rota <code>/search</code>:</summary>
    
  * Crie um campo para pessoa digitar o nome da banda ou artista a ser pesquisada. Esse campo deve ter o atributo `data-testid="search-artist-input"`.
  
  * Crie um botão com o texto `Pesquisar`. Esse botão deve ter o atributo `data-testid="search-artist-button"`.

  * O botão só deve estar habilitado caso o nome do artista tenha 2 ou mais caracteres.

</details>

---

### 6. Faça a requisição para pesquisar artistas

Com a estrutura da tela de pesquisa criada, agora é hora de fazer uma requisição e receber a lista de álbums da banda ou artista pesquisada.

<details><summary> Ao clicar no botão de <code>Pesquisar</code>, limpe o valor do input e faça uma requisição utilizando a função do arquivo <code>searchAlbumsAPIs.js</code>:</summary>

    * Enquanto aguarda a resposta da API, esconda o input e o botão de pesquisa e exiba a mensagem `Carregando...` na tela.

    * Após receber a resposta da requisição exibir na tela o texto `Resultado de álbuns de: <artista>`, onde `<artista>` é o nome que foi digitado no input.
</details>

<details><summary> Liste os álbuns retornados. A API irá retorna um <i>array</i> de objetos. Cada objeto terá a seguinte estrutura:</summary> 

    ```
    [
      {
        artistId: 12,
        artistName: "Artist Name",
        collectionId: 123,
        collectionName: "Collection Name",
        collectionPrice: 12.25,
        artworkUrl100: "https://url-to-image",
        releaseDate: "2012-03-02T08:00:00Z",
        trackCount: 8,
      }
    ]
    ```

</details>

<details><summary> Se nenhum álbum for encontrado para o nome pesquisado, a API irá retornar um array vazio. Nesse caso, a mensagem `Nenhum álbum foi encontrado` deverá ser exibida:</summary>
  
</details>

<details><summary> Ao listar os álbuns, crie um link em cada card para redirecionar para a página do álbum. Este link deve ter o atributo <code>data-testid={`link-to-album-${collectionId}`}</code>. Onde `collectionId` é o valor da propriedade de cada Álbum:</summary>

    * Este link deve redirecionar para a rota `/album/:id`, onde `:id` é o valor da propriedade `collectionId` de cada Álbum da lista recebida pela API.
</details>

---

### 7. Crie a lista de músicas do álbum selecionado

Agora que está tudo pronto, você poderá exibir a lista de músicas do álbum selecionado. 

<details><summary>Crie a lista dentro do componente <code>Album</code>, que é renderizado na rota <code>/album/:id</code>: </summary>

- Ao entrar na página, faça uma requisição utilizando a função `getMusics` do arquivo `musicsAPI.js`. Lembre-se que essa função espera receber uma string com o id do álbum.

- Exiba o nome da banda ou artista na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="artist-name"`.

- Exiba o nome do álbum e nome da banda ou artista na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="album-name"`.

- Liste todas as músicas do álbum na tela. Para isso, crie um componente chamado `MusicCard` que deverá exibir o nome da música (propriedade `trackName` no objeto recebido pela API) e um player para tocar o preview da música (propriedade `previewUrl` no objeto recebido pela API).

Para tocar o preview, você deve usar a tag `audio` do próprio HTML. Sua implementação é assim:

```html
<audio data-testid="audio-component" src="{previewUrl}" controls>
  <track kind="captions" />
  O seu navegador não suporta o elemento{" "} <code>audio</code>.
</audio>
```

**Importante:** lembre-se de colocar o atributo `data-testid="audio-component"` na tag `audio` de cada música listada.

</details>

---

### 8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas

Você já consegue listar as músicas dos álbuns. Nessa etapa você poderá marcar quais são as músicas que você mais gosta.

<details><summary> No componente <code>MusicCard</code>, crie um input do tipo <code>checkbox</code> para marcar as músicas favoritas:</summary> 

    * Esse input deve conter uma `label` com o texto `Favorita` e deve possuir o atributo ```data-testid={`checkbox-music-${trackId}`}```, onde `trackId` é a propriedade `trackId` do objeto recebido pela API.
</details>

<details><summary> Para adicionar uma música a lista de favoritas, utilize a função <code>addSong</code> da <code>favoriteSongsAPI</code>. Você deve passar para essa função um objeto no mesmo formato que você recebe da API <code>getMusics</code>:</summary>

    * Enquanto aguarda o retorno da função `addSong`, renderize a mensagem de `Carregando...`.
</details>

---

### 9. Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum

<details><summary> Ao entrar na página com a lista de músicas de um álbum, na rota <code>/album/:id</code>, as músicas que já foram favoritadas anteriormente devem estar com o checkbox marcado</summary>

- Ao entrar na página, utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- A lista recebida pela função `getFavoriteSongs` deve ser salva no estado da sua aplicação.

- Após receber o retorno da função `getFavoriteSongs`, as músicas que já foram favoritadas devem estar com o checkbox marcado como `checked`.

</details>

---

### 10. Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música

<details><summary> Após adicionar uma música na lista de favoritas usando a função <code>addSong</code> (Requisito 8), faça uma requisição usando a função <code>getFavoriteSongs</code> para atualizar a lista de músicas favoritas:</summary>

- Ao favoritar uma música, aguarde o retorno da função `addSong` (que já foi implementada no requisito 8) e utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Atualize o estado da aplicação com o valor recebido pelo retorno da função `getFavoriteSongs`.
  
- Após receber o retorno da função `getFavoriteSongs`, as músicas que já foram favoritadas devem estar com o checkbox marcado como `checked`.
</details>

---

### 11. Crie o mecanismo para remover músicas na lista de músicas favoritas

Depois de listar e favoritar as músicas de um álbum, você também deve poder remover uma música da lista de favoritas.

<details><summary> Ao clicar em uma música que já está marcada como favorita, ela deve ser removida da lista de músicas favoritas. Para isso você deve usar a função <code>removeSong</code> da <code>favoriteSongsAPI</code>. Essa API espera receber um objeto no mesmo formato que foi passado anteriormente para a função <code>addSong</code>: </summary>

  * Enquanto aguarda o retorno da função `removeSong`, renderize a mensagem de `Carregando...`.<br />

</details>

---

## Requisitos bônus

### 12. Crie a lista de músicas favoritas

<details><summary> Crie a lista dentro do componente <code>Favorites</code>, que é renderizado na rota <code>/favorites</code>.</summary>

- Ao entrar na página, utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Após receber o retorno da função `getFavoriteSongs`, utilize o componente `MusicCard` para renderizar a lista de músicas favoritas.

- Nesta página deve ser possível desfavoritar as músicas. Para isso utilize a função `removeSong` da `favoriteSongsAPI`.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Após remover a música, atualize a lista usando a função `getFavoriteSongs`. Lembre-se de exibir a mensagem `Carregando...` enquanto aguarda o retorno da API.

</details>

---

### 13. Crie a exibição de perfil

<details><summary> Crie a exibição do perfil dentro do componente <code>Profile</code>, que é renderizado na rota <code>/profile</code></summary>

- Utilize a função `getUser` da `userAPI` para recuperar as informações da pessoa logada.

- Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

- Após receber o retorno da `getUser`, exiba o nome, o email, a descrição e a imagem da pessoa logada.

- Para exibir a imagem, use a tag HTML `img` com o atributo `data-testid="profile-image"`;

- Crie um link que redirecione para a página de edição de perfil (rota `/profile/edit`). Este link deve ter o texto `Editar perfil`.

</details>

---

### 14. Crie o formulário de edição de perfil

Crie o formulário de edição de perfil dentro do componente <code>ProfileEdit</code>, que é renderizado na rota <code>/profile/edit</code>.

<details><summary> Utilize a função <code>getUser</code> da <code>userAPI</code> para recuperar as informações da pessoa logada: </summary>

    * Enquanto aguarda a resposta da API, exiba a mensagem "Carregando...".
</details>

<details><summary> Após receber as informações da pessoa logada, renderize um formulário já preenchido com os seguintes campos:</summary>

    - Um campo para alterar o nome da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-name"`;

    - Um campo para alterar o email da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-email"`;

    - Um campo para alterar a descrição da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-description"`;

    - Um campo para alterar a foto da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-image"`;

    - Um botão para salvar as informações alteradas. Este botão precisa ter o atributo `data-testid="edit-button-save"`.
</details>

<details><summary>Para poder habilitar o botão de enviar, todos os campos precisam estar preenchidos (não podem estar vazios): </summary>

    * O campo de email, além de não estar vazio também precisa verificar que o email tem um formato válido, ou seja, deve seguir o padrão `test@test.com`.
    
    * O botão de salvar as informações só deve ser habilitado quando todos os campos estiverem válidos, ou seja, todos campos preenchidos e o campo de email com um valor em formato válido.

    * Quando o botão estiver habiltado, utilize a função <code>updateUser</code> da <code>userAPI</code> para atualizar as informações da pessoa usuária. Essa API espera receber um objeto no seguinte formato:
    
      ```
        {
          name: '',
          email: '',
          image: '',
          description: '',
        }
      ```

    * Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.
</details>

  * Ao finalizar o processo de edição, redirecione a pessoa logada para a página de exibição de perfil (rota `/profile`).
</details>

</details>
<br />

## 2- Nota do Projeto

## 100% :heavy_check_mark:

![Project-TrybeTunes-Grade](https://github.com/FredericoTP/trybe-project-10-trybetunes/blob/main/images/trybetunes-grade.png?raw=true)
  
<br />

## 3- Preview
