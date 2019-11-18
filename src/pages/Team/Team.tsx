import * as React from 'react';
import Subscribe from '../../components/Subscribe';
export interface TeamProps {

}

const Team: React.SFC<TeamProps> = () => {
  return (
    <>
      <section>Team</section>
      <Subscribe/>
    </>
  );
}

export default Team;