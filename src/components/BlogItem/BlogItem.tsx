import * as React from 'react';
import { ReactComponent as Chat } from '../../assets/icons/chat.svg';
import './BlogItem.scss';
export interface BlogItemProps {
  id?: string,
  image: any,
  title: string,
  author: string,
  data: string,
  msgCount: number
}

const BlogItem: React.FC<BlogItemProps> = ({ image, title, author, data, msgCount }) => {
  return (
    <a href="/" className="blog-item">
      <img src={image} alt={title} className="blog-item__img"/>
      <div className="blog-item__details">
        {data} {author} <Chat className="svg-icon"/> {msgCount}
      </div>
      <h3 className="blog-item__title">
        {title}
      </h3>
    </a>
  );
}

export default BlogItem;