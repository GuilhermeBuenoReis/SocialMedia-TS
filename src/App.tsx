import { Post } from "./components/Post";
import { Header } from "./components/Header";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarURL: 'http://github.com/maykbrito.png',
        name: 'Guilherme',
        role: 'Programador front-end'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa' },

        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },

        {type: 'link', content: 'jane.design / doctorcare'},

      ],
      publishedAt: new Date('2024-05-03 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarURL: 'http://github.com/diego3g.png',
        name: 'Gabriel',
        role: 'Programador back-end'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa' },

        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },

        {type: 'link', content: 'jane.design / doctorcare'},
      ],
      publishedAt: new Date('2024-05-8 20:00:00')
    }
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
};

export { App };

