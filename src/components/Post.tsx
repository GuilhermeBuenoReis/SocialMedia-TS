import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: {
    name: string;
    role: string;
    avatarURL: string;
  };
  publishedAt: Date;
  content: Content[];
}

function Post({ author, content }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito maneiro amigo!!'
  ])

  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('');
    setNewCommentText(e.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithOutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    //imutabilidade -> significa que nós não alteramos um valor na memória, e sim criamos um novo espaço na memória!
    setComments(commentsWithOutDeletedOne);
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("Este campo é tem que ser preenchido!")
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (

    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarURL} alt="" hasBorder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
        >
          cerca de uma hora atrás
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder='Deixe um comentário'
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          comments.map(comments => {
            return (
              <Comment
                key={comments}
                content={comments}
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  );
}

export { Post };
