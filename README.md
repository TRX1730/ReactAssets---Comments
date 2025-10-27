```markdown
# 💬 React Blog Comments System


## 🚀 Szybki Start

### Instalacja i uruchomienie demo:
```bash
# Sklonuj repozytorium
git clone https://github.com/TRX1730/ReactAssets---Comments.git

# Wejdź do folderu
cd ReactAssets---Comments

# Zainstaluj zależności
npm install

# Uruchom demo
npm run dev
```


## 📦 Jak Dodać do Swojego Projektu

### Krok 1: Skopiuj te pliki do swojego projektu:
```
src/
├── components/
│   ├── CommentsProvider.jsx
│   ├── CommentForm.jsx
│   ├── CommentList.jsx
│   └── Comment.jsx
└── hooks/
    └── useComments.js
```

### Krok 2: Dodaj 3 linijki kodu:
```jsx
// 1. Importuj komponenty
import { CommentsProvider } from './components/CommentsProvider';
import { CommentForm } from './components/CommentForm';
import { CommentList } from './components/CommentList';

function BlogPost() {
  return (
    // 2. Owiń swoją aplikację CommentsProvider
    <CommentsProvider postId="unikalny-id-postu">
      
      {/* 3. Dodaj formularz i listę komentarzy */}
      <CommentForm />
      <CommentList />
      
    </CommentsProvider>
  );
}
```


## 🎯 Co Dostajesz?

✅ **Formularz komentarza** - 
✅ **Lista komentarzy** -
✅ **Usuwanie komentarzy** -
✅ **Like'owanie** - 
✅ **Zapis w LocalStorage** -
✅ **Responsywny design** - 
✅ **Piękny UI** - 

## 🎨 Przykład Użycia

```jsx
import React from 'react';
import { CommentsProvider, CommentForm, CommentList } from './components';

function BlogPost({ post }) {
  return (
    <div>
      {/* Twój post bloga */}
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
      
      {/* System komentarzy */}
      <CommentsProvider postId={post.id}>
        <CommentForm />
        <CommentList />
      </CommentsProvider>
    </div>
  );
}
```

## 🔧 Customizacja

### Zmień kolory - edytuj `Comment.jsx`:
```jsx
// Znajdź te style i zmień kolory:
style={{
  backgroundColor: '#ffffff',  // Tło komentarza
  border: '2px solid #e2e8f0', // Ramka
  color: '#4a5568'             // Kolor tekstu
}}
```

### Dodaj więcej pól w formularzu:
```jsx
// W CommentForm.jsx dodaj nowe inputy:
<input
  type="email"
  placeholder="Email"
  // ... reszta kodu
/>
```


## 🏗️ Struktura

```
blog-comments/
├── src/
│   ├── components/
│   │   ├── CommentsProvider.jsx  # Zarządza komentarzami
│   │   ├── CommentForm.jsx       # Formularz dodawania
│   │   ├── CommentList.jsx       # Lista komentarzy
│   │   └── Comment.jsx           # Pojedynczy komentarz
│   ├── hooks/
│   │   └── useComments.js        # Hook do używania komentarzy
│   └── App.jsx                   # Przykład użycia
├── package.json
└── README.md
```
