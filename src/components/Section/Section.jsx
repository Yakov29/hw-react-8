import React from 'react';

function Section({ title, children }) {
  return (
    <section>
      {children}
    </section>
  );
}

export default Section;