import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 

function Page() {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo ratione sapiente dolores quaerat, excepturi, corporis, ducimus minus laudantium commodi necessitatibus nihil amet. Eaque fuga ad hic, ullam voluptates maiores reiciendis.
      </p>

      {/* ✅ Corrected Link path */}
      <Link to="newp">Go to Newp</Link>  

      {/* Renders the nested route */}
      <Outlet />
    </div>
  );
}

export default Page;
