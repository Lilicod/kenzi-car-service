import Layout from '@/layout/Layout'
import React from 'react'

export default function SingleService() {
  return (
   <Layout>

   </Layout>
  )
}

// export async function getServerSideProps(context) {
//   const { id } = context.query
//   try {
//     const res = await fetch(`http://localhost:3000/api/tours/${id}`);
//     if (!res.ok) {
//       return {
//         notFound: true,
//       };
//     }
//     const data = await res.json();
//     return { props: { tour: data } };
//   } catch (error) {
//     console.error('Error fetching tour:', error);
//     return {
//       notFound: true,
//     };
//   }
// }