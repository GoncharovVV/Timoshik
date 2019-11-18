import * as React from 'react';
import BlogItem from '../../components/BlogItem';
import SectionTitle from '../../components/SectionTitle';
import { blogList } from '../../mock/mockData';
import Subscribe from '../../components/Subscribe';
export interface BlogProps {

}

const Blog: React.SFC<BlogProps> = () => {
  const listBlog = blogList.map(item => {
    return (
      <BlogItem
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="text_center section__title_container">
            <SectionTitle
              title="Our Portfolio"
              description="We're Happy to share our complete Projects"
            />
          </div>
          <div className="cards">
            {listBlog}
          </div>
        </div>
      </section>
      <Subscribe/>
    </>
  );
}

export default Blog;