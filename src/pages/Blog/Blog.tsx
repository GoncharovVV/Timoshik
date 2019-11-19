import * as React from 'react';
import BlogItem from '../../components/BlogItem';

import { blogList } from '../../mock/mockData';
import Subscribe from '../../components/Subscribe';
import TopSection from '../../components/TopSection';
import Pagination from '../../components/Pagination';

export interface BlogProps {

}

const Blog: React.FC<BlogProps> = () => {
  const listBlog = blogList.map(item => {
    return (
      <BlogItem
        key={item.id}
        {...item}
      />
    )
  });
  const links = [
    {
      id: 'l1',
      title: 'Home',
      lHref: '/'
    },
    {
      id: 'l2',
      title: 'Blog',
      lHref: '/blog'
    }
  ];
  const pagItems = [
    {
      id: 'pag1',
      value: 'arrLeft',
      url: '/'
    },
    {
      id: 'pag2',
      value: '1',
      url: '/'
    },
    {
      id: 'pag3',
      value: '2',
      url: '/'
    },
    {
      id: 'pag4',
      value: '3',
      url: '/'
    },
    {
      id: 'pag5',
      value: 'arrRight',
      url: '/'
    }
  ]
  return (
    <>
      <TopSection
        title="Blog"
        links={links}
      />
      <section className="ftco-section">
        <div className="container">

          <div className="cards">
            {listBlog}
          </div>
          <Pagination arr={pagItems}/>
        </div>
      </section>
      <Subscribe/>
    </>
  );
}

export default Blog;