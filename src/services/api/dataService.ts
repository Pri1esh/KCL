import { gql } from '@apollo/client';
import client from './apollo';

export const getPagedata = async (path:any) => {
  try {
    const { data } = await client.query({
      query: gql`
      query{
        layout(language:"en",routePath:"${path}",site:"AML Liberia"){
          item{
            rendered
          } 
        }
      }
      `,
    });
    return data.layout.item.rendered.sitecore;
  } catch (error) {
    console.error('Error fetching user list:', error);
    throw error;
  }
};