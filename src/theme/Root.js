import React from 'react';

export default function Root({children}) {
  return (
    <>
      {children}
      <script
        async
        data-goatcounter="https://akkoyun.goatcounter.com/count"
        src="//gc.zgo.at/count.js"
      ></script>
    </>
  );
}