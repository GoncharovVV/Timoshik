import * as React from 'react';
export interface NotFoundProps {

}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <h2 className="text_center">
          Page not found
        </h2>
      </div>
    </section>
  );
}

export default NotFound;